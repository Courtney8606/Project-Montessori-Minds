import Map from "../components/Map/Map";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div>
      <div className="container text-center contact-grid">
        <div className="row">
          <div className="col">
            <div>
              <Map />
            </div>
          </div>
          <div className="col contact-details">
            <h4 className="contact-heading">Location & Contact Details</h4>
            <br></br>
            <p>
              You&apos;ll find us at 62-64 Eastern Rd, Romford, Essex, RM1 3QA
            </p>
            <p>You can contact us via -</p>
            <p>
              <a className="contact" href="mailto:info@montessori-minds.com">
                info@montessori-minds.com
              </a>
            </p>
            <p>Phone: 01708 935695</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
