import { FC } from 'react';
import './navbarmain.css';
import { faBuromobelexperte } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarMain: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 mx-1 wow fadeIn navbar__style"
            data-wow-delay="0.1s" >
            <div className="container-fluid" >
                <a className="navbar-brand d-lg-none mb-2 menu__style" href="#">Menu</a>
                <button className="navbar-toggler icon__color" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span >
                    <i>
                        <FontAwesomeIcon icon={faBuromobelexperte}  />                       
                    </i>
                    </span>
                </button>
                <div className="collapse navbar-collapse color__colapse " id="navbarSupportedContent">

                    <ul className="navbar-nav text__style">
                        <li className="nav-item " >
                            <a className="nav-link active " aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mentors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Payment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacts</a>
                        </li>
                        <li className="nav-item " >
                            <a className="nav-link "  href="#">Sign in</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )

};

export default NavbarMain;