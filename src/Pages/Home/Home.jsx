import CreateUser from "../User/CreateUser";
import About from "./About/About";
import Slider from "./Hero/Slider";
import ServicesArea from "./ServicesArea/ServicesArea";

const Home = () => {
    return (
        <div>
            <Slider/>
            <About/>
            <ServicesArea/>
            <CreateUser/>
        </div>
    );
};

export default Home;