import { FaSearchLocation, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
export const Footer = () => {
    function FooterImage({ src, alt }){
        return(
            <img src={src} alt={alt} width={200} />
        )
    }
  return (
    <div className="footer">
        {/*footer about us section*/}
        <div className="footer-container">
      <div className="footer-about-us">
        <h2>About Us</h2>
        <p>
          dedicated to promoting positive change globally. Through initiatives
          focused on education, healthcare, social equality, and humanitarian
          aid, it strives to create a better world by empowerin
        </p>
      </div>
      {/* footer contact section */}
      <div className="footer-contacts">
        <h2>Contact Us</h2>
        <ul>
            <li><FaSearchLocation /> Thika, Kenya</li>
            <li><FaPhone /> +254 123 *** ***</li>
            <li><FaEnvelope /> x@gmail.com</li>
            <li><FaClock /> Open Daily</li>
        </ul>
      </div>
      {/* footer reach us section */}
      <div className="footer-reach-us">
        <h2>Reach us</h2>
        <span className='reach-us-input' >
            <input type="email" placeholder='email' name="email"  />
            <button>send</button>
        </span>
      </div>
      {/* footer gallery section */}
      <div className="footer-gallery-section">
        <h2>Gallery</h2>
        <div className="footer-images">
            <FooterImage src={'/images/project3.jpeg'} alt={'proj 3 img'} />
            <FooterImage src={'/images/image2-hands.jpeg'} alt={'hands img'} />
            <FooterImage src={'/images/project4.jpeg'} alt={'proj4'} />
        </div>
      </div>
      </div>
      <p className='copy'>&copy; Made by Dev Tonny</p>
    </div>
  );
};
