import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./LoginPage.css";
import { login } from "../services/authentification";
import backgroundImage from "/assets/testbanner1.jpg";
import MainButton from "../components/Buttons/MainButton";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(username, password);
      if (response.status != 200) {
        console.log("Error returning data");
        setErrorMessage("Username or Password is incorrect!");
      } else {
        const data = await response.json();
        localStorage.setItem("username", data["username"]);
        navigate("/staffmanagement");
      }
    } catch (err) {
      console.error("Error", err);
      navigate("/login");
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div
        className="login-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <form className="login-form" onSubmit={handleSubmit}>
          <div></div>
          <p>EMPLOYEE PORTAL</p>
          <p>Please log in below</p>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
            className="login-input"
          />
          <br></br>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            className="login-input"
          />
          <br></br>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <MainButton text="Log in" />
          <div>
            <hr />
            <p>
              Don&apos;t have an account?{" "}
              <NavLink style={{ textDecoration: "underline" }} to="/signup">
                {" "}
                Sign up
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
