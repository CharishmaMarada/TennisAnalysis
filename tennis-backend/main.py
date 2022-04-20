import os

import helpers as helper
from os import path
from folders_file import save_to_json,read_csv_lines

def populateData(data,match_data):
    json_data = {}

    set = []
    set_number = 0
    games = []
    game = []
    game_number = 1

    match = {}
    current_match_id = "null"
    counter = 0
    for line in data[1:]:
        # print('line no:',line)
        split_data = line.split(',')
        if current_match_id != split_data[0]:
            match = helper.add_match_won(match)
            save_to_json(match, current_match_id)
            counter += 1
            match = helper.create_match(split_data,match_data[counter])
            current_match_id = split_data[0]

        if int(split_data[7]) == 0:
            game.append(helper.map_point_data(split_data))
        else:
            game.append(helper.map_point_data(split_data))
            games = helper.add_game_to_games(games,split_data[7],game)
            game = list()

        if int(split_data[5]) !=0:
            set = helper.add_game_to_set(set,split_data[5],games)
            match["sets"].append(set)
            set = list()
            games = list()


data_dir = "/Users/yogsing/Documents/project/tennis_slam_pointbypoint"

for files in os.listdir(data_dir):
    if files.endswith('matches.csv'):
        _file_name = files.split('-matches.csv')[0]
        data = read_csv_lines(path.join(data_dir, f'{_file_name}-points.csv'))
        match_data = read_csv_lines(path.join(data_dir, f'{_file_name}-matches.csv'))
        try:
            populateData(data,match_data)
        except Exception as e:
            print("Error in: ",_file_name)
            print(e)
    # pass
# data = read_csv_lines(path.join(data_dir, '2011-ausopen-points.csv'))
# match_data = read_csv_lines(path.join(data_dir, '2011-ausopen-matches.csv'))
# populateData(data,match_data)
