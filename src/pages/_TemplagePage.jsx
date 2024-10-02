import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Home Page
export default function Template(){

    return(<>
        <Header />
        <Outlet />
        <Footer />
    </>
    )
}