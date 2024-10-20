// handle organization links
import { FaEnvelope, FaClock, FaTwitter, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';
export const PlatformLinks =()=> {
    return(
        <div className="platform-links">
            <div className="platform-links1">
                <span>
                    <FaEnvelope />
                    <a href="mailto:x@gmail.com">hopefulfoundation@gmail.com</a>
                </span>
                <span>
                    <FaClock />
                    <p>Mon-Sat 8:00 a.m - 5:00 p.m</p>
                </span>
            </div>
            <div className="platform-links2">
                <ul>
                    <li>Engage with us: </li>
                    <li><FaTwitter /></li>
                    <li><FaInstagram /></li>
                    <li><FaTiktok /></li>
                    <li><FaLinkedin /></li>
                </ul>
            </div>
        </div>
    )
}