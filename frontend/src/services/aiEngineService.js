import { backendAPI, aiAPI } from './api';

export const getStudentAIAnalysis = async (studentId, studentData) => {
  try {
    // Attempt through Backend proxy first (Port 5000)
    const response = await backendAPI.get(`/api/students/${studentId}/ai-analysis`);
    return response.data;
  } catch (error) {
    console.warn("Backend proxy offline, falling back directly to AI Microservice (Port 8000)...");
    // Fallback directly to Python AI Service
    const response = await aiAPI.post('/api/v1/predict', studentData);
    return { ai_analytics: response.data };
  }
};

export const sendAIChatQuery = async (studentId, message, studentContext) => {
  try {
    const response = await aiAPI.post('/api/v1/chat', {
      student_id: studentId || "ANONYMOUS",
      message: message,
      student_context: studentContext || {}
    });
    return response.data;
  } catch (error) {
    console.error("AI Chatbot service error:", error);
    return { reply: "I'm experiencing connectivity issues right now. Please try again shortly." };
  }
};
