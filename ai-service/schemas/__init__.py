# Schemas package initialization
from schemas.student_schema import (
    RiskLevel,
    SubjectMark,
    StudentPerformanceInput,
    PerformanceAnalysisResult,
    RiskPredictionResult,
    WeakSubjectDetail,
    WeakSubjectResult,
    StudyActionItem,
    RecommendationResult,
    InsightResult,
    CombinedAIResult
)
from schemas.chat_schema import ChatRequest, ChatResponse, RecommendedAction

__all__ = [
    "RiskLevel",
    "SubjectMark",
    "StudentPerformanceInput",
    "PerformanceAnalysisResult",
    "RiskPredictionResult",
    "WeakSubjectDetail",
    "WeakSubjectResult",
    "StudyActionItem",
    "RecommendationResult",
    "InsightResult",
    "CombinedAIResult",
    "ChatRequest",
    "ChatResponse",
    "RecommendedAction"
]
