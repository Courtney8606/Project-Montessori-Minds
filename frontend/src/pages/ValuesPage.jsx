import bannerImage from "/assets/banner-values.webp";
import Banner from "../components/Banner/Banner";
import "./ValuesPage.css";
import valueNurture from "/assets/values-nurture.webp";
import valueEnjoy from "/assets/values-enjoy.webp";
import valueGrow from "/assets/values-grow.webp";
import valueFlourish from "/assets/values-flourish.webp";

const ValuesPage = () => {
  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        text1="Our Values"
        text2="Nurture. Enjoy. Grow. Flourish."
      />
      <div>
        <div className="values-page">
          <img className="values-page-image" src={valueNurture} />
          <div className="values-page-content">
            <h2>Nurture</h2>
            <h3>We welcome all with kindness, respect and love</h3>
            <p>
              Our Nursery offers a homely, safe space which we tailor to our
              childrens&apos; individual needs and interests. We build secure,
              nurturing relationships with our children; essential for all to
              enjoy, grow and flourish. We ensure our children and staff are
              happy, loved, safe and feel at home. Our Montessori Minds family
              also take an active role in caring for the environment, nature
              around us and our local community.
            </p>
          </div>
        </div>
        <hr />
        <div className="values-page">
          <img className="values-page-image" src={valueEnjoy} />
          <div className="values-page-content">
            <h2>Enjoy</h2>
            <h3>Fun, stimulating learning environments</h3>
            <p>
              We believe children deserve beautiful, engaging environments with
              access to fun and exciting activities. Our teachers provide
              natural, real life learning experiences, which enable children to
              learn through play and enjoy activities linked to their individual
              interests.
            </p>
          </div>
        </div>
        <hr />
        <div className="values-page">
          <img className="values-page-image" src={valueGrow} />
          <div className="values-page-content">
            <h2>Grow</h2>
            <h3>We inspire and support each other to grow</h3>
            <p>
              We are role models to each other, supporting and encouraging our
              children to grow and free their fullest potential with us. We are
              continually reflecting, improving and learning from those around
              us, including our children; where we strive to consistently
              achieve the best possible outcomes for our children and teachers.
            </p>
          </div>
        </div>
        <hr />
        <div className="values-page">
          <img className="values-page-image" src={valueFlourish} />
          <div className="values-page-content">
            <h2>Flourish</h2>
            <h3>We are committed to a culture of excellence</h3>
            <p>
              Our children are at the forefront of everything we do. We are
              highly passionate in ensuring each child and teacher with us has
              an opportunity to flourish and exceed at Montessori Minds Day
              Nursery. To ensure excellent standards across our curriculum we
              follow a Montessori integrated pedagogy in addition to the Early
              Years Foundation Stage Curriculum as well as many other researched
              theories and approaches to learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesPage;
