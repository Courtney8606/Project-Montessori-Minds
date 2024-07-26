import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <dotlottie-player
        src="https://lottie.host/d7ab50f6-8f92-49ef-b8a1-ced7f28ff65d/ige6uVEDOj.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default Loading;
