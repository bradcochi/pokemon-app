from fastapi.testclient import TestClient
from main import app
from queries.pokemon import PokemonQueries

client = TestClient(app)


class FakePokemonQueries:
    def get_all(self, limit: int, offset: int):
        return [
            {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon/1/",
            },
        ]

    def get_one_by_name(self, name: str):
        return {
            "abilities": [
                {
                    "ability": {
                        "name": "overgrow",
                        "url": "https://pokeapi.co/api/v2/ability/65/",
                    },
                    "is_hidden": False,
                    "slot": 1,
                },
                {
                    "ability": {
                        "name": "chlorophyll",
                        "url": "https://pokeapi.co/api/v2/ability/34/",
                    },
                    "is_hidden": True,
                    "slot": 3,
                },
            ],
            "base_experience": 64,
            "height": 7,
            "id": 1,
            "is_default": True,
            "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
            "name": name,
            "order": 1,
            "weight": 69,
        }


def test_get_all_pokemon():
    app.dependency_overrides[PokemonQueries] = FakePokemonQueries

    res = client.get("/api/pokemon")
    data = res.json()

    assert res.status_code == 200
    assert data == {
        "pokemon": [
            {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon/1/",
            },
        ]
    }


def test_get_pokemon_by_name():
    app.dependency_overrides[PokemonQueries] = FakePokemonQueries

    res = client.get("/api/pokemon/test-pokemon")
    data = res.json()

    assert res.status_code == 200
    assert data == {
        "abilities": [
            {
                "ability": {
                    "name": "overgrow",
                    "url": "https://pokeapi.co/api/v2/ability/65/",
                },
                "is_hidden": False,
                "slot": 1,
            },
            {
                "ability": {
                    "name": "chlorophyll",
                    "url": "https://pokeapi.co/api/v2/ability/34/",
                },
                "is_hidden": True,
                "slot": 3,
            },
        ],
        "base_experience": 64,
        "height": 7,
        "id": 1,
        "is_default": True,
        "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
        "name": "test-pokemon",
        "order": 1,
        "weight": 69,
    }
