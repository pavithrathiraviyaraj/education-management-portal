import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';

export const AssignmentsPage = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Assignments & Projects</h1>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Continuous internal score evaluations.</p>

      <div className="glass-card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700 }}>Assignment 1: Binary Search Trees Implementation</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>CS101 • Data Structures</div>
            </div>
            <span style={{ color: '#34d399', fontWeight: 700 }}>90 / 100</span>
          </div>
        </div>
      </div>
    </div>
  );
};
