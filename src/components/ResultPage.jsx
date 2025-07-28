// src/components/ResultPage.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResultPage = ({ formData, prevStep }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const response = await axios.post(
          'https://da3f6eac9dbe.ngrok-free.app/predict',
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const { prediction, confidence } = response.data;

        setResult({
          prediction: prediction === 1 ? '🚨 Fraud Detected' : '✅ Legitimate Claim',
          confidence: (confidence || 0.87) * 100,
        });
      } catch (error) {
        console.error('Prediction failed:', error);
        setResult({
          prediction: '❌ Prediction failed. Please try again.',
          confidence: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPrediction();
  }, [formData]);

  return (
    <div className="form-card text-center">
      <h2>🧠 Prediction Result</h2>

      {loading ? (
        <p className="loading-text">🔄 Analyzing Claim... Please wait.</p>
      ) : (
        <div className="result-message">
          <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
            {result.prediction}
          </h3>
          <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
            Confidence Score: {result.confidence.toFixed(2)}%
          </p>
        </div>
      )}

      <div className="button-group" style={{ marginTop: '2rem' }}>
        <button
          onClick={prevStep}
          style={{ backgroundColor: '#e5e7eb', color: '#374151' }}
        >
          🔙 Back to Review
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
