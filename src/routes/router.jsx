import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import AllEquipment from "../components/AllEquipment/AllEquipment";
import AddEquipment from "../components/AddEquipment/AddEquipment";
import MyEquipment from "../components/MyEquipment/MyEquipment";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";


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
                element:<AddEquipment/>
            },
            {
               path:'/myEquipment',
               element:<MyEquipment/>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    }
])

export default router;