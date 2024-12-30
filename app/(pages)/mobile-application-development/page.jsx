import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import MobileAppPage from "@/app/_components/MobileAppPage/MobileAppPage";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import MobileProjects from "@/app/_components/AllProjects/MobileProjects";

const MobileApplicationDevelopment = () => {
  return (
    <>
      <MobileAppPage />
      <MobileProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default MobileApplicationDevelopment;
