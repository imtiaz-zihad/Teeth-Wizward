import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBAr = () => {
  return (
    <div className="min-h-20 bg-blue-600  text-white flex justify-between items-center ">
      <Link className="font-bold text-xl ml-4">TEETH WIZARD</Link>
      <div className="flex gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allTreatments">All Treatments</NavLink>
        <NavLink to="/myAppointments">Appointments</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
       <NavLink to='/login'>
       <button className="btn btn-primary mr-4">Login</button>
       </NavLink>
      </div>
    </div>
  );
};

export default NavBAr;
