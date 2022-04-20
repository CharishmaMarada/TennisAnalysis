import json

import pymongo

myClient = pymongo.MongoClient("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false")
myDb = myClient["test"]
myCollection = myDb["c"]


def getMyDb(app_name):
    return myClient[app_name]

def getCollections():
    filter = {"name": {"$regex": r"^(?!system\\.)"}}
    return myDb.list_collection_names(filter=filter)

def insert(data):
    myCollection.insert_one(data)

if __name__ == "__main__":
    test = {
        "name" : "charishma",
        "age" : 26
    }
    test = json.dumps(test)
    print(test)
    insert(json.loads(test))