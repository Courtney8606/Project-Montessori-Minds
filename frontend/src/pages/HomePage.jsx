import React from "react";
import Banner from "../components/Banner/Banner";
import bannerImage from "../assets/banner.jpg";
import "./HomePage.css";
import subImage from "../assets/awards5.webp";
import Awards1 from "../assets/awards1.webp";
import Awards2 from "../assets/awards2.webp";
import Awards3 from "../assets/awards3.webp";
import Awards4 from "../assets/awards4-4.jpg";
import Awards5 from "../assets/awards5.webp";
import Awards6 from "../assets/awards6.webp";
import Awards7 from "../assets/awards7.png";
import Awards8 from "../assets/awards8.webp";

const HomePage = () => {
  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        style={{ backgroundImage: `url(${bannerImage})` }}
        text1="Montessori Minds Nursery"
        text2="Nurture. Enjoy. Grow. Flourish."
        subImage={subImage}
      />
      <div className="intro">
        <p>
          At Montessori Minds children's nursery, we specialise in exceptionally
          high quality education for your little ones!
        </p>

        <p>
          Using renowned child development theories including Montessori, Reggio
          Emilia, Te Whariki, and Vygotsky, we provide beautiful, stimulating
          environments and educational approaches, which nurture, engage and
          stimulate.
        </p>

        <p>Registered: for children from 3 months - 5 years old</p>
        <p>
          Location: RM1 3QA, only a few minutes away from Romford Station and
          Queens Hospital
        </p>
        <p>Opening times: 7am - 7pm</p>
        <br />
        <hr />

        <h1>Our Vision, Mission & Values </h1>
        <p>
          Nurture. Enjoy. Grow. Flourish. <br /> To nurture and ignite
          children's love for learning; achieving their fullest potential
          through a Montessori integrated philosophy alongside the EYFS. <br />{" "}
          Please click through below for more detail.{" "}
        </p>
      </div>

      <div className="values-grid">
        <div className="values-wrapper">
          <a href="/values">
            <img className="values-image" src="/src/assets/nurture.jpg" />
          </a>
          <h3>
            <a href="/values">Nurture</a>
          </h3>
        </div>

        <div className="values-wrapper">
          <a href="/values">
            <img className="values-image" src="/src/assets/enjoy.jpg" />
          </a>
          <h3>
            <a href="/values">Enjoy</a>
          </h3>
        </div>

        <div className="values-wrapper">
          <a href="/values">
            <img className="values-image" src="/src/assets/grow.jpg" />
          </a>
          <h3>
            <a href="/values">Grow</a>
          </h3>
        </div>

        <div className="values-wrapper">
          <a href="/values">
            <img className="values-image" src="/src/assets/flourish.jpg" />
          </a>
          <h3>
            <a href="/values">Flourish</a>
          </h3>
        </div>
      </div>

      <hr />

      <h1 className="testimonial-heading"> Testimonials </h1>
      <div className="testimonials">
        <div className="testimonial-wrapper">
          <img className="testimonial-image" src="/src/assets/reviews4.jpg" />
          <h4>
            "A true gentle Montessori style setting with a team that is
            passionate about care. Everything is held at a high standard with
            the children's wellbeing squarely at the centre."
          </h4>
        </div>

        <div className="testimonial-wrapper">
          <img className="testimonial-image" src="/src/assets/reviews2.jpg" />
          <h4>
            "The place itself is set up beautifully with wonderful Montessori
            toys and materials.
            <br />
            They go that ‘extra mile’, from the wonderful home cooked food to
            the experiences and activities they arrange."
          </h4>
        </div>

        <div className="testimonial-wrapper">
          <img className="testimonial-image" src="/src/assets/reviews3.jpg" />
          <h4>
            "I was very nervous to start my child in the nursery but they
            understood my anxiety and they did everything to put my mind at
            ease."
          </h4>
        </div>
      </div>

      <div className="awards-row">
        <div className="awards-item">
          <img src="/src/assets/awards1-1.jpg" />
        </div>
        <div className="awards-item">
          <img src="/src/assets/awards2-2.jpg" />
        </div>
        <div className="awards-item">
          <img src="/src/assets/awards3-3.jpg" />
        </div>
        <div className="awards-item">
          <img src="/src/assets/awards4-4.jpg" />
        </div>
        <div className="awards-item">
          <img src="/src/assets/awards5.jpeg" />
        </div>
        <div className="awards-item">
          <img src="/src/assets/awards6.jpeg" />
        </div>
        <div className="awards-item">
          <img src="/src/assets/awards7.jpeg" />
        </div>
        <div className="awards-item">
          <img src="/src/assets/awards8.jpeg" />
        </div>
      </div>

      <div className="carousel-container awards-carousel">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner carousel-inner-alignment">
            <div className="carousel-item active">
              <img
                src={Awards1}
                className="d-block w-100 carousel-image-awards"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Awards2}
                className="d-block w-100 carousel-image-awards"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Awards3}
                className="d-block w-100 carousel-image-awards"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Awards4}
                className="d-block w-100 carousel-image-awards"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Awards5}
                className="d-block w-100 carousel-image-awards"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Awards6}
                className="d-block w-100 carousel-image-awards"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Awards7}
                className="d-block w-100 carousel-image-awards"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Awards8}
                className="d-block w-100 carousel-image-awards"
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
  );
};

export default HomePage;
