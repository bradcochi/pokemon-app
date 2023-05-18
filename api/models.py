from pydantic import BaseModel
from jwtdown_fastapi.authentication import Token
from typing import List


class DeleteStatus(BaseModel):
    success: bool


class HttpError(BaseModel):
    detail: str


class FavoriteIn(BaseModel):
    pokemon_name: str


class FavoriteOut(FavoriteIn):
    id: str
    user_id: str


class FavoritesList(BaseModel):
    favorites: List[FavoriteOut]


class AccountIn(BaseModel):
    username: str
    password: str


class AccountForm(BaseModel):
    username: str
    password: str


class AccountOut(BaseModel):
    id: str
    username: str


class AccountOutWithHashedPassword(AccountOut):
    hashed_password: str


class AccountToken(Token):
    account: AccountOut


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
