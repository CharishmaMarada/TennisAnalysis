import traceback

from folders_file import read_json,get_all_files_in_dir
from json import loads

query = input("Enter the query to run: ")

counterp1, counterp2 = 0,0

q1 = "['sets']['set_won']"
'''
    ['match_won']
'''

for file in get_all_files_in_dir("x"):
    try:
        data = loads(read_json(file))
        res = eval("data"+q1)
        print(res)
        break
        # if res == '1':
        #     counterp1 += 1
        # else:
        #     counterp2 += 1

    except Exception as e:
        traceback.print_exc()
print(counterp1,counterp2)