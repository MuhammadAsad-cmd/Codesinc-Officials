"use client";
import React, { useState } from "react";
import { testimonials } from "@/app/Data/Testimonials";
import Image from "next/image";

const Testimonials = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentVideo(null);
  };

  // Function to extract the video ID from a YouTube URL
  const getYouTubeThumbnail = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // HQ thumbnail
  };

  return (
    <div className="mt-6 pb-20">
      <div className="container px-4 md:px-8">
        <h1 className="mb-2.5 text-center text-3xl font-bold uppercase md:mt-5 md:text-[40px]">
          Client Testimonials
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ id, video }) => (
            <div
              key={id}
              onClick={() => openModal(video)}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
            >
              <div className="relative max-h-[320px]">
                {/* Generate Thumbnail Dynamically */}
                <Image
                  width={250}
                  height={250}
                  unoptimized
                  src={getYouTubeThumbnail(video)}
                  alt={`Testimonial ${id}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-skyBlue/60 text-xl text-white">
                    ▶
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal} // Close modal on clicking outside
        >
          <div
            className="relative w-[800px] max-w-full rounded-lg bg-black"
            onClick={(e) => e.stopPropagation()} // Prevent close on clicking inside
          >
            <button
              onClick={closeModal}
              className="absolute -right-3 -top-3 z-10 flex size-8 items-center justify-center rounded-full bg-white text-black"
            >
              ✕
            </button>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <iframe
                src={`${currentVideo}?autoplay=1`}
                title="Client Testimonial"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
