import { FaArrowAltCircleRight } from 'react-icons/fa';

const ServicesCard = ({ service }) => {
    const { price, title, img, _id } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl border-0 mx-auto">
            <figure><img src={img} alt="services image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{title}</h2>
                <div className="card-actions justify-between text-pink-500">
                    <span className='text-2xl'>$ {price}</span>
                    <FaArrowAltCircleRight className='text-2xl' />
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;