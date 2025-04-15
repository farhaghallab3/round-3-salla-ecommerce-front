
import { Outlet } from "react-router-dom";
import HeaderNavbar from "../components/NavBar/navbar";

export const Layout = () => {
  return (
    <div>
      <HeaderNavbar />
      <Outlet />
    </div>
  );
};
