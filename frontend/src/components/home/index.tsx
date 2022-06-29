import { Helmet } from "react-helmet";
import ContactBar from '../navbar/contact';
import NavbarMain from '../navbar/navbarmain';
import ShortInfo from '../newshomepage/news';
import Carousel from '../common/carousel';
import AboutUs from "../newshomepage/aboutUs";
import  Footer  from "../../pages/footer/footer";

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Головна</title>
            </Helmet>
            <main>
                <ContactBar />
                <NavbarMain />
                <Carousel />
                <ShortInfo />
                <AboutUs/>
                <Footer/>

            </main>

        </>
    );
};
export default HomePage;