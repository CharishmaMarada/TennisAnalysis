import json


def map_point_data(data):
    point = {
        'point_counter': data[8],
        'point_won': data[9],
        'p1_score': data[13],
        'p2_score': data[14]
    }
    return point


def game_points_data(game_won, points):
    game = {
        "game_won": game_won,
        "points": points
    }
    return game


def add_game_to_set(set, set_won, games):
    _p1 = 0
    _p2 = 0
    for game in games:
        if game['game_won'] == '1':
            _p1 += 1
        elif game['game_won'] == '2':
            _p2 += 1
    _set = {
        "set_won": set_won,
        "p1_score": _p1,
        "p2_score": _p2,
        "games": games

    }
    # set = set.append(_set)
    return _set


if __name__ == "__main__":
    point = {
        'point_counter': 1,
        'point_won': 'p1',
        'p1_score': 15,
        'p2_score': 30
    }
    p = {
        "p1": point,
        "p2": point
    }
    save_to_json(p, "test.json")


def create_match(split_data, match_data):
    split_match_data = match_data.split(',')
    match = {
        "match_id": split_match_data[0],
        "slam": split_match_data[2],
        "p1": split_match_data[4],
        "p2": split_match_data[5],
        "match_won": split_match_data[7],
        "sets": []
    }
    return match


def add_game_to_games(games, game_won, game):
    _p1_score = '-1'
    _p2_score = '-1'
    if len(games) == 0:
        if game_won == '1':
            _p1_score = '1'
            _p2_score = '0'
        elif game_won == '2':
            _p1_score = '0'
            _p2_score = '1'

    else:
        if game_won == '1':
            _p1_score = str(int(games[-1]['p1_score'])+1)
            _p2_score = str(games[-1]['p2_score'])
        elif game_won == '2':
            _p1_score = str(games[-1]['p1_score'])
            _p2_score = str(int(games[-1]['p2_score'])+1)

    _game = {
        "game_won": game_won,
        "p1_score": _p1_score,
        "p2_score": _p2_score,
        "points": game
    }
    games.append(_game)
    return games


def add_match_won(match):
    _p1_setsWon = 0
    _p2_setsWon = 0
    if len(match) != 0:
        for set in match['sets']:
            if set['set_won'] == '1':
                _p1_setsWon += 1
            elif set['set_won'] == '2':
                _p2_setsWon += 1
        if _p1_setsWon > _p2_setsWon:
            match['match_won'] = '1'
        else:
            match['match_won'] = '2'
    return match