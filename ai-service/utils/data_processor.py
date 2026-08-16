import os
import pandas as pd
import numpy as np
from typing import Optional, List, Dict, Any
from schemas.student_schema import StudentPerformanceInput, SubjectMark

class DataProcessor:
    def __init__(self, data_dir: str = "data"):
        self.data_dir = data_dir
        self.student_file = os.path.join(data_dir, "student_performance.csv")
        self.subject_file = os.path.join(data_dir, "subject_marks.csv")

    def load_students_from_csv(self) -> List[StudentPerformanceInput]:
        if not os.path.exists(self.student_file):
            return []
        
        df_students = pd.read_csv(self.student_file)
        df_subjects = pd.read_csv(self.subject_file) if os.path.exists(self.subject_file) else pd.DataFrame()

        students = []
        for _, row in df_students.iterrows():
            stu_id = str(row['student_id'])
            
            # Extract subjects for this student
            subj_list = []
            if not df_subjects.empty and 'student_id' in df_subjects.columns:
                stu_subjs = df_subjects[df_subjects['student_id'] == stu_id]
                for _, srow in stu_subjs.iterrows():
                    subj_list.append(SubjectMark(
                        subject_code=str(srow['subject_code']),
                        subject_name=str(srow['subject_name']),
                        assignment_score=float(srow.get('assignment_score', 0.0)),
                        midterm_score=float(srow.get('midterm_score', 0.0)),
                        endterm_score=float(srow.get('endterm_score', 0.0)),
                        total_score=float(srow.get('total_score', 0.0)),
                        grade=str(srow.get('grade', 'N/A'))
                    ))

            students.append(StudentPerformanceInput(
                student_id=stu_id,
                name=str(row['name']),
                department=str(row.get('department', 'General')),
                semester=int(row.get('semester', 1)),
                attendance_pct=float(row.get('attendance_pct', 0.0)),
                assignment_avg=float(row.get('assignment_avg', 0.0)),
                midterm_score=float(row.get('midterm_score', 0.0)),
                endterm_score=float(row.get('endterm_score', 0.0)),
                previous_gpa=float(row['previous_gpa']) if pd.notna(row.get('previous_gpa')) else None,
                subject_marks=subj_list
            ))
        return students

    def get_student_by_id(self, student_id: str) -> Optional[StudentPerformanceInput]:
        students = self.load_students_from_csv()
        for stu in students:
            if stu.student_id == student_id:
                return stu
        return None

    @staticmethod
    def clean_and_normalize(value: float, min_val: float = 0.0, max_val: float = 100.0) -> float:
        if value is None or pd.isna(value):
            return min_val
        return float(np.clip(value, min_val, max_val))
