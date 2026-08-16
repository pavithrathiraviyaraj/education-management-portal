import React from 'react';
import { TrendingUp, Award, BarChart2 } from 'lucide-react';

export const MyProgressPage = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Semester Academic Progress</h1>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Detailed breakdown of GPA trajectory and continuous evaluation.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Target Semester GPA</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#38bdf8' }}>9.0 / 10</h2>
        </div>
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Current Estimated GPA</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#34d399' }}>8.5 / 10</h2>
        </div>
      </div>
    </div>
  );
};
