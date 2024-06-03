import React, { useState } from 'react';
import "./StaffCard.css";

const StaffList = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredAwardsIndex, setHoveredAwardsIndex] = useState(null);


  return (
    <div className="card-container">
      {data.map((staff, index) => (
        <div className="card" key={index}>
          <img 
            src={`/src/assets/${staff.image}`} 
            alt={staff.name}
            className="card-img-top" 
          />
          <div className="card-body">
            <h5 className="card-title">{staff.name}</h5>
            <p className="card-title">{staff.title}</p>
            <a 
              className="btn btn-primary team-button" 
              onMouseEnter={() => setHoveredIndex(index)} 
              onMouseLeave={() => setHoveredIndex(null)}
            >
              Qualifications
            </a>
            {hoveredIndex === index && (
              <p className="card-text">
                {staff.qualifications && staff.qualifications.join(', ')}
              </p>
            )}
            {staff.awards && staff.awards.length > 0 && (
              <a 
                className="btn btn-primary team-button" 
                onMouseEnter={() => setHoveredAwardsIndex(index)} 
                onMouseLeave={() => setHoveredAwardsIndex(null)}
              >
                Awards
              </a>
            )}
            {hoveredAwardsIndex === index && staff.awards && staff.awards.length > 0 && (
              <p className="card-text">
                {staff.awards.join(', ')}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaffList;