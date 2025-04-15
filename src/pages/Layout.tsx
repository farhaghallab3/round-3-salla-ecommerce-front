
import { Outlet } from "react-router-dom";
import HeaderNavbar from "../components/NavBar/navbar";
import { Testimonials } from "../components/homeComponents/Testimonials";

export const Layout = () => {
  return (
    <div>
      <HeaderNavbar />
      <Outlet />
      <Testimonials />
    </div>
  );
};
