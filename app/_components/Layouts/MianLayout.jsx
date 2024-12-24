import "@/app/styles/globals.css";
import Header from "../Common/header/Header";
import Offices from "../Common/Offices/Offices";
import Footer from "../Common/footer/Footer";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="relative">
        <ScrollToTopButton />
        <Header />
        {children}
        <Offices />
        <Footer />
      </div>
    </>
  );
}
