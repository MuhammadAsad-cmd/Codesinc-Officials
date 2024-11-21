import Image from "next/image";
import React from "react";
import ContactsForm from "../Common/Contact/ContactsForm";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";

const BusinessIntelligence = () => {
  const servicesData = [
    {
      image: "/images/cms/bi1.png",
      alt: "Sales Analytics",
      title: "Sales Analytics",
      description:
        "Sales isn’t just about the numbers. It’s about understanding the numbers and how to grow them. Our business intelligence solutions gets everyone on the same path with data-driven dashboards which can be created in no time. It also empowers them to explore on their own. Enabling everyone to understand customers better and faster, identify promising leads faster, and forecast results more accurately.",
    },
    {
      image: "/images/cms/bi2.png",
      alt: "Operations & Logistics Analytics",
      title: "Operations & Logistics Analytics",
      description:
        "When your business success depends on quick inventory or process management, you need efficient tools which can be tailored according to your workflow. With our Business Intelligence Services for Operations and Logistics Analytics, you can get a summarized view of all the data you are collecting and can quickly analyze the whole picture in real time.",
    },
    {
      image: "/images/cms/bi3.png",
      alt: "Customer Success",
      title: "Customer Success",
      description:
        "The success of your business is intertwined with the success of your customer. Being a Business Intelligence Firm, we makes it easy to bring together all the data you’re collecting about your customers into one centralized view. Our Customer success teams then take specific proactive actions to keep customers happy accordingly.",
    },
    {
      image: "/images/cms/bi4.png",
      alt: "Marketing Analytics",
      title: "Marketing Analytics",
      description:
        "Marketing analytics is necessarily important in determining a company’s spending and ROI. With the help of our Business Intelligence Platform you will be able to apply analytics tools and techniques into the real-world marketing problems and understand analytics-based marketing to drive ROI for your marketing campaigns.",
    },
    {
      image: "/images/cms/bi5.png",
      alt: "Web Analytics",
      title: "Web Analytics",
      description:
        "Your website is the online face of your brand. Web analytics are an important part for any marketing plan. Web analytics will help you analyze important information like sales, conversions, sales and page views. Web analytics will provide you the opportunity to view data in multiple ways. You can also customize reports if you want any specific data with web analytics.",
    },
    {
      image: "/images/cms/bi6.png",
      alt: "Support Analysis",
      title: "Support Analysis",
      description:
        "Our Business Intelligence support team is responsive, knowledgeable about previous encounters with each and every customer, and effective at resolving any kind of issues. If you need technical assistance, proceed to our Business Intelligence Consultant or Support Portal, open a ticket and attach the relevant details, our Business Intelligence Management will be happy to serve you.",
    },
  ];

  return (
    <>
      <div className="relative w-full">
        <Image
          width={1000}
          height={627}
          unoptimized
          src="/images/cms/bg-bi.jpg"
          alt="Software Development"
          className="h-[720px] w-full"
        />

        {/* Overlay with Opacity */}
        <div className="absolute top-[100px] w-full py-20 pb-[30px]">
          <div className="container">
            <div className="flex">
              <div className="mt-[50px] w-[58.33%] px-4 pb-[200px] pt-[70px]">
                <h1 className="mb-2.5 mt-5 font-montserrat text-4xl font-extrabold uppercase leading-10 text-white">
                  Business Intelligence Services
                </h1>
                <p className="mt-[25px] text-base font-medium leading-7 text-white">
                  Transform your raw data into the real knowledge with our
                  Business Intelligence Solutions. We can help turn your data
                  into actionable insights through our business intelligence
                  solutions.
                </p>
                <div className="mt-[30px]">
                  <a
                    href="#second-sec"
                    className="text-rosePink font-montserrat text-xl font-extrabold leading-7 hover:underline"
                  >
                    view detail &gt;
                  </a>
                </div>
              </div>
              <div className="w-[41.6%] px-4">
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
        </div>
      </div>
      <Breadcrumbs
        title="Business Intelligence"
        breadcrumbPath="/business-intelligence"
      />
      <div className="h-[120px] w-full bg-[url('/images/cms/meetup-bar-bi.jpg')] bg-cover bg-[34%]"></div>
      <div className="container">
        <div className="my-20 flex">
          <div className="w-[58.33%] px-4">
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
          <div className="w-[41.66%] px-4">
            <h2 className="mb-5 mt-10 text-left text-[30px] font-semibold uppercase text-Gray">
              Business Intelligence & Analytics
            </h2>
            <p className="text-left font-montserrat text-[15px] font-normal leading-7 text-Gray">
              Our profitable and inclusive Business Intelligence and Analytics
              services gives a foundation for insight and analysis to help you
              make more insightful business decisions, make bold actions, and
              execute quickly. Our services of data warehousing, data mining,
              information analytics and reporting services can help collect and
              assemble data from across the enterprise into a central data
              warehouse, enabling you to leverage that data to make time
              critical, strategic decisions.
            </p>
            <div className="flex items-center justify-center">
              <button className="bg-rosePink mt-10 flex h-[45px] items-center justify-center px-[60px] py-2.5 capitalize text-white">
                get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f5f9] py-[50px] text-center text-Gray">
        <div className="container px-4">
          <h3 className="mb-2.5 mt-5 text-center text-[30px] font-bold uppercase text-[#333333]">
            Business Intelligence Benefits
          </h3>
          <p className="font-montserrat text-[15px] font-normal leading-7 text-Gray">
            We are experts in offering eCommerce development for different
            industry verticals.
          </p>
          <div className="grid grid-cols-4 gap-6 py-[50px]">
            <div className="flex flex-col items-center justify-center">
              <Image
                width={96}
                height={96}
                unoptimized
                src="/images/cms/bi-1.png"
                alt="Cloud"
              />
              <h4 className="my-2.5 font-montserrat text-lg font-bold text-Gray">
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
              <h4 className="my-2.5 font-montserrat text-lg font-bold text-Gray">
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
              <h4 className="my-2.5 font-montserrat text-lg font-bold text-Gray">
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
              <h4 className="my-2.5 font-montserrat text-lg font-bold text-Gray">
                Ready for action
              </h4>
              <p className="mb-2.5 text-[15px] font-normal leading-[22px]">
                Take faster actions anytime, anywhere like never before.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="my-28 flex">
          <div className="w-[41.66%] px-4">
            <h2 className="mb-5 mt-10 text-left text-[30px] font-semibold uppercase text-Gray">
              Visualise Data
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
              <button className="bg-rosePink mt-10 flex h-[45px] items-center justify-center px-[60px] py-2.5 capitalize text-white">
                get started
              </button>
            </div>
          </div>
          <div className="w-[58.33%] px-4">
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

      <div className="bg-[#fbfbfb]">
        <div className="container px-4 py-[50px]">
          <div>
            <h2 className="mb-2.5 mt-5 text-center text-[30px] font-bold uppercase text-[#333333]">
              This is how we will accelerate your growth
            </h2>

            <div className="mt-[30px] grid grid-cols-3">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className={`${
                    index < servicesData.length - 3 ? "border-b" : ""
                  } ${index % 3 !== 2 ? "border-r" : ""} border-[#f3f3f3] px-5 py-5 text-center`}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      width={56}
                      height={56}
                      unoptimized
                      src={service.image}
                      alt={service.alt}
                    />
                  </div>
                  <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold uppercase leading-4">
                    {service.title}
                  </h4>
                  <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessIntelligence;
