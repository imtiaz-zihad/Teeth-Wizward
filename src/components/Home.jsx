import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";
import FeedBack from "./FeedBack";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  const { servicesData, feedBackData } = services;

  return (
    <div>
      <Banner />
      <div className="grid grid-cols-4 w-[90%] mx-auto max-w-[1200px] gap-5 m-16">
        {servicesData.slice(0, 4).map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <button className="btn mx-auto block btn-primary">
        <NavLink to="/allTreatments">View All</NavLink>
      </button>

      <FeedBack  feedBackData={feedBackData}></FeedBack>
    </div>
  );
};

export default Home;
