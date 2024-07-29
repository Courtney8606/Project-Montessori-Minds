import React from "react";
import "./TeamPage.css";
import StaffCardEmployeeAccount from "../components/StaffCard/StaffCardEmployeeAccount";
import { NavLink } from "react-router-dom";
import MainButton from "../components/Buttons/MainButton";

const StaffManagementPage = () => {
  const handleDelete = async (staff_name) => {
    try {
      await deleteStaff(staff_name);
      const response = await getAllStaff();
      setStaff(response);
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

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
      <StaffCardEmployeeAccount onDelete={handleDelete} />
    </div>
  );
};

export default StaffManagementPage;
