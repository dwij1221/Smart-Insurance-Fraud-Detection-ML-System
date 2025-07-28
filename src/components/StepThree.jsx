// src/components/StepThree.jsx
import React from 'react';

const StepThree = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="form-card">
      <h2 className="text-center">🚗 Incident Details</h2>

      <div className="form-group">
        <label>Incident Type</label>
        <select
          value={formData.incident_type || ''}
          onChange={(e) => setFormData({ ...formData, incident_type: e.target.value })}
        >
          <option value="">Select Incident Type</option>
          <option value="Single Vehicle Collision">Single Vehicle Collision</option>
          <option value="Vehicle Theft">Vehicle Theft</option>
          <option value="Multi-vehicle Collision">Multi-vehicle Collision</option>
          <option value="Parked Car">Parked Car</option>
        </select>
      </div>

      <div className="form-group">
        <label>Collision Type</label>
        <select
          value={formData.collision_type || ''}
          onChange={(e) => setFormData({ ...formData, collision_type: e.target.value })}
        >
          <option value="">Select Collision Type</option>
          <option value="Rear Collision">Rear Collision</option>
          <option value="Side Collision">Side Collision</option>
          <option value="Front Collision">Front Collision</option>
        </select>
      </div>

      <div className="form-group">
        <label>Authorities Contacted</label>
        <select
          value={formData.authorities_contacted || ''}
          onChange={(e) => setFormData({ ...formData, authorities_contacted: e.target.value })}
        >
          <option value="">Select Authority</option>
          <option value="Police">Police</option>
          <option value="Fire">Fire</option>
          <option value="Other">Other</option>
          <option value="None">None</option>
        </select>
      </div>

      <div className="form-group">
        <label>Number of Vehicles Involved</label>
        <input
          type="number"
          value={formData.number_of_vehicles_involved || ''}
          onChange={(e) => setFormData({ ...formData, number_of_vehicles_involved: parseInt(e.target.value) })}
        />
      </div>

      <div className="form-group">
        <label>Total Claim Amount</label>
        <input
          type="number"
          value={formData.total_claim_amount || ''}
          onChange={(e) => setFormData({ ...formData, total_claim_amount: parseFloat(e.target.value) })}
        />
      </div>

      <div className="form-group">
        <label>Property Claim</label>
        <input
          type="number"
          value={formData.property_claim || ''}
          onChange={(e) => setFormData({ ...formData, property_claim: parseFloat(e.target.value) })}
        />
      </div>

      <div className="form-group">
        <label>Injury Claim</label>
        <input
          type="number"
          value={formData.injury_claim || ''}
          onChange={(e) => setFormData({ ...formData, injury_claim: parseFloat(e.target.value) })}
        />
      </div>

      <div className="form-group">
        <label>Vehicle Claim</label>
        <input
          type="number"
          value={formData.vehicle_claim || ''}
          onChange={(e) => setFormData({ ...formData, vehicle_claim: parseFloat(e.target.value) })}
        />
      </div>

      <div className="button-group">
        <button onClick={prevStep} style={{ backgroundColor: '#e5e7eb', color: '#374151' }}>⬅️ Back</button>
        <button onClick={nextStep}>Submit ➡️</button>
      </div>
    </div>
  );
};

export default StepThree;
