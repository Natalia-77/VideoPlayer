import './topbar.css';

const TopBar:React.FC=()=>{

    return(
        <div className="container-fluid bg-light px-2 wow fadeIn top__style" data-wow-delay="0.1s">
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
            </div>
        </div>

    );
};
export default TopBar;