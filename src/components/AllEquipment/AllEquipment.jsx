import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllEquipment = () => {
    const loadedEquipment = useLoaderData();

    const [equipment,setEquipment] = useState(loadedEquipment);
    const handleSort = () =>{
        const sortedEquipment = [...loadedEquipment].sort((a,b)=>(a.price-b.price));
        setEquipment(sortedEquipment);
    }
    return (
        <div className="container mt-16 lg:mt-36">
            <h2 className="font-bold text-lg md:text-xl lg:text-2xl">Sort By: <button onClick={handleSort} className="bg-[#178582] px-3 py-1 text-white rounded-md">Price</button></h2>

        <table className="table-auto w-full rounded-lg shadow-lg overflow-hidden mt-5">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Name</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Category</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Price</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {equipment.map((product, index) => (
              <tr key={index} className="border-t">
                <td className=" py-2 text-gray-800">
                    <div className="flex items-center gap-1 md:gap-2">
                        <div className="w-16 md:w-24 lg:w-36">
                        <img src={product.image} alt="" />
                    </div>
                    <h2 className=" text-xs md:text-sm lg:text-xl">
                        {product.itemName}
                    </h2>
                    </div>
                    </td>
                <td className="  text-gray-800 text-xs md:text-sm lg:text-xl">{product.category}</td>
                <td className=" py-2 text-gray-800  text-xs md:text-sm lg:text-xl">{product.price} $</td>
                <td className=" pr-1">
                  <Link to={`/details/${product._id}`}
                    className="bg-[#178582] text-white px-2 py-1 rounded-md  text-xs md:text-sm lg:text-xl hover:bg-[#023a38]"
                    
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
};

export default AllEquipment;