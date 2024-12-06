import { useEffect, useState } from "react";
import Product from "../../Product/Product";

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/equipments/limited')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    console.log(products);
    return (
        <div className="my-16 lg:my-20">
           <h2 className="text-center font-bold text-xl md:text-2xl lg:text-3xl">Products</h2> 

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mt-8">
            {
                products.map(equipment=><Product key={equipment._id} equipment={equipment}></Product>)
            }
           </div>
        </div>
    );
};

export default Products;