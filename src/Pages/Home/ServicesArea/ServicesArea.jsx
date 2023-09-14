import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

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
            <div className="container mx-auto py-12">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">


                    {
                        services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default ServicesArea;