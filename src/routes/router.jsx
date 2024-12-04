import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import AllEquipment from "../components/AllEquipment/AllEquipment";
import AddEquipment from "../components/AddEquipment/AddEquipment";
import MyEquipment from "../components/MyEquipment/MyEquipment";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoutes from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/allEquipment',
                element:<AllEquipment/>
            },
            {
                path:'/addEquipment',
                element:<PrivateRoutes>
                    <AddEquipment/>
                    </PrivateRoutes>
            },
            {
               path:'/myEquipment',
               element:<PrivateRoutes>
                <MyEquipment/>
               </PrivateRoutes>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
])

export default router;