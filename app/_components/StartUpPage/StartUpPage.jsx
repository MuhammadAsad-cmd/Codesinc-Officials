import Image from "next/image";
import React from "react";
import ProjectContact from "../Common/Contact/ProjectContact";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import Services from "../ServicesComponent/Services";
import EmergencySupport from "../EmergencySupport/EmergencySupport";

const StartUpPage = () => {
  const servicesData = [
    {
      imgSrc: "/images/cms/mentor.png",
      altText: "Dedicated Mentorship",
      title: "Dedicated Mentorship",
      description:
        "Our dedicated mentors give entrepreneurs the guidance, technical and practical advice for their specific business needs, helping the startups to learn and grow in this competitive industry.",
    },
    {
      imgSrc: "/images/cms/training.png",
      altText: "Trainings",
      title: "Trainings",
      description:
        "Workshops and training sessions are organized by the top industry experts to tell the startups about the right tools and skills to further develop and grow their startup business.",
    },
    {
      imgSrc: "/images/cms/scale.png",
      altText: "Scalability",
      title: "Scalability",
      description:
        "Our startups are uniquely positioned in a competitive ecosystem with the perspective to grow and accommodate according to the workload without compromising on the performance.",
    },
    {
      imgSrc: "/images/cms/customer.png",
      altText: "Customer Acquisition",
      title: "Customer Acquisition",
      description:
        "With the help of various marketing strategies, our startups are equipped with the latest and right tools to help them beat their target market and acquire a great market share.",
    },
    {
      imgSrc: "/images/cms/resources.png",
      altText: "Resources",
      title: "Resources",
      description:
        "Our startups are offered with free co-working space, legal aid, business development, mentorship, and networking opportunities.",
    },
    {
      imgSrc: "/images/cms/Business.png",
      altText: "Business Development",
      title: "Business Development",
      description:
        "The business developers do meetings with the startups to smoothen the communication channel and advise them on goal setting, business planning, and startup events.",
    },
  ];
  return (
    <>
      <div
        className="h-full min-h-screen w-full bg-cover bg-center bg-no-repeat py-14 md:py-[100px]"
        style={{ backgroundImage: "url('/images/cms/startup-bg.jpg')" }}
      >
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center lg:flex-row lg:text-left">
          {/* Left Section */}
          <div className="md:w-1/2 xl:w-2/3">
            <h1 className="mb-2.5 mt-5 font-montserrat text-4xl font-bold uppercase text-white md:text-[46px] md:leading-[50px]">
              WE HELP, SUPPORT & ELEVATE STARTUPS!
            </h1>

            <a
              href="#second-sec"
              className="inline-block text-lg font-bold text-[#07befa] hover:underline"
            >
              View Detail &gt;
            </a>
          </div>

          {/* Right Section */}
          <div className="mt-8 md:w-1/2 lg:mt-0 xl:w-1/3">
            <ProjectContact
              bgColor="bg-[#00b1ff]"
              borderColor="border-[#157e94]"
              borderBottom="border-white"
            />
          </div>
        </div>
      </div>
      <Breadcrumbs title="Startup" breadcrumbPath="/web-design" />

      <EmergencySupport BgColor="bg-skyBlue2" />
      <div className="bg-white py-[70px] text-center">
        <div className="container px-4">
          <div>
            <h2 className="inline-block border-b-[3px] border-skyBlue2 pb-3 font-montserrat text-3xl font-semibold uppercase text-Gray lg:text-[40px]">
              STARTUPS
            </h2>
            <div className="mt-20 flex flex-col items-center justify-center max-md:space-y-6 md:flex-row md:items-start">
              <div className="md:w-1/2 lg:px-4">
                <Image
                  width={555}
                  height={264}
                  unoptimized
                  src="/images/cms/startup-big.png"
                  alt="Software Development"
                />
              </div>
              <div className="md:w-1/2 lg:px-4">
                <p className="text-left font-montserrat text-[15px] font-normal leading-[26px] text-Gray max-md:text-center">
                  We Empower Startups And Enable Them Reach New Heights! We
                  believe in collaborative approach so as to groom the
                  entrepreneurs throughout their startup journey and further
                  enhance their business models and refine their monetization
                  Model.
                </p>
              </div>
            </div>
            <button className="mx-auto mt-10 flex items-center justify-center rounded-full border-2 border-skyBlue2 px-[60px] py-2.5 text-[15px] capitalize text-skyBlue2">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="bg-offWhite py-[60px]">
        <div className="container px-4 text-center">
          <h2 className="inline-block border-b-[3px] border-skyBlue2 pb-3 font-montserrat text-3xl font-semibold uppercase text-Gray lg:text-[40px]">
            What We Offer
          </h2>
          <div className="mt-[70px] flex flex-col justify-center max-md:items-center max-md:space-y-8 md:flex-row lg:gap-8">
            <div className="flex flex-col items-center md:w-1/3">
              <Image
                width={180}
                height={180}
                unoptimized
                src="/images/cms/sp-cloud.png"
                alt="Cloud"
              />
              <h3 className="mb-2.5 mt-[30px] font-montserrat text-xl font-semibold uppercase leading-[22px]">
                Web Development
              </h3>
              <p className="font-montserrat text-[13px] font-normal leading-[22px] text-Gray md:w-[90%]">
                We give realistic web development services to your startup
                business. We implement your ideas to create the website which
                best reflects your startup and give your brand an identity.
              </p>
              <button className="mx-auto mt-8 flex h-9 items-center justify-center rounded-full border-2 bg-[#00b1ff] px-10 py-[7px] text-sm font-bold capitalize leading-5 text-white">
                Get Started
              </button>
            </div>
            <div className="flex flex-col items-center md:w-1/3">
              <Image
                width={180}
                height={180}
                unoptimized
                src="/images/cms/sp-mobile.png"
                alt="Cloud"
              />
              <h3 className="mb-2.5 mt-[30px] font-montserrat text-xl font-semibold uppercase leading-[22px]">
                App Development
              </h3>
              <p className="font-montserrat text-[13px] font-normal leading-[22px] text-Gray md:w-[90%]">
                Develop secure, clean-coded, responsive and fully documented web
                app development for your startup business with us. Our solid
                foundation will help your startup to be adaptable and scalable.
              </p>
              <button className="mx-auto mt-8 flex h-9 items-center justify-center rounded-full border-2 bg-[#00b1ff] px-10 py-[7px] text-sm font-bold capitalize leading-5 text-white">
                Get Started
              </button>
            </div>
            <div className="flex flex-col items-center md:w-1/3">
              <Image
                width={180}
                height={180}
                unoptimized
                src="/images/cms/sp-web.png"
                alt="Cloud"
              />
              <h3 className="mb-2.5 mt-[30px] font-montserrat text-xl font-semibold uppercase leading-[22px]">
                Cloud Hosting
              </h3>
              <p className="font-montserrat text-[13px] font-normal leading-[22px] text-Gray md:w-[90%]">
                We give your startup website the on going maintenance to make
                them safe and secure. From monitoring the services to install
                security patches, managed cloud hosting and bug fixing, we serve
                you with the best.
              </p>
              <button className="mx-auto mt-8 flex h-9 items-center justify-center rounded-full border-2 bg-[#00b1ff] px-10 py-[7px] text-sm font-bold capitalize leading-5 text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-[50px]">
        <div className="flex flex-col justify-center max-md:space-y-10 md:flex-row">
          <div className="md:w-[41.66%]">
            <h2 className="mb-2.5 mt-5 font-montserrat text-[26px] font-normal uppercase text-black max-md:text-center md:text-[30px]">
              Incubation &amp; Funding
            </h2>
            <p className="text-left font-montserrat text-[15px] font-normal leading-[26px] text-Gray max-md:text-center">
              With the strong network of worldwide investors both local and
              international associated with Codesinc, we help connecting our
              startups with the best potential investors to support and turn
              their raw ideas into great companies.
            </p>
            <button className="mt-10 flex items-center justify-center rounded-full border-2 border-skyBlue2 px-[60px] py-2.5 text-[15px] capitalize text-skyBlue2 max-md:mx-auto">
              Get Started
            </button>
          </div>
          <div className="px-4 md:w-[58.33%]">
            <div className="mx-auto md:w-[90%]">
              <Image
                width={555}
                height={264}
                unoptimized
                src="/images/cms/startup2-big.png"
                alt="Software Development"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <Services
        title="Services"
        des1=""
        des2=""
        items={servicesData}
        hoverBgColor="hover:bg-skyBlue2"
        borderBottom="border-skyBlue2"
      />
    </>
  );
};

export default StartUpPage;
