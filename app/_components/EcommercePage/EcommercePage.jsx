"use client";
import React, { useState } from "react";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import Image from "next/image";
import { countries } from "@/app/Data/Countries";

const EcommercePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    country: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Handle form submission
  };
  return (
    <>
      <div className="relative w-full">
        <Image
          width={320}
          height={755}
          unoptimized
          src="/images/cms/ecom-bg.jpg"
          alt="Software Development"
          className="h-full w-full object-cover"
        />

        {/* Overlay with Opacity */}
        <div className="absolute top-[100px] w-full py-[130px] pb-[30px]">
          <div className="container">
            <div className="flex">
              <div className="mt-[50px] w-[58.33%] px-4 pb-[200px] pt-[70px]">
                <h1 className="mb-2.5 mt-5 font-montserrat text-4xl font-extrabold uppercase leading-10 text-white">
                  Ecommerce web development
                </h1>
                <p className="mt-[25px] font-montserrat text-base font-medium leading-7 text-white">
                  Our tech teams give you a complete set of solutions packed in
                  the form of your ecommerce website. From product
                  personalization to continued purchases, our shopping systems
                  will back you up by running efficiently.{" "}
                </p>
                <div className="mt-[30px]">
                  <a
                    href="#second-sec"
                    className="font-montserrat text-xl font-extrabold leading-7 text-[#9f76a8] hover:underline"
                  >
                    view detail &gt;
                  </a>
                </div>
              </div>
              <div className="w-[41.6%] px-4">
                <div className="ContactBg w-full p-[25px]">
                  <p className="text-center font-montserrat text-[22px] font-semibold uppercase leading-6 text-white">
                    Get Free Quote Now
                  </p>
                  <p className="mx-auto mt-[5px] w-full pb-[13px] text-center font-montserrat text-[15px] font-normal capitalize leading-5 tracking-[1px] text-white">
                    Tell us about your Project
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name*"
                        value={formData.name}
                        onChange={handleChange}
                        className="ContactBg h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal text-white outline-none placeholder:text-white"
                        required
                      />
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-5">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleChange}
                        className="ContactBg h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal text-white outline-none placeholder:text-white"
                        required
                      />

                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="ContactBg h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal text-white outline-none placeholder:text-white"
                        required
                      >
                        <option value="" disabled>
                          Select Project Type
                        </option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>
                      </select>
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-5">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="ContactBg h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal text-white outline-none placeholder:text-white"
                        required
                      >
                        <option value="" disabled>
                          Select Country
                        </option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone *"
                        value={formData.phone}
                        onChange={handleChange}
                        className="ContactBg h-[42px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal text-white outline-none placeholder:text-white"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        name="message"
                        placeholder="Your Message *"
                        value={formData.message}
                        onChange={handleChange}
                        className="ContactBg h-[120px] w-full border-b border-white pt-5 font-montserrat text-[15px] font-normal text-white outline-none placeholder:text-white"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="mt-[30px] flex h-[41px] w-full items-center justify-center bg-[#591661] px-[30px] py-1.5 font-montserrat text-lg font-semibold uppercase text-white duration-300 ease-in-out hover:bg-white hover:text-lightblue"
                    >
                      Request a Quote
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs title="Ecommerce Development" breadcrumbPath="/web-design" />
      <div className="w-full bg-[url('/images/meetup-bar.png')] bg-cover bg-[34%] py-2.5">
        <div className="container flex items-center px-4">
          <div className="flex w-[49%] items-center justify-around">
            <div className="w-1/2">
              <h2 className="text-center text-[21px] font-medium uppercase leading-[29px] text-[#333333]">
                Magento Certified partner
              </h2>
            </div>
            <div className="flex w-1/2 items-center justify-center">
              <div className="h-[93px] w-[54px]">
                <Image
                  width={54}
                  height={93}
                  unoptimized
                  src="/images/awward-2.png"
                  alt="awward-2"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex w-[51%] items-center justify-around">
            <div className="flex w-1/2 items-center justify-center">
              <div className="">
                <Image
                  width={181}
                  height={75}
                  unoptimized
                  src="/images/dubai-meetup.png"
                  alt="awward-2"
                />
              </div>
            </div>
            <div className="flex w-1/2 items-center justify-center">
              <h2 className="text-center text-[27px] font-medium uppercase leading-[29px] text-white">
                Official Organizer
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-20 flex">
        <div className="w-[58.33%] px-4">
          <div className="mt-6">
            <Image
              width={580}
              height={336}
              unoptimized
              src="/images/team/ecom1.gif"
              alt="Cloud"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="w-[41.66%] px-4">
          <h2 className="mb-5 mt-10 text-left text-[30px] font-semibold text-Gray">
            OPTIMIZED ECOMMERCE ENGINES?
          </h2>
          <p className="text-left font-montserrat text-[15px] font-normal leading-7 text-Gray">
            Codesinc employs advanced systems to develop Online Systems. Being a
            hub for technology &amp; research, we believe in exploring different
            verticals while working on a particular industry. For example, if we
            talk about the Ecommerce Sector, then we not only work on custom
            made systems but a wholistic and professional ecommerce web
            development company.
          </p>
          <div className="flex items-center justify-center">
            <button className="mt-10 flex h-[45px] items-center justify-center bg-[#591661] px-[60px] py-2.5 capitalize text-white">
              get started
            </button>
          </div>
        </div>
      </div>
      <div className="BgTechHub py-[30px] text-center text-white">
        <div className="container px-4">
          <div className="technology-stack-main">
            <h3 className="mb-2.5 mt-5 font-montserrat text-[30px] font-bold uppercase leading-[33px]">
              Tech <span className="font-medium"> Hub </span>
            </h3>
            <p className="font-montserrat text-[15px] font-normal leading-[26px]">
              Being a hub for technology &amp; research, we believe in exploring
              different verticals while working on a particular industry. For
              example, if we talk about the Ecommerce Sector, then we not only
              work on custom made systems, but have also mastered development on
              the following platforms:
            </p>
            <div className="my-[30px] grid grid-cols-3 gap-8">
              <div className="icon-container mt-[15px] flex w-full items-center justify-center">
                <Image
                  width={165}
                  height={50}
                  unoptimized
                  src="/images/cms/drupal.png"
                  alt="Drupal"
                />
              </div>
              <div className="icon-container mt-[15px] flex items-center justify-center">
                <Image
                  width={165}
                  height={50}
                  unoptimized
                  src="/images/cms/shopify.png"
                  alt="Drupal"
                />
              </div>
              <div className="icon-container mt-[15px] flex items-center justify-center">
                <Image
                  width={165}
                  height={50}
                  unoptimized
                  src="/images/cms/magento.png"
                  alt="Drupal"
                />
              </div>
              <div className="icon-container mt-[15px] flex items-center justify-center">
                <Image
                  width={165}
                  height={50}
                  unoptimized
                  src="/images/cms/opencart.png"
                  alt="Drupal"
                />
              </div>

              <div className="icon-container mt-[15px] flex items-center justify-center">
                <Image
                  width={165}
                  height={50}
                  unoptimized
                  src="/images/cms/woo.png"
                  alt="Drupal"
                />
              </div>
              <div className="icon-container mt-[15px] flex items-center justify-center">
                <Image
                  width={165}
                  height={50}
                  unoptimized
                  src="/images/cms/prestashop.png"
                  alt="Drupal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e3e3e3] pb-[70px]">
        <div className="container flex pt-20">
          <div className="w-[58.33%] px-4">
            <div className="">
              <Image
                width={580}
                height={336}
                unoptimized
                src="/images/cms/shopping.gif"
                alt="Cloud"
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="w-[41.66%] px-4">
            <h2 className="mb-5 mt-10 text-left text-[30px] font-semibold text-Gray">
              Where Codesinc Comes In
            </h2>
            <p className="text-left font-montserrat text-[15px] font-normal leading-7 text-Gray">
              To take advantage from the real powers of the blooming internet
              and ecommerce, Codesinc lends an assisting hand. The IT
              improvement firm facilitates your enterprise by presenting and
              assisting in e-commerce development and different related
              services. eCommerce solutions which include the cutting-edge
              purchasing cart options, inventory and order control options, and
              e-commerce web solutions are duly customized according to
              clients&apos; necessities. Codesinc approaches are a classNameic
              example of the way custom ecommerce website development has
              contributed handsomely to the improvement of ecommerce.
            </p>
            <div className="flex items-center justify-center">
              <button className="mt-10 flex h-[45px] items-center justify-center bg-[#591661] px-[60px] py-2.5 capitalize text-white">
                get started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-[50px]">
        <div>
          <h2 className="mb-5 mt-10 text-center text-[30px] font-bold text-Gray">
            BENEFITS OF WORKING WITH US
          </h2>
          <p className="mt-4 text-center text-[15px] font-normal leading-[21px] text-Gray">
            One of the first-rate players in ecommerce development throughout
            Pakistan Trained to handle the dynamics of responsive in addition to
            open source technologies Complete adherence to best practices and
            delivery in accordance to timeline commitments A whole answer on the
            way to combine the inventory and the backend with the frontend
            creates for a more suitable performance in business activities and
            user experience.
          </p>
          <div className="mt-[30px] grid grid-cols-3">
            <div className="border-b border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/e1.jpg"
                  alt="Responsive E-Commerce Site"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                RESPONSIVE WEBSITE SOLUTIONS
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                Screen Adjustment is always a concern for shop owners, for
                whether their sites properly fit on all large or small screens
                or not. Rest assured that we&apos;ll tweak your websites to be
                perfectly responsive to easily adjust in all screen sizes.
              </p>
            </div>
            <div className="border-b border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/e2.jpg"
                  alt="Best User Experience"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                User Experience
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                Because of our vast experience and the researched conducted over
                the topic of user experience, we&apos;ve learned that web design
                is important but the experience that users have while
                they&apos;re on your website holds far greater importance.
              </p>
            </div>
            <div className="border-b border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/e3.jpg"
                  alt="Data Acquisitions &amp; Migration"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                Data Procurement &amp; Migration
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                Losing data can be painful for any website owner, as it takes
                years to build product &amp; user databases. We understand this
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
                  src="/images/cms/e4.jpg"
                  alt="Plugin Development"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                Plugin Development
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                A website requires multiple plugins to perform various tasks,
                display items or store transaction details. These plugins are
                not always free, and on top of that you only get limited
                support. To end this torment, we help our clients build custom
                plugins to perform several things on a website with a SMART
                approach.
              </p>
            </div>
            <div className="border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/e5.jpg"
                  alt="App Development"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                App Development
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                We are a reliable ecommerce website development company,
                offering mobile-friendly apps to support your various ecommerce
                ventures. Our experienced ecommerce developers design and
                develop ideal apps to bring higher return on investment for your
                ecommerce businesses.
              </p>
            </div>
            <div className="border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/e6.jpg"
                  alt="E-Commerce Maintenance"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                Maintenance &amp; Support
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                Our support teams are always on the loop with the clients. When
                we deploy our best players to build this team and meet client
                expectations, the results are often rewarding for clients.
                Ecommerce is an ever-evolving industry, and so, we make sure
                that your apps perform according to industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] py-[50px]">
        <div className="container mt-[50px] px-4">
          <h2 className="mb-5 mt-10 text-left text-[30px] font-semibold uppercase text-black">
            eCommerce web cart
          </h2>
          <p className="text-left font-montserrat text-sm font-medium leading-6 text-Gray">
            The sector of digital landscape is converting with each passing day,
            and it is essential for the companies to search for avenues with the
            intention to increase the web search of the consumers. eCommerce
            website & purchasing Cart features that We Serve
          </p>
          <ul className="mt-4 list-inside list-disc space-y-[15px] font-montserrat text-sm font-medium leading-[21px] text-Gray">
            <li>Search Engine friendly URL structure</li>
            <li>Option to customize name, Meta and descriptions For SEO</li>
            <li>Expert and personalized design layout</li>
            <li>SSL &amp; HTTPS well suited</li>
            <li>Price Gateway Integration of customers’ choice</li>
            <li>Easy options to feature categories, and product </li>
          </ul>
        </div>
      </div>
      <div className="container px-4 py-[50px]">
        <div>
          <h2 className="mb-5 mt-10 text-center text-[30px] font-bold uppercase text-Gray">
            eCommerce website development company in USA
          </h2>
          <p className="mt-4 text-center text-[15px] font-normal leading-[21px] text-Gray">
            Codesinc is a disciplined service issuer for years within the
            e-trade section. Our team possesses diverse enjoy in coping with
            distinct industries and their eCommerce web sites. It’s by miles one
            of the most dependable ecommerce website development agency to offer
            website revamp and development from scratch for its clients. The
            ecommerce layout and improvement will appear exceptionally
            beneficial in your enterprise. The custom ecommerce website
            development is a need to for every commercial enterprise now. You
            can&apos;t deny the requirement of internet ecommerce development in
            the current digital age. The professional ecommerce web development
            company will generate the shopping website as in line with the needs
            of the clients. if you have an eCommerce internet site, online shop,
            or utility development service, we can build it in short deadlines
            and within your defined quidelines. Codesinc is a surprisingly
            reliable ecommerce development company across Pakistan. Get an
            ecommerce purchasing cart improvement performed by us and witness
            the big on-line sales in a jiffy.
          </p>
          <p className="mb-2 mt-[15px] text-center text-[15px] font-normal leading-[21px] text-Gray">
            The vital elements for an E-trade website are:{" "}
          </p>
          <div className="mt-[30px] grid grid-cols-3">
            <div className="border-b border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/purchase-onine.png"
                  alt="Responsive E-Commerce Site"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold uppercase leading-4">
                Product Purchase Online
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                Should setup a web product shop that lists all the available
                products on the showcase. All the products should be available
                in the display must surely be easily accessible to the customers
                and should necessarily provide proper and visible product
                description to go with clear pictures of the products. Another
                added advantage is to have credible reviews from your customers
                to go along with the product.
              </p>
            </div>
            <div className="border-b border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/cart-pur.png"
                  alt="Best User Experience"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold uppercase leading-4">
                Purchasing Cart
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                Product selection is convenient and allows all customers to add
                goods to cart while they make the purchase decision. The
                prospective buyers can make decisions on the basis of previous
                reviews, price comparisons before they shortlist a product for
                their cart. The next step is to enter specifications for the
                product and save the relevant address. All these steps are
                time-saving.
              </p>
            </div>
            <div className="border-b border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/payment-gatway.png"
                  alt="Data Acquisitions &amp; Migration"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold uppercase leading-4">
                Payment Gateway Integration
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                Flexible payment options are vital to an E-trade internet site.
                You may pay for the goods with the use of Debit Card, credit
                Card, PayPal, etc. The payment gateway integration presents
                trusted solution across all ecommerce website development USA
                for the clients to carry out the transaction. We make sure to
                accept multiple payment methods specifically made to convert
                more shoppers to buyers by decreasing checkout hassle.
              </p>
            </div>
            <div className="border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/minimalism-layout.png"
                  alt="Plugin Development"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                Minimalism in layout
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                As the use of mobile devices gained momentum, the idea of
                responsive web designs came under spotlight. A minimalist layout
                creates a shop display that is both user friendly and minimizes
                the steps to checkout. The complicated designs full of heavy
                images and flash are actually replaced with the aid of easy
                crystal clean designs. Multiple payment options and ease of
                operations further simplifies the process for mobile devices.
              </p>
            </div>
            <div className="border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/loading-time.png"
                  alt="loading-time"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                Loading Time conundrum
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                Normally visitors to a site get impatient with slow loading time
                and the average waiting time before a customer leaves the site
                has reduced to a few seconds. Obviously, this is a bigger
                challenge for ecommerce platforms because they have to keep a
                balance. If they expand the product list, the loading time is
                bound to increase with it. That’s where Codesinc&apos;s best
                ecommerce web development services come into play.
              </p>
            </div>
            <div className="border-r border-[#f3f3f3] px-5 py-5 text-center">
              <div className="flex items-center justify-center">
                <Image
                  width={56}
                  height={56}
                  unoptimized
                  src="/images/cms/leveraging-social.png"
                  alt="E-Commerce Maintenance"
                />
              </div>
              <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold leading-4">
                Leveraging Social Media
              </h4>
              <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                How to garner the strength of social media for ecommerce?
                Marketers at Codesinc can help you there. It is an aspect that
                proves fruitful when customers share their reviews or through
                word of mouth, which in turn enables a quicker multiplication of
                customers in comparison to other marketing strategies. Most
                E-commerce sites are incorporating social media platforms like
                facebook, Twitter, Google+, and so forth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommercePage;
