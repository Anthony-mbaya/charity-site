import { NavLink } from "react-router-dom";
export const Navbar = () => {
  // component to handle single list item on navbar
  function NavListLink({ text, link, dropDown }) {
    return (
      <li>
        <NavLink to={link}>{text}</NavLink>
        {/*dropdown feature when user hovers on the link*/}
        {dropDown && dropDown.length > 0 ? (
          <ul className="dropdown">
            {dropDown.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link}>{item.text}</NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </li>
    );
  }
  return (
    <nav>
      <div className="title">x-company</div>
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
        <NavListLink link={"/donate-now"} text={"Donate Now"} />
        <NavListLink link={"/resources"} text={"Resources"} />
        <NavListLink link={"/contacts"} text={"Contacts"} />
        <NavListLink link={"/events"} text={"Events"} />
      </ul>
    </nav>
  );
};
