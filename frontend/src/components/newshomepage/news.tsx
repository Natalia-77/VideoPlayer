import './news.css';
import { useSpring, animated } from 'react-spring';

const AboutUs: React.FC = () => {

    const styles = useSpring({
        from:{ transform: "translateY(0%)"},
        to: [
            { transform: "translateY(200%)" },
            { transform: "translateY(50%)"},
          ],
          config:{mass:1},
          loop:true
        
          
    });
    return(
        <div className="container py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 news__style">
                    <animated.div className="test" style={styles}>
                        <h1>Anamate</h1>
                    </animated.div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default AboutUs;