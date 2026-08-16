from typing import Dict, Any, Optional
from schemas.chat_schema import ChatRequest, ChatResponse, RecommendedAction
from services.llm_service import LLMService
from chatbot.prompts import SYSTEM_PROMPT_ACADEMIC_ADVISOR
from chatbot.context_builder import ContextBuilder

class ChatbotService:
    """Orchestrates chatbot conversation flow using context builder and LLM service."""

    def __init__(self):
        self.llm = LLMService()
        self.context_builder = ContextBuilder()

    async def chat(self, request: ChatRequest) -> ChatResponse:
        # Build structured context string and dict
        context_dict = request.student_context or {}
        context_str = self.context_builder.build_context_string(context_dict)

        # Prepare full system prompt with context
        system_prompt = f"{SYSTEM_PROMPT_ACADEMIC_ADVISOR}\n\nSTUDENT CONTEXT:\n{context_str}"

        # Generate response via LLM service
        reply = await self.llm.generate_response(
            system_prompt=system_prompt,
            user_prompt=request.message,
            student_context=context_dict
        )

        # Generate suggested questions & actions
        suggested_questions = [
            "How can I improve my weak subjects?",
            "What is my target attendance goal?",
            "How can I boost my end-term exam score?"
        ]

        actions = []
        if context_dict.get("attendance_pct", 100) < 75:
            actions.append(RecommendedAction(
                title="Attend Makeup Lectures",
                description="Coordinate with course instructors to log extra attendance credits."
            ))
        if context_dict.get("weak_subjects"):
            actions.append(RecommendedAction(
                title="Book Tutoring Session",
                description="Schedule a 1-on-1 session with a teaching assistant for your weak subjects."
            ))

        return ChatResponse(
            student_id=request.student_id,
            reply=reply,
            reasoning="Generated based on student academic context and risk profile.",
            suggested_questions=suggested_questions,
            recommended_actions=actions
        )
