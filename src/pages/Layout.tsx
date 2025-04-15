
import { Outlet } from "react-router-dom";
import Footer from "../components/commonComponents/Footer/Footer";
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
