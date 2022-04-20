from json import loads
import queries as q


def matchWon(data):
    _data = loads(data)
    return q.match_won(player=_data['player'])[:100]


def matchWonCount(data):
    _data = loads(data)
    return q.match_won_count(player=_data['player'])


def setWon(data):
    _data = loads(data)
    return q.set_won(_data['player'], _data['set'])


def setWonCount(data):
    _data = loads(data)
    return q.set_won_count(_data['player'], _data['set'])


def getMatch(data):
    _data = loads(data)
    return q.getMatch(_data['matchId'])


def setScore(data):
    _data = loads(data)
    return q.getSetScore(_data)


def gameScore(data):
    _data = loads(data)
    return q.newGameScore(_data)