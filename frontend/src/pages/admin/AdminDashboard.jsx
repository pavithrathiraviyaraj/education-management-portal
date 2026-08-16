import React from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, BookOpen, BarChart3, ShieldAlert } from 'lucide-react';

export const AdminDashboard = () => {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Portal Administration</h1>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>System Management & Executive AI Reports.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <Link to="/admin/students" className="glass-card" style={{ padding: '1.5rem', textDecoration: 'none', color: '#fff' }}>
          <Users size={28} color="#6366f1" style={{ marginBottom: '0.8rem' }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Manage Students</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>View records, add student profiles.</p>
        </Link>
        <Link to="/admin/reports" className="glass-card" style={{ padding: '1.5rem', textDecoration: 'none', color: '#fff' }}>
          <BarChart3 size={28} color="#38bdf8" style={{ marginBottom: '0.8rem' }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Reports & Analytics</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Executive AI Risk Summary.</p>
        </Link>
      </div>
    </div>
  );
};
