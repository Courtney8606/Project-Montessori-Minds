import React, { useState } from "react";
import "./StaffCard.css";

const StaffList = ({ data }) => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [clickedAwardsIndex, setClickedAwardsIndex] = useState(null);

  const handleQualificationsClick = (index) => {
    if (clickedIndex === index) {
      setClickedIndex(null);
    } else {
      setClickedIndex(index);
    }
  };

  const handleAwardsClick = (index) => {
    if (clickedAwardsIndex === index) {
      setClickedAwardsIndex(null);
    } else {
      setClickedAwardsIndex(index);
    }
  };

  return (
    <div className="card-container">
      {data.map((staff, index) => (
        <div className="card" key={index}>
          <img
            src={`/assets/${staff.image}`}
            alt={staff.name}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{staff.name}</h5>
            <p className="card-title">{staff.title}</p>
            <button
              className="btn btn-primary team-button"
              onClick={() => handleQualificationsClick(index)}
            >
              Qualifications
            </button>
            {clickedIndex === index && (
              <p className="card-text">
                {staff.qualifications && staff.qualifications.join(", ")}
              </p>
            )}
            {staff.awards && staff.awards.length > 0 && (
              <button
                className="btn btn-primary team-button"
                onClick={() => handleAwardsClick(index)}
              >
                Awards
              </button>
            )}
            {clickedAwardsIndex === index &&
              staff.awards &&
              staff.awards.length > 0 && (
                <p className="card-text">{staff.awards.join(", ")}</p>
              )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaffList;
