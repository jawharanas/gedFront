import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
