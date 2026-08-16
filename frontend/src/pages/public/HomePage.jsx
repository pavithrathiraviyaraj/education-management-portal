import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, ShieldAlert, Sparkles, Award, ArrowRight, BarChart3, Users } from 'lucide-react';

export const HomePage = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem' }}>
      {/* Hero Section */}
      <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center', marginBottom: '3rem', background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, rgba(15, 23, 42, 0.8) 70%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', padding: '6px 16px', borderRadius: '30px', color: '#818cf8', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.5rem' }}>
          <Sparkles size={16} /> AI-Powered Education Intelligence Platform
        </div>
        <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: '1.2', marginBottom: '1rem', background: 'linear-gradient(135deg, #fff 0%, #cbd5e1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Next-Generation Academic Risk Prediction & Performance Analytics
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '750px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
          Empowering educators and students with real-time AI risk assessment, weak subject identification, personalized study roadmaps, and an interactive LLM academic advisor.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <Link to="/student/dashboard" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1.1rem' }}>
            Explore AI Student Dashboard <ArrowRight size={20} />
          </Link>
          <Link to="/courses" className="btn btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '1.1rem' }}>
            Browse Courses
          </Link>
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ background: 'rgba(239,68,68,0.15)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <ShieldAlert size={26} color="#ef4444" />
          </div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Early At-Risk Prediction</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Multi-factor algorithms continuously track attendance thresholds, assignment trends, and exam scores to flag at-risk students before failures occur.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ background: 'rgba(99,102,241,0.15)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <BrainCircuit size={26} color="#6366f1" />
          </div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>AI Academic Advisor</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Interactive context-aware chatbot providing customized study tips, exam prep guidance, and grade improvement strategies for students.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ background: 'rgba(16,185,129,0.15)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <BarChart3 size={26} color="#10b981" />
          </div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Granular Analytics</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Deep breakdown of subject mark distributions, GPA estimates, weak subject severity levels, and automated executive summary takeaways.
          </p>
        </div>
      </div>
    </div>
  );
};
