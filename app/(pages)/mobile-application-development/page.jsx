import AllProjects from "@/app/_components/AllProjects/AllProjects";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import MobileAppPage from "@/app/_components/MobileAppPage/MobileAppPage";
import Testimonials from "@/app/_components/Testimonials/Testimonials";

const MobileApplicationDevelopment = () => {
  return (
    <>
      <MobileAppPage />
      <AllProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default MobileApplicationDevelopment;
