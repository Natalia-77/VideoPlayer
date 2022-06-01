import './news.css';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy,faPeopleGroup,faPersonChalkboard,faDiagramProject } from '@fortawesome/free-solid-svg-icons';

const ShortInfo: React.FC = () => {

    // const styles = useSpring({
    //     from: { transform: "translateY(200%)" },
    //     to: [
    //         { transform: "translateY(0%)" },
              
    //     ],
    //     config: { mass: 3 },
    //        //loop:true


    // });    
    return (
        // <div className="container py-5">
        //     <div className="container">
        //         <div className="row g-5">
        //             <div className="col-lg-6 news__style">
        //             <animated.div className="test" style={styles}>
        //                 <h1>Anamate</h1>
        //             </animated.div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <div className="container py-2">
            <div className="row w-100" >           
                <div className="text-center col-md-6 col-sm-12 py-md-3 py-sm-2 py-2 col-lg-3" id="experienceCard" >
                    <div className="card__style">
                        <div className="mt-4 title__experience">
                            <i>
                                <FontAwesomeIcon icon={faTrophy} size="3x" color='#092248' />
                                <h5 className='m-3'>Years</h5>
                            </i>
                        </div>
                        <h1 className="mt-1">15</h1>
                    </div>
                </div>
               
                <div className="text-center col-md-6 col-sm-12 py-md-3 py-sm-2 py-2 col-lg-3" id="teamCard" >
                    <div className="card__style">
                        <div className="mt-4 title__team">
                            <i>
                                <FontAwesomeIcon icon={faPersonChalkboard } size="3x" color='#092248' />
                                <h5 className='m-3'>Team</h5>
                            </i>
                        </div>
                        <h1 className="mt-1">1100</h1>
                    </div>
                </div>
              
                <div className="text-center col-md-6 col-sm-12 py-md-3 py-sm-2 py-2 col-lg-3" id="studentCard">
                    <div className="card__style">
                        <div className="mt-4 title__student">
                            <i>
                                <FontAwesomeIcon icon={faPeopleGroup} size="3x" color='#092248' />
                                <h5 className='m-3'>Satisfied</h5>
                            </i>
                        </div>
                        <h1 className="mt-1">6500</h1>
                    </div>
                </div>
             
                <div className="text-center col-md-6 col-sm-12 py-md-3 py-sm-2 py-2 col-lg-3" id="projectCard">
                    <div className="card__style">
                        <div className="mt-4 title__project">
                            <i>
                                <FontAwesomeIcon icon={faDiagramProject} size="3x" color='#092248' />
                                <h5 className='m-3'>Done</h5>
                            </i>
                        </div>
                        <h1 className="mt-1">60</h1>
                    </div>
                </div>               
            </div>
        </div>

    );
};
export default ShortInfo;