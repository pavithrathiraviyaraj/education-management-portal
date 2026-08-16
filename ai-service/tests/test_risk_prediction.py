import pytest
from schemas.student_schema import StudentPerformanceInput, RiskLevel
from services.risk_prediction import RiskPredictor

def test_high_risk_student():
    predictor = RiskPredictor()
    student = StudentPerformanceInput(
        student_id="TEST001",
        name="Test High Risk",
        attendance_pct=60.0,  # Below 75% -> High Risk
        assignment_avg=45.0,
        midterm_score=40.0,
        endterm_score=42.0
    )
    result = predictor.predict(student)
    assert result.risk_level == RiskLevel.HIGH
    assert result.attendance_alert is True
    assert result.risk_score >= 50.0

def test_low_risk_student():
    predictor = RiskPredictor()
    student = StudentPerformanceInput(
        student_id="TEST002",
        name="Test Low Risk",
        attendance_pct=92.0,
        assignment_avg=88.0,
        midterm_score=85.0,
        endterm_score=90.0
    )
    result = predictor.predict(student)
    assert result.risk_level == RiskLevel.LOW
    assert result.attendance_alert is False
    assert result.risk_score < 30.0
