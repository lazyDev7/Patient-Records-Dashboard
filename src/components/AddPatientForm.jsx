import React, { useState } from "react";
import "../styles/AddPatientForm.css";

const AddPatientForm = ({ onAddPatient, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    address: "",
    medicalHistory: "",
  });

  const [errors, setErrors] = useState({
    age: "",
    contact: "",
  });

  const validateField = (name, value) => {
    switch (name) {
      case "age": {
        if (value && (parseInt(value) < 0 || isNaN(parseInt(value)))) {
          return "Age cannot be negative";
        }
        break;
      }
      case "contact": {
        const contactRegex = /^\d{10}$/;
        if (value && !contactRegex.test(value)) {
          return "Contact must be exactly 10 digits";
        }
        break;
      }
      default:
        return "";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const ageError = validateField("age", formData.age);
    const contactError = validateField("contact", formData.contact);

    if (ageError || contactError) {
      setErrors({
        age: ageError,
        contact: contactError,
      });
      return;
    }

    const newPatient = {
      ...formData,
      id: Date.now(),
      age: parseInt(formData.age),
    };
    onAddPatient(newPatient);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (name === "contact") {
      // Only allow digits and limit to 10 characters
      const sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({
        ...prev,
        [name]: sanitizedValue,
      }));
    } else if (name === "age") {
      // Only allow positive numbers
      const sanitizedValue = value.replace(/\D/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: sanitizedValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Validate field as user types
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <div className="form-overlay">
      <div className="form-content">
        <h2>Add New Patient</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="0"
              required
            />
            {errors.age && <span className="error-message">{errors.age}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
              placeholder="Enter 10 digit number"
            />
            {errors.contact && (
              <span className="error-message">{errors.contact}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="medicalHistory">Medical History:</label>
            <textarea
              id="medicalHistory"
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit">Add Patient</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatientForm;
