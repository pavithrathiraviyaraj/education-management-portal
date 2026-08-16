import React from 'react';
import { TrendingUp, Award, Target, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

export const MyProgressPage = () => {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 5rem' }} className="animate-fade-in">
      
      <div className="handcrafted-card" style={{ padding: '2rem 2.2rem', marginBottom: '2rem' }}>
        <span style={{ fontSize: '0.78rem', color: '#06b6d4', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
          Student Progress & Trajectory
        </span>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#f9fafb', margin: '4px 0 0' }}>
          My Academic Growth & GPA Progress
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '0.92rem' }}>
          Continuous Internal Evaluation • Semester Progress Tracking
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="handcrafted-card" style={{ padding: '1.8rem' }}>
          <div style={{ color: '#9ca3af', fontSize: '0.86rem', fontWeight: 600 }}>Target Semester GPA Goal</div>
          <h2 style={{ fontSize: '2.6rem', fontWeight: 900, color: '#38bdf8', margin: '0.5rem 0 0' }}>9.0 / 10.0</h2>
          <span style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: 700 }}>+0.2 Required for Honors</span>
        </div>

        <div className="handcrafted-card" style={{ padding: '1.8rem' }}>
          <div style={{ color: '#9ca3af', fontSize: '0.86rem', fontWeight: 600 }}>Current Estimated GPA</div>
          <h2 style={{ fontSize: '2.6rem', fontWeight: 900, color: '#ffffff', margin: '0.5rem 0 0' }}>8.5 / 10.0</h2>
          <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>AI Calculated Baseline</span>
        </div>

        <div className="handcrafted-card" style={{ padding: '1.8rem' }}>
          <div style={{ color: '#9ca3af', fontSize: '0.86rem', fontWeight: 600 }}>Completed Semester Credits</div>
          <h2 style={{ fontSize: '2.6rem', fontWeight: 900, color: '#a855f7', margin: '0.5rem 0 0' }}>68 Credits</h2>
          <span style={{ fontSize: '0.8rem', color: '#a855f7' }}>On track for graduation</span>
        </div>
      </div>

    </div>
  );
};
