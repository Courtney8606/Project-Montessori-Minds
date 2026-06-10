import bannerImage from "/assets/funding.webp";
import Banner from "../components/Banner/Banner";
import "./Funding.css";

const FundingPage = () => {
  return (
    <div>
      <Banner bannerImage={bannerImage} text1="Funding and Financial Support" />

      {/* Intro Section */}
      <div className="funding-page">
        <div className="funding-page-content">
          <p className="starting-paragraph">
            At Montessori Minds, we&apos;re pleased to be able to offer
            financial support and funding to our families. There are many
            options available to help with childcare and education costs for
            children under 18.
          </p>
        </div>
      </div>

      <hr />

      {/* Government Schemes Section */}
      <div className="funding-page">
        <div className="funding-page-content">
          <h3>Tax Free Childcare & Education</h3>
          <p>
            You can get up to £500 every 3 months (up to £2,000 a year) for each
            of your children to help with the costs of childcare. This goes up
            to £1,000 every 3 months if a child is disabled (up to £4,000 a
            year).
          </p>

          <h4>Other government schemes you may be able to apply for:</h4>
          <ul>
            <li>Universal Credit</li>
            <li>Help while you study</li>
            <li>
              Funded childcare when your child is aged 9 months to 4 years
            </li>
          </ul>

          <p>Further information:</p>
          <a
            className="funding-link"
            href="https://www.childcarechoices.gov.uk/childcare-support-available"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://beststartinlife.gov.uk/
          </a>
        </div>
      </div>

      <hr />

      {/* Montessori Minds Funding Section */}
      <div className="funding-page">
        <div className="funding-page-content">
          <h3>Funded Childcare Entitlement at Montessori Minds</h3>

          <div className="funding-callout">
            <p>
              Whilst the Government funding is structured for 38 weeks of the
              year (term time), our childcare places are for 51 weeks of the
              year. As a result, funded hours are stretched over the 51 weeks
              that we&apos;re open.
            </p>
          </div>

          <p>Annual funding equates to:</p>
          <ul>
            <li>15 hours = 570 hours per year</li>
            <li>30 hours = 1,140 hours per year</li>
          </ul>

          <p>
            Depending on your childcare plan, you may still receive a monthly
            charge even when claiming funding. This is a combination of:
          </p>
          <ul>
            <li>Any additional, non-funded hours</li>
            <li>
              Additional charges for food and consumables, which are not covered
              by government funding
            </li>
          </ul>

          <h4>How can I check if I&apos;m eligible?</h4>
          <p>
            Families can assess their eligibility for funding and the
            application process by visiting the Best Start in Life website.
          </p>

          <h4>When could my child become eligible?</h4>
          <p>
            Children become eligible for age-specific funding in the term
            following their relevant birthday (or month, in the case of
            9-month-olds).
          </p>

          <div className="funding-callout">
            <ul>
              <li>
                Families eligible for funding are responsible for applying for a
                positive determination of eligibility from HMRC (a valid
                eligibility code).
              </li>
              <li>
                This code must be provided before your child&apos;s funding can
                be claimed and must be revalidated every three months when
                prompted by HMRC.
              </li>
              <li>
                Failure to do so may result in the funding being withdrawn.
              </li>
            </ul>
          </div>

          <p>
            Our funded hours include a small additional charge to cover meals
            and activities that are not included within government funding.
            These include freshly prepared meals made by our in-house chefs and
            a range of extra-curricular experiences carefully selected to
            complement our Montessori curriculum.
          </p>

          <p>
            Government funding is designed to support core childcare provision
            and does not cover the cost of these additional services. Our
            inclusive approach ensures that every child at Montessori Minds can
            enjoy the same high-quality experiences, opportunities, nutritious
            meals, and authentic Montessori education throughout their time with
            us.
          </p>

          {/* Food and Consumables Table */}
          <table className="funding-table funding-table--entitlements">
            <tbody>
              <tr className="section-heading">
                <th colSpan="2">Access to the early years entitlements</th>
              </tr>

              <tr className="sub-heading">
                <td colSpan="2">
                  You can access the following early years entitlements at our
                  setting:
                </td>
              </tr>

              <tr>
                <td>✓ Two year old entitlement</td>
                <td>
                  For families receiving additional support (families on low
                  income, children in or left care/EHC/DLA)
                </td>
              </tr>

              <tr>
                <td>✓ Universal entitlement</td>
                <td>For children aged 3 to 4 years</td>
              </tr>

              <tr>
                <td>✓ Working parent entitlement</td>
                <td>For children aged 3 to 4 years</td>
              </tr>

              <tr>
                <td>✓ Working parent entitlement</td>
                <td>For children aged 2 years</td>
              </tr>

              <tr>
                <td>✓ Working parent entitlement</td>
                <td>For children from 9 months and under 2 years</td>
              </tr>

              <tr className="sub-heading">
                <td colSpan="2">
                  The number of weeks we offer the entitlements at our setting:
                </td>
              </tr>

              <tr>
                <td>✓ Stretched offer places</td>
                <td>Up to 51 weeks a year</td>
              </tr>

              <tr className="sub-heading">
                <td colSpan="2">
                  How you can access entitlement places at our setting:
                </td>
              </tr>

              <tr>
                <td>✓ Entitlement availability</td>
                <td>Between 8am and 6pm</td>
              </tr>

              <tr>
                <td>✓ Funded hours</td>
                <td>
                  You can access entitlement hours between 8am and 6pm at no
                  charge
                </td>
              </tr>

              <tr>
                <td>✓ Stretched offer</td>
                <td>Available 51 weeks of the year</td>
              </tr>

              <tr className="sub-heading">
                <td colSpan="2">
                  Other forms of financial support you can access at our
                  setting:
                </td>
              </tr>

              <tr>
                <td>✓ Tax-Free Childcare</td>
                <td>Available</td>
              </tr>

              <tr>
                <td>✓ Universal Credit for Childcare</td>
                <td>Available</td>
              </tr>

              <tr>
                <td>✓ Study Support</td>
                <td>Available</td>
              </tr>
            </tbody>
          </table>
          <table className="funding-table funding-table--extras">
            <tbody>
              <tr className="section-heading">
                <th colSpan="2">Chargeable extras</th>
              </tr>

              <tr className="chargeable-header">
                <th>Item</th>
                <th>Cost</th>
              </tr>

              <tr className="sub-heading">
                <td colSpan="2">Additional hours</td>
              </tr>

              <tr>
                <td>
                  We are open Monday to Friday, between the hours of 7am and
                  7pm. Parents/carers accessing early years entitlements can
                  access additional hours, chargeable as follows (for all age
                  groups):
                </td>
                <td>£8.50 per hour</td>
              </tr>

              <tr className="sub-heading">
                <td colSpan="2">Meals</td>
              </tr>

              <tr>
                <td>Breakfast</td>
                <td>£3.12</td>
              </tr>

              <tr>
                <td>Morning snack</td>
                <td>£2.08</td>
              </tr>

              <tr>
                <td>Mid-day meal and pudding</td>
                <td>£7.27</td>
              </tr>

              <tr>
                <td>Afternoon meal</td>
                <td>£5.19</td>
              </tr>

              <tr>
                <td>Evening snack</td>
                <td>£3.12</td>
              </tr>

              <tr className="sub-heading">
                <td colSpan="2">Additional services</td>
              </tr>

              <tr>
                <td>
                  We offer the following extra-curricular activities, and these
                  are chargeable as follows per funded day:
                  <ul className="activities-list">
                    <li>Specialised 1:1 Montessori teaching</li>
                    <li>Forest school sessions</li>
                    <li>Language classes</li>
                    <li>Atelier sessions</li>
                    <li>Athletics and movement sessions</li>
                    <li>Bhangra dancing / dhol drumming</li>
                    <li>Yoga sessions</li>
                    <li>Animal care</li>
                    <li>Drumming sessions</li>
                    <li>Wellness sessions</li>
                    <li>Animal visits</li>
                    <li>Carnival events</li>
                    <li>Zoo lab visits</li>
                    <li>Farm visits</li>
                    <li>Seasonal events</li>
                    <li>Entertainers</li>
                    <li>Animal therapy</li>
                    <li>Creative workshops</li>
                  </ul>
                </td>

                <td className="activities-cost">
                  £6.63
                  <br />
                  <small>per funded day</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FundingPage;
