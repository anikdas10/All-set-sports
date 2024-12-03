import { useContext } from "react";
import { AuthContext } from "../../assets/AuthProvider/AuthProvider";

const AddEquipment = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    const handleUpdate = e =>{
        e.preventDefault();
        
    }
    return (
        <div className="container mt-20 md:mt-32">
            <h2 className="mx-auto font-bold text-3xl">Add Equipment</h2>
            {/* form */}
            <div className="md:max-w-3xl mx-auto border p-4 rounded-lg mt-8 shadow-slate-300 shadow-md">
                <form onSubmit={handleUpdate}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <label className="form-control w-full  mx-auto">
                        <div className="label">
                            <span className="label-text">Image</span>
                        </div>
                        <input type="text" placeholder="Enter image URL" className="input input-bordered w-full " />
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">Item Name</span>
                        </div>
                        <input type="text" placeholder="Enter Item Name" className="input input-bordered w-full " />
 
                    </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <label className="form-control w-full max-w-lg mx-auto">
                        <div className="label">
                            <span className="label-text">Category Name</span>
                        </div>
                        <input type="text" placeholder="Enter Category Name" className="input input-bordered w-full " />
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <input type="text" placeholder="Description" className="input input-bordered w-full " />
 
                    </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <label className="form-control w-full max-w-lg mx-auto">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <input type="text" placeholder="Enter Price" className="input input-bordered w-full " />
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">Rating</span>
                        </div>
                        <input type="text" placeholder="Rating" className="input input-bordered w-full " />
 
                    </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <label className="form-control w-full max-w-lg mx-auto">
                        <div className="label">
                            <span className="label-text">Customization</span>
                        </div>
                        <input type="text" placeholder="Customization Type" className="input input-bordered w-full " />
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">Processing Time</span>
                        </div>
                        <input type="text" placeholder="Enter Processing/delivery Time" className="input input-bordered w-full " />
 
                    </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <label className="form-control w-full max-w-lg mx-auto">
                        <div className="label">
                            <span className="label-text">Stock Status</span>
                        </div>
                        <input type="text" placeholder="available product quantity" className="input input-bordered w-full " />
 
                    </label>
                    <label className="form-control w-full max-w-lg">
                        <div className="label">
                            <span className="label-text">User Email</span>
                        </div>
                        <input type="text" placeholder="Enter Processing/delivery Time" 
                        value={user?.email}
                        className="input input-bordered w-full " />
 
                    </label>
                    </div>
                    <div className="w-full">
                        <label className="form-control w-full mx-auto">
                        <div className="label">
                            <span className="label-text">User Name</span>
                        </div>
                        <input type="text" placeholder="available product quantity" 
                        value={user?.displayName}
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