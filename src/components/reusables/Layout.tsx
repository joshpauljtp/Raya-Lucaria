import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Background from "./Background/Background";
import Visit from "./Visit";

function Layout() {
  return (
    <>
      <Navbar />
      <Background />
      <Outlet />
      <Visit />
      <Footer />
    </>
  );
}

export default Layout;
