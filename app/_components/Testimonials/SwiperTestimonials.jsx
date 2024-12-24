"use client";
import { testimonials } from "@/app/Data/Testimonials";
import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const SwiperTestimonials = () => {
  const videoRefs = useRef([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const handlePlayClick = (id) => {
    if (playingVideoId === id) {
      // Pause the video if it's already playing
      videoRefs.current[id]?.pause();
      setPlayingVideoId(null);
    } else {
      // Stop any currently playing video
      if (playingVideoId !== null) {
        videoRefs.current[playingVideoId]?.pause();
      }
      // Play the clicked video
      videoRefs.current[id]?.play();
      setPlayingVideoId(id);
    }
  };

  const handleVideoEnd = () => {
    // Reset playing video when the current video ends
    setPlayingVideoId(null);
  };

  return (
    <div className="pb-20">
      <div className="container px-4 md:px-8">
        <h1 className="mb-2.5 text-center text-3xl font-semibold uppercase md:mt-5 md:text-4xl">
          Client Testimonials
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map(({ id, video }) => (
            <div
              key={id}
              className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
            >
              <div className="relative h-[360px]">
                <video
                  ref={(el) => (videoRefs.current[id] = el)}
                  src={video}
                  onEnded={handleVideoEnd}
                  className="h-full w-full rounded-lg object-cover"
                ></video>

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => handlePlayClick(id)}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-skyBlue/60 text-xl text-white"
                  >
                    {playingVideoId === id ? <FaPause /> : <FaPlay />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwiperTestimonials;
