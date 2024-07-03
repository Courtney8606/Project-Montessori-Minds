import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { createStaff } from "../services/staff";
import backgroundImage from "/assets/banner.jpg";
import MainButton from "../components/Buttons/MainButton";

export const AddStaffMemberPage = () => {
  const username = localStorage.getItem("username");
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [fileName, setFileName] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [awards, setAwards] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/login");
    }
  }, [username, navigate]);

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
        response.message !== "You have successfully added a new staff member"
      ) {
        setErrorMessage("Error creating staff member!");
      } else {
        navigate("/staffmanagement", { replace: true });
        window.location.reload();
      }
    } catch (err) {
      setErrorMessage("Unknown error: Please try again");
    }
  };

  const handleNameChange = (event) => setName(event.target.value);
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleQualificationsChange = (event) =>
    setQualifications(event.target.value);
  const handleAwardsChange = (event) => setAwards(event.target.value);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleFileButtonClick = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    document.getElementById("fileInput").click(); // Programmatically trigger file input
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
          <br />
          <label htmlFor="imagetitle">Upload Image</label>
          <MainButton text="Select Image" onClick={handleFileButtonClick} />
          {/* Hidden file input */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {/* Display selected file name */}
          {fileName && <p>{fileName}</p>}
          <br />
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter job title"
            value={title}
            onChange={handleTitleChange}
            className="login-input"
          />
          <br />
          <label htmlFor="qualifications">Qualifications</label>
          <input
            id="qualifications"
            type="text"
            placeholder="Enter qualifications"
            value={qualifications}
            onChange={handleQualificationsChange}
            className="login-input"
          />
          <br />
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
          <div className="staffbutton-container">
            <MainButton
              text=" < Back"
              onClick={() => navigate("/staffmanagement")}
              style={{ marginTop: "20px" }}
            />
            <MainButton
              text="Add"
              type="submit" // Submit form only on "Add" button click
              style={{ marginTop: "20px", marginLeft: "20px" }}
            />
          </div>
        </form>
      </div>
    </>
  );
};
