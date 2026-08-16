import React, { useContext } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { AuthContext } from '../context/AuthContext';
import { Cpu, Home, BookOpen, BarChart3, Users, ShieldAlert, GraduationCap, LayoutDashboard, CalendarCheck, FileText, LogOut } from 'lucide-react';
import { AIChatbotWidget } from '../components/AIChatbotWidget';

export const DashboardLayout = () => {
  const { selectedRole, activeStudentId } = useContext(UserContext);
  const { logout, user } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="app-layout">
      {/* Left Sidebar - Dark Theme */}
      <aside className="sidebar">
        
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2.5rem', padding: '0 8px' }}>
          <div style={{ background: 'var(--brand-red)', width: '38px', height: '38px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)' }}>
            <Cpu size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#f9fafb', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: '1' }}>
              EduSmart <span style={{ color: '#fca5a5' }}>AI</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 600, marginTop: '2px' }}>
              Educational Portal
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          
          <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '12px 16px 8px' }}>
            Main Navigation
          </div>

          <NavLink to="/" className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}>
            <Home size={18} /> Home Page
          </NavLink>

          <NavLink to="/courses" className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}>
            <BookOpen size={18} /> Curriculum Listing
          </NavLink>

          {/* Role-Based Nav Items */}
          <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '24px 16px 8px' }}>
            {selectedRole === 'student' ? 'Student Workspace' : selectedRole === 'teacher' ? 'Faculty Portal' : 'Admin Controls'}
          </div>

          {selectedRole === 'student' && (
            <>
              <NavLink to="/student/dashboard" className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}>
                <LayoutDashboard size={18} /> AI Dashboard
              </NavLink>
              <NavLink to="/student/progress" className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}>
                <BarChart3 size={18} /> My Progress
              </NavLink>
              <NavLink to="/student/attendance" className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}>
                <CalendarCheck size={18} /> Attendance
              </NavLink>
              <NavLink to="/student/assignments" className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}>
                <FileText size={18} /> Assignments
              </NavLink>
            </>
          )}

          {selectedRole === 'teacher' && (
            <>
              <NavLink to="/teacher/dashboard" className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}>
                <LayoutDashboard size={18} /> Faculty Dashboard
              </NavLink>
              <NavLink to="/reports/performance" className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}>
                <ShieldAlert size={18} /> Risk Reports
              </NavLink>
            </>
          )}

          {selectedRole === 'admin' && (
            <>
              <NavLink to="/admin/dashboard" className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}>
                <LayoutDashboard size={18} /> Command Center
              </NavLink>
              <NavLink to="/admin/students" className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}>
                <Users size={18} /> Manage Students
              </NavLink>
              <NavLink to="/admin/teachers" className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}>
                <GraduationCap size={18} /> Faculty Roster
              </NavLink>
              <NavLink to="/reports/performance" className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}>
                <BarChart3 size={18} /> Institutional Reports
              </NavLink>
            </>
          )}

        </nav>

        {/* User Card Bottom */}
        <div style={{ marginTop: 'auto', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800 }}>
                {user ? user.name?.charAt(0) : (selectedRole === 'student' ? 'S' : selectedRole === 'teacher' ? 'F' : 'A')}
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700, whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                  {user ? user.name : (selectedRole === 'student' ? 'Aarav Sharma' : 'Demo User')}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem', textTransform: 'capitalize' }}>
                  {selectedRole} Account
                </div>
              </div>
            </div>
            {user && (
              <button onClick={handleLogout} style={{ background: 'transparent', border: 'none', color: '#fca5a5', cursor: 'pointer', padding: '4px' }}>
                <LogOut size={16} />
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area - Light Theme */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Globally Accessible Floating AI Chatbot */}
      <AIChatbotWidget studentId={activeStudentId} />
    </div>
  );
};
