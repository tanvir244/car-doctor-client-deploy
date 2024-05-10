import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <div className='w-[90%] max-w-7xl mx-auto'>
                <Banner></Banner>
                <About></About>
                <Services></Services>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;