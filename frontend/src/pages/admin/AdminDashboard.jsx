import React from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, BookOpen, BarChart3, ShieldAlert, Cpu, Server, Database, Activity, FileText } from 'lucide-react';

export const AdminDashboard = () => {
  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem 5rem' }} className="animate-fade-in">
      
      {/* Header */}
      <div className="handcrafted-card" style={{ padding: '2rem 2.2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ fontSize: '0.78rem', color: '#a855f7', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            System Administration
          </span>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#f9fafb', margin: '4px 0 0' }}>
            Admin Command Center
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '0.92rem' }}>
            System Health • MongoDB Sync • Institutional AI Governance
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <span style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399', padding: '6px 14px', borderRadius: '99px', fontSize: '0.82rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px #34d399' }}></span>
            MongoDB & Microservices Healthy
          </span>
        </div>
      </div>

      {/* System Infrastructure Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="handcrafted-card" style={{ padding: '1.6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af', fontSize: '0.86rem', fontWeight: 600 }}>
            <span>Registered Students</span>
            <Users size={20} color="#6366f1" />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', margin: '0.6rem 0 0' }}>1,240</h2>
          <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>Active in Database</span>
        </div>

        <div className="handcrafted-card" style={{ padding: '1.6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af', fontSize: '0.86rem', fontWeight: 600 }}>
            <span>Faculty Members</span>
            <GraduationCap size={20} color="#06b6d4" />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', margin: '0.6rem 0 0' }}>48</h2>
          <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>Across 6 Departments</span>
        </div>

        <div className="handcrafted-card" style={{ padding: '1.6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af', fontSize: '0.86rem', fontWeight: 600 }}>
            <span>Active Courses</span>
            <BookOpen size={20} color="#a855f7" />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', margin: '0.6rem 0 0' }}>32</h2>
          <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>Monitored by AI Service</span>
        </div>

        <div className="handcrafted-card" style={{ padding: '1.6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af', fontSize: '0.86rem', fontWeight: 600 }}>
            <span>Total Risk Scans</span>
            <Activity size={20} color="#10b981" />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34d399', margin: '0.6rem 0 0' }}>8,420</h2>
          <span style={{ fontSize: '0.78rem', color: '#34d399' }}>FastAPI Realtime Engine</span>
        </div>
      </div>

      {/* Admin Modules Navigation Grid */}
      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem' }}>
        Administrative Governance Modules
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.8rem' }}>
        
        <Link to="/admin/students" className="handcrafted-card" style={{ padding: '2rem', textDecoration: 'none', color: '#ffffff' }}>
          <div style={{ background: 'rgba(99,102,241,0.15)', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Users size={24} color="#818cf8" />
          </div>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.4rem' }}>Manage Students</h4>
          <p style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: '1.5' }}>
            View student profiles, edit attendance logs, update assignment scores, and sync with MongoDB.
          </p>
        </Link>

        <Link to="/admin/teachers" className="handcrafted-card" style={{ padding: '2rem', textDecoration: 'none', color: '#ffffff' }}>
          <div style={{ background: 'rgba(6,182,212,0.15)', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <GraduationCap size={24} color="#38bdf8" />
          </div>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.4rem' }}>Faculty & Teachers</h4>
          <p style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: '1.5' }}>
            Manage instructor access, assign department courses, and oversee grading permissions.
          </p>
        </Link>

        <Link to="/admin/courses" className="handcrafted-card" style={{ padding: '2rem', textDecoration: 'none', color: '#ffffff' }}>
          <div style={{ background: 'rgba(168,85,247,0.15)', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <BookOpen size={24} color="#c084fc" />
          </div>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.4rem' }}>Manage Curriculum</h4>
          <p style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: '1.5' }}>
            Add new subject courses, set passing thresholds, and manage semester credits.
          </p>
        </Link>

        <Link to="/admin/reports" className="handcrafted-card" style={{ padding: '2rem', textDecoration: 'none', color: '#ffffff' }}>
          <div style={{ background: 'rgba(16,185,129,0.15)', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <BarChart3 size={24} color="#34d399" />
          </div>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.4rem' }}>Institutional AI Analytics</h4>
          <p style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: '1.5' }}>
            Generate college-wide risk summaries, department comparative charts, and downloadable reports.
          </p>
        </Link>

      </div>
    </div>
  );
};
