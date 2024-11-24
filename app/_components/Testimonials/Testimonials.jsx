"use client";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO at Company",
    image: "/images/about-us-banner.jpg",
    video: "https://www.youtube.com/embed/oai-Hxtigis",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    image: "/images/about-us-banner.jpg",
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
    <div className="bg-gray-100 py-10">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative rounded-lg bg-white p-4 shadow-lg"
            >
              <Image
                width={200}
                height={200}
                unoptimized
                src={testimonial.image}
                alt={testimonial.name}
                className="h-56 w-full rounded-lg object-cover"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
              <div
                onClick={() => openModal(testimonial.video)}
                className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <span className="text-4xl text-white">▶</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="w-11/12 max-w-2xl overflow-hidden rounded-lg bg-white">
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
                className="absolute right-2 top-2 rounded-full bg-red-500 p-2 text-white"
              >
                ✖
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
