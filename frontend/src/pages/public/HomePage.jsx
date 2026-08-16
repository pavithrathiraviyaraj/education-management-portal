import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, ShieldAlert, Sparkles, ArrowRight, BarChart3, Users, CheckCircle2, Zap } from 'lucide-react';

export const HomePage = () => {
  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem 6rem' }} className="animate-fade-in">
      
      {/* Hero Section */}
      <div className="handcrafted-card" style={{ padding: '5rem 2.5rem', textAlign: 'center', marginBottom: '3.5rem', background: '#ffffff' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--brand-red-light)', border: '1px solid var(--brand-red-border)', padding: '8px 18px', borderRadius: '99px', color: 'var(--brand-red)', fontSize: '0.86rem', fontWeight: 700, marginBottom: '1.8rem' }}>
          <Sparkles size={16} color="var(--brand-red)" /> Education Intelligence Microservice Platform
        </div>
        <h1 style={{ fontSize: '3.6rem', fontWeight: 900, lineHeight: '1.15', marginBottom: '1.2rem', color: '#0f172a', letterSpacing: '-0.03em', maxWidth: '950px', margin: '0 auto 1.2rem' }}>
          Empowering Academic Growth with Early At-Risk Intelligence
        </h1>
        <p style={{ color: '#475569', fontSize: '1.2rem', maxWidth: '760px', margin: '0 auto 2.8rem', lineHeight: '1.65' }}>
          Real-time risk assessment, weak subject identification, customized remedial study roadmaps, and an interactive LLM academic advisor.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/student/dashboard" className="btn-handcrafted btn-primary-glow" style={{ padding: '1rem 2.2rem', fontSize: '1.05rem', borderRadius: '14px' }}>
            Open AI Student Dashboard <ArrowRight size={20} />
          </Link>
          <Link to="/courses" className="btn-handcrafted btn-ghost-glass" style={{ padding: '1rem 2.2rem', fontSize: '1.05rem', borderRadius: '14px' }}>
            Explore Curriculum
          </Link>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid #e2e8f0' }}>
          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--brand-red)' }}>98.4%</div>
            <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Risk Detection Accuracy</div>
          </div>
          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--brand-red)' }}>&lt; 50ms</div>
            <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Python Microservice Latency</div>
          </div>
          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--brand-red)' }}>100%</div>
            <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Decoupled Microservice Uptime</div>
          </div>
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        <div className="handcrafted-card" style={{ padding: '2.2rem' }}>
          <div style={{ background: 'var(--brand-red-light)', width: '54px', height: '54px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem', border: '1px solid var(--brand-red-border)' }}>
            <ShieldAlert size={28} color="var(--brand-red)" />
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.6rem' }}>Early At-Risk Prediction</h3>
          <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
            Calculates attendance deficits, assignment averages, and midterm exam scores to flag at-risk students before final term exams.
          </p>
        </div>

        <div className="handcrafted-card" style={{ padding: '2.2rem' }}>
          <div style={{ background: 'var(--brand-red-light)', width: '54px', height: '54px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem', border: '1px solid var(--brand-red-border)' }}>
            <BrainCircuit size={28} color="var(--brand-red)" />
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.6rem' }}>LLM Academic Advisor</h3>
          <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
            Interactive student assistant offering context-aware grade improvement strategies, exam preparation, and study habits.
          </p>
        </div>

        <div className="handcrafted-card" style={{ padding: '2.2rem' }}>
          <div style={{ background: 'var(--brand-red-light)', width: '54px', height: '54px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem', border: '1px solid var(--brand-red-border)' }}>
            <BarChart3 size={28} color="var(--brand-red)" />
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.6rem' }}>Granular Analytics</h3>
          <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
            Deep subject-level performance metrics, GPA estimates, weak area identification, and automated executive takeaways.
          </p>
        </div>
      </div>

    </div>
  );
};
