// src/components/StepOne.jsx
import React from 'react';

const StepOne = ({ formData, setFormData, nextStep }) => {
  return (
    <div className="form-card">
      <h2 className="text-center">📝 Policy Information</h2>

      <div className="form-group">
        <label>Months as Customer</label>
        <input
          type="number"
          value={formData.months_as_customer || ''}
          onChange={(e) => setFormData({ ...formData, months_as_customer: parseFloat(e.target.value) })}
        />
      </div>

      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          value={formData.age || ''}
          onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
        />
      </div>

      <div className="form-group">
        <label>Policy Number</label>
        <input
          type="number"
          value={formData.policy_number || ''}
          onChange={(e) => setFormData({ ...formData, policy_number: parseInt(e.target.value) })}
        />
      </div>

      <div className="form-group">
        <label>Policy Deductable</label>
        <input
          type="number"
          value={formData.policy_deductable || ''}
          onChange={(e) => setFormData({ ...formData, policy_deductable: parseFloat(e.target.value) })}
        />
      </div>

      <div className="form-group">
        <label>Annual Premium</label>
        <input
          type="number"
          value={formData.policy_annual_premium || ''}
          onChange={(e) => setFormData({ ...formData, policy_annual_premium: parseFloat(e.target.value) })}
        />
      </div>

      <div className="form-group">
        <label>Umbrella Limit</label>
        <input
          type="number"
          value={formData.umbrella_limit || ''}
          onChange={(e) => setFormData({ ...formData, umbrella_limit: parseFloat(e.target.value) })}
        />
      </div>

      <div className="form-group">
        <label>Zip Code</label>
        <input
          type="number"
          value={formData.insured_zip || ''}
          onChange={(e) => setFormData({ ...formData, insured_zip: parseInt(e.target.value) })}
        />
      </div>

      <div className="button-group">
        <button onClick={nextStep}>Next ➡️</button>
      </div>
    </div>
  );
};

export default StepOne;
