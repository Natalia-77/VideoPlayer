import './news.css';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const AboutUs: React.FC = () => {

    const styles = useSpring({
        from: { transform: "translateY(0%)" },
        to: [
            { transform: "translateY(0%)" },
            { transform: "translateY(50%)" },
        ],
        config: { mass: 3 },
        //   loop:true


    });
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
        

            <div className="container">
                <div className="row row-cols-lg-5 g-lg-2  " >
                    <div className="col p-2 colfo ">
                        <div className="text-center card__style">
                            <i className="mb-4">
                                <FontAwesomeIcon icon={faTrophy} size="3x" color='#092248' />
                                <h5 className='m-3'>Years</h5>
                            </i>
                            <h1 className="mt-1">15</h1>
                        </div>
                    </div>
                    <div className="col p-2 colfo">
                        <div className="text-center  card__style">
                            <i className="mb-4">
                                <FontAwesomeIcon icon={faTrophy} size="3x" color='#092248' />
                                <h5 className='m-3'>Years</h5>
                            </i>
                            <h1 className="mt-1">15</h1>
                        </div>
                    </div>
                    <div className="col p-2 colfo">
                        <div className="text-center card__style">
                            <i className="mb-4">
                                <FontAwesomeIcon icon={faTrophy} size="3x" color='#092248' />
                                <h5 className='m-3'>Years</h5>
                            </i>
                            <h1 className="mt-1">15</h1>
                        </div>
                    </div>
                    <div className="col p-2 colfo">
                        <div className="text-center  card__style">
                            <i className="mb-4">
                                <FontAwesomeIcon icon={faTrophy} size="3x" color='#092248' />
                                <h5 className='m-3'>Years</h5>
                            </i>
                            <h1 className="mt-1">15</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        //     <div className="container">
        //     <div className="row  row-cols-lg-4  g-lg-3">
        //       <div className="col">
        //         <div className="p-3 border bg-light">Row column</div>
        //       </div>
        //       <div className="col">
        //         <div className="p-3 border bg-light">Row column</div>
        //       </div>
        //       <div className="col">
        //         <div className="p-3 border bg-light">Row column</div>
        //       </div>
        //       <div className="col">
        //         <div className="p-3 border bg-light">Row column</div>
        //       </div>
              
        //       </div>
           
        //   </div>

    );
};
export default AboutUs;