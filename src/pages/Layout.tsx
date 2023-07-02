import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PageLayout() {
    return(<>
        <Header />
        <div style={{minHeight: 'calc(100vh - 140px)'}}>
            <div className="container">
                <Outlet />
            </div>
        </div>
        <Footer />
    </>);
}

export default PageLayout;