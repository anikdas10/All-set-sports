import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {
    return (
        <div className="container mt-16 md:mt-20 lg:mt-32">
            <Banner/>
            <section className="mt-8">
                <Category/>
            </section>
        </div>
    );
};

export default Home;