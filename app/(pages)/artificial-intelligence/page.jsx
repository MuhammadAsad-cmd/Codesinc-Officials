"use client";
import Breadcrumbs from "@/app/_components/BreadCrumbs/Breadcrumbs";
import Clients from "@/app/_components/Clients/Clients";
import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import ContactsForm from "@/app/_components/Common/Contact/ContactsForm";
import ServicesGrid from "@/app/_components/ServicesGrid/ServicesGrid";
import Testimonials from "@/app/_components/Testimonials/Testimonials";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePageProjects from "@/app/_components/AllProjects/HomePageProjects";

const Artificial = () => {
  const servicesData = [
    {
      image: "/images/cms/bi1.png",
      alt: "Predictive Analytics",
      title: "Predictive Analytics",
      description:
        "Anticipate market trends and customer needs with AI-driven predictive models.",
    },
    {
      image: "/images/cms/bi2.png",
      alt: "Automation at Scale",
      title: "Automation at Scale",
      description:
        "Optimize operations by automating complex processes across your organization.",
    },
    {
      image: "/images/cms/bi3.png",
      alt: "Custom AI Models",
      title: "Custom AI Models",
      description:
        "Tailor AI algorithms to your specific business needs and challenges.",
    },
    {
      image: "/images/cms/bi4.png",
      alt: "AI-Driven Marketing",
      title: "AI-Driven Marketing",
      description:
        "Enhance customer engagement with personalized, AI-powered marketing strategies.",
    },
    {
      image: "/images/cms/bi5.png",
      alt: "Advanced Web Analytics",
      title: "Advanced Web Analytics",
      description:
        "Track and analyze website performance with AI-enhanced insights.",
    },
    {
      image: "/images/cms/bi6.png",
      alt: "AI Support Systems",
      title: "AI Support Systems",
      description:
        "Deploy AI-powered chatbots and virtual assistants for 24/7 support.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <div
        className="h-full min-h-screen w-full bg-cover bg-center bg-no-repeat py-12 md:py-[170px]"
        style={{
          backgroundImage: "url('/images/cms/connecting-lines.jpg')",
        }}
      >
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-8 px-4 text-center lg:flex-row lg:text-left">
          {/* Left Section */}
          <div
            data-aos="fade-right"
            className="mt-[50px] px-4 pb-20 pt-5 md:w-1/2 lg:pb-[200px] lg:pt-[70px] xl:w-[58.33%]"
          >
            <h1 className="font-montserrat mb-2.5 mt-5 text-4xl font-extrabold uppercase leading-10 text-white">
              Transform Your Business with Cutting-Edge AI Solutions
            </h1>
            <p className="mt-[25px] text-base font-medium leading-7 text-white">
              Empower your business with tailored Artificial Intelligence
              solutions. From predictive analytics to machine learning and
              automation, our AI services help you stay ahead of the
              competition.
            </p>
            <div className="mt-[30px]">
              <a
                href="#second-sec"
                className="font-montserrat text-xl font-extrabold leading-7 text-rosePink hover:underline"
              >
                view detail &gt;
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="px-4 md:w-1/2 xl:w-[41.6%]" data-aos="fade-left">
            <ContactsForm
              bgColor="ContactBg"
              textColor="text-white"
              buttonColor="bg-rosePink"
              buttonText="Get Started"
              placeholders={{
                name: "Enter Your Name *",
                email: "Enter Your Email *",
                projectType: "Choose a Project Type",
                phone: "Enter Your Phone *",
                message: "Describe Your Project *",
              }}
            />
          </div>
        </div>
      </div>

      <Breadcrumbs
        title="Business Intelligence"
        breadcrumbPath="/business-intelligence"
      />
      <div className="h-[120px] w-full bg-[url('/images/cms/meetup-bar-bi.jpg')] bg-cover bg-[34%]"></div>
      <div className="container px-4">
        <div className="my-20 flex flex-col md:flex-row">
          <div className="md:w-[58.33%] lg:px-4" data-aos="fade-right">
            <div className="w- mt-6 flex items-center justify-center">
              <Image
                width={522}
                height={340}
                unoptimized
                src="/images/cms/bi2-big.gif"
                alt="Cloud"
              />
            </div>
          </div>
          <div className="md:px-4 lg:w-[41.66%]" data-aos="fade-left">
            <h2 className="mb-5 mt-10 text-left text-2xl font-semibold uppercase text-Gray md:text-[30px]">
              ARTIFICIAL INTELLIGENCE SOLUTIONS
            </h2>
            <p className="font-montserrat text-left text-[15px] font-normal leading-7 text-Gray">
              Our AI solutions are designed to revolutionize your business
              operations. Leverage advanced machine learning algorithms, natural
              language processing, and AI-driven insights to unlock hidden
              opportunities and streamline your workflows.
            </p>

            <button className="mt-10 flex h-[45px] items-center justify-center bg-rosePink px-[60px] py-2.5 capitalize text-white">
              get started
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f5f9] py-[50px] text-center text-Gray">
        <div className="container px-4">
          <h3 className="mb-2.5 mt-5 text-center text-2xl font-bold uppercase text-[#333333] md:text-[30px]">
            ARTIFICIAL INTELLIGENCE BENEFITS
          </h3>
          <p className="font-montserrat text-[15px] font-normal leading-7 text-Gray">
            We are experts in offering eCommerce development for different
            industry verticals.
          </p>
          <div className="grid grid-cols-1 gap-6 py-[50px] md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center">
              <Image
                width={96}
                height={96}
                unoptimized
                src="/images/cms/bi-1.png"
                alt="Cloud"
              />
              <h4 className="font-montserrat my-2.5 text-lg font-bold text-Gray">
                Make smart, quick decisions
              </h4>
              <p className="mb-2.5 text-[15px] font-normal leading-[22px]">
                Use your time wisely and make better, faster and smarter
                decisions.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                width={96}
                height={96}
                unoptimized
                src="/images/cms/bi-2.png"
                alt="Cloud"
              />
              <h4 className="font-montserrat my-2.5 text-lg font-bold text-Gray">
                Discover hidden opportunities
              </h4>
              <p className="mb-2.5 text-[15px] font-normal leading-[22px]">
                Find the next big opportunity in your business data with our
                Business Intelligence Services.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                width={96}
                height={96}
                unoptimized
                src="/images/cms/bi-3.png"
                alt="Cloud"
              />
              <h4 className="font-montserrat my-2.5 text-lg font-bold text-Gray">
                Work better, together
              </h4>
              <p className="mb-2.5 text-[15px] font-normal leading-[22px]">
                Work together, share together, develop together, improve
                together.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                width={96}
                height={96}
                unoptimized
                src="/images/cms/bi-4.png"
                alt="Cloud"
              />
              <h4 className="font-montserrat my-2.5 text-lg font-bold text-Gray">
                Ready for action
              </h4>
              <p className="mb-2.5 text-[15px] font-normal leading-[22px]">
                Take faster actions anytime, anywhere like never before.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4">
        <div className="my-28 flex flex-col gap-y-6 md:flex-row">
          <div className="md:w-[41.66%] lg:px-4" data-aos="zoom-in">
            <h2 className="mb-5 mt-10 text-left text-2xl font-semibold uppercase text-Gray md:text-[30px]">
              VISUALIZE YOUR DATA
            </h2>
            <p className="font-montserrat text-left text-[15px] font-normal leading-7 text-Gray">
              Make your data work for you with advanced AI visualization tools.
              Gain actionable insights and identify trends effortlessly with
              interactive and customizable dashboards.
            </p>
            <button className="mt-10 flex h-[45px] items-center justify-center bg-rosePink px-[60px] py-2.5 capitalize text-white">
              get started
            </button>
          </div>
          <div className="md:w-[58.33%] lg:px-4" data-aos="fade-up">
            <div className="mt-6 flex w-full items-center justify-center">
              <Image
                width={500}
                height={375}
                unoptimized
                src="/images/cms/dribbble-c.gif"
                alt="Cloud"
              />
            </div>
          </div>
        </div>
      </div>

      <ServicesGrid
        backgroundColor="bg-[#fbfbfb]"
        title="This is how we will accelerate your growth"
        data={servicesData}
        textColor="text-[#333333]"
      />
      <HomePageProjects />
      <Testimonials />
      <Clients />
      <ContactForm />
    </>
  );
};

export default Artificial;
