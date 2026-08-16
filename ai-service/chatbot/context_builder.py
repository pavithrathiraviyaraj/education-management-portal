from typing import Dict, Any

class ContextBuilder:
    """Formats student academic analytics into a structured text prompt for the LLM."""

    def build_context_string(self, context: Dict[str, Any]) -> str:
        if not context:
            return "No specific student data provided. Respond generally."

        lines = [
            f"- Student ID: {context.get('student_id', 'N/A')}",
            f"- Student Name: {context.get('name', 'N/A')}",
            f"- Department: {context.get('department', 'N/A')} (Semester {context.get('semester', 'N/A')})",
            f"- Attendance: {context.get('attendance_pct', 'N/A')}%",
            f"- Estimated GPA: {context.get('gpa_estimate', 'N/A')}/10.0",
            f"- Academic Risk Level: {context.get('risk_level', 'LOW')}"
        ]

        if "primary_risk_factors" in context and context["primary_risk_factors"]:
            lines.append(f"- Risk Factors: {', '.join(context['primary_risk_factors'])}")

        if "weak_subjects" in context and context["weak_subjects"]:
            weak_names = [
                w.get("subject_name", str(w)) if isinstance(w, dict) else str(w)
                for w in context["weak_subjects"]
            ]
            lines.append(f"- Weak Subjects: {', '.join(weak_names)}")

        if "key_takeaways" in context and context["key_takeaways"]:
            lines.append(f"- Key Takeaway: {context['key_takeaways'][0]}")

        return "\n".join(lines)
