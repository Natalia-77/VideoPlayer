import './topbar.css';
import { faFacebook,faTelegram,faYoutube,faViber } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar: React.FC = () => {

    return (
        <div className="container-fluid bg-light px-0 wow fadeIn top__style" data-wow-delay="0.1s">
            <div className="row gx-0 align-items-center d-none d-lg-flex top__colorback">
                <div className="col-lg-6 px-5 text-start bread__hover ">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <a className="small" href="/">
                                Home
                            </a>
                        </li>
                        <li className="breadcrumb-item ">
                            <a className="small" href="/">
                                Policy
                            </a>
                        </li>
                        <li className="breadcrumb-item ">
                            <a className="small" href="/">
                                Career
                            </a>
                        </li>
                        <li className="breadcrumb-item ">
                            <a className="small" href="/">
                                Terms
                            </a>
                        </li>
                    </ol>
                </div>
                <div className="col-lg-6 px-5 text-end ">
                    <small>
                        Follow us:
                    </small>
                    <div className=" d-inline-flex align-items-center" >
                        <a className="btn-square text-primary border-end rounded-0 p-2" href="#" >
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a className="btn-square text-primary border-end rounded-0 p-2" href="#" >
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                        <a className="btn-square text-danger border-end rounded-0 p-2" href="#" >
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a className="btn-square text-primary border-end rounded-0 p-2" href="#" >
                            <FontAwesomeIcon icon={faViber} />
                        </a>
                    </div>

                </div>
            </div>
        </div>       

    );
};
export default TopBar;