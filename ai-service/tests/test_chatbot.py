import pytest
from schemas.chat_schema import ChatRequest
from services.chatbot_service import ChatbotService

@pytest.mark.asyncio
async def test_chatbot_service():
    service = ChatbotService()
    req = ChatRequest(
        student_id="STU1001",
        message="What is my attendance status?",
        student_context={
            "name": "Aarav Sharma",
            "attendance_pct": 88.5,
            "risk_level": "LOW",
            "gpa_estimate": 8.4
        }
    )
    res = await service.chat(req)
    assert res.student_id == "STU1001"
    assert "attendance" in res.reply.lower() or "aarav" in res.reply.lower()
    assert len(res.suggested_questions) > 0
