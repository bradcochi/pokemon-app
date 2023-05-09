from fastapi import APIRouter, Depends
from models import PokemonIdList, PokemonDetails
from queries.pokemon import PokemonQueries

router = APIRouter()

@router.get('/api/pokemon', response_model=PokemonIdList)
def get_all_pokemon(
    limit: int = 20,
    offset: int = 0,
    repo: PokemonQueries = Depends()
):
    return {
        'pokemon': repo.get_all(limit, offset)
    }

@router.get('/api/pokemon/{name}', response_model=PokemonDetails)
def get_pokemon_by_name(
    name: str,
    repo: PokemonQueries = Depends()
):
    return repo.get_one_by_name(name)
