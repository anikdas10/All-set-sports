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
                loader:()=>fetch('http://localhost:5000/equipments')
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
               loader:()=>fetch('http://localhost:5000/equipments')
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
                loader:({params})=>fetch(`http://localhost:5000/equipments/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<PrivateRoutes>
                    <Details/>
                </PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/equipments/${params.id}`)
            }
        ]
    }
])

export default router;