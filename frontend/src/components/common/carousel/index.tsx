
import './index.css';

const Carousel = () => {  

  return (
    <div className="container-fluid carousel__style"> 

      <div id="carousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" >
            {/* <img src="https://wallpapers-hub.art/wallpaper-images/683408.jpg" className="d-block image" alt="line" /> */}
            <img src="https://s.itl.cat/pngfile/s/226-2262893_woman-working-on-laptop.jpg" className="d-block image" alt="line" />
            <div className="carousel-caption d-none d-sm-block">
              <h5>COMPUTING & IT</h5>
              <p>Whether you want to be a web designer, a network specialist or an application developer, our Computing and ICT courses will help you go forward onto higher education or to find employment.</p>
            </div>
            <div className="carousel-caption d-block d-sm-none title__style">
                    <h5>COMPUTING & IT</h5>
                </div>
          </div>
          <div className="carousel-item" >
            {/* <img src="https://wallpaperstock.net/wallpapers/thumbs1/36067wide.png" className="d-block image" alt="dot" /> */}
            <img src="https://img.freepik.com/free-photo/laptop-notebook-white-wood-table-business-office-work-desk-background-with-copyspace_222260-721.jpg" className="d-block image" alt="dot" />
            <div className="carousel-caption d-none d-sm-block">
              <h5>Soft skilled mentors</h5>
              <p>Our teachers have years of industry experience and are accredited to deliver professional courses such as Comptia, Certified Internet Web Professional (CIW), Cisco and Java Programming.</p>
            </div>
            <div className="carousel-caption d-block d-sm-none title__style">
                    <h5>Strong mentors</h5>
                </div>
          </div>
          <div className="carousel-item">
          <img src="https://images.megapixl.com/652/6524574.jpg" className="d-block image" alt="sota" />
            {/* <img src="https://i.pinimg.com/originals/2b/7c/9b/2b7c9b4d61c2c39a96a9019e639a944d.jpg" className="d-block image" alt="sota" /> */}
            <div className="carousel-caption d-none d-sm-block">
              <h5>Computing & IT Pathway</h5>
              <p>Our career pathway maps show you a typical route through the various stages of learning and on to your chosen career.</p>
            </div>
            <div className="carousel-caption d-block d-sm-none title__style">
                    <h5>Computing & IT Pathway</h5>
                </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>

  )

};

export default Carousel;