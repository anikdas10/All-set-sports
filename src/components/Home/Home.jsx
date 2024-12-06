import { useContext } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import { AuthContext } from "../../assets/AuthProvider/AuthProvider";
import Products from "../Navbar/Product/Products";


const Home = () => {
   const {theme} = useContext(AuthContext);
    return (
       <div className= {`${theme?'bg-white':'bg-[#0e1f33] text-white'}`}>
         <div className='container pt-16 md:pt-20 lg:pt-36 pb-12 md:pb-16 lg:pb-24'>
            <Banner/>
            <section className="mt-8">
                <Category/>
            </section>
            <section>
                <Products/>
            </section>
        </div>
       </div>
    );
};

export default Home;