import json

from flask import Flask, request, jsonify
from flask_cors import CORS
import service as s

app = Flask(__name__)
CORS(app)


@app.route('/hello', methods=['GET'])
def getMemory():
    res = {
        "text": "hello"
    }
    return json.dumps(res)


@app.route('/hello', methods=['POST'])
def postHello():
    name = json.loads(request.data)['player']
    res = {
        "text": f"hello {name}!"
    }
    return json.dumps(res)


@app.route('/match_won', methods=['POST'])
def getMatchWon():
    res = s.matchWon(request.data)
    return json.dumps({"text": res})


@app.route('/match_won_count', methods=['POST'])
def getMatchWonCount():
    res = s.matchWonCount(request.data)
    return json.dumps({"text": res})


@app.route('/set_won', methods=['POST'])
def getSetWon():
    res = s.setWon(request.data)
    return json.dumps({"text": res})


@app.route('/set_won_count', methods=['POST'])
def getSetWonCount():
    res = s.setWonCount(request.data)
    return json.dumps({"text": res})

@app.route('/get_match', methods=['POST'])
def getMatch():
    res = s.getMatch(request.data)
    return json.dumps({"text": res})

@app.route('/set_score', methods=['POST'])
def getSetScore():
    res = s.setScore(request.data)
    return json.dumps(res)

@app.route('/game_score', methods=['POST'])
def getGameScore():
    res = s.gameScore(request.data)
    return json.dumps(res)

if __name__ == "__main__":
    app.run(debug=True)
