"use client";
import Image from "next/image";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO at Company",
    thumbnail: "/images/portrait-young.avif",
    video: "https://www.youtube.com/embed/oai-Hxtigis",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    thumbnail: "/images/portrait-young.avif",
    video: "https://www.youtube.com/embed/oai-Hxtigis",
  },
  {
    id: 3,
    name: "Jane Smith",
    position: "Product Manager",
    thumbnail: "/images/portrait-young.avif",
    video: "https://www.youtube.com/embed/oai-Hxtigis",
  },
];

const Testimonials = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const openModal = (videoUrl) => {
    setActiveVideo(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setActiveVideo("");
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-offWhite py-[50px] pb-20">
        <div className="container px-4 md:px-8">
          <h1 className="mb-2.5 text-center text-3xl font-semibold uppercase md:mt-5 md:text-4xl lg:text-[45px]">
            Client Testimonials
          </h1>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(({ id, name, position, thumbnail, videoUrl }) => (
              <div
                key={id}
                onClick={() => openModal(videoUrl)}
                className="group relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <Image
                  width={100}
                  height={56}
                  unoptimized
                  src={thumbnail}
                  alt={`${name}'s Testimonial`}
                  className="h-56 w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-4xl font-bold text-white">▶</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {name}
                  </h3>
                  <p className="text-gray-500">{position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white">
            <div className="relative">
              <iframe
                width="100%"
                height="400"
                src={activeVideo}
                title="Client Testimonial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={closeModal}
                className="absolute right-2 top-2 flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-xl text-vividaqua shadow-2xl duration-300 ease-in-out hover:bg-vividaqua hover:text-white"
              >
                <RxCross2 />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;
