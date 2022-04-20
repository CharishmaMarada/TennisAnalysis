from os import path,makedirs,listdir
from json import dumps
import db
def getBasePath():
    return "/Users/yogsing/PycharmProjects/tennis-backend/test"

def read_csv(path):
    with open(path) as file:
        return file.read()

def read_csv_lines(path):
    with open(path) as file:
        return file.readlines()

def save_to_json(data,filename):
    checked_path = checkAndCreateDirs(filename)
    filename = path.join(checked_path,filename+".json")
    with open(filename,'w') as output:
        output.write(dumps(data,indent=4))
        db.insert(data)

def read_json(filename):
    filename_parts = filename.split('-')
    dir_path = "/".join(filename_parts[:-1])
    basePath = path.join(getBasePath(), dir_path)
    basePath = path.join(basePath,filename)
    with open(basePath,'r') as fd:
        return fd.read()


def checkAndCreateDirs(filename):
    filename_parts = filename.split('-')
    dir_path = "/".join(filename_parts[:-1])
    basePath = path.join(getBasePath(),dir_path)
    try:
        makedirs(basePath)
    except FileExistsError:
        pass
    finally:
        return basePath

def get_all_files_in_dir(dir):
    try:
        return listdir(path.join(getBasePath(),'2011/ausopen',))
    except Exception as e:
        print("Folder Does not Exist!")

if __name__ == "__main__":
    print(get_all_files_in_dir(path.join(getBasePath(),'2011/ausopen',)))
