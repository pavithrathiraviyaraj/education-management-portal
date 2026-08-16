from schemas.student_schema import StudentPerformanceInput, PerformanceAnalysisResult

class PerformanceAnalyzer:
    """Analyzes student academic metrics to compute weighted performance score, GPA estimate, and status."""

    def analyze(self, student: StudentPerformanceInput) -> PerformanceAnalysisResult:
        # If student has specific subject marks, calculate average from subject breakdown
        if student.subject_marks:
            avg_subject_score = sum(s.total_score for s in student.subject_marks) / len(student.subject_marks)
            academic_comp = avg_subject_score
        else:
            # Weighted average of assignment, midterm, endterm
            academic_comp = (
                student.assignment_avg * 0.25 +
                student.midterm_score * 0.35 +
                student.endterm_score * 0.40
            )

        # Combine academic score (80%) with attendance factor (20%)
        overall_score = round(academic_comp * 0.80 + student.attendance_pct * 0.20, 2)

        # Scale to 10.0 GPA
        gpa_estimate = round(overall_score / 10.0, 2)

        # Determine academic status
        if overall_score >= 85.0:
            status = "Excellent"
        elif overall_score >= 70.0:
            status = "Good"
        elif overall_score >= 55.0:
            status = "Needs Improvement"
        else:
            status = "Critical Action Required"

        breakdown = {
            "attendance": round(student.attendance_pct, 2),
            "assignment_avg": round(student.assignment_avg, 2),
            "midterm_score": round(student.midterm_score, 2),
            "endterm_score": round(student.endterm_score, 2),
            "academic_component": round(academic_comp, 2)
        }

        return PerformanceAnalysisResult(
            overall_score=overall_score,
            gpa_estimate=gpa_estimate,
            attendance_pct=round(student.attendance_pct, 2),
            academic_status=status,
            score_breakdown=breakdown
        )
