import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import AllEquipment from "../components/AllEquipment/AllEquipment";
import AddEquipment from "../components/AddEquipment/AddEquipment";
import MyEquipment from "../components/MyEquipment/MyEquipment";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoutes from "./PrivateRoute";
import UpdateEquipment from "../components/UpdateEquipment/UpdateEquipment";
import Details from "../components/Details/Details";
import Error from "../components/ErrorPage/Error";
import CategoryItem from "../components/CategoryItem/CategoryItem";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/allEquipment',
                element:<AllEquipment/>,
                loader:()=>fetch('https://all-set-sports-server.vercel.app/equipments')
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
               </PrivateRoutes>,
               loader:()=>fetch('https://all-set-sports-server.vercel.app/equipments')
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/update/:id',
                element:<UpdateEquipment/>,
                loader:({params})=>fetch(`https://all-set-sports-server.vercel.app/equipments/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<PrivateRoutes>
                    <Details/>
                </PrivateRoutes>,
                loader:({params})=>fetch(`https://all-set-sports-server.vercel.app/equipments/${params.id}`)
            },
            {
                path:'/category/:category',
                element:<CategoryItem/>,
                loader:()=>fetch("https://all-set-sports-server.vercel.app/equipments")
            }
        ]
    }
])

export default router;