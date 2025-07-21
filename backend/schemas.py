from pydantic import BaseModel
from datetime import datetime

class UserBase(BaseModel):
    name: str
    email: str
    location: str

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    class Config:
        orm_mode = True
        
class Login(BaseModel):
    user_name: str
    ip_address: str
    location: str
    timestamp: datetime

