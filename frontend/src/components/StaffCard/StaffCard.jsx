import React, { useState, useEffect, useCallback } from "react";
import "./StaffCard.css";
import { getUploadedImages } from "../../services/staff";
import Loading from "../Loading/Loading";
import { getAllStaff } from "../../services/staff";

const StaffList = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [clickedAwardsIndex, setClickedAwardsIndex] = useState(null);
  const [imageUrls, setImageUrls] = useState({});
  const [loading, setLoading] = useState(true);
  const [staff, setStaff] = useState([]);

  const sortStaff = (staff) => {
    return staff.sort((a, b) => {
      if (a.title.includes("Manager") && !b.title.includes("Manager"))
        return -1;
      if (!a.title.includes("Manager") && b.title.includes("Manager")) return 1;
      if (a.title.includes("Management") && !b.title.includes("Management"))
        return -1;
      if (!a.title.includes("Management") && b.title.includes("Management"))
        return 1;
      if (
        a.title.includes("Admin & Nutrition Lead") &&
        !b.title.includes("Admin & Nutrition Lead")
      )
        return -1;
      if (
        !a.title.includes("Admin & Nutrition Lead") &&
        b.title.includes("Admin & Nutrition Lead")
      )
        return 1;
      if (
        a.title.includes("Pedagogy Lead") &&
        !b.title.includes("Pedagogy Lead")
      )
        return -1;
      if (
        !a.title.includes("Pedagogy Lead") &&
        b.title.includes("Pedagogy Lead")
      )
        return 1;
      if (a.title.includes("Lead") && !b.title.includes("Lead")) return -1;
      if (!a.title.includes("Lead") && b.title.includes("Lead")) return 1;
      return 0; // Maintain original order if neither title is Manager or Lead
    });
  };

  const getAllStaffTrigger = useCallback(async () => {
    try {
      const response = await getAllStaff();
      const sortedStaff = sortStaff(response);
      setStaff(sortedStaff);
    } catch (error) {
      console.error("Failed to fetch staff data:", error);
    }
  }, []);

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
        <div className="card" key={index}>
          <img
            src={imageUrls[staffMember.image]}
            alt={staffMember.name}
            className="card-img-top"
            loading="lazy"
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
      ))}
    </div>
  );
};

export default StaffList;
