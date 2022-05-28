import './contact.css';
import { faAngellist,faSketch,faBuffer } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactBar: React.FC = () => {

    return (
        <div className="container-lg-fluid px-4 contact__style">
            <div className="row align-items-center d-lg-flex contact__colorback">
                <div className="col-lg-4 col-md-12 col-sm-12 text-center text-lg-start">
               <div className="navbar-brand m-2 p-2" >
                   <h1 className="text__fonts">Lancelot 
                   <img src="/images/colour.jpg"  ></img>
                   </h1>
               </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12  ">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 smm__style">
                            <div className="d-flex ">
                                <div className="flex-shrink-0 icon__square rounded-circle">
                                    <i>
                                    <FontAwesomeIcon icon={faAngellist} />
                                    </i>
                                </div>
                                <div className="ps-3 text__size">
                                    <p className="mb-1">Ukraine</p>
                                    <h6 className="mb-0">is a winner!</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 smm__style">
                            <div className="d-flex ">
                                <div className="flex-shrink-0 icon__square rounded-circle">
                                <i>
                                    <FontAwesomeIcon icon={faSketch} />
                                    </i>
                                </div>
                                <div className="ps-3  text__size">
                                    <p className="mb-1">Call us</p>
                                    <h6 className="mb-0">(012)345-67-89</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 smm__style">
                            <div className="d-flex ">
                                <div className="flex-shrink-0 icon__square rounded-circle">
                                <i>
                                    <FontAwesomeIcon icon={faBuffer} />
                                    </i>
                                </div>
                                <div className="ps-3   text__size">
                                    <p className="mb-1">Email</p>
                                    <h6 className="mb-0">ukraine@ukr.net</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
        </div>
      



)
};
export default ContactBar;