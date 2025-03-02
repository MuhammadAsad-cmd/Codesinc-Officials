"use client";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import VideoSection from "../VideoSection/VideoSection";

const MobileAppPage = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="relative w-full">
        <VideoSection
          src="/video/Mock-up.mp4"
          subtitles={{
            src: "/video/Mock-up.webm",
            kind: "subtitles",
            srcLang: "en",
            label: "English",
          }}
          heightClass="h-[650px]"
        />

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-[20%] w-full lg:top-[30%]">
          <div className="container px-4">
            <h1 className="mx-auto mb-2.5 mt-5 w-full text-center font-montserrat text-4xl font-bold uppercase text-white md:max-w-[900px] lg:text-[48px] lg:leading-[52px]">
              How a hit <span className="text-lightblue"> mobile App </span>
              development company Works?
            </h1>
            <p className="mx-auto text-center font-montserrat text-base font-normal text-white md:w-4/5">
              Codesinc app development services help our developers enter a
              unique platform that is agile, accessible and user-friendly for
              the end user. Given Arpatech’s track record and expertise in app
              development, there’s no reason you should hesitate spending money
              on developing quality mobile app improvement solutions.
            </p>

            <div className="mt-10 flex h-full w-full items-center justify-center gap-5">
              <button
                onClick={() => handleScroll("readmore")}
                className="flex h-14 items-center justify-center rounded-full bg-lightblue px-8 text-lg uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-white hover:text-lightblue md:px-[60px]"
              >
                Read more
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="flex h-14 items-center justify-center rounded-full border-2 border-white bg-transparent px-8 text-lg uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-white hover:text-lightblue md:px-[60px]"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs
        title="Mobile app development"
        breadcrumbPath="/mobile-application-development"
      />
      <div
        id="readmore"
        className="bg-none bg-[length:15.25%] bg-fixed bg-[16.9%_170px] bg-no-repeat py-20 md:py-[100px] lg:bg-[url('/images/mobile-01.gif')]"
      >
        <div className="container px-4">
          <div className="flex justify-end text-center">
            <div className="lg:max-w-[66.66%]">
              <h2 className="text-3xl uppercase md:text-[40px]">
                choose your desired service
              </h2>
              <h2 className="text-2xl font-normal capitalize md:text-[30px]">
                And Let us worry about the rest!
              </h2>
              <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="bg-[#fcfcfc] p-5">
                  <Image
                    src="/images/apple-1.png"
                    alt="apple"
                    width={89}
                    height={89}
                    className="mx-auto"
                  />
                  <h4 className="mb-3 mt-5 text-[22px] font-semibold">
                    iOS mobile Apps development service
                  </h4>
                  <hr />
                  <p className="mb-4 mt-6 font-montserrat text-[13px] font-normal leading-[22px]">
                    We take into account iOS app optimization and lead it
                    through stages of testing and implementation adding features
                    requested by clients through feedback mechanism. Arpatech
                    strives to achieve perfection in every mobile phone
                    application development project taken onboard. And that’s
                    the reason every iOS mobile phone app that we’ve developed
                    is a masterpiece.
                  </p>
                  <Link
                    href="#contact"
                    className="mx-auto inline-block rounded-full border border-[#e01256] px-5 py-2 capitalize text-[#e01256]"
                  >
                    start your project
                  </Link>
                </div>
                <div className="bg-[#fcfcfc] p-5">
                  <Image
                    src="/images/apple-2.png"
                    alt="apple"
                    width={89}
                    height={89}
                    className="mx-auto"
                  />
                  <h4 className="mb-3 mt-5 text-[22px] font-semibold">
                    Android mobile App development service
                  </h4>
                  <hr />
                  <p className="mb-4 mt-6 font-montserrat text-[13px] font-normal leading-[22px]">
                    Android is hands down the platform with the widest user
                    base. Thanks to its gifted team of developers, Arpatech has
                    managed to craft cutting-edge Android apps not only enhances
                    your brand image, but also exceeds your expectations. We are
                    totally aware of what it takes in the best mobile phone app
                    development service to create apps that offer amazing user
                    experience.
                  </p>
                  <Link
                    href="#contact"
                    className="mx-auto inline-block rounded-full border border-[#e01256] px-5 py-2 capitalize text-[#e01256]"
                  >
                    start your project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-[#07befa] bg-none bg-[length:15%] bg-fixed bg-[17%_170px] bg-no-repeat py-20 text-white md:pb-[150px] md:pt-[100px] lg:bg-[url('/images/mobile-02.gif')]">
        <Image
          src="/images/flower.png"
          alt="flower"
          width={248}
          height={350}
          className="absolute right-0 top-3 hidden lg:block"
        />
        <div className="container mb-12 px-4">
          <div className="flex justify-end">
            <div className="lg:max-w-[66.66%]">
              <h2 className="mb-[30px] border-b border-b-white/40 pb-5 text-3xl font-bold uppercase md:text-[40px]">
                Progressive web Apps
              </h2>
              <div className="space-y-2.5 font-montserrat text-[15px] font-medium leading-6">
                <p>
                  Progressive web apps are essentially a mix of innovative
                  applications and web layouts. Our mobile app builders are
                  continually upgraded for SDKs and paradigms.
                </p>
                <p>
                  Many mobile development organizations are employing
                  out-of-the-box methods to achieve excellence in the field.
                  Companies from the US to Asia and beyond are busy developing —
                  and improving — mobile apps that are tailored to meet the
                  specific demands of the customers.
                </p>
                <p>
                  With the era turning into obtainable goals at rapid speeds,
                  there are many devices that people are the using and expect a
                  smooth user experience in all of them. We at Arpatech, have
                  seen human beings usually decide on custom mobile app
                  development service that has improved businesses in which they
                  are able to look for the identified problem and create
                  solutions for themselves.
                </p>
                <p>
                  The mobile app development offerings differ from company to
                  company and client to purchaser.
                </p>
                <p>
                  Selecting nice mobile app improvement groups are tough at
                  instances in which the talent pool is brilliant for everybody.
                  However, right here you need to recognize your requirement and
                  the corporation could assist you out with the first-rate
                  answers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-[#c60544] bg-none bg-[length:15%] bg-fixed bg-[17%_170px] bg-no-repeat py-20 pb-20 text-white md:pb-[150px] md:pt-[100px] lg:bg-[url('/images/mobile-03.gif')]">
        -
        <Image
          src="/images/handfree.png"
          alt="handfree"
          width={248}
          height={350}
          className="absolute -right-5 top-3 hidden lg:block"
        />
        <div className="container mb-12 px-4">
          <div className="flex justify-end">
            <div className="lg:max-w-[66.66%]">
              <h2 className="text-3xl font-bold uppercase leading-[38px] md:text-[40px]">
                We Make Sure Every Pixel Resonates Your Brand!
              </h2>
              <p className="mb-[30px] mt-3 border-b border-b-white/40 pb-5 text-[20px] font-medium uppercase">
                Redefining Apps Through Enhanced Functionality
              </p>
              <div className="space-y-2.5 font-montserrat text-[15px] font-medium leading-6">
                <p>
                  Our mobile app design and development strategy is focused on
                  the functional benefits of the app along with your overall
                  brand positioning in mind. We are the best mobile application
                  development company that focuses on innovative solutions to
                  your complex problems.
                </p>
                <p>
                  <strong>full assignment Transparency</strong> As a business
                  chief, you will be in full manage of the cell app improvement
                  system. With a device that adapts to ordinary patron comments,
                  our cellular app improvement technique could be in sync
                  together with your requirements
                </p>
                <p>
                  <strong>Satisfactory in elegance</strong> cellular Apps We
                  deliver excessive overall performance level apps because the
                  cellular app is detested at each degree of its improvement
                  system. Our characteristic-centric method assures the
                  incorporation of custom designed and applicable
                  business-critical elements in the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-offWhite">
        <div className="container px-4 py-20 md:py-[100px]">
          <h2 className="mb-2.5 mt-5 text-center text-2xl uppercase text-black md:text-[30px]">
            What is custom mobile App development?
          </h2>
          <p className="tetxt-Gray text-center text-[14px] font-normal leading-[1.75]">
            In easy terms, cell app development is the advent of cell
            applications on a software platform. preferably, the answers brought
            are authentic to the name, attractive the commercial enterprise in
            stop-to-end digital transformation and no longer just remodeled
            internet pages. Arpatech stands out from the crow in this aspect
            since it offers customized mobile app development.
          </p>
          <div className="mt-[30px] flex flex-wrap">
            <div className="flex-[0_0_100%] px-[15px] sm:flex-[0_0_50%]">
              <h3 className="mb-2.5 mt-5 text-xl font-bold uppercase max-md:text-center md:text-[24px]">
                Devices for mobile app development
              </h3>
              <p className="text-[15px] font-normal leading-[1.75]">
                The great cellular application development services make full
                use of the device hardware with the aid of integrating a digital
                camera, GPS, and microphone while utilizing different device
                established packages. mobile app improvement software program
                apps are created to provide answers to particular commercial
                enterprise demanding situations. demanding situations can also
                range relying at the tool’s, working system, functions and
                screen length.
              </p>
            </div>
            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] md:px-[15px]">
              <Image
                src="/images/custom-right.png"
                alt="custom-right"
                width={100}
                height={100}
                unoptimized
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
        <div className="container px-4 pb-6 md:pb-[50px]">
          <h2 className="mb-2.5 mt-5 text-xl uppercase md:text-[24px]">
            Situations for mobile app development
          </h2>
          <p className="tetxt-Gray mb-2.5 text-[15px] font-normal leading-[1.75]">
            Normally a consumer has high expectancies of ease-of-use, beautiful
            UI/UX pics, and development potential. If the user experience turns
            out the opposite or is made to wait longer, then he will simply
            leave for other sources. In conclusion, a mobile app needs to be
            checked and updated for poor performance. Arpatech understands that
            a commercial enterprise has little area to deliver anything less
            than perfect and that is precisely what our best mobile app
            development platform supplies.
          </p>
          <p className="tetxt-Gray text-[15px] font-normal leading-[1.75]">
            Our crew of skilled and professional php developers have worked on
            tasks for complete SDLC. We&apos;ve labored on initiatives right
            from idea to manufacturing and renovation thereafter. In a number of
            the alternative initiatives, we joined the assignment someplace in
            middle of development and have efficaciously been capable of helping
            clients enforce them. As a custom php improvement agency, we pay
            close interest to future preservation and it&apos;s significance of
            documenting the undertaking, as it&apos;s crucial for future growth
            of the mission. We&apos;ve worked on initiatives with a couple of
            group members spread across unique places and understand the manner
            orientated, code sub versioning using GIThub, SVN and distinct
            undertaking management tools.
          </p>
          <div className="mt-[30px] flex flex-wrap">
            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] md:px-[15px]">
              <h3 className="mb-2.5 mt-5 text-2xl font-bold uppercase text-black md:text-[30px]">
                What are Hybrid Apps?
              </h3>
              <p className="mb-2.5 text-[15px] font-normal leading-[1.75]">
                They are not much different in terms of construction but their
                USP lies in functionality. Hybrid apps are coded in programming
                languages like HTML, JavaScript or CSS. The hybrid mobile app is
                then ‘enveloped’ within some native container.
              </p>
              <p className="mb-2.5 text-[15px] font-normal leading-[1.75]">
                They are not much different in terms of construction but their
                USP lies in functionality. Hybrid apps are coded in programming
                languages like HTML, JavaScript or CSS. The hybrid mobile app is
                then ‘enveloped’ within some native container.
              </p>
              <p className="text-[15px] font-normal leading-[1.75]">
                Our Mobile Application Development Process begins with fluid
                customer journeys in mind. We know it’s not only about Mobile
                App Development that put checks on your requirements, but an
                experience that your user can cherish for a long time and that’s
                what we strive to achieve here at Arpatech.
              </p>
            </div>
            <div className="flex-[0_0_100%] px-[15px] sm:flex-[0_0_50%]">
              <Image
                src="/images/Hybrid-app.png"
                alt="custom-right"
                width={100}
                height={100}
                unoptimized
                className="mx-auto h-full w-auto"
              />
            </div>
            <div className="mt-[30px] flex-[0_0_100%] px-[15px] sm:flex-[0_0_50%]">
              <Image
                src="/images/native-app.png"
                alt="custom-right"
                width={100}
                height={100}
                unoptimized
                className="h-full w-auto max-w-[85%] object-contain"
              />
            </div>
            <div className="mt-[30px] flex-[0_0_100%] sm:flex-[0_0_50%] md:px-[15px]">
              <h3 className="mb-2.5 mt-5 text-2xl font-bold uppercase text-black md:text-[30px]">
                What are native Apps?
              </h3>
              <p className="mb-2.5 text-[15px] font-normal leading-[1.75]">
                Native applications are developed to fit a working model. Our
                mobile application development services create iOS and android
                apps for various geographic locations. Native apps are able to
                gather features of platform specific functionality. We take
                special care to maintain doorways and proper plans for user
                experience development.
              </p>
              <p className="text-[15px] font-normal leading-[1.75]">
                In case of programming languages, we develop iOS mobile app in
                objective C whereas the android app we make use of Javascript.
              </p>
            </div>
          </div>
          <div className="mt-[30px]">
            <h2 className="mb-2.5 mt-5 text-2xl uppercase text-black md:text-[30px] md:leading-[38px]">
              We develop delightful apps our every app is an everlasting
              experience
            </h2>
            <p className="mb-2.5 text-[15px] font-normal leading-[1.75] text-Gray">
              We take pride in being a mobile application development company
              which understands your business needs and then we cater to various
              development aspects ranging from web development to mobile app
              development in a way which keeps you facilitated and content at
              all times.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full max-w-[1140px] py-20 md:py-[100px]">
        <h2 className="text-center text-3xl uppercase text-Gray md:text-[40px]">
          Our Simple Mantra For Your Success
        </h2>
        <Image
          src="/images/Our-Process.png"
          alt="progress"
          width={100}
          height={100}
          unoptimized
          className="mx-auto mt-10 h-auto w-3/4"
        />
      </div>
    </>
  );
};

export default MobileAppPage;
