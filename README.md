Smart Insurance Claim Fraud Detection System

[Real Insurance Claims Dataset]
        ↓
[Data Cleaning & Feature Engineering]
        ↓
[EDA & Visualization]
        ↓
[Model Training & Evaluation]
(XGBoost / CatBoost / Linear Regression / Random Forest)
        ↓
[Fraud Risk Scoring + Metrics]
        ↓
[Explainable AI (SHAP & LIME)]
        ↓
[Decision Engine]
(Approve | Flag | Manual Review)
        ↓
[FastAPI Model Serving]
        ↓
[Frontend: React UI + Flask Backend]


Tech Stack:
Python, Pandas, NumPy, Seaborn, Matplotlib, CatBoost, XGBoost, SHAP, LIME, FastAPI, Flask, React.js, Tailwind CSS, Axios, Docker, Render

An end-to-end AI system built to detect fraud in vehicle insurance claims using 60+ real-world features. It includes in-depth data analysis, feature engineering (Pandas, NumPy), and EDA (Seaborn, Matplotlib).

Multiple models were tested, with CatBoost achieving the best performance (Accuracy: 81%, ROC AUC: 0.8213) using class weights for imbalance. SHAP and LIME enabled explainable predictions.

A custom decision engine flags claims as Approve, Manual Review, or Fraud. Served via FastAPI, the model powers a React + Flask dashboard with a pastel UI and multi-step input form.

Dockerized and deployed on Render for real-time predictions, the system helps insurers cut fraud losses, reduce manual workload, and stay audit-compliant.


