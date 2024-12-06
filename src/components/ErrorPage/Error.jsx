import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="container flex flex-col items-center justify-center min-h-[80vh] space-y-3">
            <h1 className="text-xl md:text-4xl lg:text-6xl font-bold text-red-600">Opps!</h1>
            <h4 className="text-lg md:text-xl font-semibold">404-PAGE NOT FOUND</h4>
            <p className="text-center w-1/2 lg:w-2/5">The page you are looking for might have been removed had its name changed or temporary unavailable</p>
            <Link to='/' className="font-bold text-white bg-[#178582] px-4 py-2 rounded-full ">GO TO HOMEPAGE</Link>
        </div>
    );
};

export default Error;