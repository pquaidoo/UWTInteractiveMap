from typing import Optional, List
from uuid import UUID, uuid4
from pydantic import BaseModel
from enum import Enum
# from datetime import time

class Building(str, Enum):
    Snoqualmie = "Snoqualmie"

class Hours(Enum):
    Sno = "8:00 AM - 10:00 PM"


class CommunityArea(str, Enum):
    tlc = "Teaching and Learning Center, Monday-Thursday: 9:00 AM - 6:00 PM"
    cei = "Center for Equity and Inclusion, 10:00 AM - 5:00 PM"


class Floor(BaseModel):
    # id: Optional[UUID] = uuid4()
    building: Building
    floor_level: int
    resources: Optional[List[str]] = None
    area: CommunityArea
    hours: Hours
    
    
# class Test():
#     @staticmethod
#     def self_test():
#         print("Testing")
    