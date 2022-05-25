import OwlCarousel from 'react-owl-carousel';
import './index.css';

const Owl = () => {

    const options = {

        margin: 10,
        loop: false,
        items: 1,
        autoplay: true
    };

    return (
        <div className="container-fluid p-5 mb-2 wow fadeIn owl__style" data-wow-delay="0.1s" >
            <OwlCarousel
                className="owl-carousel owl-theme"
                {...options}
            >
                <div className="image"><img src="/images/lines.jpg" alt="line" /></div>
                <div className="image"><img src="/images/dots.jpg" alt="dots" /></div>
                <div className="image"><img src="/images/sota.jpg" alt="sota" /></div>

            </OwlCarousel>      

        </div>

    )

};

export default Owl;