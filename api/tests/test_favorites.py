from fastapi.testclient import TestClient
from main import app
from queries.favorites import FavoritesQueries
from models import FavoriteIn
from authenticator import authenticator

client = TestClient(app)


def fake_get_current_account_data():
    return {"id": "1337", "username": "fake-user"}


class FakeFavoritesQueries:
    def create(self, favorite_in: FavoriteIn, user_id: str):
        favorite = favorite_in.dict()
        favorite["id"] = "fake-id-from-db"
        favorite["user_id"] = user_id
        return favorite

    def get_all(self, user_id: str):
        return [
            {
                "pokemon_name": "bulbasaur",
                "id": "64aef8ccd5cee4f04efa09bf",
                "user_id": user_id,
            }
        ]

    def delete(self, id: str, user_id: str):
        return True


def test_create_favorite():
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    favorite_in = {"pokemon_name": "pikachu"}

    res = client.post("/api/favorites", json=favorite_in)
    data = res.json()

    assert data == {
        "id": "fake-id-from-db",
        "user_id": "1337",
        "pokemon_name": "pikachu",
    }
    assert res.status_code == 200


def test_list_favorites():
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    res = client.get("/api/favorites")
    data = res.json()

    assert res.status_code == 200
    assert data == {
        "favorites": [
            {
                "pokemon_name": "bulbasaur",
                "id": "64aef8ccd5cee4f04efa09bf",
                "user_id": "1337",
            }
        ]
    }


def test_delete_favorite():
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    res = client.delete("/api/favorites/122345")
    data = res.json()

    assert res.status_code == 200
    assert {"success": True} == data
