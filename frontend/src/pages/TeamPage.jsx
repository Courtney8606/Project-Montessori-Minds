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
          <h3>Owner & Nursery Manager</h3>
          <p>
            Safeguarding Lead
            <br />
            International Diploma in Montessori Pedagogy
            <br />
            Working towards Doctor of Education (EdD) (PhD)
            <br />
          </p>
          <p>
            Over 10 years managerial experience within the early years sector.
            Leonie is an experienced Montessori Teacher and has supported
            nurseries across various local authorities. Leonie holds an
            International Diploma in Montessori Pedagogy in addition to a BSc
            and Masters Degree and is currently completing her Doctorate in
            Education.
          </p>
        </div>
      </div>
      <StaffList />
    </div>
  );
};

export default TeamPage;
