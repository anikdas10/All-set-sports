import { useContext } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import { AuthContext } from "../../assets/AuthProvider/AuthProvider";


const Home = () => {
   const {theme} = useContext(AuthContext);
    return (
       <div className= {`${theme?'bg-white':'bg-[#0A1828] text-white'}`}>
         <div className='container pt-16 md:pt-20 lg:pt-36'>
            <Banner/>
            <section className="mt-8">
                <Category/>
            </section>
        </div>
       </div>
    );
};

export default Home;