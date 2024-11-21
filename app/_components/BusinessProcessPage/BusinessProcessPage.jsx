import Image from "next/image";
import React from "react";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import ContactsForm from "../Common/Contact/ContactsForm";

const BusinessProcessPage = () => {
  return (
    <>
      <div className="relative w-full">
        <Image
          width={1000}
          height={627}
          unoptimized
          src="/images/cms/bg-bo.jpg"
          alt="Software Development"
          className="h-[720px] w-full"
        />

        {/* Overlay with Opacity */}
        <div className="absolute top-[100px] w-full py-20 pb-[30px]">
          <div className="container">
            <div className="flex">
              <div className="mt-[50px] w-[58.33%] px-4 pb-[200px] pt-[70px]">
                <h1 className="mb-2.5 mt-5 font-montserrat text-4xl font-extrabold uppercase leading-10 text-white">
                  Business Process Outsourcing Solutions
                </h1>
                <p className="mt-[25px] text-base font-medium leading-7 text-white">
                  Offering cost-effective, flexible and scalable BPO services to
                  clients, and helping ensure competitive advantage through the
                  power of Business Process Outsourcing Solutions
                </p>
                <div className="mt-[30px]">
                  <a
                    href="#second-sec"
                    className="text-goldenYellow font-montserrat text-xl font-extrabold leading-7 hover:underline"
                  >
                    view detail &gt;
                  </a>
                </div>
              </div>
              <div className="w-[41.6%] px-4">
                <ContactsForm
                  bgColor="ContactBg"
                  textColor="text-white"
                  buttonColor="bg-goldenYellow"
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
        </div>
      </div>
      <Breadcrumbs
        title="Business Process Outsourcing"
        breadcrumbPath="/web-design"
      />
      <div className="h-[120px] w-full bg-[url('/images/cms/meetup-bar-bo.jpg')] bg-cover bg-[34%]"></div>
      <div className="container">
        <div className="my-20 flex">
          <div className="w-[58.33%] px-4">
            <div className="mt-6 flex w-full items-center justify-center">
              <Image
                width={465}
                height={304}
                unoptimized
                src="/images/cms/big-bo.jpg"
                alt="Cloud"
              />
            </div>
          </div>
          <div className="w-[41.66%] px-4">
            <h2 className="mb-5 mt-10 text-left text-[30px] font-semibold uppercase text-Gray">
              Achieve Cost Efficiency
            </h2>
            <p className="text-left font-montserrat text-[15px] font-normal leading-7 text-Gray">
              Driven by the desire to minimize costs, get access to professional
              talent, blend processes, control risk and focus more on core
              competencies, businesses have turned to BPO services as a mean of
              gaining enhanced competitiveness.
            </p>
            <div className="flex items-center justify-center">
              <button className="bg-goldenYellow mt-10 flex h-[45px] items-center justify-center px-[60px] py-2.5 capitalize text-white">
                get started
              </button>
            </div>
          </div>
        </div>
        <div className="my-28 flex">
          <div className="w-[41.66%] px-4">
            <h2 className="mb-5 mt-10 text-left text-[30px] font-semibold uppercase text-Gray">
              BPO For Startups
            </h2>
            <p className="text-left font-montserrat text-[15px] font-normal leading-7 text-Gray">
              Startup would love to work with and only with the experts, but
              unfortunately they come with big prices.Our BPO startup
              outsourcing services team can handle your accounting, reporting
              and budget management solutions during the early phase. With this
              early BPO services, you can give complete focus on your main
              competencies during the crucial start-up period.
            </p>
            <div className="flex items-center justify-center">
              <button className="bg-goldenYellow mt-10 flex h-[45px] items-center justify-center px-[60px] py-2.5 capitalize text-white">
                get started
              </button>
            </div>
          </div>
          <div className="w-[58.33%] px-4">
            <div className="mt-6 flex w-full items-center justify-center">
              <Image
                width={465}
                height={304}
                unoptimized
                src="/images/cms/big2-bo.jpg"
                alt="Cloud"
                className="h-[334px] w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#e0e0e0] py-[50px] text-center">
        <div className="container px-4">
          <h2 className="mb-2.5 mt-5 text-center text-[30px] font-bold uppercase">
            Call Center Services
          </h2>
          <p className="font-montserrat text-[15px] font-medium leading-7 text-[#333333]">
            Missing a call means one potential customer lost! Our BPO services
            with its professionally efficient contact representative personnel
            will never let you disappointed. We offers customized inbound and
            outbound customer care services to get more business opportunities,
            profit and growth while retaining total customer satisfaction
            because your success means a lot to us.
          </p>
          <div className="mt-[50px] flex items-center">
            <div className="w-1/2">
              <div className="text-goldenYellow mx-[60px] flex flex-col items-center rounded-2xl bg-Gray p-5">
                <Image
                  width={100}
                  height={100}
                  unoptimized
                  src="/images/cms/inbound.png"
                  alt="Inbound Call Center"
                />
                <h4 className="mt-2.5 font-montserrat text-base font-medium capitalize">
                  Inbound
                </h4>
                <div className="text-[15px] font-normal leading-7">
                  <p>Sales &amp; Order Processing</p>
                  <p>Technology Product Support</p>
                  <p>Technical &amp; Help Desk</p>
                  <p>Customer Services</p>
                  <p>IVR Services</p>
                  <p>Website &quot;Call me Back&quot;</p>
                  <p>Live Chat Support </p>
                  <p>Email Management </p>
                  <p>SMS Marketing &amp; Management</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="text-goldenYellow mx-[60px] flex flex-col items-center rounded-2xl bg-Gray p-5">
                <Image
                  width={100}
                  height={100}
                  unoptimized
                  src="/images/cms/outbound.png"
                  alt="Inbound Call Center"
                />
                <h4 className="mt-2.5 font-montserrat text-base font-medium capitalize">
                  Outbound
                </h4>
                <div className="text-[15px] font-normal leading-7">
                  <p>Telemarketing</p>
                  <p>Telesales</p>
                  <p>Appointment Setting</p>
                  <p>B2B Services</p>
                  <p>Lead Generation</p>
                  <p>Data Verification Services</p>
                  <p>Credit Management </p>
                  <p>Appointment Setting</p>
                  <p>Tele-Research Tele Surveying</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-[50px]">
        <div>
          <h2 className="mb-5 mt-10 text-center text-[30px] font-bold text-Gray">
            This is how we will accelerate your growth
          </h2>

          <div className="mt-[30px] grid grid-cols-3">
            <div className="border-b border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/bo1.png"
                  alt="Responsive E-Commerce Site"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold uppercase leading-4">
                Recruitment Process Outsourcing
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                WOur BPO services provide flexible and scalable recruitment
                solutions which can include anything from sourcing and selection
                to onboarding individuals. We process tasks faster, more
                efficiently and at cost-effective rate than you could ever do
                in-house.
              </p>
            </div>
            <div className="border-b border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/bo2.png"
                  alt="Best User Experience"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold uppercase leading-4">
                IT Support
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                From application development to network and server support, we
                aim to continuously deliver value in achieving the business
                goals of our clients. Helpdesk models are designed in order to
                meet the needs of individual customers for successful
                outsourcing outcome.
              </p>
            </div>
            <div className="border-b border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/bo3.png"
                  alt="Data Acquisitions &amp; Migration"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                Data Procurement & Migration
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                Losing data can be painful for any website owner, as it takes
                years to build product & user databases. We understand this
                concern and guarantee a safe migration without the risk of any
                data loss, so your new website works without any lags caused to
                due data migration.
              </p>
            </div>
            <div className="border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/bo4.png"
                  alt="Plugin Development"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                Data Processing
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                With increasing costs towards employees salaries, overheads and
                infrastructural load, outsourcing your data processing needs our
                BPO services to be the only solution you are looking for.
              </p>
            </div>
            <div className="border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/bo5.png"
                  alt="App Development"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                Web Development
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                Whether you want a fancy,appealing, new landing page for your
                startup business or hundreds of inner pages for your existing
                website, we have got you covered.
              </p>
            </div>
            <div className="border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/bo6.png"
                  alt="E-Commerce Maintenance"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                Market Research & Survey
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                We ensure that the research solutions provided to you are
                customized enough to meet clients&quot; business objectives by
                critically analyzing the information input.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessProcessPage;
