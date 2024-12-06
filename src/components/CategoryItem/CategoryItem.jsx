import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleItem from "../SingleItem/SingleItem";


const CategoryItem = () => {
    const category = useParams();
    const loadedEquipment = useLoaderData();
    const [equipments,setEquipments] = useState([]);
    
    useEffect(()=>{
        const filteredEquipment = loadedEquipment.filter(equipment=>equipment.category === category.category);
        setEquipments(filteredEquipment);
    },[])
    return (
        <div className="mt-16 md:mt-20 lg:mt-32 container">
            <h2 className="font-bold text-lg md:text-xl lg:text-2xl">
                {category.category}</h2>

                {
                    equipments.length === 0 && <h2 className="font-bold text-lg md:text-xl lg:text-3xl text-center mt-20">Product not available right now</h2>
                }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                
                {
                equipments.map(equipment=><SingleItem key={equipment._id} equipment={equipment}></SingleItem>)
            }
            </div>
        </div>
    );
};

export default CategoryItem;