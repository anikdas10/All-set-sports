import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../assets/AuthProvider/AuthProvider";
import { useContext } from "react";

const MainLayout = () => {
     const {theme} = useContext(AuthContext);

    return (
        <div className='font-ed'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;