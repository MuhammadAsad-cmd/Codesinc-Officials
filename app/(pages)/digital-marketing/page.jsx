"use client";
import HomePageProjects from "@/app/_components/AllProjects/HomePageProjects";
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

const DigitalMarketing = () => {
  const servicesData = [
    {
      image: "/images/cms/d1.png",
      alt: "Brand Design & Development",
      title: "Brand Design & Development",
      description:
        "Our comprehensive approach of being a Digital Media Marketing Company is brand development, spotlights each step of the consumer journey, auditing and optimizing every brand touchpoint to ensure it delivers a consistent and designed brand experience that people love and Remember.",
    },
    {
      image: "/images/cms/d2.png",
      alt: "Digital Transformation",
      title: "Digital Transformation",
      description:
        "Our Web Marketing Services use digital advances such as analytics, mobility, social media and smart embedded devices and also improve their use of traditional technologies like ERP to change customer relationships, internal processes and value propositions.",
    },
    {
      image: "/images/cms/d3.png",
      alt: "Marketing & Advertising Campaigns",
      title: "Marketing & Advertising Campaigns",
      description:
        "In a world of increasingly shrinking budgets, paid media is only part of the puzzle. Marketing Campaigns are important aspects for both communicating with your market to reinforce their positioning, and for customer acquisition.",
    },
    {
      image: "/images/cms/d4.png",
      alt: "User Experience Designs",
      title: "User Experience Designs",
      description:
        "Studies show that better user experiences considerably boosts the user holds and other affinity markers. Increasing retention by as little as 5% could reward your online business with a 25% increase in the profits.",
    },
    {
      image: "/images/cms/d5.png",
      alt: "Connected Sales & Marketing",
      title: "Connected Sales & Marketing",
      description:
        "We can help you cover the gaps between departments, nurture prospects, and get your Sales, Tele, and Partner teams ready with our best online marketing services.",
    },
    {
      image: "/images/cms/d6.png",
      alt: "Brand Publishing",
      title: "Brand Publishing",
      description:
        "Strategic marketing content planning, creation, management systems, and programs to support value selling and digital marketing channels, all comes in Brand Publishing.",
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
        style={{ backgroundImage: "url('/images/cms/digital-bg.jpg')" }}
      >
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-8 px-4 text-center lg:flex-row lg:text-left">
          {/* Left Section */}
          <div
            data-aos="fade-right"
            className="mt-[50px] px-4 pb-20 pt-5 md:w-1/2 lg:pb-[200px] lg:pt-[70px] xl:w-[58.33%]"
          >
            <h1 className="font-montserrat mb-2.5 mt-5 text-4xl font-extrabold uppercase leading-10 text-white">
              A Premier Digital Marketing Company
            </h1>
            <p className="mt-[25px] text-base font-medium leading-7 text-white">
              We give you the best digital marketing services to increase your
              conversions, repeat the traffic and increase your brand’s online
              visibility.
            </p>
            <div className="mt-[30px]">
              <a
                href="#second-sec"
                className="font-montserrat text-xl font-extrabold leading-7 text-[#35a4dc] hover:underline"
              >
                view detail &gt;
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div data-aos="fade-left" className="px-4 md:w-1/2 xl:w-[41.6%]">
            <ContactsForm
              bgColor="ContactBg"
              textColor="text-white"
              buttonColor="bg-[#35a4dc]"
              buttonText="Request a Quote"
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
        title="Digital marketing"
        breadcrumbPath="/digital-marketing"
      />
      <div className="h-[120px] w-full bg-[url('/images/cms/meetup-bar-d.jpg')] bg-cover bg-[34%]"></div>

      <div className="container px-4">
        <div className="my-20 flex flex-col md:flex-row">
          <div className="md:w-1/2 lg:px-4" data-aos="fade-right">
            <div className="mt-6 flex w-full items-center justify-center">
              <Image
                width={465}
                height={304}
                unoptimized
                src="/images/cms/digital.gif"
                alt="Cloud"
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:px-4" data-aos="fade-left">
            <h2 className="mb-5 mt-10 text-left text-2xl font-semibold uppercase text-white md:text-[30px]">
              Who We Are
            </h2>
            <p className="font-montserrat text-left text-[15px] font-normal leading-7">
              We offer the professional digital marketing services to give you
              the best digital exposure your brand deserves. We believe that
              going virtual is the way to success, for any physical business,
              and we try to reflect our beliefs through dedication in our
              services. We make your brand visible to the targeted customers at
              the right time and on the right screen. Our winning digital
              solutions and strategies have helped our clients to interact and
              engage with their customers in a new better way. We aim to do the
              same for you.
            </p>
            <div className="md:flex md:items-center md:justify-center">
              <button className="mt-10 flex h-[45px] items-center justify-center bg-[#35a4dc] px-[60px] py-2.5 capitalize text-white">
                get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#35a4dc] py-[50px] text-center text-white">
        <div className="container px-4">
          <h3 className="mb-2.5 mt-5 text-center text-2xl font-bold uppercase text-white md:text-[30px] md:leading-9">
            We take an agile and collective approach to leverage growth
          </h3>
          <p className="font-montserrat text-[15px] font-normal leading-7 text-white">
            We create lifetime memorable experiences between your brand and the
            customers, to grow your business virtually with our IT Support &
            Management services.
          </p>
          <div className="grid grid-cols-1 gap-6 py-[50px] md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center">
              <Image
                width={200}
                height={200}
                unoptimized
                src="/images/cms/dm2.png"
                alt="Cloud"
              />
              <h4 className="my-2.5 text-lg font-bold text-white">
                Human Centered Design
              </h4>
              <p className="mb-2.5 text-[15px] font-normal leading-[22px]">
                A large number of marketers and business owners are prioritizing
                the online customer experience as the main point of branding,
                design and delivery for their products and services.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                width={200}
                height={200}
                unoptimized
                src="/images/cms/dm3.png"
                alt="Cloud"
              />
              <h4 className="my-2.5 text-lg font-bold text-white">
                Content Optimization
              </h4>
              <p className="mb-2.5 text-[15px] font-normal leading-[22px]">
                Our online marketing services transform your static brochure
                into a sales tool to connect with users, take them to that
                relevant page and push them to do an action.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                width={200}
                height={200}
                unoptimized
                src="/images/cms/dm4.png"
                alt="Cloud"
              />
              <h4 className="my-2.5 text-lg font-bold text-white">
                Customer Insights
              </h4>
              <p className="mb-2.5 text-[15px] font-normal leading-[22px]">
                We aim to increase the effectiveness of your products or
                services for the customers while increasing sales for the
                business benefits with our digital marketing services.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                width={200}
                height={200}
                unoptimized
                src="/images/cms/dm5.png"
                alt="Cloud"
              />
              <h4 className="my-2.5 text-lg font-bold text-white">
                Agile Development
              </h4>
              <p className="mb-2.5 text-[15px] font-normal leading-[22px]">
                Being a leading digital marketing company, our agile development
                phases include story-based and test-driven approach and use the
                best tools to give a seamless delivery process.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4">
        <div className="my-20 flex flex-col md:flex-row">
          <div className="md:w-1/2 lg:px-4" data-aos="zoom-in">
            <div className="mt-6 flex w-full items-center justify-center">
              <Image
                width={465}
                height={304}
                unoptimized
                src="/images/cms/digital-seo.gif"
                alt="Cloud"
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:px-4" data-aos="fade-up">
            <h2 className="mb-5 mt-10 text-left text-2xl font-semibold uppercase md:text-[30px]">
              Strategic Search Optimization
            </h2>
            <p className="font-montserrat text-left text-[15px] font-normal leading-7">
              SEO does sound like rocket science. But with the right combination
              of widget and module, the whole exercise becomes as easy as
              falling off a log! With every new year, our digital marketing
              company reevaluates SEO strategies to keep up the ranking of your
              online business. The links of your website and content are the two
              major factors to rank well in search engines. We follow some key
              SEO strategies to help you stay at the top of the search engines.
            </p>
          </div>
        </div>
        <div className="my-20 flex flex-col-reverse md:flex-row-reverse">
          <div className="md:w-1/2 lg:px-4" data-aos="fade-right">
            <div className="mt-6 flex w-full items-center justify-center">
              <Image
                width={465}
                height={304}
                unoptimized
                src="/images/cms/digital-unlock.gif"
                alt="Cloud"
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:px-4" data-aos="fade-left">
            <h2 className="mb-5 mt-10 text-left text-2xl font-semibold uppercase md:text-[30px]">
              Unlock the Power of Social Platforms
            </h2>
            <p className="font-montserrat text-left text-[15px] font-normal leading-7">
              To realize the marketing potential of digital services, you have
              to unlock the power of social platforms to make them truly useful
              for your consumers. Social media postings can be useful in driving
              the targeted traffic.Also use social media platforms to boost up
              your site&apos;s SEO. If you are in the hands of the right digital
              marketing services. We can make you connect with the industry
              leaders and consumers leading your business to build a real
              relationship. Our online marketing services will help your
              business get noticed in the virtual world by utilizing our social
              media tactics.
            </p>
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

export default DigitalMarketing;
