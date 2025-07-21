from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
import models, schemas

router = APIRouter(prefix="/api/logins", tags=["Logins"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=list[schemas.Login])
def get_logins(db: Session = Depends(get_db)):
    logins = db.query(models.Login).order_by(models.Login.timestamp.desc()).limit(20).all()
    return logins