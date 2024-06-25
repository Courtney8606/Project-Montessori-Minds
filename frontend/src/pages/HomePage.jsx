import React from "react";
import Banner from "../components/Banner/Banner";
import bannerImage from "../assets/banner.jpg";
import "./HomePage.css";
import subImage from "../assets/awards5.webp";
import Awards1 from "../assets/awards1.webp";
import Awards2 from "../assets/Nursery-world-awards.png";
import Awards3 from "../assets/Healthy-years.png";
import Awards4 from "../assets/NDNA-award.png";
import Awards5 from "../assets/awards5.webp";
import Awards6 from "../assets/Daynurseries-award.png";
import Awards7 from "../assets/awards7.png";
import Awards8 from "../assets/Millies-Mark-logo.jpg";

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
            <img className="values-image" src="/src/assets/nurture.png" />
          </a>
          <h3>
            <a href="/values">Nurture</a>
          </h3>
        </div>

        <div className="values-wrapper">
          <a href="/values">
            <img className="values-image" src="/src/assets/enjoy.png" />
          </a>
          <h3>
            <a href="/values">Enjoy</a>
          </h3>
        </div>

        <div className="values-wrapper">
          <a href="/values">
            <img className="values-image" src="/src/assets/grow.png" />
          </a>
          <h3>
            <a href="/values">Grow</a>
          </h3>
        </div>

        <div className="values-wrapper">
          <a href="/values">
            <img className="values-image" src="/src/assets/flourish.png" />
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
            src="/src/assets/testimonial1.png"
          />
          <h4>
            "A true gentle Montessori style setting with a team that is
            passionate about care. Everything is held at a high standard with
            the children's wellbeing squarely at the centre. The opening times
            are very convenient (7am - 7pm) so the days when I need to get to
            work earlier or am running late aren't too much of a problem."
          </h4>
        </div>

        <div className="testimonial-wrapper">
          <img
            className="testimonial-image"
            src="/src/assets/testimonial2.png"
          />
          <h4>
            "The staff are so attentive and genuinely very caring and cater for
            your child’s individual needs. It’s home from home for our little
            girl. They go that ‘extra mile’, from the wonderful home cooked food
            to the experiences and activities they arrange. ​ I could not
            recommend them more!"
          </h4>
        </div>

        <div className="testimonial-wrapper">
          <img
            className="testimonial-image"
            src="/src/assets/testimonial3.png"
          />
          <h4>
            "I was very nervous to start my child in the nursery but they
            understood my anxiety and they did everything to put my mind at
            ease. My child has allergies but they immediately eliminated
            everything that she is allergic to from the menu. They are truly the
            best!"
          </h4>
        </div>
      </div>

      <div className="awards-row">
        <div className="awards-item">
          <img src={Awards1} />
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
          <img src={Awards5} />
        </div>
        <div className="awards-item">
          <img src={Awards6} />
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
