import { Outlet } from "react-router-dom";
import Footer from "../components/commonComponents/Footer/Footer";
//import HeaderNavbar from "../components/Header/navbar";
import Navbar from "../components/Header/navbar";



export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />


      
      <Footer />

    


    </div>
  );
};
