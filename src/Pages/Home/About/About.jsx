import imag1 from '../../../assets/images/about_us/parts.jpg';
import imag2 from '../../../assets/images/about_us/person.jpg';
const About = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={imag2} className="max-w-sm rounded-lg shadow-2xl w-full h-80 " />
                        <img src={imag1} className="max-w-sm rounded-lg shadow-2xl absolute w-3/6 right-10 -bottom-20 border-4 border-white" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className="text-xl font-bold text-orange-500">About Us</h1>
                        <h1 className="text-5xl font-bold capitalize leading-[4rem] tracking-wide">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don{"'"}t look even slightly believable. </p>
                        <p className="py-6">We are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don{"'"}t look even slightly believable. </p>
                        <button className="btn btn-primary">Get Started with us !!!</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;