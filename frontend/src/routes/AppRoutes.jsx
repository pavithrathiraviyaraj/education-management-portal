import React from 'react';
import { Routes, Route } from 'react-router-dom';

// New Unified Layout
import { DashboardLayout } from '../layouts/DashboardLayout';

// Public Pages
import { HomePage } from '../pages/public/HomePage';
import { CoursesPage } from '../pages/public/CoursesPage';
import { CourseDetailsPage } from '../pages/public/CourseDetailsPage';
import { ContactPage } from '../pages/public/ContactPage';

// Auth
import { LoginRegisterPage } from '../pages/auth/LoginRegisterPage';

// Student
import { StudentDashboard } from '../pages/student/StudentDashboard';
import { MyProgressPage } from '../pages/student/MyProgressPage';
import { AttendancePage } from '../pages/student/AttendancePage';
import { AssignmentsPage } from '../pages/student/AssignmentsPage';

// Teacher
import { TeacherDashboard } from '../pages/teacher/TeacherDashboard';

// Admin
import { AdminDashboard } from '../pages/admin/AdminDashboard';
import { ManageStudents } from '../pages/admin/ManageStudents';
import { ManageTeachers } from '../pages/admin/ManageTeachers';
import { ManageCourses } from '../pages/admin/ManageCourses';
import { ReportsAnalytics } from '../pages/admin/ReportsAnalytics';

// Reports
import { PerformanceReportPage } from '../pages/reports/PerformanceReportPage';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Unified Global Layout wrapper */}
      <Route path="/" element={<DashboardLayout />}>
        
        {/* Public Routes */}
        <Route index element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:id" element={<CourseDetailsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="auth/login" element={<LoginRegisterPage />} />

        {/* Student Routes */}
        <Route path="student/dashboard" element={<StudentDashboard />} />
        <Route path="student/progress" element={<MyProgressPage />} />
        <Route path="student/attendance" element={<AttendancePage />} />
        <Route path="student/assignments" element={<AssignmentsPage />} />

        {/* Teacher Routes */}
        <Route path="teacher/dashboard" element={<TeacherDashboard />} />

        {/* Admin Routes */}
        <Route path="admin/dashboard" element={<AdminDashboard />} />
        <Route path="admin/students" element={<ManageStudents />} />
        <Route path="admin/teachers" element={<ManageTeachers />} />
        <Route path="admin/courses" element={<ManageCourses />} />
        <Route path="admin/reports" element={<ReportsAnalytics />} />

        {/* Reports */}
        <Route path="reports/performance" element={<PerformanceReportPage />} />

        {/* Fallback */}
        <Route path="*" element={<HomePage />} />

      </Route>
    </Routes>
  );
};
