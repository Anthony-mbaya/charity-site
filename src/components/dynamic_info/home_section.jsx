// this component holds all the custome info about home page
// using swiper in my slider image component
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // slider styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
//SwiperCore.use([Pagination, Navigation]); // swiper modules
import slider_image_list from "./slider_images";
import { updatesData } from "./updates";
import { FaCalendar, FaCoins, FaDonate, FaInfoCircle } from "react-icons/fa";
import { ReactTyped } from "react-typed";
export const HomeSection = () => {
  return (
    <div className="home-section">
      {/* welcome image and information blow up */}
      <div className="image-container">
        <div className="faded-overlay"></div>
        <TypedComponent />
        <h1>ENRICHING SOCIETIES</h1>
        <button>DONATE</button>
        <p className="image-container-text">
          At <b>Hopeful Foundation</b>, we believe in the power of kindness and
          the strength of community. Our mission is to make a difference in the
          lives of those in need by providing support, hope, and a helping hand.
          Thank you!
        </p>
      </div>
      {/* image slider with links to specific */}
      <ImageSlider />
      {/* services componet */}
      <ul className="services">
        <li>
          <span></span>New Sustainability
        </li>
        <li>
          <span></span>Orphans
        </li>
        <li>
          <span></span>Workshops
        </li>
        <li>
          <span></span>Ethical Support
        </li>
      </ul>
      {/* volunteer section */}
      <div className="volunteer">
        <p>| help to those who need it</p>
        <h1>Each donation is an essential help for everyone's life</h1>
        <div className="register">
          <img src="/images/donation.jpeg" alt="donation image" />
          <h2>Become a Member</h2>
          <button>REGISTER</button>
        </div>
      </div>
      {/* support section */}
      <div className="support">
        <div className="support1">
          <h1>Support Us</h1>
          <p>
            Embrace the Spirit of Generosity: Support Us in Spreading Islamic
            Values through Charitable Endeavors by clicking the Button Below
          </p>
          <button>
            <FaCoins color="gold" size={25} />
          </button>
        </div>
        <div className="support2">
          <h1>30+ Volunteers </h1>
          <h1>70+ Support Now</h1>
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
function TypedComponent() {
  return (
    <ReactTyped
      strings={["Welcome to our website", "We are glad you are here"]}
      typeSpeed={100}
      backSpeed={50}
      loop
      className="typed-text"
    />
  );
}

// image slider component
function ImageSlider() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      modules={[Navigation, Pagination, Scrollbar]}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 500 }}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {slider_image_list.map((image, index) => (
        <SwiperSlide key={index} className="swiperSlide">
          <img src={image.image} alt={image.alt} />
          <button>{image.btn_text}</button>
          <p>{image.text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

//events component
function EventsTable() {
  return (
    <table className="events">
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Event Time</th>
          <th>
            <FaCalendar className="calendar" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Visit To Great Hope Children's Home</td>
          <td>Morning - To be confirmed</td>
          <td>27/10/2024</td>
        </tr>
      </tbody>
    </table>
  );
}

function ContributionPlans() {
  function Plan({ kes, l1, l2, l3, l4 }) {
    return (
      <div className="plan">
        <span>
          <h2>Join Us Monthly</h2>
          <h1>{kes}</h1>
          <h2>Make a Difference!</h2>
        </span>
        <ul>
          <li>
            <FaInfoCircle /> {l1}
          </li>
          <li>
            <FaInfoCircle /> {l2}
          </li>
          <li>
            <FaInfoCircle /> {l3}
          </li>
          <li>
            <FaInfoCircle /> {l4}
          </li>
        </ul>
        <button>
          Go Plan <FaDonate />
        </button>
      </div>
    );
  }
  return (
    <div className="contribution-plan">
      <h2>Hopeful Foundation Merchandise Membership Card</h2>
      <div className="plan-intro">
        <h1>Choose PLan</h1>
        <p>
          Discover the Perfect Plan that Matches Your Passion for Creating
          Positive support of any kind.
        </p>
        <button>More</button>
      </div>
      <Plan
        kes="KES 500"
        l1="Monthly Contribution"
        l2="Supports 10 Children"
        l3="Basic Medical Supplies"
        l4="Free T-Shirt"
      />
      <Plan
        kes="KES 1500"
        l1="School Supplies"
        l2="Healthcare Access"
        l3="Nutrition Programs"
        l4="Emergency Relief Fund"
      />
      <Plan
        kes="KES 2500"
        l1="Scholarship Assistance"
        l2="Vaccination Campaigns"
        l3="Housing Support"
        l4="Skill Development Training"
      />
    </div>
  );
}
function StepsToFollow() {
  return (
    <div className="steps-to-follow">
      <div className="step1">
        <span>
          <h2>1</h2>
        </span>
        <span>
          <h1>Orphans</h1>
          <p>
            e Saliheen Foundation supports orphans by providing education, hea
          </p>
        </span>
      </div>
      <div className="step1">
        <span>
          <h2>2</h2>
        </span>
        <span>
          <h1>Sustainability</h1>
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
      <img src="/images/real-4-eating.jpg" alt="join image" />
      <div className="join-info">
        <div className="faded-overlay"></div>
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
              <h2>| {update.date}</h2>
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
export default UpdatesNews;