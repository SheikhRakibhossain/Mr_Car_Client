import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { FaStreetView } from "react-icons/fa";

const ServicesArea = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
            .catch(error => console.log(error))

    }, [])

    return (
        <>
            <div className="container px-4 py-12">
                <div className="w-full md:w-2/4 mx-auto text-center py-10 space-y-6">
                    <h4 className="text-xl font-bold text-orange-500">About Us</h4>
                    <h1 className="text-4xl font-bold ">Our Service Area</h1>
                    <p>the majority have suffered alteration in some form, by injected humour, or random sized words which don{"'"}t look even slightly believable. </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">


                    {
                        services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                    }
                </div>
                <div className=" py-20 text-center">
                    <button className="btn btn-primary">View More Services                 <FaStreetView />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ServicesArea;