import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const EmployeeAccountPage = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem("username");

    useEffect(() => {
          if (username) {
            navigate("/employeeaccount");
          } else {
            navigate("/login");
          }
      }, [username, navigate]);

    return (
    <>
    <p>Employee Account</p>
    </>
  );
};
