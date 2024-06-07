import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./SignupPage.css";
import {
  signup,
  checkUsername,
  checkEmail,
} from "../services/authentification";
import backgroundImage from "../assets/banner.jpg";
import MainButton from "../components/Buttons/MainButton";

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [authorised, setAuthorised] = useState(false);
  const [authCode, setAuthCode] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const special = /[!@#$%^&*(),.?":{}|<>]/;
  const caps = /[A-Z]/;
  const number = /[0-9]/;

  const isPasswordValid = (password) => {
    return (
      password.length > 12 &&
      special.test(password) &&
      caps.test(password) &&
      number.test(password)
    );
  };

  const handleInputChange = (event) => {
    setAuthCode(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const correctCode = "MONTESSORI";
    if (authCode === correctCode) {
      setAuthorised(true);
    } else {
      alert("Incorrect authorization code");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isPasswordValid(password)) {
      try {
        // Check if the username is available
        const usernameAvailable = await checkUsername(username);
        const emailAvailable = await checkEmail(email);

        if (usernameAvailable && emailAvailable) {
          // If username is available, proceed with signup
          await signup(email, password, username);
          console.log("redirecting...");
          navigate("/login");
        } else {
          if (!usernameAvailable && !emailAvailable) {
            setErrorMessage("Username and email are already taken!");
          } else if (!usernameAvailable) {
            setErrorMessage("Username is already taken!");
          } else {
            setErrorMessage("Email is already taken!");
          }
        }
      } catch (error) {
        console.error("Error during signup:", error);
        setErrorMessage("Error during signup. Please try again.");
      }
    } else {
      // Display error message if password is invalid
      setErrorMessage("invalid details");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  if (authorised) {
    return (
      <div
        className="signup-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(255, 200, 255, 10)",
        }}
      >
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <p>Enter details below to sign up</p>
          </div>
          <div>
            <label aria-label="Email:" htmlFor="email">
              Email:
            </label>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={handleEmailChange}
                value={email}
                className="signup-input"
              ></input>
            </div>
          </div>
          <div>
            <label aria-label="Username:" htmlFor="username">
              Username:
            </label>
            <div>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
                className="signup-input"
              ></input>
            </div>
          </div>
          <div>
            <label aria-label="Password:" htmlFor="password">
              Password:
            </label>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                className="signup-input"
              ></input>
            </div>
          </div>
          <div>
            <ul
              style={{
                listStyleType: "disc",
                paddingTop: "10px",
                marginBottom: "10px",
                marginRight: "50px",
              }}
            >
              <ul
                style={{
                  listStyleType: "disc",
                  paddingTop: "0",
                  marginBottom: "0",
                }}
              >
                <h3
                  style={{
                    fontSize: "12px",
                    color:
                      password.length > 12 &&
                      special.test(password) &&
                      caps.test(password)
                        ? "green"
                        : "red",
                    textAlign: "left",
                  }}
                >
                  Password requirements:
                </h3>
                <li
                  style={{
                    fontSize: "12px",
                    color: password.length > 12 ? "green" : "red",
                    textAlign: "left",
                  }}
                >
                  Password length must be greater than 12.
                </li>
                <li
                  style={{
                    fontSize: "12px",
                    color: special.test(password) ? "green" : "red",
                    textAlign: "left",
                  }}
                >
                  Must contain special character.
                </li>
                <li
                  style={{
                    fontSize: "12px",
                    color: caps.test(password) ? "green" : "red",
                    textAlign: "left",
                  }}
                >
                  Must contain at least one capital letter.
                </li>
                <li
                  style={{
                    fontSize: "12px",
                    color: number.test(password) ? "green" : "red",
                    textAlign: "left",
                  }}
                >
                  Must contain at least one number.
                </li>
              </ul>
            </ul>
          </div>

          <div>
            <MainButton text="Create Account" />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div>
            <hr />
            <p>
              Already have an account?{" "}
              <NavLink style={{ textDecoration: "underline" }} to="/login">
                Login
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div
        className="signup-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(255, 200, 255, 10)",
        }}
      >
        <form className="signup-form" onSubmit={handleFormSubmit}>
          <div>
            <p>Please enter your authorization code to Sign Up:</p>
          </div>
          <label>
            <input
              className="signup-input"
              type="text"
              value={authCode}
              onChange={handleInputChange}
            />
          </label>
          <MainButton type="submit" text="Submit" />
        </form>
      </div>
    );
  }
};
