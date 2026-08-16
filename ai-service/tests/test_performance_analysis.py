import pytest
from schemas.student_schema import StudentPerformanceInput, SubjectMark
from services.performance_analysis import PerformanceAnalyzer

def test_performance_analysis_weighted():
    analyzer = PerformanceAnalyzer()
    student = StudentPerformanceInput(
        student_id="TEST003",
        name="Test Perf",
        attendance_pct=90.0,
        assignment_avg=80.0,
        midterm_score=80.0,
        endterm_score=80.0
    )
    result = analyzer.analyze(student)
    assert result.overall_score == 82.0
    assert result.gpa_estimate == 8.2
    assert result.academic_status == "Good"

def test_performance_with_subject_marks():
    analyzer = PerformanceAnalyzer()
    student = StudentPerformanceInput(
        student_id="TEST004",
        name="Test Subj",
        attendance_pct=100.0,
        assignment_avg=90.0,
        midterm_score=90.0,
        endterm_score=90.0,
        subject_marks=[
            SubjectMark(subject_code="MATH1", subject_name="Math", assignment_score=90, midterm_score=90, endterm_score=90, total_score=90),
            SubjectMark(subject_code="PHYS1", subject_name="Physics", assignment_score=100, midterm_score=100, endterm_score=100, total_score=100)
        ]
    )
    result = analyzer.analyze(student)
    assert result.overall_score == 96.0
    assert result.gpa_estimate == 9.6
    assert result.academic_status == "Excellent"
