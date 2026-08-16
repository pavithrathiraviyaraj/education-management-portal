import React from 'react';
import { UserCheck, AlertTriangle } from 'lucide-react';

export const AttendancePage = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Attendance Tracking</h1>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>AI monitors 75% mandatory attendance threshold.</p>

      <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Subject Attendance Record</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
              <span>Data Structures (CS101)</span>
              <span style={{ color: '#34d399' }}>92.5%</span>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
              <span>Operating Systems (CE302)</span>
              <span style={{ color: '#f87171' }}>68.5% (Warning)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
