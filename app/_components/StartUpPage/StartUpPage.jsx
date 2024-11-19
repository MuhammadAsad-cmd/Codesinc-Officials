import Image from "next/image";
import React from "react";
import ProjectContact from "../Common/Contact/ProjectContact";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";

const StartUpPage = () => {
  return (
    <>
      <div className="relative w-full">
        <Image
          width={320}
          height={755}
          src="/images/cms/startup-bg.jpg"
          alt="Software Development"
          className="h-full w-full object-cover"
        />

        {/* Overlay with Opacity */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-[100px] w-full pb-[30px]">
          <div className="container">
            <div className="flex items-center">
              <div className="w-[66.66%] px-4 pt-[70px]">
                <h1 className="mb-2.5 mt-5 font-montserrat text-[46px] font-bold uppercase leading-[50px] text-white">
                  WE HELP, SUPPORT & ELEVATE STARTUPS!
                </h1>

                <div className="mt-[30px]">
                  <a
                    href="#second-sec"
                    className="font-montserrat text-lg font-bold leading-6 text-[#07befa] hover:underline"
                  >
                    view detail &gt;
                  </a>
                </div>
              </div>
              <div className="w-1/3 px-4">
                <ProjectContact />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs title="Startup" breadcrumbPath="/web-design" />

      <div className="bg-skyBlue2 py-[25px]">
        <div className="container">
          <div className="mx-auto flex w-[83%] items-center justify-center px-4">
            <div className="w-1/3 px-4">
              <div className="flex items-center justify-center">
                <Image
                  width={107}
                  height={120}
                  unoptimized
                  src="/images/logos/test.png"
                  alt="Test Logo"
                />
              </div>
            </div>
            <div className="w-[66.66%] px-4">
              <p className="mb-2.5 font-montserrat text-xl font-normal capitalize leading-7 text-white">
                <strong>Get Emergency Support.</strong> Our 24/7 Support
                Representatives will help you with your project
              </p>
              <a href="#contact">
                <button
                  type="button"
                  className="flex items-center justify-center rounded-full border-2 border-white px-5 py-[7px] font-montserrat text-base font-normal leading-7 text-white"
                >
                  Click Here For Support
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-[70px] text-center">
        <div className="container">
          <div>
            <h2 className="inline-block border-b-[3px] border-skyBlue2 pb-3 font-montserrat text-[40px] font-semibold uppercase text-Gray">
              STARTUPS
            </h2>
            <div className="mt-20 flex justify-center">
              <div className="w-1/2 px-4">
                <Image
                  width={555}
                  height={264}
                  unoptimized
                  src="/images/cms/startup-big.png"
                  alt="Software Development"
                />
              </div>
              <div className="w-1/2 px-4">
                <p className="text-left font-montserrat text-[15px] font-normal leading-[26px] text-Gray">
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
      <div className="bg-[#f5f5f5] py-[60px]">
        <div className="container text-center">
          <h2 className="inline-block items-center justify-center border-b-[3px] border-skyBlue2 pb-3 text-center font-montserrat text-[40px] font-semibold uppercase text-Gray">
            What We Offer
          </h2>
          <div className="mt-[70px] flex items-center justify-center gap-8">
            <div className="flex w-1/3 flex-col items-center px-4">
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
              <p className="w-[90%] font-montserrat text-[13px] font-normal leading-[22px] text-Gray">
                We give realistic web development services to your startup
                business. We implement your ideas to create the website which
                best reflects your startup and give your brand an identity.
              </p>
              <button className="mx-auto mt-8 flex h-9 items-center justify-center rounded-full border-2 bg-[#00b1ff] px-10 py-[7px] text-sm font-bold capitalize leading-5 text-white">
                Get Started
              </button>
            </div>
            <div className="flex w-1/3 flex-col items-center px-4">
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
              <p className="w-[90%] font-montserrat text-[13px] font-normal leading-[22px] text-Gray">
                Develop secure, clean-coded, responsive and fully documented web
                app development for your startup business with us. Our solid
                foundation will help your startup to be adaptable and scalable.
              </p>
              <button className="mx-auto mt-8 flex h-9 items-center justify-center rounded-full border-2 bg-[#00b1ff] px-10 py-[7px] text-sm font-bold capitalize leading-5 text-white">
                Get Started
              </button>
            </div>
            <div className="flex w-1/3 flex-col items-center px-4">
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
              <p className="w-[90%] font-montserrat text-[13px] font-normal leading-[22px] text-Gray">
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
      <div className="container py-[50px]">
        <div className="flex justify-center">
          <div className="w-[41.66%] px-4">
            <h2 className="mb-2.5 mt-5 font-montserrat text-[30px] font-normal uppercase text-black">
              Incubation &amp; Funding
            </h2>
            <p className="text-left font-montserrat text-[15px] font-normal leading-[26px] text-Gray">
              With the strong network of worldwide investors both local and
              international associated with Codesinc, we help connecting our
              startups with the best potential investors to support and turn
              their raw ideas into great companies.
            </p>
            <button className="mt-10 flex items-center justify-center rounded-full border-2 border-skyBlue2 px-[60px] py-2.5 text-[15px] capitalize text-skyBlue2">
              Get Started
            </button>
          </div>
          <div className="w-[58.33%] px-4">
            <div className="mx-auto w-[90%]">
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
      <div className="mt-[50px] bg-[#f5f5f5] py-[70px]">
        <div className="container px-4 text-center">
          <h2 className="inline-block items-center justify-center border-b-[3px] border-skyBlue2 pb-3 text-center font-montserrat text-[40px] font-semibold uppercase text-Gray">
            Services
          </h2>
          <div className="mx-auto mt-[50px] w-[83.33%]">
            <div className="grid grid-cols-3 gap-8">
              <div className="group flex flex-col items-center p-5 duration-300 ease-in-out hover:bg-[#00b1ff] hover:text-white">
                <div>
                  <Image
                    width={100}
                    height={100}
                    unoptimized
                    src="/images/cms/mentor.png"
                    alt="Cloud"
                  />
                </div>
                <h3 className="mb-3 mt-[30px] min-h-[47px] border-b border-black pb-[15px] text-center text-sm font-semibold uppercase group-hover:border-white">
                  Dedicated Mentorship
                </h3>
                <p className="mb-2.5 font-montserrat text-[13px] font-normal leading-[21px] text-[#a6a6a6] group-hover:text-white">
                  Our dedicated mentors gives entrepreneurs the guidance,
                  technical and practical advices for their specific business
                  needs, helping the startups to learn and grow in this
                  competitive industry.
                </p>
              </div>
              <div className="group flex flex-col items-center p-5 duration-300 ease-in-out hover:bg-[#00b1ff] hover:text-white">
                <div>
                  <Image
                    width={100}
                    height={100}
                    unoptimized
                    src="/images/cms/training.png"
                    alt="Cloud"
                  />
                </div>
                <h3 className="mb-3 mt-[30px] min-h-[47px] border-b border-black pb-[15px] text-center text-sm font-semibold uppercase group-hover:border-white">
                  Trainings
                </h3>
                <p className="mb-2.5 font-montserrat text-[13px] font-normal leading-[21px] text-[#a6a6a6] group-hover:text-white">
                  Workshops and training sessions are organized by the top
                  industry experts to tell the startups about the right tools
                  and skills to further develop and grow their startup business.
                </p>
              </div>
              <div className="group flex flex-col items-center p-5 duration-300 ease-in-out hover:bg-[#00b1ff] hover:text-white">
                <div>
                  <Image
                    width={100}
                    height={100}
                    unoptimized
                    src="/images/cms/scale.png"
                    alt="Cloud"
                  />
                </div>
                <h3 className="mb-3 mt-[30px] min-h-[47px] border-b border-black pb-[15px] text-center text-sm font-semibold uppercase group-hover:border-white">
                  Scalability
                </h3>
                <p className="mb-2.5 font-montserrat text-[13px] font-normal leading-[21px] text-[#a6a6a6] group-hover:text-white">
                  Our startups are uniquely positioned in a competitive
                  ecosystem with the perspective to grow and accommodate
                  according to the workload without compromising on the
                  performance.
                </p>
              </div>
              <div className="group flex flex-col items-center p-5 duration-300 ease-in-out hover:bg-[#00b1ff] hover:text-white">
                <div>
                  <Image
                    width={100}
                    height={100}
                    unoptimized
                    src="/images/cms/customer.png"
                    alt="Cloud"
                  />
                </div>
                <h3 className="mb-3 mt-[30px] min-h-[47px] border-b border-black pb-[15px] text-center text-sm font-semibold uppercase group-hover:border-white">
                  Customer Acquisition
                </h3>
                <p className="mb-2.5 font-montserrat text-[13px] font-normal leading-[21px] text-[#a6a6a6] group-hover:text-white">
                  With the help of various marketing strategies, our startups
                  are equipped with the latest and right tools to help them beat
                  their target market and acquire a great market share.
                </p>
              </div>
              <div className="group flex flex-col items-center p-5 duration-300 ease-in-out hover:bg-[#00b1ff] hover:text-white">
                <div>
                  <Image
                    width={100}
                    height={100}
                    unoptimized
                    src="/images/cms/resources.png"
                    alt="Cloud"
                  />
                </div>
                <h3 className="mb-3 mt-[30px] min-h-[47px] border-b border-black pb-[15px] text-center text-sm font-semibold uppercase group-hover:border-white">
                  Resources
                </h3>
                <p className="mb-2.5 font-montserrat text-[13px] font-normal leading-[21px] text-[#a6a6a6] group-hover:text-white">
                  Our startups are offered with free co-working space, legal
                  aid, business development, mentorship and networking
                  opportunities.
                </p>
              </div>
              <div className="group flex flex-col items-center p-5 duration-300 ease-in-out hover:bg-[#00b1ff] hover:text-white">
                <div>
                  <Image
                    width={100}
                    height={100}
                    unoptimized
                    src="/images/cms/Business.png"
                    alt="Cloud"
                  />
                </div>
                <h3 className="mb-3 mt-[30px] min-h-[47px] border-b border-black pb-[15px] text-center text-sm font-semibold uppercase group-hover:border-white">
                  Business Development
                </h3>
                <p className="mb-2.5 font-montserrat text-[13px] font-normal leading-[21px] text-[#a6a6a6] group-hover:text-white">
                  The business developers do meetings with the startups to
                  smoothen the communication channel and advise them on goal
                  setting, business planning and startup events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartUpPage;
