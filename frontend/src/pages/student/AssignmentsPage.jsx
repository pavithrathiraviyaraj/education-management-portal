import React from 'react';
import { FileText, CheckCircle2, Clock, UploadCloud, Sparkles } from 'lucide-react';

export const AssignmentsPage = () => {
  const assignments = [
    { id: 1, title: 'Binary Search Trees & Heap Implementation', course: 'CS101 - Data Structures', dueDate: 'Aug 20, 2026', status: 'Submitted', grade: '90 / 100', aiFeedback: 'Excellent time complexity optimization.' },
    { id: 2, title: 'SQL Joins & Relational Normalization Task', course: 'CS102 - Database Systems', dueDate: 'Aug 25, 2026', status: 'Pending', grade: 'Pending', aiFeedback: 'Prepare for ER diagram validation.' },
    { id: 3, title: 'Process Scheduling Algorithm Simulation', course: 'CE302 - Operating Systems', dueDate: 'Aug 28, 2026', status: 'Action Required', grade: 'Needs Revision', aiFeedback: 'Review Round Robin quantum scheduling logic.' }
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 5rem' }} className="animate-fade-in">
      
      <div className="handcrafted-card" style={{ padding: '2rem 2.2rem', marginBottom: '2rem' }}>
        <span style={{ fontSize: '0.78rem', color: '#818cf8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
          Coursework & Evaluation
        </span>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#f9fafb', margin: '4px 0 0' }}>
          Assignments & Project Submissions
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '0.92rem' }}>
          Submit coursework and receive instant AI feedback analysis.
        </p>
      </div>

      <div className="handcrafted-card" style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem' }}>
          Active Coursework Assignments
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {assignments.map((item) => (
            <div key={item.id} style={{ background: 'rgba(255,255,255,0.03)', padding: '1.4rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 700 }}>{item.course}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', margin: '4px 0' }}>{item.title}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '6px', fontSize: '0.84rem', color: '#9ca3af' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> Due: {item.dueDate}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#818cf8' }}><Sparkles size={14} /> AI Feedback: {item.aiFeedback}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ fontWeight: 800, fontSize: '0.95rem', color: item.status === 'Submitted' ? '#34d399' : item.status === 'Pending' ? '#fbbf24' : '#fb7185' }}>
                  {item.grade}
                </span>
                <button className="btn-handcrafted btn-primary-glow" style={{ padding: '0.5rem 1rem', fontSize: '0.82rem', borderRadius: '10px' }}>
                  <UploadCloud size={16} /> {item.status === 'Submitted' ? 'Re-upload' : 'Submit Work'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
