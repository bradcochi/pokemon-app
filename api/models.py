from pydantic import BaseModel
from typing import List


class PokemonId(BaseModel):
    name: str
    url: str

class Ability(BaseModel):
    ability: PokemonId
    is_hidden: bool
    slot: int

class PokemonDetails(BaseModel):
    abilities: List[Ability]
    base_experience: int
    height: int
    id: int
    is_default: bool
    location_area_encounters: str
    name: str
    order: int
    weight: int

class PokemonIdList(BaseModel):
    pokemon: List[PokemonId]
