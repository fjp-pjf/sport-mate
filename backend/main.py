from fastapi import FastAPI
from database import engine

app = FastAPI()

@app.get("/health")
def health():
    with engine.connect() as conn:
        return {"db": "connected"}
