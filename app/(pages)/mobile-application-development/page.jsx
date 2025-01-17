import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import MobileAppPage from "@/app/_components/MobileAppPage/MobileAppPage";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import MobileProjects from "@/app/_components/AllProjects/MobileProjects";
import Head from "next/head";

const MobileApplicationDevelopment = () => {
  return (
    <>
    <Head>
      <title>Mobile Application Development | Build Innovative Mobile Apps</title>
      <meta
        name="description"
        content="Explore our mobile application development services for creating innovative, user-friendly apps for iOS and Android. We deliver high-performance solutions tailored to your needs."
      />
      <meta
        name="keywords"
        content="Mobile App Development, iOS App Development, Android App Development, Mobile Solutions, Custom Mobile Apps, App Development Services"
      />
      <meta name="author" content="Your Company Name" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Mobile Application Development | Build Innovative Mobile Apps"
      />
      <meta
        property="og:description"
        content="Explore our mobile application development services for creating innovative, user-friendly apps for iOS and Android. We deliver high-performance solutions tailored to your needs."
      />
      <meta
        property="og:image"
        content="/images/cms/mobile-app-development-banner.jpg"
      />
      <meta property="og:url" content="https://yourwebsite.com/mobile-app-development" />
      <meta property="og:site_name" content="Your Company Name" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Mobile Application Development | Build Innovative Mobile Apps"
      />
      <meta
        property="twitter:description"
        content="Explore our mobile application development services for creating innovative, user-friendly apps for iOS and Android. We deliver high-performance solutions tailored to your needs."
      />
      <meta
        property="twitter:image"
        content="/images/cms/mobile-app-development-banner.jpg"
      />
    </Head>
      <MobileAppPage />
      <MobileProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default MobileApplicationDevelopment;
