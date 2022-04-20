import db


def match_won(player):
    query = {'match_won': str(player)}
    params = {'slam': 1, 'p1': 1, 'p2': 1, 'match_won': 1, '_id': 0, 'match_id': 1}
    query_res = db.myCollection.find(query, params)
    res = []
    for record in query_res:
        res.append(record)
    return res


def match_won_count(player):
    return match_won(player).__len__()


def set_won(set_number, player):
    query = {f'sets.{set_number}.set_won': str(player)}
    params = {'slam': 1, 'p1': 1, 'p2': 1, 'match_won': 1, '_id': 0, 'match_id': 1}
    query_res = db.myCollection.find(query, params)
    res = []
    for record in query_res:
        res.append(record)
    return res


def getMatch(matchId):
    query = {'match_id': str(matchId)}
    params = {'_id': 0}
    query_res = db.myCollection.find(query, params)
    for x in query_res[:1]:
        return x


def set_won_count(set_number, player):
    return set_won(set_number, player).__len__()


def getSetScore(scoreArr):
    _where = []
    for score in scoreArr:
        _s = f"sets.{score['set']}.p{score['player']}_score"
        _where.append({_s: score['score']})
    query = {'$and': _where}
    print("query :", query)
    params = {'slam': 1, 'p1': 1, 'p2': 1, 'match_won': 1, '_id': 0, 'match_id': 1}

    query_res = db.myCollection.find(query, params)
    res = []
    _p1_counter = 0
    _p2_counter = 0

    for x in query_res:
        if x['match_won'] == '1':
            _p1_counter += 1
        elif x['match_won'] == '2':
            _p2_counter += 1
        res.append(x)

    return {
        "p1": _p1_counter,
        "p2": _p2_counter,
        "matches": res
    }


def getGameScore(scoreArr):
    _where = []
    for score in scoreArr:
        _s = f"sets.{score['set']}.p{score['player']}_score"
        _s1 = f"sets.{score['set']}.games.{score['score'] + 1}.points.p{score['player']}_score"
        _where.append({_s: {"$gte": score['score']}})
        _where.append({_s1: str(score['gameScore'])})
    query = {'$and': _where}
    print("query :", query)
    params = {'slam': 1, 'p1': 1, 'p2': 1, 'match_won': 1, '_id': 0, 'match_id': 1}

    query_res = db.myCollection.find(query, params)
    res = []
    _p1_counter = 0
    _p2_counter = 0

    for x in query_res:
        if x['match_won'] == '1':
            _p1_counter += 1
        elif x['match_won'] == '2':
            _p2_counter += 1
        res.append(x)

    return {
        "p1": _p1_counter,
        "p2": _p2_counter,
        "matches": res
    }


def newGameScore(scoreArr):
    query = []
    for set in scoreArr:
        if set['gameWinner'] != None:
            _set = set['set']
            query.append({f'sets.{_set}.set_won': str(set['gameWinner'])})
        if set['p1Score'] != None or set['p2Score'] != None:
            _set = set['set']
            if set['set'] < (len(scoreArr) - 1):
                query.append({f'sets.{_set}.p1_score': set['p1Score']})
                query.append({f'sets.{_set}.p2_score': set['p2Score']})
            else:
                if set['p1gameScore'] == None or set['p2gameScore'] == None or set['gameWinner'] != None:
                    query.append({f'sets.{_set}.p1_score': set['p1Score']})
                    query.append({f'sets.{_set}.p2_score': set['p2Score']})
                else:
                    _cuurent_game = set['p1Score'] + set['p2Score'] - 1
                    # query.append({f'sets.{_set}.games.{_cuurent_game}': {'$elemMatch': {"p1_score": str(set['p1gameScore']), "p2_score": str(set['p2gameScore'])}}})
                    query.append({f'sets.{_set}.games.{_cuurent_game}.p1_score': str(set['p1Score'])})
                    query.append({f'sets.{_set}.games.{_cuurent_game}.p2_score': str(set['p2Score'])})
        elif set['p1Score'] == None and set['p2Score'] == None and set['gameWinner'] != None:
            _set = set['set']
            query.append({f'sets.{_set}.set_won': str(set['gameWinner'])})
        if set['set'] == (len(scoreArr) - 1) and set['gameWinner'] == None and set['p1gameScore'] != None and set[
            'p2gameScore'] != None:
            _cuurent_game = set['p1Score'] + set['p2Score']
            query.append({f'sets.{_set}.games.{_cuurent_game}.points': {
                '$elemMatch': {"p1_score": str(set['p1gameScore']), "p2_score": str(set['p2gameScore'])}}})
    _query = {'$and': query}
    print(_query)
    params = {'slam': 1, 'p1': 1, 'p2': 1, 'match_won': 1, '_id': 0, 'match_id': 1}

    query_res = db.myCollection.find(_query, params)
    res = []
    _p1_counter = 0
    _p2_counter = 0

    for x in query_res:
        if x['match_won'] == '1':
            _p1_counter += 1
        elif x['match_won'] == '2':
            _p2_counter += 1
        res.append(x)

    return {
        "p1": _p1_counter,
        "p2": _p2_counter,
        "matches": res
    }


if __name__ == "__main__":
    # print(match_won_count('1'))
    # print(set_won(1, 1))
    # print(getMatch("2011-ausopen-1101"))
    q1 = {
        "gameWinner": None,
        "p1Score": 6,
        "p1gameScore": None,  # pointScore
        "p2Score": 4,
        "p2gameScore": None,  # pointScore
        "set": 0
    }
    q11 = {
        "gameWinner": None,
        "p1Score": 4,
        "p1gameScore": 15,  # pointScore
        "p2Score": 6,
        "p2gameScore": 30,  # pointScore
        "set": 1
    }
    q2 = {
        "gameWinner": None,
        "p1Score": 3,
        "p1gameScore": 15,  # pointScore
        "p2Score": 3,
        "p2gameScore": 15,  # pointScore
        "set": 2
    }
    print(newGameScore([q1,q11]))
