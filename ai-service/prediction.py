from schemas.student_schema import StudentPerformanceInput, CombinedAIResult
from services.performance_analysis import PerformanceAnalyzer
from services.risk_prediction import RiskPredictor
from services.weak_subject_detection import WeakSubjectDetector
from services.recommendation import RecommendationEngine
from services.insights import InsightsGenerator

class PredictionPipeline:
    """Orchestrates the complete AI analysis pipeline for a student."""

    def __init__(self):
        self.performance_analyzer = PerformanceAnalyzer()
        self.risk_predictor = RiskPredictor()
        self.weak_subject_detector = WeakSubjectDetector()
        self.recommendation_engine = RecommendationEngine()
        self.insights_generator = InsightsGenerator()

    def run(self, student_input: StudentPerformanceInput) -> CombinedAIResult:
        # Step 1: Performance Analysis
        perf_result = self.performance_analyzer.analyze(student_input)

        # Step 2: Risk Prediction
        risk_result = self.risk_predictor.predict(student_input)

        # Step 3: Weak Subject Detection
        weak_result = self.weak_subject_detector.detect(student_input)

        # Step 4: Personalized Recommendations
        rec_result = self.recommendation_engine.generate(student_input, risk_result, weak_result)

        # Step 5: AI Insights Summary
        insight_result = self.insights_generator.generate(student_input, perf_result, risk_result, weak_result)

        return CombinedAIResult(
            student_id=student_input.student_id,
            name=student_input.name,
            performance_analysis=perf_result,
            risk_prediction=risk_result,
            weak_subject_detection=weak_result,
            recommendations=rec_result,
            insights=insight_result
        )

# Global pipeline instance
pipeline = PredictionPipeline()
