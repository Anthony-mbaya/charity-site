import { NavLink } from "react-router-dom";
import { FaAngleDown, FaHamburger, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from '/images/logo.jpg';
export const Navbar = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  // component to handle single list item on navbar
  const handleArrow = (e) => {
    e.preventDefault();
    setShowArrow((prev) => !prev);
  };
  const handleMouseEnter = () => {
    setShowArrow(true);
  };
  const handleMouseLeave = () => {
    setShowArrow(false);
  };
  function NavListLink({ text, link, dropDown, onClick }) {
    return (
      <li
        className="nav-link"
        onMouseEnter={dropDown ? handleMouseEnter : null}
        onMouseLeave={dropDown ? handleMouseLeave : null}
        //onClick={dropDown ? handleArrow : null}
        onClick={onClick}
      >
        <NavLink
          to={link}
          className={"link"}
          onClick={dropDown ? handleArrow : null}
        >
          {text}
          {dropDown && (
            <FaAngleDown
              className={`'arrow-icon' ${showArrow ? "rotate-180" : ""}`}
              onClick={handleArrow}
            />
          )}
        </NavLink>
        {/*dropdown feature when user hovers on the link*/}
        {dropDown && dropDown.length > 0 && showArrow ? (
          <ul className="dropdown">
            {dropDown.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link}>{item.text} </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </li>
    );
  }
  //component handling toggle sidebar
  const toggleBar = () => {
    setShowMenu(!showMenu);
  };
  function SideBar() {
    return (
      <div className={`sidebar ${ !showMenu ? "block" : "hidden" }`}>
        <ul className="nav-links">
          <span className="close-sidebar">
            <FaTimes size={25} onClick={toggleBar} />
          </span>
          <NavListLink link={"/"} text={"Home"} onClick={toggleBar} />
          <NavListLink
            link={"/about"}
            text={"About"}
            dropDown={[
              { link: "/team", text: "Team" },
              { link: "/contact", text: "Contact" },
            ]}
          />
          <NavListLink link={"/causes"} text={"Causes"} />
          <NavListLink link={"/donate"} text={"Donate"} />
          <NavListLink link={"/projects"} text={"Projects"} />
          <NavListLink link={"/contacts"} text={"Contacts"} />
          <NavListLink link={"/events"} text={"Events"} />
        </ul>
      </div>
    );
  }
  return (
    <nav className="nav-container">
      <span className="title-wrapper">
        <img className="logo" src={logo} alt="logo" />
      <h1 className="title"><span>Hopeful</span> <span>Foundation</span></h1>
      </span>
      <span className="hamburger-tag">
        {showMenu && <FaHamburger onClick={toggleBar} size={25} />}
      </span>
      <ul className="nav-links">
        <NavListLink link={"/"} text={"Home"} />
        <NavListLink
          link={"/about"}
          text={"About"}
          dropDown={[
            { link: "/team", text: "Team" },
            { link: "/contact", text: "Contact" },
          ]}
        />
        <NavListLink link={"/causes"} text={"Causes"} />
        <NavListLink link={"/donate"} text={"Donate"} />
        <NavListLink link={"/projects"} text={"Projects"} />
        <NavListLink link={"/contacts"} text={"Contacts"} />
        <NavListLink link={"/events"} text={"Events"} />
      </ul>
      {!showMenu && <SideBar />}
    </nav>
  );
};
