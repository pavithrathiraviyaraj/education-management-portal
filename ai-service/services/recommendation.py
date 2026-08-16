from typing import List
from schemas.student_schema import (
    StudentPerformanceInput,
    RiskPredictionResult,
    WeakSubjectResult,
    RecommendationResult,
    StudyActionItem,
    RiskLevel
)

class RecommendationEngine:
    """Generates personalized study strategies and actionable recommendations."""

    def generate(
        self,
        student: StudentPerformanceInput,
        risk: RiskPredictionResult,
        weak_subjects: WeakSubjectResult
    ) -> RecommendationResult:
        items: List[StudyActionItem] = []

        # 1. Attendance Action
        if student.attendance_pct < 75.0:
            items.append(StudyActionItem(
                priority="High",
                subject="Attendance",
                action="Attend all scheduled classes immediately to rebuild attendance percentage.",
                target=f"Raise attendance from {student.attendance_pct}% to 75% minimum."
            ))
        elif student.attendance_pct < 85.0:
            items.append(StudyActionItem(
                priority="Medium",
                subject="Attendance",
                action="Maintain regular lecture attendance to avoid falling into shortage buffer.",
                target="Target 85%+ attendance across all modules."
            ))

        # 2. Weak Subject Actions
        for ws in weak_subjects.weak_subjects:
            priority = "High" if ws.severity in ["Severe", "Moderate"] else "Medium"
            items.append(StudyActionItem(
                priority=priority,
                subject=ws.subject_name,
                action=f"Focus on core concepts in {ws.subject_name}. Seek faculty tutoring or peer study group.",
                target=f"Improve subject score from {ws.total_score}% to 65%+"
            ))

        # 3. Exam & Assignment Strategy
        if student.assignment_avg < 65.0:
            items.append(StudyActionItem(
                priority="Medium",
                subject="Assignments",
                action="Submit all pending assignments on time and request feedback on previous submissions.",
                target="Achieve assignment average of 75%+"
            ))

        if not items:
            items.append(StudyActionItem(
                priority="Low",
                subject="General Academics",
                action="Maintain current exemplary academic momentum and explore advanced elective topics.",
                target="Sustain GPA above 8.5"
            ))

        # Summary line
        if risk.risk_level == RiskLevel.HIGH:
            summary = "Immediate intervention required: Focus on attendance recovery and intensive subject revision."
        elif risk.risk_level == RiskLevel.MEDIUM:
            summary = "Targeted effort needed: Strengthen weak subject fundamentals and stabilize test performance."
        else:
            summary = "Strong academic standing: Continue current study routine and pursue enrichment opportunities."

        return RecommendationResult(
            summary=summary,
            action_items=items
        )
