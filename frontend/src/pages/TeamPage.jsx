import React from "react";
import "./TeamPage.css";
import teamImage from "/assets/leonie.webp";
import StaffList from "../components/StaffCard/StaffCard";

const TeamPage = () => {
  return (
    <div>
      <div className="banner-team">
        <img className="banner-image-team" src={teamImage} />
        <div className="banner-team-content">
          <h3>Leonie</h3>
          <h3>Managing Director</h3>
          <p>
            Safeguarding Lead
            <br />
            Professional Doctorate in Education (EdD, MA, BSc Hons)
            <br />
            International Diploma in Montessori Pedagogy
            <br />
          </p>
          <p>
            In addition to her position as a consultant, author, speaker, and
            researcher, Leonie has acquired over a decade of managerial
            experience across the early years sector. Leonie has been awarded an
            International Diploma in Montessori Pedagogy, a Bachelor of Science
            with Honours, a Master&apos;s Degree, and most recently a Doctorate
            in Education, examining the professional wellbeing of Early
            Childhood Educators. Leonie has proposed reforms for policy,
            legislation, and practice in order to enhance working conditions for
            Educators nationwide, regularly participating in symposiums that
            highlight structural injustice across the Early Childhood Education
            and Care sector.
          </p>
        </div>
      </div>
      <StaffList />
    </div>
  );
};

export default TeamPage;
