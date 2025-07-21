from sqlalchemy import Column, Integer, String, DateTime
from database import Base
import datetime

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    location = Column(String)

class Login(Base):
    __tablename__ = "logins"
    id = Column(Integer)
    user_name = Column(String)
    ip_address = Column(String)
    location = Column(String)
    timestamp = Column(DateTime, default=datetime.timezone.utc)
    