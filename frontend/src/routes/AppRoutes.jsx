import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import { PublicLayout } from '../layouts/PublicLayout';
import { StudentLayout } from '../layouts/StudentLayout';
import { TeacherLayout } from '../layouts/TeacherLayout';
import { AdminLayout } from '../layouts/AdminLayout';

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
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:id" element={<CourseDetailsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="auth/login" element={<LoginRegisterPage />} />
      </Route>

      {/* Student Routes */}
      <Route path="/student" element={<StudentLayout />}>
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="progress" element={<MyProgressPage />} />
        <Route path="attendance" element={<AttendancePage />} />
        <Route path="assignments" element={<AssignmentsPage />} />
      </Route>

      {/* Teacher Routes */}
      <Route path="/teacher" element={<TeacherLayout />}>
        <Route path="dashboard" element={<TeacherDashboard />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="students" element={<ManageStudents />} />
        <Route path="teachers" element={<ManageTeachers />} />
        <Route path="courses" element={<ManageCourses />} />
        <Route path="reports" element={<ReportsAnalytics />} />
      </Route>

      {/* Reports */}
      <Route path="/reports" element={<PublicLayout />}>
        <Route path="performance" element={<PerformanceReportPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
