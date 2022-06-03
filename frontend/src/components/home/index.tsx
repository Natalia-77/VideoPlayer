import { Helmet } from "react-helmet";
import ContactBar from '../navbar/contact';
import NavbarMain from '../navbar/navbarmain';
import ShortInfo from '../newshomepage/news';
import Carousel from '../common/carousel';
import AboutUs from "../newshomepage/aboutUs";

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

            </main>

        </>
    );
};
export default HomePage;