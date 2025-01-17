import Head from "next/head";
import Image from "next/image";
import React from "react";

const Clients = () => {
  const clients = [
    "/images/about/1.jpg",
    "/images/about/2.jpg",
    "/images/about/3.jpg",
    "/images/about/4.jpg",
    "/images/about/5.jpg",
    "/images/about/6.jpg",
    "/images/about/7.jpg",
    "/images/about/8.jpg",
    "/images/about/9.jpg",
  ];

  const duplicatedClients = [...clients, ...clients];
  return (
    <>
      <Head>
        <meta name="description" content="Explore our list of clients who trust us for their development services, showcasing some of the key names that have chosen us for their complex ecosystems." />
        <meta name="keywords" content="clients, business partners, development services, web development, trust" />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Our Trusted Clients" />
        <meta property="og:description" content="These are some of the names of clients who trust our development services for their complex ecosystems." />
        <meta property="og:image" content="/images/about/1.jpg" />
        <meta property="og:url" content="yourwebsite.com/clients" />
        <meta name="twitter:title" content="Our Trusted Clients" />
        <meta name="twitter:description" content="These are some of the names of clients who trust our development services for their complex ecosystems." />
        <meta name="twitter:image" content="/images/about/1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="container px-4">
        <h4 className="font-montserrat mb-[30px] mt-2.5 text-center text-3xl font-bold uppercase leading-5 text-Gray md:text-[40px]">
          Clients
        </h4>
        <p className="font-montserrat mx-auto mb-[30px] text-center text-base font-normal text-Gray md:w-[44%]">
          These are some names of clienteles that trust us and chose our
          development services for their complex ecosystems.
        </p>
      </div>
      <div className="mb-10 overflow-hidden">
        <ul className="my-2.5 flex animate-slideLeft items-center gap-10">
          {duplicatedClients.map((src, index) => (
            <li key={index} className="mr-8 flex-shrink-0">
              <Image
                width={100}
                height={40}
                unoptimized
                src={src}
                alt={`Client ${(index % clients.length) + 1}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Clients;
