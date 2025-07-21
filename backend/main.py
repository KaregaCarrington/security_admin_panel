from fastapi import FastAPI
from database import Base, engine
import routers.users, routers.logins

app = FastAPI()

# Create the database tables
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(routers.users.router)
app.include_router(routers.logins.router)