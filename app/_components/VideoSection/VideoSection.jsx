import React from "react";

const VideoSection = ({
  src,
  subtitles,
  heightClass = "h-[650px]",
  width = 320,
  height = 755,
}) => {
  return (
    <>
      <div className="relative w-full">
        <video
          width={width}
          height={height}
          className={`${heightClass} w-full object-cover`}
          autoPlay
          loop
          muted
        >
          <source src={src} type="video/mp4" />
          {subtitles && (
            <track
              src={subtitles.src}
              kind={subtitles.kind || "subtitles"}
              srcLang={subtitles.srcLang || "en"}
              label={subtitles.label || "English"}
            />
          )}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    </>
  );
};

export default VideoSection;
