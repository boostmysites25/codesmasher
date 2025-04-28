import React, { useEffect, useState } from "react";
import bannervideo from "../../assets/video/bannervideo.mp4";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const Banner = ({ bannerTitle, bannerDesc }) => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  const headingText = bannerTitle || "Your Trusted Development Partner";
  const paragraphText =
    bannerDesc || "Next-Gen Intelligence, Born from the Stars";

  const [displayHeading, setDisplayHeading] = useState("");
  const [displayParagraph, setDisplayParagraph] = useState("");
  const [headingComplete, setHeadingComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorPosition, setCursorPosition] = useState("heading");

  useEffect(() => {
    if (displayHeading.length < headingText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayHeading(headingText.substring(0, displayHeading.length + 1));
      }, 150);

      return () => clearTimeout(typingTimer);
    } else if (!headingComplete) {
      const pauseTimer = setTimeout(() => {
        setHeadingComplete(true);
        setCursorPosition("paragraph");
      }, 500);

      return () => clearTimeout(pauseTimer);
    }

    if (headingComplete && displayParagraph.length < paragraphText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayParagraph(
          paragraphText.substring(0, displayParagraph.length + 1)
        );
      }, 100);

      return () => clearTimeout(typingTimer);
    }

    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, [displayHeading, displayParagraph, headingComplete]);

  return (
    <div className="relative w-full bg-[#060b19] sm:min-h-screen overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full bg-black/40 sm:hidden flex" />
      <ReactPlayer
        url={bannervideo}
        loop={true}
        playsinline
        playing={true}
        // width="100%"
        // height="100vh"
        muted
        className="object-cover videoplayer"
        config={{
          file: {
            attributes: {
              style: {
                // objectFit: "cover",
                // width: "100vw",
                // height: "100vh",
              },
            },
          },
        }}
      />
      <div className="absolute flex justify-center items-center left-0 top-0 w-full h-full pt-[7rem]">
        <div className="">
          <h1 className="max-w-6xl mx-auto hero-title sm:text-6xl text-2xl font-bold text-center text-white mb-6">
            {displayHeading}
            {cursorPosition === "heading" && (
              <span
                className={`ml-1 ${
                  cursorVisible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-100`}
              >
                |
              </span>
            )}
          </h1>

          <div className="flex flex-col gap-8 pb-5">
            <p className="font-bold mx-auto max-w-[19rem] sm:max-w-full text-sm sm:text-xl text-white sm:text-start text-center">
              {displayParagraph}
              {cursorPosition === "paragraph" && (
                <span
                  className={`ml-1 ${
                    cursorVisible ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-100`}
                >
                  |
                </span>
              )}
            </p>
            <div className="flex justify-center gap-5">
              <button
                data-aos="fade-right"
                onClick={() => navigateTo("/about-us")}
                className="primary-btn"
              >
                Get Start{" "}
              </button>
              <button
                data-aos="fade-left"
                onClick={() => navigateTo("/contact-us")}
                className="secondary-btn-white"
              >
                Contact Us{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
