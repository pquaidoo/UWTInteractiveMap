from typing import Optional, List
from uuid import UUID, uuid4
from pydantic import BaseModel
from enum import Enum

class Building(str, Enum):
    snoqualmie = "Snoqualmie"
    
class Area(str, Enum):
    tlc = "Teaching and Learning Center"
    cei = "Center for Equity and Inclusion"

class Floor(BaseModel):
    id: Optional[UUID] = uuid4()
    building: Building
    floor_level: int
    resources: Optional[List[str]]
    area: Area
    
class Test():
    @staticmethod
    def self_test():
        print("Testing")
    