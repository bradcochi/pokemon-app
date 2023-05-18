from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import pokemon, accounts, favorites
from authenticator import authenticator
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(accounts.router, tags=["Auth"])
app.include_router(authenticator.router, tags=["Auth"])
app.include_router(favorites.router, tags=["Favorites"])
app.include_router(pokemon.router, tags=["Pokemon"])
