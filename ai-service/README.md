# 🤖 Education Management Portal - AI Service Microservice

A Python FastAPI microservice providing academic intelligence, student performance evaluation, at-risk detection, weak subject analysis, personalized recommendations, and an interactive LLM academic advisor.

---

## 📁 Architecture & Folder Structure

```
ai-service/
├── data/                  # Sample datasets for standalone testing
│   ├── student_performance.csv
│   └── subject_marks.csv
├── models/                # Serialized ML models directory (.gitkeep)
├── services/              # Core Intelligence Engines
│   ├── performance_analysis.py   # Overall score, status, GPA scaling
│   ├── risk_prediction.py        # At-Risk scoring (LOW, MEDIUM, HIGH)
│   ├── weak_subject_detection.py # Deficit subject identification
│   ├── recommendation.py         # Tailored action plans
│   ├── insights.py               # Dashboard summary highlights
│   ├── llm_service.py            # Provider-agnostic LLM interface (Mock/OpenAI/Gemini)
│   └── chatbot_service.py        # Dialogue management & context injection
├── chatbot/               # Conversational AI Logic
│   ├── prompts.py                # Academic advisor persona prompts
│   └── context_builder.py        # Student metrics prompt formatters
├── schemas/               # Pydantic Schemas & DTOs
│   ├── student_schema.py
│   └── chat_schema.py
├── utils/                 # Data Preprocessing & CSV Loaders
│   └── data_processor.py
├── tests/                 # Pytest Automated Test Suite
│   ├── test_risk_prediction.py
│   ├── test_performance_analysis.py
│   └── test_chatbot.py
├── app.py                 # FastAPI Application & REST Endpoints
├── prediction.py          # Unified Pipeline Orchestrator
├── config.py              # Application Configuration Settings
├── requirements.txt       # Python dependencies
├── .env                   # Environment variables
├── .gitignore             # Git exclusion rules
└── README.md              # Documentation
```

---

## ⚡ Quick Start & Running Locally

### 1. Install Dependencies
```bash
cd ai-service
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
```

### 2. Start FastAPI Server
```bash
uvicorn app:app --reload --port 8000
```
Server will launch at: `http://localhost:8000`  
Swagger UI Interactive API Docs: `http://localhost:8000/docs`

---

## 🔌 API Endpoints Summary

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Service health status |
| `POST` | `/api/v1/predict` | Analyzes student profile & returns complete AI result |
| `POST` | `/api/v1/chat` | Interacts with context-aware Academic AI Advisor |
| `GET` | `/api/v1/sample-students` | Returns sample student dataset records |
| `GET` | `/api/v1/sample-analysis/{student_id}` | Runs full AI pipeline for a sample student ID |

---

## 🧪 Running Automated Tests

```bash
pytest
```
