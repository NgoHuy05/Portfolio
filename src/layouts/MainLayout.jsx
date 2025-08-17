import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
    <ScrollToTop />
      <Header />
      <div className="min-h-screen bg-white text-gray-900">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
