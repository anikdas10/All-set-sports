import { Link } from "react-router-dom";


const Category = () => {
    return (
        <div>
            <h2 className="text-center font-bold text-lg md:text-xl">Category</h2>
            <div className="flex gap-3 flex-wrap md:w-3/5 lg:w-2/5 mx-auto text-center mt-4">
                <Link to='/category/Football' className="bg-[#178582] px-4 py-1 rounded-full text-white text-lg md:text-xl lg:text-2xl">Football</Link>
                <Link to='/category/Cricket' className="bg-[#178582] px-4 py-1 rounded-full text-white text-lg md:text-xl lg:text-2xl">Cricket</Link>
                <Link to='/category/Tennis' className="bg-[#178582] px-4 py-1 rounded-full text-white text-lg md:text-xl lg:text-2xl">Tennis</Link>
                <Link to='/category/Batminton' className="bg-[#178582] px-4 py-1 rounded-full text-white text-lg md:text-xl lg:text-2xl">Batminton</Link>
                <Link to='/category/Hockey' className="bg-[#178582] px-4 py-1 rounded-full text-white text-lg md:text-xl lg:text-2xl">Hockey</Link>
                
            </div>
        </div>
    );
};

export default Category;