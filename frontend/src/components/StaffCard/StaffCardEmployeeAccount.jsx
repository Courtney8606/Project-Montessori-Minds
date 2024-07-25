import React, { useState, useEffect } from "react";
import "./StaffCard.css";
import { NavLink } from "react-router-dom";
import { getUploadedImage } from "../../services/staff";

const StaffCardEmployeeAccount = ({ data, onDelete }) => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [clickedAwardsIndex, setClickedAwardsIndex] = useState(null);
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    const fetchImageUrls = async () => {
      const urls = {};
      for (const staff of data) {
        try {
          const url = await getUploadedImage(staff.image);
          urls[staff.image] = url;
        } catch (error) {
          console.error(`Error fetching image for ${staff.image}:`, error);
        }
      }
      setImageUrls(urls);
    };

    if (data.length > 0) {
      fetchImageUrls();
    }
  }, [data]);

  const handleQualificationsClick = (index) => {
    if (clickedIndex === index) {
      setClickedIndex(null); // Toggle off if already clicked
    } else {
      setClickedIndex(index);
    }
  };

  const handleAwardsClick = (index) => {
    if (clickedAwardsIndex === index) {
      setClickedAwardsIndex(null); // Toggle off if already clicked
    } else {
      setClickedAwardsIndex(index);
    }
  };

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
              src={imageUrls[staff.image]}
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
        </div>
      ))}
    </div>
  );
};

export default StaffCardEmployeeAccount;
