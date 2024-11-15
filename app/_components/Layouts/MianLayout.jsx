import "@/app/styles/globals.css";
import Header from "../Common/header/Header";
import Offices from "../Common/Offices/Offices";
import Footer from "../Common/footer/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        {children}
        <Offices />
        <Footer />
      </div>
    </>
  );
}
