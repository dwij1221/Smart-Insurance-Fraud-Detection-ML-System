# backend/app.py
from flask import Flask, request, jsonify
from catboost import CatBoostClassifier
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

# Load the model
model = CatBoostClassifier()
model.load_model("model.cbm")

# Features expected by the model
FEATURE_COLUMNS = [
    "months_as_customer",
    "policy_number",
    "policy_deductable",
    "policy_annual_premium",
    "umbrella_limit",
    "age",
    "insured_sex",
    "insured_education_level",
    "insured_zip",
    "insured_occupation",
    "insured_location",
    "incident_type",
    "collision_type",
    "authorities_contacted",
    "number_of_vehicles_involved",
    "total_claim_amount",
    "property_claim",
    "injury_claim",
    "vehicle_claim"
]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Ensure all expected fields are present
        missing_fields = [col for col in FEATURE_COLUMNS if col not in data]
        if missing_fields:
            return jsonify({'error': f'Missing fields: {missing_fields}'}), 400

        # Reorder columns to match model input
        df = pd.DataFrame([{col: data[col] for col in FEATURE_COLUMNS}])

        prediction = model.predict(df)[0]
        return jsonify({'prediction': str(int(prediction))})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)

