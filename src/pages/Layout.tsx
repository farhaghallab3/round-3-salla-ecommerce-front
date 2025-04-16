
import { Outlet } from "react-router-dom";
import Footer from "../components/commonComponents/Footer/Footer";
import HeaderNavbar from "../components/NavBar/navbar";


export const Layout = () => {
  return (
    <div>
      <HeaderNavbar />
      <Outlet />

      
      <Footer />

    

    </div>
  );
};
