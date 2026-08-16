from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any

class ChatRequest(BaseModel):
    student_id: str
    message: str
    student_context: Optional[Dict[str, Any]] = None

class RecommendedAction(BaseModel):
    title: str
    description: str

class ChatResponse(BaseModel):
    student_id: str
    reply: str
    reasoning: Optional[str] = None
    suggested_questions: List[str] = []
    recommended_actions: List[RecommendedAction] = []
