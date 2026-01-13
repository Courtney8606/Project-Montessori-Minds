import { useEffect, useState } from "react";
import bannerImage from "/assets/bannerhomepage2.webp";
import bannerVideo from "/assets/Homepage-Banner.mp4";
import "./VideoBanner.css";

const VideoBanner = ({ text1, subImage }) => {
  const [isVideoVisible, setIsVideoVisible] = useState(
    window.innerWidth >= 900
  );

  useEffect(() => {
    const handleResize = () => {
      setIsVideoVisible(window.innerWidth >= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="video-banner-container">
      {isVideoVisible ? (
        <video className="banner-video" autoPlay loop muted>
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={bannerImage} alt="Banner" className="video-banner-image" />
      )}

      <div className="video-header-text">
        <h1>{text1}</h1>
      </div>
      {/* <img src={subImage} alt="SubImage" className="video-sub-image" /> */}
    </div>
  );
};

export default VideoBanner;
