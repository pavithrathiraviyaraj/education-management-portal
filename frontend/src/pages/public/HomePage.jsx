import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldAlert, BrainCircuit, BarChart3, Bell, Award, BookOpen, UserCheck, Star, Lightbulb, Users, CheckCircle2 } from 'lucide-react';

export const HomePage = () => {
  const announcements = [
    { id: 1, title: '📢 Midterm Exam Schedule Released', date: 'Aug 18, 2026', tag: 'Exam Alert' },
    { id: 2, title: '✨ New AI Study Recommendation Engine Online', date: 'Aug 15, 2026', tag: 'AI Feature' },
    { id: 3, title: '🏆 Annual Hackathon Registration Open for CS & IT', date: 'Aug 10, 2026', tag: 'Event' }
  ];

  const featuredCourses = [
    { code: 'CS101', title: 'Data Structures & Algorithms', department: 'Computer Science', rating: '4.9 ⭐', students: '340 Students', tag: 'Top Rated' },
    { code: 'CS102', title: 'Database Management Systems', department: 'Computer Science', rating: '4.8 ⭐', students: '290 Students', tag: 'Popular' },
    { code: 'IT201', title: 'Web Technologies & Cloud Apps', department: 'Information Tech', rating: '4.9 ⭐', students: '410 Students', tag: 'Featured' }
  ];

  const topTeachers = [
    { name: 'Dr. Ramesh Kumar', dept: 'Computer Science', subject: 'Data Structures', exp: '12+ Yrs Exp', avatar: '👨‍🏫' },
    { name: 'Prof. Anita Sharma', dept: 'Information Tech', subject: 'Cloud Computing', exp: '10+ Yrs Exp', avatar: '👩‍🏫' },
    { name: 'Dr. Suresh V.', dept: 'Mathematics', subject: 'Discrete Math', exp: '15+ Yrs Exp', avatar: '👨‍🔬' }
  ];

  const aiStudyTips = [
    { title: 'Focus on High Deficit Modules First', tip: 'Our AI model detected 60% of score drops happen in Recursive Functions. Practice 2 problems daily.' },
    { title: 'Maintain 80%+ Attendance Buffer', tip: 'Students keeping attendance above 80% achieve 1.4 GPA points higher on average.' },
    { title: 'Use Spaced Repetition for Exams', tip: 'Review flagged weak subjects 3 days and 1 day before midterm tests for 35% better recall.' }
  ];

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem 6rem' }} className="animate-fade-in">
      
      {/* Announcements Banner */}
      <div className="handcrafted-card" style={{ padding: '1.2rem 1.8rem', marginBottom: '2.5rem', background: '#fef2f2', border: '1px solid #fca5a5', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'var(--brand-red)', color: '#fff', padding: '8px', borderRadius: '10px' }}>
            <Bell size={20} />
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--brand-red)', fontWeight: 800, textTransform: 'uppercase' }}>
              Latest Campus Announcement
            </span>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
              {announcements[0].title} — <span style={{ color: '#64748b', fontWeight: 500 }}>{announcements[0].date}</span>
            </div>
          </div>
        </div>
        <Link to="/courses" className="btn-handcrafted btn-ghost-glass" style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem', borderRadius: '8px' }}>
          View All Bulletins
        </Link>
      </div>

      {/* Hero Section */}
      <div className="handcrafted-card" style={{ padding: '4.5rem 2.5rem', textAlign: 'center', marginBottom: '3.5rem', background: '#ffffff' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--brand-red-light)', border: '1px solid var(--brand-red-border)', padding: '8px 18px', borderRadius: '99px', color: 'var(--brand-red)', fontSize: '0.86rem', fontWeight: 700, marginBottom: '1.8rem' }}>
          <Sparkles size={16} color="var(--brand-red)" /> Education Intelligence Microservice Platform
        </div>
        <h1 style={{ fontSize: '3.4rem', fontWeight: 900, lineHeight: '1.15', marginBottom: '1.2rem', color: '#0f172a', letterSpacing: '-0.03em', maxWidth: '950px', margin: '0 auto 1.2rem' }}>
          Empowering Academic Growth with Early At-Risk Intelligence
        </h1>
        <p style={{ color: '#475569', fontSize: '1.15rem', maxWidth: '760px', margin: '0 auto 2.8rem', lineHeight: '1.65' }}>
          Real-time risk assessment, weak subject identification, customized remedial study roadmaps, and an interactive LLM academic advisor.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/courses" className="btn-handcrafted btn-primary-glow" style={{ padding: '1rem 2.2rem', fontSize: '1.05rem', borderRadius: '14px' }}>
            Explore All Courses <ArrowRight size={20} />
          </Link>
          <Link to="/student/dashboard" className="btn-handcrafted btn-ghost-glass" style={{ padding: '1rem 2.2rem', fontSize: '1.05rem', borderRadius: '14px' }}>
            Open AI Dashboard
          </Link>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--brand-red)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Top Rated Learning Paths
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', margin: '4px 0 0' }}>
              Featured Academic Courses
            </h2>
          </div>
          <Link to="/courses" style={{ color: 'var(--brand-red)', fontWeight: 700, textDecoration: 'none', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            See All Courses <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.8rem' }}>
          {featuredCourses.map((c) => (
            <div key={c.code} className="handcrafted-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ background: 'var(--brand-red-light)', color: 'var(--brand-red)', fontWeight: 800, padding: '4px 10px', borderRadius: '8px', fontSize: '0.78rem' }}>
                    {c.code}
                  </span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#d97706' }}>{c.rating}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.6rem' }}>{c.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Dept: <strong style={{ color: '#0f172a' }}>{c.department}</strong></p>
              </div>

              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>{c.students}</span>
                <Link to={`/courses/${c.code}`} className="btn-handcrafted btn-primary-glow" style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem', borderRadius: '8px' }}>
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Study Tips Section */}
      <div className="handcrafted-card" style={{ padding: '3rem 2.5rem', marginBottom: '3.5rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
          <div style={{ background: 'var(--brand-red)', padding: '10px', borderRadius: '12px', color: '#fff' }}>
            <Lightbulb size={24} />
          </div>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--brand-red)', fontWeight: 800, textTransform: 'uppercase' }}>
              Personalized Recommendations
            </span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              AI Study & Performance Tips
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {aiStudyTips.map((tip, idx) => (
            <div key={idx} style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--brand-red)', fontWeight: 800, marginBottom: '6px' }}>TIP #{idx + 1}</div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>{tip.title}</h4>
              <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: '1.55' }}>{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Faculty / Teachers Section */}
      <div>
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--brand-red)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Academic Instructors
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', margin: '4px 0 0' }}>
            Top Faculty & Mentors
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem' }}>
          {topTeachers.map((t, idx) => (
            <div key={idx} className="handcrafted-card" style={{ padding: '1.8rem', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontSize: '2.5rem', background: 'var(--brand-red-light)', padding: '12px', borderRadius: '16px', border: '1px solid var(--brand-red-border)' }}>
                {t.avatar}
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0 0 2px' }}>{t.name}</h4>
                <div style={{ fontSize: '0.82rem', color: 'var(--brand-red)', fontWeight: 700 }}>{t.subject}</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px' }}>{t.dept} • {t.exp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
