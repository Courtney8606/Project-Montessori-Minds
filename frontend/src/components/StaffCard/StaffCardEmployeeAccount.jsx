import React, { useState, useEffect, useCallback } from "react";
import "./StaffCard.css";
import { NavLink } from "react-router-dom";
import { getUploadedImages } from "../../services/staff";
import Loading from "../Loading/Loading";
import { getAllStaff, deleteStaff } from "../../services/staff";

const StaffCardEmployeeAccount = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [clickedAwardsIndex, setClickedAwardsIndex] = useState(null);
  const [imageUrls, setImageUrls] = useState({});
  const [loading, setLoading] = useState(true);
  const [staff, setStaff] = useState([]);

  const getAllStaffTrigger = useCallback(async () => {
    try {
      const response = await getAllStaff();
      setStaff(response);
    } catch (error) {
      console.error("Failed to fetch staff data:", error);
    }
  }, []);

  const handleDelete = async (staff_name) => {
    try {
      await deleteStaff(staff_name);
      const response = await getAllStaff();
      setStaff(response);
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  const fetchImageUrls = useCallback(async () => {
    const filenames = staff.map((staffMember) => staffMember.image);
    try {
      const urls = await getUploadedImages(filenames);
      setImageUrls(urls);
    } catch (error) {
      console.error("Error fetching image URLs:", error);
    } finally {
      setLoading(false);
    }
  }, [staff]);

  useEffect(() => {
    getAllStaffTrigger();
  }, [getAllStaffTrigger]);

  useEffect(() => {
    if (staff.length > 0) {
      fetchImageUrls();
    }
  }, [staff, fetchImageUrls]);

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

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="card-container">
      {staff.map((staffMember, index) => (
        <div className="cardsort" key={index}>
          <div className="deleteupdate">
            <NavLink to={`/amendstaffmember/${staffMember.id}`}>
              <button className="amendbutton"> Amend details</button>
            </NavLink>
            <button
              text="Delete"
              staff_name={staffMember.name}
              onClick={() => handleDelete(staffMember.name)}
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
              src={imageUrls[staffMember.image]}
              alt={staff.name}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{staffMember.name}</h5>
              <p className="card-title">{staffMember.title}</p>
              <button
                className="btn btn-primary team-button"
                onClick={() => handleQualificationsClick(index)}
              >
                Qualifications
              </button>
              {clickedIndex === index && (
                <p className="card-text">
                  {staffMember.qualifications &&
                    staffMember.qualifications.join(", ")}
                </p>
              )}
              {staffMember.awards && staffMember.awards.length > 0 && (
                <button
                  className="btn btn-primary team-button"
                  onClick={() => handleAwardsClick(index)}
                >
                  Awards
                </button>
              )}
              {clickedAwardsIndex === index &&
                staffMember.awards &&
                staffMember.awards.length > 0 && (
                  <p className="card-text">{staffMember.awards.join(", ")}</p>
                )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaffCardEmployeeAccount;
