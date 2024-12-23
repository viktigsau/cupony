from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/cupons", methods=['GET'])
def get_cupons():
    domain = request.args.get('domain')
    
    