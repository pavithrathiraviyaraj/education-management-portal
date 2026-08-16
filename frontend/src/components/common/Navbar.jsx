import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { Sparkles, Shield, Cpu, BookOpen, Layers } from 'lucide-react';

export const Navbar = () => {
  const { selectedRole, setSelectedRole } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    if (role === 'student') navigate('/student/dashboard');
    else if (role === 'teacher') navigate('/teacher/dashboard');
    else if (role === 'admin') navigate('/admin/dashboard');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', background: 'rgba(9, 13, 22, 0.85)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '0.8rem 2rem' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Brand Logo & Live Status */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'linear-gradient(135deg, #4f46e5, #06b6d4)', width: '38px', height: '38px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}>
            <Cpu size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f9fafb', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '6px' }}>
              EduSmart <span style={{ color: '#06b6d4' }}>AI</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 8px #10b981' }}></span>
              AI Microservice Connected
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link to="/" style={{ padding: '6px 14px', borderRadius: '8px', textDecoration: 'none', color: isActive('/') ? '#ffffff' : '#9ca3af', background: isActive('/') ? 'rgba(255,255,255,0.08)' : 'transparent', fontWeight: 600, fontSize: '0.88rem', transition: 'all 0.2s' }}>
            Home
          </Link>
          <Link to="/courses" style={{ padding: '6px 14px', borderRadius: '8px', textDecoration: 'none', color: isActive('/courses') ? '#ffffff' : '#9ca3af', background: isActive('/courses') ? 'rgba(255,255,255,0.08)' : 'transparent', fontWeight: 600, fontSize: '0.88rem', transition: 'all 0.2s' }}>
            Curriculum
          </Link>
          <Link to="/student/dashboard" style={{ padding: '6px 14px', borderRadius: '8px', textDecoration: 'none', color: isActive('/student/dashboard') ? '#ffffff' : '#9ca3af', background: isActive('/student/dashboard') ? 'rgba(99,102,241,0.2)' : 'transparent', fontWeight: 600, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(99,102,241,0.3)', transition: 'all 0.2s' }}>
            <Sparkles size={15} color="#818cf8" /> Student AI Hub
          </Link>
          <Link to="/reports/performance" style={{ padding: '6px 14px', borderRadius: '8px', textDecoration: 'none', color: isActive('/reports/performance') ? '#ffffff' : '#9ca3af', background: isActive('/reports/performance') ? 'rgba(255,255,255,0.08)' : 'transparent', fontWeight: 600, fontSize: '0.88rem', transition: 'all 0.2s' }}>
            Analytics
          </Link>
        </nav>

        {/* Right Section: Segmented Role Switcher & Auth */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          
          {/* Handcrafted Segmented Role Switcher */}
          <div className="segmented-control">
            <button className={`segmented-btn ${selectedRole === 'student' ? 'active' : ''}`} onClick={() => handleRoleSelect('student')}>
              Student
            </button>
            <button className={`segmented-btn ${selectedRole === 'teacher' ? 'active' : ''}`} onClick={() => handleRoleSelect('teacher')}>
              Faculty
            </button>
            <button className={`segmented-btn ${selectedRole === 'admin' ? 'active' : ''}`} onClick={() => handleRoleSelect('admin')}>
              Admin
            </button>
          </div>

          <Link to="/auth/login" className="btn-handcrafted btn-primary-glow" style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}>
            Sign In
          </Link>
        </div>

      </div>
    </header>
  );
};
