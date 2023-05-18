from fastapi import APIRouter, Depends
from models import FavoriteIn, FavoriteOut, FavoritesList, DeleteStatus
from authenticator import authenticator
from queries.favorites import FavoritesQueries

router = APIRouter()


@router.post("/api/favorites", response_model=FavoriteOut)
def create_favorite(
    favorite_in: FavoriteIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: FavoritesQueries = Depends(),
):
    return queries.create(favorite_in, user_id=account_data["id"])


@router.get("/api/favorites", response_model=FavoritesList)
def list_favorites(
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: FavoritesQueries = Depends(),
):
    return {"favorites": queries.get_all(account_data["id"])}


@router.delete("/api/favorites/{favorite_id}", response_model=DeleteStatus)
def delete_favorite(
    favorite_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: FavoritesQueries = Depends(),
):
    return {"success": queries.delete(favorite_id, account_data["id"])}
