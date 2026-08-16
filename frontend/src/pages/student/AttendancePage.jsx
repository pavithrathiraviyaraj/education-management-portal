import React from 'react';
import { UserCheck, AlertTriangle, Calendar, CheckCircle2 } from 'lucide-react';

export const AttendancePage = () => {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 5rem' }} className="animate-fade-in">
      
      <div className="handcrafted-card" style={{ padding: '2rem 2.2rem', marginBottom: '2rem' }}>
        <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
          Mandatory Attendance Tracking
        </span>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#f9fafb', margin: '4px 0 0' }}>
          My Attendance Records
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '0.92rem' }}>
          75% Mandatory Attendance Compliance Monitor
        </p>
      </div>

      {/* Attendance Summary */}
      <div className="handcrafted-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem' }}>
          Subject Attendance Percentages
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, marginBottom: '6px' }}>
              <span>CS101: Data Structures & Algorithms</span>
              <span style={{ color: '#34d399' }}>92.5% (Attended 37/40)</span>
            </div>
            <div className="track-bg">
              <div className="track-fill" style={{ width: '92.5%', background: '#10b981' }} />
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, marginBottom: '6px' }}>
              <span>CS102: Database Management Systems</span>
              <span style={{ color: '#34d399' }}>85.0% (Attended 34/40)</span>
            </div>
            <div className="track-bg">
              <div className="track-fill" style={{ width: '85%', background: '#10b981' }} />
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.2rem', borderRadius: '12px', border: '1px solid rgba(244,63,94,0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, marginBottom: '6px' }}>
              <span>CE302: Operating Systems</span>
              <span style={{ color: '#fb7185' }}>68.5% ⚠️ Below 75% Threshold</span>
            </div>
            <div className="track-bg">
              <div className="track-fill" style={{ width: '68.5%', background: '#f43f5e' }} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
