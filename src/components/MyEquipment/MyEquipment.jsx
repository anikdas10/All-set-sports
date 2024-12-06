import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../assets/AuthProvider/AuthProvider";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";


const MyEquipment = () => {
    const loadedEquipment = useLoaderData();
    const [equipments,setEquipments] = useState([]);

    useEffect(()=>{
        const myEquipment = loadedEquipment.filter(equipment=> equipment.email === user.email);
        setEquipments(myEquipment);
    },[])
    const {user} = useContext(AuthContext);
   

    const handleDelete = id =>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {
                 fetch(`https://all-set-sports-server.vercel.app/equipments/${id}`,{
                    method:'DELETE'
                 })
                 .then(()=>{
                    const remaining = equipments.filter(equipment=>equipment._id !== id);
                    setEquipments(remaining);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                     });

                 })
             }
});
    }

    return (
        <div className="container mt-20 lg:mt-36 mb-16">
            <h2 className="text-xl font-bold md:text-2xl lg:text-4xl">My Equipment</h2>
            <div className="mt-8">
                {
                    equipments.map(equipment=><div key={equipment._id}>
                        <Fade direction="up" delay={700}>
                            <div className="mt-4 border p-2 md:p-4 flex justify-between gap-4 rounded-lg shadow-md items-center pr-6 overflow-hidden">
                            <div className="flex gap-2  w-4/5 items-center">
                               <div className="w-24 md:w-40 lg:w-64">
                                <img src={equipment.image} alt="" />
                               </div>
                               <div className="md:space-y-2">
                                <h2 className="font-semibold text-sm md:text-lg lg:text-2xl">{equipment.itemName}</h2>
                                <p className=" md:text-lg hidden lg:block "><span className="font-bold">Description:</span>{equipment.description}</p>
                                <p className="text-xs md:text-lg"><span className="font-semibold">Customization</span>:{equipment.customization}</p>
                                <p className="text-xs md:text-lg"><span className="font-semibold">Price</span>:{equipment.price} $</p>
                                <p className="text-xs md:text-sm lg:text-lg"><span className="font-semibold">Rating:</span>{equipment.rating}</p>
                                
                               </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Link to={`/update/${equipment._id}`} className="text-xs md:text-sm lg:text-xl bg-[#178582] text-white px-2 py-1 rounded-lg flex items-center">Update<CiEdit/></Link>
                                <button onClick={()=>handleDelete(equipment._id)} className="text-xs md:text-sm lg:text-xl bg-[#178582] text-white rounded-lg py-1 flex items-center px-2">Delete<MdDeleteForever/></button>
                            </div>
                        </div>
                        </Fade>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyEquipment;