import os
import httpx
from typing import Optional, Dict, Any
from config import settings

class LLMService:
    """Interface for LLM API calls with fallback to intelligent local response generator."""

    def __init__(self):
        self.provider = settings.LLM_PROVIDER.lower()
        self.api_key = settings.LLM_API_KEY

    async def generate_response(self, system_prompt: str, user_prompt: str, student_context: Optional[Dict[str, Any]] = None) -> str:
        # If API key is available and provider is set to openai/gemini, perform API call
        if self.api_key and self.provider in ["openai", "gemini"]:
            try:
                if self.provider == "openai":
                    return await self._call_openai(system_prompt, user_prompt)
                elif self.provider == "gemini":
                    return await self._call_gemini(system_prompt, user_prompt)
            except Exception as e:
                # Log error and fallback to intelligent local engine
                print(f"[LLMService Error] API Call failed: {e}. Falling back to mock engine.")

        # Fallback / Mock Generator
        return self._generate_smart_fallback(user_prompt, student_context)

    async def _call_openai(self, system_prompt: str, user_prompt: str) -> str:
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        payload = {
            "model": settings.LLM_MODEL or "gpt-3.5-turbo",
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            "temperature": 0.7
        }
        async with httpx.AsyncClient(timeout=15.0) as client:
            resp = await client.post("https://api.openai.com/v1/chat/completions", json=payload, headers=headers)
            resp.raise_for_status()
            data = resp.json()
            return data["choices"][0]["message"]["content"]

    async def _call_gemini(self, system_prompt: str, user_prompt: str) -> str:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={self.api_key}"
        payload = {
            "contents": [{
                "parts": [{"text": f"{system_prompt}\n\nUser Question: {user_prompt}"}]
            }]
        }
        async with httpx.AsyncClient(timeout=15.0) as client:
            resp = await client.post(url, json=payload)
            resp.raise_for_status()
            data = resp.json()
            return data["candidates"][0]["content"]["parts"][0]["text"]

    def _generate_smart_fallback(self, query: str, context: Optional[Dict[str, Any]]) -> str:
        q_lower = query.lower()

        name = context.get("name", "Student") if context else "Student"
        risk = context.get("risk_level", "LOW") if context else "LOW"
        att = context.get("attendance_pct", 80.0) if context else 80.0
        gpa = context.get("gpa_estimate", 7.5) if context else 7.5
        weak = context.get("weak_subjects", []) if context else []

        weak_names = [w.get("subject_name", w) if isinstance(w, dict) else str(w) for w in weak]

        if "attendance" in q_lower:
            if att < 75.0:
                return (
                    f"Hello {name}, your current attendance stands at {att}%, which is below the mandatory 75% requirement. "
                    f"I strongly recommend attending every scheduled session this month to clear your shortage."
                )
            else:
                return (
                    f"Hello {name}, your attendance is in good shape at {att}%. "
                    f"Keep up the consistency to maintain your academic eligibility!"
                )

        if "weak" in q_lower or "subject" in q_lower or "improve" in q_lower:
            if weak_names:
                return (
                    f"Hi {name}, based on your performance data, your primary weak subject(s) are: {', '.join(weak_names)}. "
                    f"I suggest focusing on practice problem sets, reviewing lecture recordings, and reaching out to professors during office hours."
                )
            else:
                return f"Great news {name}! No weak subjects were detected in your academic records. You are performing solidly across all modules."

        if "risk" in q_lower or "status" in q_lower:
            return (
                f"Hello {name}, your predicted academic risk level is **{risk}** with an estimated GPA of {gpa}/10.0. "
                f"Check your dashboard recommendation list for step-by-step guidance."
            )

        # Default helpful assistant response
        return (
            f"Hello {name}! I am your AI Academic Advisor. "
            f"Based on your profile (GPA: {gpa}, Attendance: {att}%, Risk Level: {risk}), "
            f"I am here to assist you with study plans, attendance tracking, and exam preparation tips. How can I help you today?"
        )
