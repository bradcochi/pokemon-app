from bson.objectid import ObjectId
from queries.client import MongoQueries
from models import FavoriteIn


class FavoritesQueries(MongoQueries):
    collection_name = "favorites"

    def create(self, favorite_in: FavoriteIn, user_id: str):
        favorite = favorite_in.dict()
        favorite["user_id"] = user_id
        search = self.find_one(user_id, favorite_in.pokemon_name)
        if search:
            return search
        result = self.collection.insert_one(favorite)
        if result.inserted_id:
            favorite["id"] = str(result.inserted_id)
            return favorite

    def find_one(self, user_id: str, pokemon_name: str):
        result = self.collection.find_one(
            {"user_id": user_id, "pokemon_name": pokemon_name}
        )
        if result is not None:
            result["id"] = str(result["_id"])
        return result

    def get_all(self, user_id: str):
        results = []
        for doc in self.collection.find({"user_id": user_id}):
            doc["id"] = str(doc["_id"])
            results.append(doc)
        return results

    def delete(self, id: str, user_id: str):
        result = self.collection.delete_one(
            {"_id": ObjectId(id), "user_id": user_id}
        )
        return result.deleted_count > 0
