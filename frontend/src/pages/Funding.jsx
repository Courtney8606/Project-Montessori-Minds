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
            Our funded hours include small additional charges for essential
            items that are not covered by government funding. These include
            freshly prepared meals by our in-house chefs and resources required
            for our Montessori Curriculum.
          </p>

          <p>
            Government funding does not cover the cost of these items, nor is it
            intended to. Our inclusive approach ensures every child at
            Montessori Minds enjoys the same experiences, opportunities, and
            high-quality Montessori teaching.
          </p>

          {/* Food and Consumables Table */}
          <h3>Breakdown of Daily Food and Consumable Charges</h3>

          <table className="funding-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Daily Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Freshly prepared breakfast, mid-day meal, desserts, afternoon
                  meal and snacks
                </td>
                <td>£18</td>
              </tr>
              <tr>
                <td>Montessori consumables</td>
                <td>£2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FundingPage;
