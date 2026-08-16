import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Award } from 'lucide-react';

export const CourseDetailsPage = () => {
  const { id } = useParams();

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
      <Link to="/courses" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 600, display: 'inline-block', marginBottom: '1.5rem' }}>
        ← Back to Courses
      </Link>
      <div className="glass-card" style={{ padding: '2rem' }}>
        <span style={{ background: 'rgba(99,102,241,0.2)', color: '#818cf8', padding: '4px 10px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700 }}>
          Course ID: {id || 'CS101'}
        </span>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '1rem 0' }}>Data Structures & Algorithms</h1>
        <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          This core course covers arrays, linked lists, trees, graphs, sorting algorithms, and dynamic programming. Student mastery in this subject is tracked by the AI engine to evaluate technical performance trends.
        </p>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>AI Monitoring Criteria:</h3>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0' }}>
            <CheckCircle size={18} color="#10b981" /> Minimum passing score: 60%
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0' }}>
            <CheckCircle size={18} color="#10b981" /> Minimum attendance requirement: 75%
          </li>
        </ul>
      </div>
    </div>
  );
};
