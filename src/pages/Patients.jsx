import React, { useState, useEffect } from "react";
import PatientCard from "../components/PatientCard";
import PatientModal from "../components/PatientModal";
import AddPatientForm from "../components/AddPatientForm";
import { mockPatients } from "../data/mockPatients";
import "../styles/Patients.css";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    // Simulate API fetch with setTimeout
    const fetchPatients = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
        setPatients(mockPatients);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch patients:", error);
        setIsLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddPatient = (newPatient) => {
    setPatients((prev) => [...prev, newPatient]);
  };

  if (isLoading) {
    return <div className="loading">Loading patients...</div>;
  }

  return (
    <div className="patients-page">
      <div className="patients-header">
        <h2>Patient Records</h2>
        <div className="controls">
          <input
            type="text"
            placeholder="Search patients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button
            className="add-patient-btn"
            onClick={() => setShowAddForm(true)}
          >
            Add New Patient
          </button>
        </div>
      </div>

      {filteredPatients.length > 0 ? (
        <div className="patients-grid">
          {filteredPatients.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onViewDetails={setSelectedPatient}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No patients found matching "{searchQuery}"</p>
          <p>Try adjusting your search or add a new patient</p>
        </div>
      )}

      {selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}

      {showAddForm && (
        <AddPatientForm
          onAddPatient={handleAddPatient}
          onClose={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
};

export default Patients;
