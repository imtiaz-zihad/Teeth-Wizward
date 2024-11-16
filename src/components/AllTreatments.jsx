import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const AllTreatments = () => {

    const services = useLoaderData();
    return (
        <div className="grid grid-cols-4 w-[90%] mx-auto max-w-[1200px] gap-5 m-16">
             {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
        </div>
    );
};

export default AllTreatments;