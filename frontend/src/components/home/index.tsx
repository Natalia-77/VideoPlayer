import { Helmet } from "react-helmet";
import ContactBar from '../navbar/contact';
import NavbarMain from '../navbar/navbarmain';
import ShortInfo from '../newshomepage/news';
import Carousel from '../common/carousel';

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

            </main>

        </>
    );
};
export default HomePage;