from schemas.student_schema import StudentPerformanceInput, RiskLevel, RiskPredictionResult
from config import settings

class RiskPredictor:
    """Predicts student academic risk level (LOW, MEDIUM, HIGH) using multi-factor analysis."""

    def predict(self, student: StudentPerformanceInput) -> RiskPredictionResult:
        risk_score = 0.0
        primary_factors = []
        attendance_alert = False
        academic_alert = False

        # 1. Attendance Analysis
        if student.attendance_pct < settings.RISK_THRESHOLD_HIGH:  # < 75%
            risk_score += 45.0
            attendance_alert = True
            primary_factors.append(f"Severe attendance shortage ({student.attendance_pct}% < 75%)")
        elif student.attendance_pct < settings.RISK_THRESHOLD_MEDIUM:  # < 85%
            risk_score += 25.0
            primary_factors.append(f"Moderate attendance concern ({student.attendance_pct}%)")

        # 2. Endterm & Midterm Exam Performance
        if student.endterm_score < 50.0:
            risk_score += 35.0
            academic_alert = True
            primary_factors.append(f"Low end-term exam score ({student.endterm_score}%)")
        elif student.endterm_score < 60.0:
            risk_score += 20.0
            academic_alert = True
            primary_factors.append(f"Sub-par end-term exam score ({student.endterm_score}%)")

        # 3. Score Trend (Midterm vs Endterm drop)
        if student.endterm_score < student.midterm_score - 10.0:
            risk_score += 15.0
            primary_factors.append("Significant performance drop from mid-term to end-term")

        # 4. Subject Failures or Low Subject Scores
        if student.subject_marks:
            failed_count = sum(1 for s in student.subject_marks if s.total_score < 45.0)
            if failed_count > 0:
                risk_score += min(30.0, failed_count * 15.0)
                academic_alert = True
                primary_factors.append(f"Failing scores in {failed_count} subject(s)")

        # 5. Cap risk score at 100.0
        risk_score = min(100.0, round(risk_score, 2))

        # Categorize Risk Level
        if risk_score >= 55.0 or student.attendance_pct < 65.0:
            level = RiskLevel.HIGH
        elif risk_score >= 30.0 or student.attendance_pct < 75.0:
            level = RiskLevel.MEDIUM
        else:
            level = RiskLevel.LOW

        if not primary_factors:
            primary_factors.append("Consistent attendance and academic performance")

        return RiskPredictionResult(
            risk_level=level,
            risk_score=risk_score,
            primary_risk_factors=primary_factors,
            attendance_alert=attendance_alert,
            academic_alert=academic_alert
        )
