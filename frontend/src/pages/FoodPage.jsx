import React from "react";
import foodImage from "/assets/food.png";
import foodBanner from "/assets/foodbanner.jpg";
import subImage from "/assets/foodhygiene.webp";
import Banner from "../components/Banner/Banner";
import "./FoodPage.css";

const FoodPage = () => {
  return (
    <div>
      <Banner
        className="food-banner"
        bannerImage={foodBanner}
        style={{ backgroundImage: `url(${foodBanner})` }}
        text1="Healthy & Nutritious Meals"
        text2="cooked from scratch daily"
        subImage={subImage}
      />
      <p className="food-intro">
        {" "}
        Meal times are an enjoyable and social experience for all! Our Nursery
        Teachers enjoy meals together alongside our children, where we encourage
        new, healthy foods, hold discussions, both extending and enriching
        vocabulary. We only sweeten our food using natural sugars, including
        fruit juice and honey for children over one. We use no salt in our food.
        Fresh water and organic milk will be available for children throughout
        the day.{" "}
      </p>
      <hr></hr>
      <h1 className="food-intro">Daily Food Schedule</h1>
      <div className="container text-center">
        <div className="row align-items-center food-row">
          <div className="col food-column">
            <img className="food-grid-image" src={foodImage} />
          </div>
          <div className="col food-column">
            <h3>Breakfast</h3>
            <p>
              A choice of cereal, gluten-free porridge, or wholemeal toast with
              fruit conserve.
            </p>

            <h3>Snacks</h3>
            <p>
              Wholemeal crackers, rice cakes, fresh fruit/vegetables, and
              organic milk.
            </p>

            <h3>Lunch</h3>
            <p>
              Please see example menu below (we are open to discuss any dietary
              requirements)
            </p>

            <h3>Tea</h3>
            <p>
              {" "}
              Pitta bread/wraps/crumpets served alongside bean salad including
              peppers, tomatoes, cucumber, sweetcorn, kidney beans, and carrots,
              with pasta in a tomato sauce
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="food-intro">
        <h1>Sample Lunch Menu</h1>
        <br></br>
        <p>
          <strong>Monday: </strong>Chickpea curry with carrots, peas, and green
          beans, served with rice.
        </p>
        <br></br>
        <p>
          <strong>Tuesday: </strong>Veggie balls in a tomato garlic sauce with
          carrots, peas, green beans, and broccoli. Served with steamed rice.
        </p>
        <br></br>
        <p>
          <strong>Wednesday: </strong>Turkey sausages served with roast garlic
          potatoes and broccoli.
        </p>
        <p>Vegetarian alternative: Vegetarian sausages.</p>
        <br></br>
        <p>
          <strong>Thursday: </strong>Beef mince bolognese with carrots, green
          beans, kidney beans, and sweetcorn served with tender stem broccoli.
        </p>
        <p>Vegetarian alternative: Red lentil bolognese.</p>
        <br></br>
        <p>
          <strong>Friday: </strong>Breaded cod fingers baked in the oven with
          new potatoes, sweet potatoes, red onion, carrot, garlic and herbs.
        </p>
        <p>Vegetarian alternative: Pea protein vegetarian fingers.</p>
      </div>
    </div>
  );
};

export default FoodPage;
