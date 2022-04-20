import traceback

from folders_file import read_json,get_all_files_in_dir
from json import loads

counterp1, counterp2 = 0,0

q1 = "['sets'][0]['set_won']"
q2 = "['match_won']"

for file in get_all_files_in_dir("x"):
    try:
        data = loads(read_json(file))
        res1,res2 = eval("data"+q1),eval("data"+q2)
        if res1 == res2:
            counterp1 += 1
        else:
            counterp2 += 1

    except Exception as e:
        print(file)
        traceback.print_exc()
print(counterp1,counterp2)