from typing import List
from schemas.student_schema import StudentPerformanceInput, WeakSubjectDetail, WeakSubjectResult
from config import settings

class WeakSubjectDetector:
    """Identifies specific subjects or academic modules where student performance is below threshold."""

    def detect(self, student: StudentPerformanceInput) -> WeakSubjectResult:
        weak_list: List[WeakSubjectDetail] = []

        if student.subject_marks:
            for s in student.subject_marks:
                if s.total_score < settings.WEAK_SUBJECT_SCORE_THRESHOLD:
                    if s.total_score < 45.0:
                        severity = "Severe"
                        reason = "Failing score; immediate remedial attention required."
                    elif s.total_score < 55.0:
                        severity = "Moderate"
                        reason = "Substantially below class standard; conceptual gaps identified."
                    else:
                        severity = "Mild"
                        reason = "Slightly below target benchmark; practice recommended."

                    weak_list.append(WeakSubjectDetail(
                        subject_code=s.subject_code,
                        subject_name=s.subject_name,
                        total_score=round(s.total_score, 2),
                        severity=severity,
                        reason=reason
                    ))
        else:
            # Fallback based on aggregate components
            if student.endterm_score < settings.WEAK_SUBJECT_SCORE_THRESHOLD:
                weak_list.append(WeakSubjectDetail(
                    subject_code="GEN-EXAM",
                    subject_name="Final Examination Modules",
                    total_score=round(student.endterm_score, 2),
                    severity="Severe" if student.endterm_score < 45 else "Moderate",
                    reason="End-term assessment score is below standard threshold."
                ))
            if student.assignment_avg < settings.WEAK_SUBJECT_SCORE_THRESHOLD:
                weak_list.append(WeakSubjectDetail(
                    subject_code="GEN-ASY",
                    subject_name="Continuous Assessment & Assignments",
                    total_score=round(student.assignment_avg, 2),
                    severity="Moderate",
                    reason="Assignment submission quality or score needs improvement."
                ))

        return WeakSubjectResult(
            weak_subjects_count=len(weak_list),
            weak_subjects=weak_list
        )
