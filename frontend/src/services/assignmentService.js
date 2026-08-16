import { backendAPI } from './api';

export const getStudentAssignments = async (studentId) => {
  try {
    const response = await backendAPI.get(`/api/students/${studentId}`);
    return response.data.subject_marks || [];
  } catch (error) {
    return [];
  }
};
