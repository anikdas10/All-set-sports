
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../assets/AuthProvider/AuthProvider";

const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading)
    {
        return <div className="text-center mt-20"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user && user.email)
    {
        return children;
    }
    return (
       <Navigate state={location.pathname} to={'/login'}
       ></Navigate> 
    );
};

export default PrivateRoutes;