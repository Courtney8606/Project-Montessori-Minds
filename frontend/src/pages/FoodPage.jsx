import afternoonImage from "/assets/food.webp";
import breakfastImage from "/assets/breakfast.png";
import snackImage from "/assets/snack.png";
import lunchImage from "/assets/lunch.png";
import foodBanner from "/assets/banner-food.webp";
import subImage from "/assets/food-hygiene.webp";
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
        Balanced, healthy, and home-cooked, our Montessori-inspired meals
        nurture independence in children with teachers enjoying mealtimes
        together.{" "}
      </p>
      <hr></hr>
      <h1 className="food-intro">Sample Menu</h1>
      <div className="container text-center">
        <div className="food-section">
          <div className="row align-items-center food-row">
            <div className="col food-column">
              <img className="food-grid-image" src={breakfastImage} />
            </div>
            <div className="col food-column">
              <h4>Breakfast: A Nourishing Start</h4>
              <ul>
                <li>
                  {" "}
                  Toasted homemade sourdough bread (gluten / gluten-free
                  options), crumpets or english muffins (gluten-free) served
                  with:
                  <ul>
                    <li>
                      Organic avocado & lime, smashed minted petit-pois, organic
                      rosa vine tomatoes & chopped garlic drizzled with extra
                      virgin olive oil{" "}
                    </li>
                    <li>Natural berry conserve</li>
                    <li>Organic acacia honey (for children over 1)</li>
                  </ul>
                </li>
                <li>Spanish tortilla served with baby spinach (dairy)</li>
                <li>
                  Organic oats (gluten / gluten-free options) or Shredded Wheat
                  (gluten) served with:
                  <ul>
                    <li>Greek yoghurt (dairy) or vegan yoghurt (soya)</li>
                    <li>
                      Fresh seasonal berries including blueberries and
                      strawberries, and organic bananas
                    </li>
                    <li>
                      Choice of fresh milk: cow, goat (dairy), soya, or oat
                      (gluten)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="food-section">
          <div className="row align-items-center food-row">
            <div className="col food-column">
              <h4>Midday Meal: Warming & Wholesome</h4>
              <p>
                Our midday meal alternates daily, but our Friday favourite is:
              </p>
              <p>Mains</p>
              <ul>
                <li>
                  Seasoned cod fillets with fresh lemon, roasted homemade sweet
                  potato wedges with a side of steamed broccoli florets and
                  carrots
                </li>
                <li>
                  {" "}
                  Vegan alternative: Vegan pea protein pieces roasted homemade
                  sweet potato wedges with a side of steamed broccoli florets
                  and carrots.
                </li>
              </ul>
              <p>
                Naturally Sweet Desserts
                <ul>
                  <li>
                    Homemade rice pudding with organic banana, prepared with
                    your child&apos;s preferred milk: cow (dairy), oat (gluten),
                    or soya.
                  </li>
                  <li>Greek yoghurt (dairy)</li>
                  <li>
                    Dairy-free & vegan yoghurt (soya) served with mixed berries
                  </li>
                </ul>
              </p>
            </div>
            <div className="col food-column">
              <img className="food-grid-image" src={lunchImage} />
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="food-section">
          <div className="row align-items-center food-row">
            <div className="col food-column">
              <img className="food-grid-image" src={afternoonImage} />
            </div>
            <div className="col food-column">
              <h4>Afternoon Meal: Hearty & Seasonal</h4>
              <ul>
                <li>
                  New potato, penne and mixed bean/chickpea salad (gluten-free)
                  topped with pomegranate seeds, served with:
                  <ul>
                    <li>
                      Green, red, & yellow peppers, tomato, cucumber, sweetcorn,
                      beetroot and carrots
                    </li>
                    <li>Extra virgin olive oil, lemon, and mint dressing</li>
                  </ul>
                </li>

                <li>Homemade sweet potato and sweet pepper soup</li>
                <li>
                  Wholemeal piadina flatbreads (gluten) or gluten-free breads
                  served with:
                  <ul>
                    <li>
                      Fresh mozzarella, cheddar, red leicester, feta (dairy) or
                      vegan cheese alternatives
                    </li>
                    <li>Dairy-free spread</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="food-section">
          <div className="row align-items-center food-row">
            <div className="col food-column">
              <h4>Morning & Evening Snacks: Clean & Satisfying</h4>
              <ul>
                <li>Vegetable pakoras</li>
                <li>
                  Organic rice cakes (soya) and crackers (gluten) served with:
                  Organic avocado & lime / cucumber and mint tzatziki dip
                  (dairy) / tomato and onion salsa
                </li>
                <li>
                  Fresh mozzarella, cheddar, red Leicester & feta (dairy) or
                  vegan cheese alternatives
                </li>
                <li>
                  Greek yoghurt (dairy) or dairy-free & vegan yoghurt (soya)
                  served with sliced banana
                </li>
                <li>
                  Fresh exotic fruit: pomegranate, dragon fruit, papaya, guava,
                  sweet persimmons, kiwi, yellow passion fruit, yellow mangoes,
                  pineapple and fig
                </li>
                <li>
                  Fresh seasonal fruit: pears, plums, apples, tangerines, banana
                  and fresh berries
                </li>
                <li>
                  A selection of ripe plantain, cassava & roasted seasoned
                  chickpeas
                </li>
                <li>
                  Fresh milk and filtered water is available throughout the day:
                  oat, soya, goat&apos;s, or cow&apos;s (dairy)
                </li>
              </ul>
            </div>
            <div className="col food-column">
              <img className="food-grid-image" src={snackImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
