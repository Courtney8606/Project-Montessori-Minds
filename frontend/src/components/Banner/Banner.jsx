import React from "react";
import "./Banner.css";

const Banner = ({ bannerImage, text1, text2, image = null }) => {
  return (
    <div className="banner">
      <img
        className="BannerImage"
        role="bannerImg"
        alt="banner"
        src={bannerImage}
      />
      <img className="image" src={image} />
      <div>
        <h2 className="header-text">{text1}</h2>
        <h4 className="header-textsub">{text2}</h4>
      </div>
    </div>
  );
};

export default Banner;