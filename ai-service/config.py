from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional

class Settings(BaseSettings):
    ENV: str = "development"
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    
    # LLM Settings
    LLM_PROVIDER: str = "mock"  # Options: mock, openai, gemini
    LLM_API_KEY: Optional[str] = None
    LLM_MODEL: str = "gpt-3.5-turbo"
    
    # Academic Risk Thresholds
    RISK_THRESHOLD_HIGH: float = 75.0   # Attendance below 75% or GPA below threshold -> High risk
    RISK_THRESHOLD_MEDIUM: float = 85.0 # Attendance below 85% or marks below 65% -> Medium risk
    WEAK_SUBJECT_SCORE_THRESHOLD: float = 60.0 # Score below 60% marked as weak subject

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )

settings = Settings()
