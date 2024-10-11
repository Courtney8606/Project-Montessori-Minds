import React from "react";
import "./Banner.css";

const Banner = ({ bannerImage, text1, subImage = null }) => {
  return (
    <div className="banner-container">
      <img
        className="BannerImage"
        role="bannerImg"
        alt="banner"
        src={bannerImage}
      />
      <div>
        <h2 className="header-text">{text1}</h2>
        {/* <h4 className="header-textsub">{text2}</h4> */}
      </div>
      {subImage && <img className="sub-image" src={subImage} alt="Sub Image" />}
    </div>
  );
};

export default Banner;
