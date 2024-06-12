import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { createStaff } from "../services/staff";
import backgroundImage from "../assets/banner.jpg";
import MainButton from "../components/Buttons/MainButton";
import { useEffect } from "react";

export const AddStaffMemberPage = () => {
  const username = localStorage.getItem("username");
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [awards, setAwards] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", file);
      formData.append("title", title);
      formData.append("qualifications", `{${qualifications.split(",")}}`);
      formData.append("awards", `{${awards.split(",")}}`);

      const response = await createStaff(formData);
      if (
        response.message != "You have successfully added a new staff member"
      ) {
        setErrorMessage("Error creating staff member!");
      } else {
        navigate("/staffmanagement");
      }
    } catch (err) {
      setErrorMessage("Unknown error: Please try again");
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleQualificationsChange = (event) => {
    setQualifications(event.target.value);
  };

  const handleAwardsChange = (event) => {
    setAwards(event.target.value);
  };

  useEffect(() => {
    if (username) {
      navigate("/addstaffmember");
    } else {
      navigate("/login");
    }
  }, [username, navigate]);

  return (
    <>
      <div
        className="login-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          marginTop: "50px",
        }}
      >
        <form className="login-form" onSubmit={handleSubmit}>
          <p>Add new staff member details below</p>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
            className="login-input"
          />
          <br></br>
          <label htmlFor="imagetitle">Upload Image</label>
          <MainButton
            text="Select Image"
            onClick={() => {
              document.getElementById("fileInput").click();
            }}
          />
          {/* Hidden file input */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <br></br>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter job title"
            value={title}
            onChange={handleTitleChange}
            className="login-input"
          />
          <br></br>
          <label htmlFor="qualifications">Qualifications</label>
          <input
            id="qualifications"
            type="text"
            placeholder="Enter qualifications"
            value={qualifications}
            onChange={handleQualificationsChange}
            className="login-input"
          />
          <br></br>
          <label htmlFor="awards">Awards</label>
          <input
            id="awards"
            type="text"
            placeholder="Enter awards"
            value={awards}
            onChange={handleAwardsChange}
            className="login-input"
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <MainButton
            text="Add"
            style={{
              marginTop: "20px",
            }}
          />
        </form>
      </div>
    </>
  );
};
