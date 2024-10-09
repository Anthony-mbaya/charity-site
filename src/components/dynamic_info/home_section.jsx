// this component holds all the custome info about home page
// using swiper in my slider image component
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // slider styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
//SwiperCore.use([Pagination, Navigation]); // swiper modules
import slider_image_list from "./slider_images";
import { updatesData } from "./updates";
import { FaCalendar, FaDollarSign } from "react-icons/fa";
import { ReactTyped } from 'react-typed';
export const HomeSection = () => {
  return (
    <div className="home-section">
      {/* welcome image and information blow up */}
      <div className="image-container">
        <TypedComponent />
        <h1>ENRICHING SOCIETIES</h1>
        <button>DONATE</button>
      </div>
      {/* image slider with links to specific */}
      <ImageSlider />
      {/* services componet */}
      <ul className="services">
        <li>New Sustainability</li>
        <li>Orphans</li>
        <li>Workshops</li>
        <li>Ethical Support</li>
      </ul>
      {/* volunteer section */}
      <div className="volunteer">
        <p> help to those who need it</p>
        <h1>Each donation is an essential help for everyone's life</h1>
        <div className="register">
          <img src="src/assets/images/download (1).jpeg" alt="" />
          <h1>Become a Member</h1>
          <button>REGISTER</button>
        </div>
      </div>
      {/* support section */}
      <div className="support bg-home_bg">
        <div className="support1">
          <h1>Support Us</h1>
          <p>
            Embrace the Spirit of Generosity: Support Us in Spreading Islamic
            Values through Charitable Endeavors by clicking the Button Below
          </p>
          <button>
            <FaDollarSign />
          </button>
        </div>
        <div className="support2">
          <h1>Volunteer || Support Now</h1>
        </div>
      </div>
      {/* events table list */}
      <EventsTable />
      {/* contribution section */}
      <ContributionPlans />
      {/*steps to follow*/}
      <StepsToFollow />
      {/* join the org */}
      <Join />
      {/* news and updates */}
      <UpdatesNews />
    </div>
  );
};
function TypedComponent(){
    return(
        <ReactTyped
        strings={['Welcome to our website', 'We are glad you are here']}
        typeSpeed={100}
        backSpeed={50}
        loop
        className="typed-text"
         />
    )
}

// image slider component
function ImageSlider() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {slider_image_list.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.image} alt={image.alt} />
          <button>
            <i className="fa fa-heart"></i>
            {image.btn_text}
          </button>
          <p>{image.text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function EventsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Event Time</th>
          <th>
            <FaCalendar />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Event 1</td>
          <td>10:00 AM - 12:00 PM</td>
          <td>12/12/2024</td>
        </tr>
      </tbody>
    </table>
  );
}

function ContributionPlans() {
  return (
    <div className="contribution-plan">
      <div className="plan">
        <h1>Choose PLan</h1>
        <p>
          Tailored for You: Discover the Perfect Plan that Matches Your Passion
          for Creating Positiv
        </p>
        <button>More</button>
      </div>
      <div className="plan">
        <span>
          <h2>Monthly</h2>
          <h1>Kes 500</h1>
          <h2>Recurring</h2>
        </span>
        <ul>
          <li>Community Outreac</li>
          <li>Educational Support</li>
          <li>Nutritional Assistance</li>
          <li>Childrens Home Visits</li>
        </ul>
        <button>Go Plan</button>
      </div>
      <div className="plan">
        <span>
          <h2>Semi-Annually</h2>
          <h1>Kes 2500</h1>
          <h2>Recurring</h2>
        </span>
        <ul>
          <li>Community Outreac</li>
          <li>Educational Support</li>
          <li>Nutritional Assistance</li>
          <li>Childrens Home Visits</li>
        </ul>
        <button>Go Plan</button>
      </div>
    </div>
  );
}
function StepsToFollow() {
  return (
    <div className="steps-to-follow">
      <div className="step1">
        <span>
          <h1>1</h1>
        </span>
        <span>
          <h1>Orphans</h1>
          <p>
            e Saliheen Foundation supports orphans by providing education, hea
          </p>
        </span>
      </div>
      <div className="step2">
        <span>
          <h1>1</h1>
        </span>
        <span>
          <h1>Orphans</h1>
          <p>
            e Saliheen Foundation supports orphans by providing education, hea
          </p>
        </span>
      </div>
    </div>
  );
}
function Join() {
  return (
    <div className="join">
      <img
        src="src/assets/images/HD-wallpaper-technology-code-programmer-minimalist.jpg"
        alt=""
      />
      <div className="join-info bg-home_bg">
        <h1>Why Join Our Community</h1>
        <p>
          ves you the chance to be part of a compassionate community dedicated
          to empowering lives, fostering positive change, and leaving{" "}
        </p>
        <button>more</button>
      </div>
    </div>
  );
}

function UpdatesNews() {
  return (
    <div className="updates-news">
      <div className="update-info">
        <h1>latest news and updates</h1>
        <p>
          ted with us to receive the latest news and updates on our initiatives,
          projects, and success stories. Join our newsletter or follow our
          social media channels for regular up
        </p>
      </div>
      <div className="updates-list">
        {updatesData && updatesData.length > 0 ? (
          updatesData.map((update, index) => (
            <div className="update-item" key={index}>
              <img src={update.image} alt={update.title} />
              <p>{update.date}</p>
              <h1>{update.title}</h1>
              <p>{update.text}</p>
              <button>{update.button}</button>
            </div>
          ))
        ) : (
          <p>No items</p>
        )}
      </div>
    </div>
  );
}
