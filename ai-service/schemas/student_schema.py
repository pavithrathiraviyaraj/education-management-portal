from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from enum import Enum

class RiskLevel(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

class SubjectMark(BaseModel):
    subject_code: str
    subject_name: str
    assignment_score: float = Field(..., ge=0, le=100)
    midterm_score: float = Field(..., ge=0, le=100)
    endterm_score: float = Field(..., ge=0, le=100)
    total_score: float = Field(..., ge=0, le=100)
    grade: Optional[str] = "N/A"

class StudentPerformanceInput(BaseModel):
    student_id: str
    name: str
    department: Optional[str] = "General"
    semester: Optional[int] = 1
    attendance_pct: float = Field(..., ge=0, le=100)
    assignment_avg: float = Field(..., ge=0, le=100)
    midterm_score: float = Field(..., ge=0, le=100)
    endterm_score: float = Field(..., ge=0, le=100)
    previous_gpa: Optional[float] = Field(None, ge=0, le=10)
    subject_marks: List[SubjectMark] = []

class PerformanceAnalysisResult(BaseModel):
    overall_score: float
    gpa_estimate: float
    attendance_pct: float
    academic_status: str
    score_breakdown: Dict[str, float]

class RiskPredictionResult(BaseModel):
    risk_level: RiskLevel
    risk_score: float = Field(..., ge=0, le=100)
    primary_risk_factors: List[str]
    attendance_alert: bool
    academic_alert: bool

class WeakSubjectDetail(BaseModel):
    subject_code: str
    subject_name: str
    total_score: float
    severity: str  # "Mild", "Moderate", "Severe"
    reason: str

class WeakSubjectResult(BaseModel):
    weak_subjects_count: int
    weak_subjects: List[WeakSubjectDetail]

class StudyActionItem(BaseModel):
    priority: str  # "High", "Medium", "Low"
    subject: Optional[str] = None
    action: str
    target: str

class RecommendationResult(BaseModel):
    summary: str
    action_items: List[StudyActionItem]

class InsightResult(BaseModel):
    key_takeaways: List[str]
    positive_highlights: List[str]
    warning_notes: List[str]

class CombinedAIResult(BaseModel):
    student_id: str
    name: str
    performance_analysis: PerformanceAnalysisResult
    risk_prediction: RiskPredictionResult
    weak_subject_detection: WeakSubjectResult
    recommendations: RecommendationResult
    insights: InsightResult
