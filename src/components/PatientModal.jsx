import React from "react";
import "../styles/PatientModal.css";

const PatientModal = ({ patient, onClose }) => {
  if (!patient) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Patient Details</h2>
        <div className="patient-details">
          <p>
            <strong>Name:</strong> {patient.name}
          </p>
          <p>
            <strong>Age:</strong> {patient.age}
          </p>
          <p>
            <strong>Contact:</strong> {patient.contact}
          </p>
          <p>
            <strong>Address:</strong> {patient.address}
          </p>
          <p>
            <strong>Medical History:</strong> {patient.medicalHistory}
          </p>
        </div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PatientModal;
