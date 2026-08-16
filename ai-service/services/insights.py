from typing import List
from schemas.student_schema import (
    StudentPerformanceInput,
    PerformanceAnalysisResult,
    RiskPredictionResult,
    WeakSubjectResult,
    InsightResult,
    RiskLevel
)

class InsightsGenerator:
    """Produces clear, user-friendly takeaways and highlights for the dashboard UI."""

    def generate(
        self,
        student: StudentPerformanceInput,
        analysis: PerformanceAnalysisResult,
        risk: RiskPredictionResult,
        weak_subjects: WeakSubjectResult
    ) -> InsightResult:
        key_takeaways: List[str] = []
        positive_highlights: List[str] = []
        warning_notes: List[str] = []

        # Overall Status Takeaway
        key_takeaways.append(
            f"Overall academic score is {analysis.overall_score}% (Estimated GPA: {analysis.gpa_estimate}/10.0), categorized as '{analysis.academic_status}'."
        )

        # Positives
        if student.attendance_pct >= 85.0:
            positive_highlights.append(f"Excellent lecture attendance record at {student.attendance_pct}%.")
        if student.assignment_avg >= 80.0:
            positive_highlights.append(f"Strong continuous evaluation performance with an assignment average of {student.assignment_avg}%.")
        if student.midterm_score >= 80.0 or student.endterm_score >= 80.0:
            positive_highlights.append("Demonstrated high capability in written examinations.")
        if not positive_highlights:
            positive_highlights.append("Consistent participation in academic activities.")

        # Warnings
        if risk.risk_level == RiskLevel.HIGH:
            warning_notes.append("CRITICAL: Student is in High Risk academic category.")
        elif risk.risk_level == RiskLevel.MEDIUM:
            warning_notes.append("WARNING: Student is in Medium Risk academic category.")

        for factor in risk.primary_risk_factors:
            if "Severe" in factor or "Low" in factor or "drop" in factor or "Failing" in factor:
                warning_notes.append(factor)

        if weak_subjects.weak_subjects_count > 0:
            names = ", ".join(ws.subject_name for ws in weak_subjects.weak_subjects)
            warning_notes.append(f"Identified performance deficit in: {names}.")

        if not warning_notes:
            warning_notes.append("No active academic risk factors detected.")

        return InsightResult(
            key_takeaways=key_takeaways,
            positive_highlights=positive_highlights,
            warning_notes=warning_notes
        )
