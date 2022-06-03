import { Outlet } from "react-router";
import TopBar from '../../navbar/topbar';

const DefaultLayout = () => {
    return (
        <>
            <TopBar />
            <main>
            <Outlet />
            </main>
            {/* <ContactBar />
            <NavbarMain />
            <Carousel />
            <ShortInfo /> */}
            {/* <div className="container">
               
            </div> */}
        </>
    );
}

export default DefaultLayout;