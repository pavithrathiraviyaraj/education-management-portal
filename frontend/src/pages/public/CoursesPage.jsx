import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Clock, Users, ArrowRight } from 'lucide-react';

export const CoursesPage = () => {
  const [search, setSearch] = useState('');

  const courses = [
    { code: 'CS101', title: 'Data Structures & Algorithms', department: 'Computer Science', credits: 4, duration: '16 Weeks', instructor: 'Dr. Ramesh Kumar' },
    { code: 'CS102', title: 'Database Management Systems', department: 'Computer Science', credits: 4, duration: '16 Weeks', instructor: 'Prof. Anita Sharma' },
    { code: 'IT201', title: 'Web Technologies & Cloud Applications', department: 'Information Tech', credits: 3, duration: '14 Weeks', instructor: 'Dr. Suresh V.' },
    { code: 'MA101', title: 'Discrete Mathematics & Logic', department: 'Mathematics', credits: 4, duration: '16 Weeks', instructor: 'Prof. K. Sundaram' },
    { code: 'CE302', title: 'Operating Systems & Concurrency', department: 'Computer Eng', credits: 4, duration: '16 Weeks', instructor: 'Dr. Meena Reddy' }
  ];

  const filtered = courses.filter(c => c.title.toLowerCase().includes(search.toLowerCase()) || c.code.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem 5rem' }} className="animate-fade-in">
      
      <div className="handcrafted-card" style={{ padding: '2.5rem', marginBottom: '2.5rem', textAlign: 'center', background: 'radial-gradient(ellipse at top, rgba(6, 182, 212, 0.2) 0%, rgba(17, 24, 39, 0.9) 80%)' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.6rem' }}>Academic Curriculum & Courses</h1>
        <p style={{ color: '#9ca3af', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 1.8rem' }}>
          Explore department course listings, credit structures, and AI-monitored learning paths.
        </p>

        <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
          <input
            type="text"
            placeholder="Search course title or code..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '0.8rem 1rem 0.8rem 2.6rem', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.8rem' }}>
        {filtered.map((item) => (
          <div key={item.code} className="handcrafted-card" style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', fontWeight: 800, padding: '4px 10px', borderRadius: '8px', fontSize: '0.78rem' }}>
                  {item.code}
                </span>
                <span style={{ color: '#9ca3af', fontSize: '0.82rem' }}>{item.credits} Credits</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>{item.title}</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.88rem' }}>Faculty: <strong style={{ color: '#e5e7eb' }}>{item.instructor}</strong></p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', marginTop: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>{item.duration}</span>
              <Link to={`/courses/${item.code}`} className="btn-handcrafted btn-ghost-glass" style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem', borderRadius: '8px' }}>
                Course Details <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
