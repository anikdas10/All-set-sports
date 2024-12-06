import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateEquipment = () => {
    const loadedEquipment = useLoaderData();
    
    const {category,customization,description,email,image,itemName,price,rating,stock,delivery,userName,_id,} = loadedEquipment;

    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const image = form.imageURL.value;
        const itemName= form.itemName.value;
        const category= form.category.value;
        const description= form.description.value;
        const price= parseFloat(form.price.value);
        const rating= form.rating.value;
        const customization= form.customization.value;
        const delivery= form.delivery.value;
        const stock= form.stock.value;
        const userName= form.userName.value;
        const email= form.email.value;

        const equipment = {itemName,category,image,description,price,rating,customization,stock,userName,email,delivery};
        console.log(equipment);

        fetch(`https://all-set-sports-server.vercel.app/equipments/${_id}`,{

         method: 'PUT' ,
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(equipment)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount>0)
        {
           Swal.fire({
             title: "The Equipment Updated Successfully",
            icon: "success",
            confirmButtonText: "Close"
            });  
            
        }
    })

    }
    return (
        <div className="container mt-16 md:mt-20 lg:mt-32 mb-10">
            <Helmet>
                <title>Update | AllSet Sports</title>
            </Helmet>
            <h2 className="mx-auto font-bold text-3xl text-center">Update Equipment</h2>
            {/* form */}
            <div className="md:max-w-3xl mx-auto border p-4 rounded-lg mt-8 shadow-slate-300 shadow-md">
                <form onSubmit={handleUpdate}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <label className="form-control w-full  mx-auto">
                        <div className="label">
                            <span className="label-text">Image</span>
                        </div>
                        <input type="text" placeholder="Enter image URL" 
                        name="imageURL"
                        defaultValue={image}
                        className="input input-bordered w-full "
                        required />
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">Item Name</span>
                        </div>
                        <input type="text" 
                        name="itemName"
                        placeholder="Enter Item Name" 
                        defaultValue={itemName}
                        className="input input-bordered w-full " 
                        required/>
 
                    </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <label className="form-control w-full max-w-lg mx-auto">
                        <div className="label">
                            <span className="label-text">Category Name</span>
                        </div>
                        <input type="text" placeholder="Enter Category Name" 
                        name="category"
                        defaultValue={category}
                        className="input input-bordered w-full " 
                        required/>
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <input type="text" placeholder="Description" 
                        name="description"
                        defaultValue={description}
                        className="input input-bordered w-full "
                        required />
 
                    </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <label className="form-control w-full max-w-lg mx-auto">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <input type="text" placeholder="Enter Price" 
                        name="price"
                        defaultValue={price}
                        className="input input-bordered w-full " 
                        required/>
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">Rating</span>
                        </div>
                        <input type="text" placeholder="Rating"
                        name="rating"
                        defaultValue={rating}
                        className="input input-bordered w-full "
                        required />
 
                    </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <label className="form-control w-full max-w-lg mx-auto">
                        <div className="label">
                            <span className="label-text">Customization</span>
                        </div>
                        <input type="text" placeholder="Customization Type"
                        defaultValue={customization}
                        name="customization"
                        className="input input-bordered w-full " 
                        required/>
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">Processing Time</span>
                        </div>
                        <input type="text" placeholder="Enter Processing/delivery Time" 
                        name="delivery"
                        defaultValue={delivery}
                        className="input input-bordered w-full " 
                        required/>
 
                    </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <label className="form-control w-full max-w-lg mx-auto">
                        <div className="label">
                            <span className="label-text">Stock Status</span>
                        </div>
                        <input type="text" placeholder="available product quantity" 
                        name="stock"
                        defaultValue={stock}
                        className="input input-bordered w-full "
                        required />
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">User Email</span>
                        </div>
                        <input type="text" placeholder="Enter Processing/delivery Time" 
                        name="email"
                        value={email}
                        readOnly
                        className="input input-bordered w-full " />
 
                    </label>
                    </div>
                    <div className="w-full">
                        <label className="form-control w-full mx-auto">
                        <div className="label">
                            <span className="label-text">User Name</span>
                        </div>
                        <input type="text" placeholder="available product quantity" 
                        name="userName"
                        value={userName}
                        readOnly
                        className="input input-bordered w-full " />
 
                    </label>
                    </div>
                    <div className="   mt-4">
                        <button className="bg-[#178582] text-white py-2 w-full rounded-md">Add Equipment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateEquipment;