import OwlCarousel from 'react-owl-carousel';

const Owl = () => {

    const options = {
        loop: true,
        margin: 10,
        items: 1,
        autoplay: true,  
        autoHeight:true
                
      };

    return (
        <OwlCarousel
            className="owl-theme"
           {...options}        
           
        >
            <div className="item"><img  src="https://vezha.ua/wp-content/uploads/2022/04/1Y9A9591.jpg" alt="ima" /></div>
            <div className="item"><img  src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"  alt="ima"  /></div>
            <div className="item"><img  src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"  alt="ima"  /></div>
            <div className="item"><img  src="https://static.posters.cz/image/1300/%D0%A4%D0%BE%D1%82%D0%BE%D1%88%D0%BF%D0%B0%D0%BB%D0%B5%D1%80%D0%B8/beautiful-flowers-pastel-colours-i60057.jpg"  alt="ima"  /></div>
            <div className="item"><img  src="https://www.farmersalmanac.com/wp-content/uploads/2021/04/forget-me-not-flower-as309740666.jpeg"  alt="ima"  /></div>
        </OwlCarousel>
    )

};

export default Owl;