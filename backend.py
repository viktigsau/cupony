from flask import Flask, jsonify, request
from flask_cors import CORS
from db import DB


app = Flask(__name__)

CORS(app)

db = DB("cupons.json")

@app.route("/cupons", methods=['GET'])
def get_cupons():
    domain = request.args.get('domain')
    
    cupons = db.enshure(domain.replace(".", "%2E"), [])

    return jsonify({"cupons":cupons}), 200

if __name__ == "__main__":
    app.run("0.0.0.0", port=5000)