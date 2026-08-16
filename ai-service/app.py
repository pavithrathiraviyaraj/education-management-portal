from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional

from config import settings
from schemas.student_schema import StudentPerformanceInput, CombinedAIResult
from schemas.chat_schema import ChatRequest, ChatResponse
from prediction import pipeline
from services.chatbot_service import ChatbotService
from utils.data_processor import DataProcessor

app = FastAPI(
    title="Education Management Portal - AI Service",
    description="Python FastAPI service providing academic performance analysis, risk prediction, weak subject detection, recommendations, and an AI Chatbot advisor.",
    version="1.0.0"
)

# Enable CORS for React frontend and Node.js backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

data_processor = DataProcessor()
chatbot_service = ChatbotService()

@app.get("/")
def health_check():
    return {
        "status": "online",
        "service": "Education Portal AI Engine",
        "version": "1.0.0",
        "environment": settings.ENV,
        "llm_provider": settings.LLM_PROVIDER
    }

@app.post("/predict", response_model=CombinedAIResult, tags=["AI Analytics"])
@app.post("/api/v1/predict", response_model=CombinedAIResult, tags=["AI Analytics"])
def analyze_student(student_input: StudentPerformanceInput = Body(...)):
    """Accepts student academic metrics and returns combined AI analytics & risk prediction."""
    try:
        result = pipeline.run(student_input)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI Engine analysis error: {str(e)}")

@app.post("/chat", response_model=ChatResponse, tags=["Conversational AI"])
@app.post("/api/v1/chat", response_model=ChatResponse, tags=["Conversational AI"])
async def chat_with_advisor(request: ChatRequest = Body(...)):
    """Handles chat queries from students/teachers with context-aware responses."""
    try:
        response = await chatbot_service.chat(request)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Chatbot execution error: {str(e)}")

@app.get("/api/v1/sample-students", response_model=List[StudentPerformanceInput], tags=["Datasets"])
def get_sample_students():
    """Returns sample student profiles loaded from local CSV data."""
    students = data_processor.load_students_from_csv()
    if not students:
        raise HTTPException(status_code=404, detail="No sample student dataset found.")
    return students

@app.get("/api/v1/sample-analysis/{student_id}", response_model=CombinedAIResult, tags=["Datasets"])
def analyze_sample_student(student_id: str):
    """Loads a student by ID from the sample CSV dataset and runs full AI pipeline analysis."""
    student = data_processor.get_student_by_id(student_id)
    if not student:
        raise HTTPException(status_code=404, detail=f"Student ID '{student_id}' not found in dataset.")
    return pipeline.run(student)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host=settings.HOST, port=settings.PORT, reload=True)
