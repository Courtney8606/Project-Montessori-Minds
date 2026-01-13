import outdoorImage1 from "/assets/outdoor1.webp";
import outdoorImage2 from "/assets/outdoor2.webp";
import outdoorImage3 from "/assets/outdoor3.webp";
import outdoorImage4 from "/assets/outdoor4.webp";
import outdoorImage5 from "/assets/outdoor5.webp";
import outdoorImage6 from "/assets/outdoor6.webp";
import outdoorImage7 from "/assets/outdoor7.webp";
import outdoorImage8 from "/assets/outdoor8.jpeg";
import outdoorImage9 from "/assets/outdoor9.webp";
import outdoorImage10 from "/assets/outdoor10.webp";
import outdoorImage11 from "/assets/outdoor11.webp";
import outdoorImage12 from "/assets/outdoor12.webp";
import outdoorImage13 from "/assets/outdoor13.webp";
import chickenImage1 from "/assets/chicken1.webp";
import chickenImage2 from "/assets/chicken2.webp";
import chickenImage3 from "/assets/chicken3.webp";
import chickenImage4 from "/assets/chicken4.webp";
import chickenImage5 from "/assets/chicken5.webp";
import chickenImage6 from "/assets/chicken6.webp";
import chickenImage7 from "/assets/chicken7.webp";
import chickenImage8 from "/assets/chicken8.webp";
import beyondImage1 from "/assets/beyond1.webp";
import beyondImage2 from "/assets/beyond2.webp";
import beyondImage3 from "/assets/beyond3.webp";
import beyondImage4 from "/assets/beyond4.webp";
import beyondImage5 from "/assets/beyond5.webp";
import beyondImage6 from "/assets/beyond6.webp";
import beyondImage7 from "/assets/beyond7.webp";
import beyondImage8 from "/assets/beyond8.webp";
import beyondImage9 from "/assets/beyond9.webp";
import beyondImage10 from "/assets/beyond10.webp";
import beyondImage11 from "/assets/beyond11.webp";

import "./OutdoorPage.css";

const OutdoorPage = () => {
  return (
    <div>
      <div
        className="container-fluid text-center carousel-container"
        id="carousel-container"
      >
        <div className="row outdoor-row">
          <div className="col-12 col-md-6 col-container">
            <div className="column-container">
              <div id="carouselExample" className="carousel slide">
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
                  <div className="carousel-item">
                    <img
                      src={outdoorImage8}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={outdoorImage9}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={outdoorImage10}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={outdoorImage11}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={outdoorImage12}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={outdoorImage13}
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
          <div className="col-12 col-md-6 col-container content-container">
            <div className="garden">
              <h1>Outdoor Areas, Atelier</h1>
              <h1>and beyond!</h1>
              <br></br>
              <p>
                Our Garden & Atelier is a wonderful area where children can
                freely explore and experience the outdoors. We provide the
                children with a variety of outdoor activities including sand
                play, water play, climbing frames, bouncy castles, a mud
                kitchen, and free access to bikes. Children also have the
                opportunity to visit our local parks. Our atelier is a
                laboratory of sorts; a place full of a variety of materials,
                mediums and tools that allow children to further their
                inquiries, explore new ideas, and express themselves.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid text-center carousel-container"
        id="carousel-container"
      >
        <div className="row outdoor-row" id="outdoor-row-2">
          <div className="col-12 col-md-6 col-container content-container">
            <div className="garden">
              <p>
                Meet our chickens! Engaging with animals fosters a sense of
                responsibility and empathy as kids learn to care for living
                beings. This hands-on experience teaches them about the needs of
                animals, such as feeding, cleaning, and ensuring their
                well-being. It also encourages teamwork and cooperation among
                the children as they share duties and learn to work together. By
                nurturing these skills and qualities, children develop a greater
                understanding of nature and the importance of compassion and
                respect for all living creatures.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-container">
            <div>
              <div id="carouselExample2" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={chickenImage1}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={chickenImage2}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={chickenImage3}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={chickenImage4}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={chickenImage5}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={chickenImage6}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={chickenImage7}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={chickenImage8}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample2"
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
                  data-bs-target="#carouselExample2"
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

      <div
        className="container-fluid text-center carousel-container"
        id="carousel-container"
      >
        <div className="row outdoor-row" id="outdoor-row-3">
          <div className="col-12 col-md-6 col-container">
            <div>
              <div id="carouselExample3" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={beyondImage1}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={beyondImage2}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={beyondImage3}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={beyondImage4}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={beyondImage5}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={beyondImage6}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={beyondImage7}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={beyondImage8}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={beyondImage9}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={beyondImage10}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={beyondImage11}
                      className="d-block w-100 carousel-image"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample3"
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
                  data-bs-target="#carouselExample3"
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
          <div className="col-12 col-md-6 col-container content-container">
            <div className="garden">
              <p>
                We provide enriching activities that foster learning and
                community engagement beyond the usual. In the past our children
                have delivered toys, books, and clothes to charity shops.
                They&apos;ve enjoyed exploring Romford Market, learning about
                currency and healthy foods. A visit to Parkside Home allowed
                them to connect with residents and staff, while the London Fire
                Brigade taught them about firefighting. We&apos;ve celebrated
                cultural events, fostering a deep appreciation for diversity and
                inclusivity in children. Exotic Explorers introduced fascinating
                creatures like snakes and owls, while a farm visit got the
                children up close with sheep and guinea pigs. These activities
                help our children develop empathy, responsibility, and a deeper
                appreciation for their community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutdoorPage;
