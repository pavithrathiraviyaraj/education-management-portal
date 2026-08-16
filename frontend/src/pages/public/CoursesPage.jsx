import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Clock, Users, ArrowRight, Filter, Star, Sparkles } from 'lucide-react';

export const CoursesPage = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'Computer Science', 'Information Tech', 'Mathematics', 'Computer Eng'];

  const courses = [
    { code: 'CS101', title: 'Data Structures & Algorithms', department: 'Computer Science', credits: 4, duration: '16 Weeks', instructor: 'Dr. Ramesh Kumar', rating: 4.9, reviews: 120, topRated: true },
    { code: 'CS102', title: 'Database Management Systems', department: 'Computer Science', credits: 4, duration: '16 Weeks', instructor: 'Prof. Anita Sharma', rating: 4.8, reviews: 98, topRated: true },
    { code: 'IT201', title: 'Web Technologies & Cloud Applications', department: 'Information Tech', credits: 3, duration: '14 Weeks', instructor: 'Dr. Suresh V.', rating: 4.9, reviews: 145, topRated: true },
    { code: 'MA101', title: 'Discrete Mathematics & Logic', department: 'Mathematics', credits: 4, duration: '16 Weeks', instructor: 'Prof. K. Sundaram', rating: 4.6, reviews: 65, topRated: false },
    { code: 'CE302', title: 'Operating Systems & Concurrency', department: 'Computer Eng', credits: 4, duration: '16 Weeks', instructor: 'Dr. Meena Reddy', rating: 4.7, reviews: 82, topRated: false }
  ];

  const filtered = courses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.code.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || c.department === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem 5rem' }} className="animate-fade-in">
      
      {/* Header Banner */}
      <div className="handcrafted-card" style={{ padding: '3rem 2.5rem', marginBottom: '2.5rem', textAlign: 'center', background: '#ffffff' }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--brand-red)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
          Curriculum Directory
        </span>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.6rem' }}>Academic Courses & Modules</h1>
        <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 2rem' }}>
          Explore department course listings, credit structures, and AI-monitored learning paths.
        </p>

        {/* Search Bar */}
        <div style={{ maxWidth: '540px', margin: '0 auto', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          <input
            type="text"
            placeholder="Search courses by title or course code..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '14px', padding: '0.85rem 1rem 0.85rem 2.8rem', color: '#0f172a', fontSize: '0.95rem', outline: 'none' }}
          />
        </div>
      </div>

      {/* Top Rated Categories Pills */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Filter size={14} /> Filter by Category:
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.55rem 1.2rem',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                background: selectedCategory === cat ? 'var(--brand-red)' : '#ffffff',
                color: selectedCategory === cat ? '#ffffff' : '#475569',
                boxShadow: selectedCategory === cat ? '0 4px 12px rgba(220,38,38,0.25)' : '0 1px 3px rgba(0,0,0,0.05)',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Top Rated Courses Highlight */}
      {selectedCategory === 'ALL' && !search && (
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star size={20} color="#d97706" /> Top Rated Categories & Courses
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
            {courses.filter(c => c.topRated).map(c => (
              <div key={c.code} style={{ background: '#fef2f2', padding: '1.2rem', borderRadius: '14px', border: '1px solid #fca5a5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--brand-red)', fontWeight: 800 }}>{c.code} • {c.department}</div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0f172a', margin: '2px 0' }}>{c.title}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>⭐ {c.rating} ({c.reviews} reviews)</div>
                </div>
                <Link to={`/courses/${c.code}`} className="btn-handcrafted btn-primary-glow" style={{ padding: '0.4rem 0.8rem', fontSize: '0.78rem', borderRadius: '8px' }}>
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Course Listing */}
      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.2rem' }}>
        Course Directory ({filtered.length} Courses Found)
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.8rem' }}>
        {filtered.map((item) => (
          <div key={item.code} className="handcrafted-card" style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ background: 'var(--brand-red-light)', color: 'var(--brand-red)', fontWeight: 800, padding: '4px 10px', borderRadius: '8px', fontSize: '0.78rem' }}>
                  {item.code}
                </span>
                <span style={{ color: '#64748b', fontSize: '0.82rem', fontWeight: 600 }}>{item.credits} Credits</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.6rem' }}>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Faculty: <strong style={{ color: '#0f172a' }}>{item.instructor}</strong></p>
            </div>

            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginTop: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', color: '#64748b' }}>{item.duration}</span>
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
