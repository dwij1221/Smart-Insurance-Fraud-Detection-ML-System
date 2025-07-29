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

This is an end-to-end AI system designed to detect fraud in vehicle insurance claims using a real-world dataset with 60+ features. The project includes deep data analysis, feature engineering (Pandas, NumPy), and EDA (Seaborn, Matplotlib).

Machine learning models like CatBoost, XGBoost, Random Forest, and Linear Regression were trained, with CatBoost delivering the best results (Accuracy: 81%, ROC AUC: 0.8213) using class weights for handling imbalanced data. Explainable AI tools SHAP and LIME were used to make predictions transparent and trustworthy.

A custom decision engine classifies claims as Approve, Flag, or Manual Review based on risk scores. The model is served through a FastAPI backend, integrated into a clean, pastel-themed React + Flask dashboard. Inputs are collected via a multi-step form.

The full system is Dockerized and hosted on Render, providing scalable real-time predictions. It helps insurers reduce manual review time, cut down on fraudulent payouts, and meet compliance standards through model interpretability.

