import { Outlet } from "react-router-dom";
import NavBAr from "./NavBAr";


const MainLayout = () => {
  return (
    <div >
      <NavBAr  />
      <Outlet />
      
    </div>
  );
};

export default MainLayout;
