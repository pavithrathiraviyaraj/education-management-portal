import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { GraduationCap, BrainCircuit, UserCheck, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';

export const Navbar = () => {
  const { selectedRole, setSelectedRole } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const role = e.target.value;
    setSelectedRole(role);
    if (role === 'student') navigate('/student/dashboard');
    else if (role === 'teacher') navigate('/teacher/dashboard');
    else if (role === 'admin') navigate('/admin/dashboard');
  };

  return (
    <nav className="glass-card" style={{ borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ background: 'linear-gradient(135deg, #6366f1, #38bdf8)', padding: '10px', borderRadius: '12px', display: 'flex' }}>
          <GraduationCap size={24} color="#fff" />
        </div>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, background: 'linear-gradient(90deg, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            EduSmart Portal
          </h2>
          <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <BrainCircuit size={12} /> AI Microservice Online (Port 8000 & 5000)
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Link to="/" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Home</Link>
        <Link to="/courses" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Courses</Link>
        <Link to="/student/dashboard" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={16} color="#6366f1" /> AI Dashboard
        </Link>
        <Link to="/reports/performance" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Analytics</Link>

        {/* Role Switcher */}
        <div style={{ background: 'rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <UserCheck size={16} color="#38bdf8" />
          <select 
            value={selectedRole} 
            onChange={handleRoleChange}
            style={{ background: 'transparent', color: '#fff', border: 'none', fontWeight: 600, outline: 'none', cursor: 'pointer' }}
          >
            <option value="student" style={{ background: '#0f172a', color: '#fff' }}>Role: Student</option>
            <option value="teacher" style={{ background: '#0f172a', color: '#fff' }}>Role: Teacher</option>
            <option value="admin" style={{ background: '#0f172a', color: '#fff' }}>Role: Admin</option>
          </select>
        </div>

        <Link to="/auth/login" className="btn btn-primary">Sign In</Link>
      </div>
    </nav>
  );
};
