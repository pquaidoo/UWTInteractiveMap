from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from typing import List
from .models import Floor, Area, Building
from uuid import uuid4


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

db: List[Floor] = [
    Floor(
        id=uuid4(), 
        building = Building.snoqualmie,
        floor_level = 1,
        resources = ["Bathrooms", "Lockers", "Microwave", "Fridge"],
        area = Area.cei
        ),
    Floor(
        id=uuid4(), 
        building = Building.snoqualmie,
        floor_level = 2,
        resources = ["Whiteboards", "Tea", "Tutors", "Study Rooms"],
        area = Area.cei
        ),
]


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}

@app.get("/api/buildings/snoqualmie")
async def fetch_users():
    return db;
