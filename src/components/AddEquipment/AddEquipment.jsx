import { useContext } from "react";
import { AuthContext } from "../../assets/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
    const {user} = useContext(AuthContext);

    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        console.log(form);
        const image = form.imageURL.value;
        const itemName= form.itemName.value;
        const category= form.category.value;
        const description= form.description.value;
        const price= form.price.value;
        const rating= form.rating.value;
        const customization= form.customization.value;
        const stock= form.stock.value;
        const delivery= form.delivery.value;
        const userName= form.userName.value;
        const email= form.email.value;

        const equipment = {itemName,category,image,description,price,rating,customization,stock,delivery,userName,email};

        fetch("http://localhost:5000/equipments",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(equipment)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            Swal.fire({
             title: "The Equipment Added Successfully",
            icon: "success",
            confirmButtonText: "Close"
            });

        })
        
    }
    
    return (
        <div className="container mt-12 lg:mt-32">
            <h2 className="mx-auto font-bold text-3xl">Add Equipment</h2>
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
                        className="input input-bordered w-full " />
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">Item Name</span>
                        </div>
                        <input type="text" 
                        name="itemName"
                        placeholder="Enter Item Name" className="input input-bordered w-full " />
 
                    </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <label className="form-control w-full max-w-lg mx-auto">
                        <div className="label">
                            <span className="label-text">Category Name</span>
                        </div>
                        <input type="text" placeholder="Enter Category Name" 
                        name="category"
                        className="input input-bordered w-full " />
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <input type="text" placeholder="Description" 
                        name="description"
                        className="input input-bordered w-full " />
 
                    </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <label className="form-control w-full max-w-lg mx-auto">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <input type="number" placeholder="Enter Price" 
                        name="price"
                        className="input input-bordered w-full " />
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">Rating</span>
                        </div>
                        <input type="text" placeholder="Rating"
                        name="rating"
                        className="input input-bordered w-full " />
 
                    </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <label className="form-control w-full max-w-lg mx-auto">
                        <div className="label">
                            <span className="label-text">Customization</span>
                        </div>
                        <input type="text" placeholder="Customization Type"
                        name="customization"
                        className="input input-bordered w-full " />
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">Processing Time</span>
                        </div>
                        <input type="text" placeholder="Enter Processing/delivery Time" 
                        name="delivery"
                        className="input input-bordered w-full " />
 
                    </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <label className="form-control w-full max-w-lg mx-auto">
                        <div className="label">
                            <span className="label-text">Stock Status</span>
                        </div>
                        <input type="text" placeholder="available product quantity" 
                        name="stock"
                        className="input input-bordered w-full " />
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">User Email</span>
                        </div>
                        <input type="text" placeholder="Enter Processing/delivery Time" 
                        name="email"
                        value={user?.email}
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
                        value={user?.displayName}
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

export default AddEquipment;