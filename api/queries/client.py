from pymongo import MongoClient
import os

MONGO_USER = os.environ.get('MONGO_USER', '')
MONGO_PASSWORD = os.environ.get('MONGO_PASSWORD', '')
MONGO_HOST = os.environ.get('MONGO_HOST', '')
MONGO_DB = os.environ.get('MONGO_DB', '')

client = MongoClient(f'mongodb://{MONGO_USER}:{MONGO_PASSWORD}@{MONGO_HOST}')
db = client[MONGO_DB]

class MongoQueries:
    @property
    def collection(self):
        return db[self.collection_name]
