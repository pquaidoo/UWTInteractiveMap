from typing import List
from uuid import uuid4
from fastapi import FastAPI
from .models import Floor, Building, Hours, CommunityArea

app= FastAPI()

db: List[Floor] = [
    Floor(
        id = uuid4(), 
        building = Building.Snoqualmie,
        floor_level = 1,
        area = CommunityArea.cei,
        hours = Hours.Sno
    ),
    Floor(
        id = uuid4(), 
        building = Building.Snoqualmie,
        floor_level = 2,
        area = CommunityArea.tlc,
        hours = Hours.Sno
    )   
]

@app.get("/")
async def root():
    
    return{"Hello : Patrick"}

@app.get("/api/v1/users")
async def fetch_users():
    return db

# @app.post("/api/v1/users")
# async def register_user(user: User):
#     db.append(user)
#     return {"id": user.id}  