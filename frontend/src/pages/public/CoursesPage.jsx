import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Clock, Star } from 'lucide-react';

export const CoursesPage = () => {
  const courses = [
    { id: 'CS101', title: 'Data Structures & Algorithms', department: 'Computer Science', semester: 3, students: 120, rating: 4.8 },
    { id: 'CS102', title: 'Database Management Systems', department: 'Computer Science', semester: 4, students: 95, rating: 4.7 },
    { id: 'MA101', title: 'Discrete Mathematics', department: 'Mathematics', semester: 2, students: 140, rating: 4.5 },
    { id: 'IT201', title: 'Web Technologies & Frameworks', department: 'Information Tech', semester: 4, students: 110, rating: 4.9 }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Curriculum & Courses</h1>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Browse active department subjects monitored by the AI Engine.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {courses.map((course) => (
          <div key={course.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                <span style={{ background: 'rgba(99,102,241,0.2)', color: '#818cf8', padding: '4px 10px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
                  {course.id}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24', fontSize: '0.85rem', fontWeight: 600 }}>
                  <Star size={14} fill="#fbbf24" /> {course.rating}
                </span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>{course.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1rem' }}>{course.department} • Semester {course.semester}</p>
            </div>
            <Link to={`/courses/${course.id}`} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
              View Course Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
