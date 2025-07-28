import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import ResultPage from "./components/ResultPage";

const App = () => {
  const [formData, setFormData] = useState({});  // holds all form data
  const [step, setStep] = useState(1);           // controls which form step we're on

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/form"
          element={
            <>
              {step === 1 && (
                <StepOne
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                />
              )}
              {step === 2 && (
                <StepTwo
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}
              {step === 3 && (
                <StepThree
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}
              {step === 4 && (
                <ResultPage
                  formData={formData}
                  prevStep={() => setStep(3)}
                />
              )}
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
