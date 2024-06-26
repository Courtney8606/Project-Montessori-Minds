import React from "react";
import "./TeamPage.css";
import { getAllStaff } from "../services/staff";
import StaffCardEmployeeAccount from "../components/StaffCard/StaffCardEmployeeAccount";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MainButton from "../components/Buttons/MainButton";
import { deleteStaff } from "../services/staff";

const StaffManagementPage = () => {
  const username = localStorage.getItem("username");
  const [staff, setStaff] = useState([]);
  const navigate = useNavigate();

  const getAllStaffTrigger = async () => {
    try {
      const response = await getAllStaff();
      setStaff(response);
    } catch (error) {
      console.error("Failed to fetch staff data:", error);
    }
  };

  const handleDelete = async (staff_name) => {
    try {
      await deleteStaff(staff_name);
      console.log("Staff member deleted successfully.");
      const response = await getAllStaff();
      setStaff(response);
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  useEffect(() => {
    if (username) {
      navigate("/staffmanagement");
      getAllStaffTrigger();
    } else {
      navigate("/login");
    }
  }, [username, navigate]);

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
      <StaffCardEmployeeAccount data={staff} onDelete={handleDelete} />
    </div>
  );
};

export default StaffManagementPage;
