import React from 'react';
import { Users, ShieldAlert, AlertTriangle, CheckCircle } from 'lucide-react';

export const TeacherDashboard = () => {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Faculty Dashboard</h1>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>AI Class Performance Overview & Flagged Students.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Total Enrolled Students</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>120</h2>
        </div>
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>At-Risk Flagged (High Risk)</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#f87171' }}>4 Students</h2>
        </div>
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Class Average GPA</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#38bdf8' }}>7.8 / 10</h2>
        </div>
      </div>
    </div>
  );
};
