import React from "react";
import foodImage from "../assets/child-eating.jpg";
import foodBanner from "../assets/foodbanner.jpg";
import subImage from "../assets/foodhygiene.webp";
import Banner from "../components/Banner/Banner";
import "./FoodPage.css";

const FoodPage = () => {
  return (
    <div>
      <Banner
        bannerImage={foodBanner}
        text1="Food & Nutrition"
        text2="Healthy & nutritious meals cooked from scratch daily"
        image={subImage}
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
              Daily choice of cereal, porridge, wholemeal toast, fruit conserve
            </p>

            <h3>Snacks</h3>
            <p>
              Wholemeal crackers, rice cakes, fresh fruit/vegetables, organic
              milk
            </p>

            <h3>Lunch</h3>
            <p>See example menu below</p>

            <h3>Tea</h3>
            <p> Sandwiches, wraps, crumpets, soups and salads.</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="food-intro">
        <h1>Sample Lunch Menu</h1>
        <br></br>
        <p>
          Monday: Cottage pie/ vegetable bake served with carrots, broccoli,
          onion gravy and greek yoghurt with fresh berries for dessert.{" "}
        </p>
        <br></br>
        <p>
          Tuesday: Lamb biryani/ chick pea biryani served with cucumber raita,
          chapatti and frozen yoghurt with mango for dessert
        </p>
        <br></br>
        <p>
          Wednesday: Roast Chicken/ quorn served with roasted potatoes and fresh
          vegetables and organic banana custard for dessert
        </p>
        <br></br>
        <p>
          Thursday: Turkey/ quorn meatballs with spaghetti and fresh tomato and
          basil sauce with organic cinnamon rice pudding for dessert.{" "}
        </p>
        <br></br>
        <p>
          Friday: Baked salmon/ falafel served with potato wedges, minted peas
          and salad with apple and cinnamon crumble for dessert
        </p>
      </div>
    </div>
  );
};

export default FoodPage;
