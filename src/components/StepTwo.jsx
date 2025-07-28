// src/components/StepTwo.jsx
import React from 'react';

const StepTwo = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="form-card">
      <h2 className="text-center">👤 Customer & Vehicle Details</h2>

      <div className="form-group">
        <label>Gender</label>
        <select
          value={formData.insured_sex || ''}
          onChange={(e) => setFormData({ ...formData, insured_sex: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
      </div>

      <div className="form-group">
        <label>Education Level</label>
        <select
          value={formData.insured_education_level || ''}
          onChange={(e) => setFormData({ ...formData, insured_education_level: e.target.value })}
        >
          <option value="">Select Education</option>
          <option value="High School">High School</option>
          <option value="Associate">Associate</option>
          <option value="College">College</option>
          <option value="Masters">Masters</option>
          <option value="Doctorate">Doctorate</option>
        </select>
      </div>

      <div className="form-group">
        <label>Occupation</label>
        <input
          type="text"
          value={formData.insured_occupation || ''}
          onChange={(e) => setFormData({ ...formData, insured_occupation: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          value={formData.insured_location || ''}
          onChange={(e) => setFormData({ ...formData, insured_location: e.target.value })}
        />
      </div>

      <div className="button-group">
        <button onClick={prevStep} style={{ backgroundColor: '#e5e7eb', color: '#374151' }}>⬅️ Back</button>
        <button onClick={nextStep}>Next ➡️</button>
      </div>
    </div>
  );
};

export default StepTwo;
