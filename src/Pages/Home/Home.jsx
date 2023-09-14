import CreateUser from "../User/CreateUser";
import About from "./About/About";
import Slider from "./Hero/Slider";

const Home = () => {
    return (
        <div>
            <Slider/>
            <About/>
            <CreateUser/>
        </div>
    );
};

export default Home;