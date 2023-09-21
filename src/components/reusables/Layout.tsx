import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Background from "./Background/Background";
import Visit from "./Visit";
import ScrollToTop from "@/utils/ScrollToTop";

function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Background />
      <Outlet />
      <Visit />
      <Footer />
    </>
  );
}

export default Layout;
