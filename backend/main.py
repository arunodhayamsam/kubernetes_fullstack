from pydantic.main import BaseModel
from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title='My Squaring App')

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home() -> str:
    return "Working."

class My_Number_Class(BaseModel):
    number: int

@app.post("/square")
def square(data:My_Number_Class):
    number = data.number
    return str(number*number)

# Endpoint
if __name__ == "__main__":
    # Changed it from app to 'main:app' to reload changes automatically.
    uvicorn.run('main:app', host="0.0.0.0", port=8000, reload=True)
