import { useContext } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import { AuthContext } from "../../assets/AuthProvider/AuthProvider";
import Products from "../Navbar/Product/Products";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import Brand from "../BrandPartner/Brand";
import Subscribe from "../Subscribe/Subscribe";


const Home = () => {
   const {theme} = useContext(AuthContext);
    return (
       <div className= {`${theme?'bg-white':'bg-[#0e1f33] text-white'}`}>
        <Helmet>
            <title>Home | AllSet Sports</title>
        </Helmet>
         <div className='container pt-16 md:pt-20 lg:pt-36 pb-12 md:pb-16 lg:pb-24'>
            <Banner/>
            <section className="mt-8">
                <Fade direction="up" delay={1000}>
                    <Category/>
                </Fade>
            </section>
            <section>
                <Products/>
            </section>
            <section>
                <Brand/>
            </section>
            <Subscribe></Subscribe>
        </div>
       </div>
    );
};

export default Home;