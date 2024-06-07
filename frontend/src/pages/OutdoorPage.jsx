import React from "react";
import outdoorImage1 from "../assets/outdoor1.webp";
import outdoorImage2 from "../assets/outdoor2.webp";
import outdoorImage3 from "../assets/outdoor3.webp";
import outdoorImage4 from "../assets/outdoor4.webp";
import outdoorImage5 from "../assets/outdoor5.webp";
import outdoorImage6 from "../assets/outdoor6.webp";
import outdoorImage7 from "../assets/outdoor7.webp";
import outdoorBanner from "../assets/outdoorbanner.jpg";
import "./OutdoorPage.css";
import Banner from "../components/Banner/Banner";

const OutdoorPage = () => {
  return (
    <div>
      <Banner
        bannerImage={outdoorBanner}
        text1="Outdoor Areas & Atelier"
        text2="and local adventures"
      />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="garden">
              <p>
                Our Garden is a wonderful area where children can freely explore
                and experience the outdoors. We provide the children with a
                variety of outdoor activities including sand play, water play
                and free access to bikes. The children have access to the garden
                all year round unless there are serious weather conditions.
                Children will also have the opportunity to visit our local park
                and different places in their community such as our local
                elderly home.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="carousel-container">
              <div id="carouselExample" class="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={outdoorImage1}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={outdoorImage2}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={outdoorImage3}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={outdoorImage4}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={outdoorImage5}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={outdoorImage6}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={outdoorImage7}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutdoorPage;
