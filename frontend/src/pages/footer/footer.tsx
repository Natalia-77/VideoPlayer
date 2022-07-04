import './footer.css';
import { faFacebookSquare, faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="footer__body">
            <div className="waves">
                <div className="wave" id="wave1" >
                </div>
                <div className="wave" id="wave2">
                </div>
                <div className="wave" id="wave3">
                </div>
            </div>
            <ul className="social__items">
                <li>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faLinkedin} />
                </li>
            </ul>
            <ul className="footer__menu">
                <li>
                    Our services
                </li>
                <li>
                    Support
                </li>
                <li>
                    Contact us
                </li>
                <li>
                    Programs
                </li>
            </ul>
            <p>2022 Videos for all  |   Enjoy</p>
        </div>

    )

}
export default Footer;