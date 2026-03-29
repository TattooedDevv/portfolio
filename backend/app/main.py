from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import projects, contact
from app.database import engine
from app import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router)
app.include_router(contact.router)

@app.get("/")
def root():
    return {"message": "Portfolio API is running"}

@app.get("/health")
def health():
    return {"status": "healthy"}