import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../assets/AuthProvider/AuthProvider";
import { useContext } from "react";
import Footer from "../Footer/Footer";

const MainLayout = () => {
     const {theme} = useContext(AuthContext);

    return (
        <div className='font-ed'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;