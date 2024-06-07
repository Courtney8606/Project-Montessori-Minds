import React from "react";
import "./TeamPage.css";
import { getAllStaff } from "../services/staff";
import StaffList from "../components/StaffCard/StaffCard";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MainButton from "../components/Buttons/MainButton";

const StaffManagementPage = () => {
  const [staff, setStaff] = useState([]);

  const getAllStaffTrigger = async () => {
    try {
      const response = await getAllStaff();
      setStaff(response);
    } catch (error) {
      console.error("Failed to fetch staff data:", error);
    }
  };

  useEffect(() => {
    getAllStaffTrigger();
  }, []);

  return (
    <div>
      <NavLink
        to="/addstaffmember"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <MainButton
          text="Add a new staff member"
          style={{
            width: "200px",
          }}
        />
      </NavLink>
      <StaffList data={staff} />
    </div>
  );
};

export default StaffManagementPage;
