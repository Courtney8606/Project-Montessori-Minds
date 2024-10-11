import React from "react";
import VideoBanner from "../components/Banner/VideoBanner";
import bannerVideo from "/assets/Homepage-Banner.mp4";
import "./HomePage.css";
import subImage from "/assets/awards-ofsted.webp";
import Awards1 from "/assets/awards-nmt-nursery.webp";
import Awards2 from "/assets/awards-nurseryworld.webp";
import Awards3 from "/assets/awards-healthyyears.webp";
import Awards4 from "/assets/awards-NDNA.webp";
import Awards5 from "/assets/awards-ofsted.webp";
import Awards6 from "/assets/awards-daynurseries2024.webp";
import Awards7 from "/assets/awards-apprenticeship-connect.webp";
import Awards8 from "/assets/awards-milliesmark.webp";
import Testimonial1 from "/assets/testimonial1.webp";
import Testimonial2 from "/assets/testimonial2.webp";
import Testimonial3 from "/assets/testimonial3.webp";
import valueNurture from "/assets/values-nurture.webp";
import valueEnjoy from "/assets/values-enjoy.webp";
import valueGrow from "/assets/values-grow.webp";
import valueFlourish from "/assets/values-flourish.webp";

const HomePage = () => {
  return (
    <div>
      <VideoBanner
        videoSource={bannerVideo}
        text1="Montessori Minds Nursery School"
        subImage={subImage}
      />
      <div className="intro">
        <p>
          At Montessori Minds nursery school, we specialise in exceptionally
          high quality education for your little ones!
        </p>

        <p>
          Using renowned child development theories including Montessori, Reggio
          Emilia, Te Whariki, and Vygotsky, we provide beautiful, stimulating
          environments and educational approaches, which nurture, engage and
          stimulate.
        </p>
        <p></p>

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
          children&apos;s love for learning; achieving their fullest potential
          through a Montessori integrated philosophy alongside the EYFS. <br />{" "}
          Please click through below for more detail.{" "}
        </p>
      </div>

      <div className="values-grid">
        <div className="values-wrapper">
          <a href="/values">
            <img className="values-image" src={valueNurture} />
          </a>
          <h3>
            <a href="/values">Nurture</a>
          </h3>
        </div>

        <div className="values-wrapper">
          <a href="/values">
            <img className="values-image" src={valueEnjoy} />
          </a>
          <h3>
            <a id="enjoy" href="/values">
              Enjoy
            </a>
          </h3>
        </div>

        <div className="values-wrapper">
          <a href="/values">
            <img className="values-image" src={valueGrow} />
          </a>
          <h3>
            <a href="/values">Grow</a>
          </h3>
        </div>

        <div className="values-wrapper">
          <a href="/values">
            <img className="values-image" src={valueFlourish} />
          </a>
          <h3>
            <a href="/values">Flourish</a>
          </h3>
        </div>
      </div>

      <hr className="line" />

      <h1 className="testimonial-heading"> Testimonials </h1>
      <div className="testimonials">
        <div className="testimonial-wrapper">
          <img
            className="testimonial-image"
            id="testimonial-1"
            src={Testimonial1}
          />
          <h4>
            &quot;A true gentle Montessori style setting with a team that is
            passionate about care. Everything is held at a high standard with
            the children&apos;s wellbeing squarely at the centre. The opening
            times are very convenient (7am - 7pm) so the days when I need to get
            to work earlier or am running late aren&apos;t too much of a
            problem.&quot;
          </h4>
        </div>

        <div className="testimonial-wrapper">
          <img className="testimonial-image" src={Testimonial2} />
          <h4>
            &quot;The staff are so attentive and genuinely very caring and cater
            for your child&apos;s individual needs. It&apos;s home from home for
            our little girl. They go that extra mile, from the wonderful home
            cooked food to the experiences and activities they arrange. I could
            not recommend them more!&quot;
          </h4>
        </div>

        <div className="testimonial-wrapper">
          <img className="testimonial-image" src={Testimonial3} />
          <h4>
            &quot;I was very nervous to start my child in the nursery but they
            understood my anxiety and they did everything to put my mind at
            ease. My child has allergies but they immediately eliminated
            everything that she is allergic to from the menu. They are truly the
            best!&quot;
          </h4>
        </div>
      </div>

      <div className="awards-row">
        <div className="awards-item">
          <img src={Awards5} />
        </div>
        <div className="awards-item">
          <img src={Awards2} />
        </div>
        <div className="awards-item">
          <img src={Awards3} />
        </div>
        <div className="awards-item">
          <img src={Awards4} />
        </div>
        <div className="awards-item">
          <img src={Awards6} />
        </div>
        <div className="awards-item">
          <img src={Awards1} />
        </div>
        <div className="awards-item">
          <img src={Awards7} />
        </div>
        <div className="awards-item">
          <img src={Awards8} />
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
