import React from "react";

const Os = () => {
  return (
    <div>
      <div className="mobos">
        <h2>Mobile Operating System</h2>
        <ul>
          <li>Android</li>
          <li>Blackberry</li>
          <li>ios</li>
          <li>Windows Phone</li>
        </ul>
      </div>
      <div className="manu">
        <h2>Mobile Manufacturers</h2>
        <ul>
          <li style={{ listStyleType: "square" }}>Samsung</li>
          <li style={{ listStyleType: "disc" }}>Apple</li>
          <li style={{ listStyleType: "circle" }}>HTC</li>
          <li>Micromax</li>
        </ul>
      </div>
    </div>
  );
};

export default Os;
