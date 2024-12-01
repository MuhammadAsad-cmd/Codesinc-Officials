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
      <div className="container px-4">
        <h4 className="mb-[30px] mt-2.5 text-center font-montserrat text-3xl font-bold uppercase leading-5 text-Gray md:text-[40px]">
          Clients
        </h4>
        <p className="mx-auto mb-[30px] text-center font-montserrat text-sm font-normal leading-6 text-Gray md:w-[44%]">
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
