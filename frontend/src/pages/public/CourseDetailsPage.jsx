import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar, ShieldCheck, ArrowLeft, Star, FileText } from 'lucide-react';

export const CourseDetailsPage = () => {
  const { id } = useParams();

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 5rem' }} className="animate-fade-in">
      
      <Link to="/courses" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '1.5rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#ffffff'} onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}>
        <ArrowLeft size={16} /> Back to Course Directory
      </Link>

      {/* Hero Section */}
      <div className="handcrafted-card" style={{ padding: '3rem 2.5rem', marginBottom: '2.5rem', background: 'radial-gradient(circle at 100% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(99,102,241,0.15)', color: '#818cf8', fontWeight: 800, padding: '6px 14px', borderRadius: '99px', fontSize: '0.85rem', marginBottom: '1.2rem' }}>
          {id || 'CS101'}
        </div>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Data Structures & Algorithms
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '1.05rem', maxWidth: '800px', lineHeight: '1.6', marginBottom: '2rem' }}>
          Master the core fundamentals of organizing, managing, and storing data effectively. This course covers everything from basic arrays to advanced graph algorithms, preparing you for complex problem-solving.
        </p>
        
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px' }}>
              <Clock size={20} color="#38bdf8" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', fontWeight: 700 }}>Duration</div>
              <div style={{ fontSize: '1rem', color: '#fff', fontWeight: 600 }}>16 Weeks</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px' }}>
              <Star size={20} color="#fbbf24" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', fontWeight: 700 }}>Credits</div>
              <div style={{ fontSize: '1rem', color: '#fff', fontWeight: 600 }}>4 Credits</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px' }}>
              <ShieldCheck size={20} color="#34d399" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', fontWeight: 700 }}>Level</div>
              <div style={{ fontSize: '1rem', color: '#fff', fontWeight: 600 }}>Intermediate</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'start' }}>
        
        {/* Course Syllabus */}
        <div className="handcrafted-card" style={{ padding: '2.5rem' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={24} color="#a855f7" /> Course Syllabus
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ borderLeft: '2px solid rgba(168,85,247,0.3)', paddingLeft: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Module 1: Introduction to Data Structures</h4>
              <p style={{ color: '#9ca3af', fontSize: '0.92rem', lineHeight: '1.5' }}>Arrays, Linked Lists, Stacks, and Queues. Time and space complexity analysis (Big O notation).</p>
            </div>
            <div style={{ borderLeft: '2px solid rgba(168,85,247,0.3)', paddingLeft: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Module 2: Trees and Graphs</h4>
              <p style={{ color: '#9ca3af', fontSize: '0.92rem', lineHeight: '1.5' }}>Binary Search Trees, AVL Trees, Graph representations, BFS and DFS traversals.</p>
            </div>
            <div style={{ borderLeft: '2px solid rgba(168,85,247,0.3)', paddingLeft: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Module 3: Advanced Algorithms</h4>
              <p style={{ color: '#9ca3af', fontSize: '0.92rem', lineHeight: '1.5' }}>Dynamic Programming, Greedy Algorithms, Shortest Path Algorithms (Dijkstra, Bellman-Ford).</p>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="handcrafted-card" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>Enrollment Info</h3>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
              <span style={{ color: '#9ca3af' }}>Next Batch:</span>
              <span style={{ color: '#fff', fontWeight: 600 }}>Sep 01, 2026</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
              <span style={{ color: '#9ca3af' }}>Seats Available:</span>
              <span style={{ color: '#34d399', fontWeight: 600 }}>24 / 60</span>
            </div>
          </div>
          
          <button className="btn-handcrafted btn-primary-glow" style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem' }}>
            Register for Course
          </button>
        </div>

      </div>

    </div>
  );
};
