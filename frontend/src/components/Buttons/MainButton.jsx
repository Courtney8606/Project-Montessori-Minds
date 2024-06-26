import { useState } from "react";

const MainButton = ({ text, style, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyles = {
    backgroundColor: "#a2dbf3",
    color: "black",
    height: "50px",
    width: "150px",
    fontSize: "16px",
    border: "2px solid #a2dbf3",
    borderRadius: "10px",
    cursor: "pointer",
    ...style,
  };

  const hoverStyles = {
    backgroundColor: "#00215e",
    color: "white",
    border: "2px solid transparent",
    ...style,
  };

  return (
    <div className="main-view">
      <button
        type="submit"
        role="submit-button"
        id="submit"
        onClick={onClick || (() => {})}
        style={isHovered ? { ...defaultStyles, ...hoverStyles } : defaultStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </button>
    </div>
  );
};

export default MainButton;
