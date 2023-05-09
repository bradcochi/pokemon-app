import requests

class PokemonQueries:
    def get_all(self, limit: int, offset: int):
        params = {
            'limit': limit,
            'offset': offset
        }
        res = requests.get(f'https://pokeapi.co/api/v2/pokemon', params=params)
        data = res.json()
        return data['results']


    def get_one_by_name(self, name: str):
        url = f'https://pokeapi.co/api/v2/pokemon/{name}'
        res = requests.get(url)
        data = res.json()
        return data
