import React, { useState } from "react";
import "./StaffCard.css";
import { NavLink } from "react-router-dom";

const StaffCardEmployeeAccount = ({ data, onDelete }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredAwardsIndex, setHoveredAwardsIndex] = useState(null);

  return (
    <div className="card-container">
      {data.map((staff, index) => (
        <div className="cardsort" key={index}>
          <div className="deleteupdate">
            <NavLink to={`/amendstaffmember/${staff.id}`}>
              <button className="amendbutton"> Amend details</button>
            </NavLink>
            <button
              text="Delete"
              staff_name={staff.name}
              onClick={() => onDelete(staff.name)}
              style={{
                border: "none",
                backgroundColor: "white",
              }}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
          <div className="card">
            <img
              src={`/src/assets/${staff.image}`}
              alt={staff.name}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{staff.name}</h5>
              <p className="card-title">{staff.title}</p>
              <a
                className="btn btn-primary team-button"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                Qualifications
              </a>
              {hoveredIndex === index && (
                <p className="card-text">
                  {staff.qualifications && staff.qualifications.join(", ")}
                </p>
              )}
              {staff.awards && staff.awards.length > 0 && (
                <a
                  className="btn btn-primary team-button"
                  onMouseEnter={() => setHoveredAwardsIndex(index)}
                  onMouseLeave={() => setHoveredAwardsIndex(null)}
                >
                  Awards
                </a>
              )}
              {hoveredAwardsIndex === index &&
                staff.awards &&
                staff.awards.length > 0 && (
                  <p className="card-text">{staff.awards.join(", ")}</p>
                )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaffCardEmployeeAccount;
