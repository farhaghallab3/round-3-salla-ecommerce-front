import { Outlet } from "react-router-dom";
import Footer from "../components/commonComponents/Footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Outlet />
      <Footer/>
    </div>
  );
};
