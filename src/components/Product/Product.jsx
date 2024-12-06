import { Link } from "react-router-dom";

const Product = ({equipment}) => {
    const {image,itemName,description,price,_id} = equipment;
    return (
        <div className="border flex flex-col items-center justify-center p-4 rounded-md shadow-md">
           <div className="h-40 md:h-48 w-full lg:h-60">
            <img src={image} className="h-full w-full rounded-md" alt="" />
            </div> 
            <div className="space-y-2 mt-2">
                <h2 className="font-bold text-lg">{itemName}</h2>
                <p className="lg:w-2/3 text-gray-500 ">{description}</p>
                <p className=""><strong>Price:</strong>{price} $</p>

               <p>
                 <Link to={`/details/${_id}`}
                    className="bg-[#178582] text-white px-2 py-1 rounded-md  text-sm md:text-lg lg:text-xl hover:bg-[#023a38]">
                    Details
                  </Link>
               </p>
            </div>
        </div>
    );
};

export default Product;