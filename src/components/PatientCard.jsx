import React from "react";
import "../styles/PatientCard.css";

const PatientCard = ({ patient, onViewDetails }) => {
  return (
    <div className="patient-card">
      <h3>{patient.name}</h3>
      <div className="patient-info">
        <p>Age: {patient.age}</p>
        <p>Contact: {patient.contact}</p>
      </div>
      <button
        className="view-details-btn"
        onClick={() => onViewDetails(patient)}
      >
        View Details
      </button>
    </div>
  );
};

export default PatientCard;
