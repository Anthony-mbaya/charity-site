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
            <input type="email" name="email"  />
            <button>send</button>
        </span>
      </div>
      {/* footer gallery section */}
      <div className="footer-gallery-section">
        <h2>Gallery</h2>
        <div className="footer-images">
            <FooterImage src={'src/assets/images/download (2).jpeg'} alt={'image1'} />
            <FooterImage src={'src/assets/images/download.jpeg'} alt={'image2'} />
            <FooterImage src={'src/assets/images/HD-wallpaper-technology-code-programmer-minimalist.jpg'} alt={'image3'} />
        </div>
      </div>
      </div>
      <p className='copy'>&copy; Made by Dev Tonny</p>
    </div>
  );
};
