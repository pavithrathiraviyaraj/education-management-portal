import React, { useState } from 'react';
import { Users, ShieldAlert, CheckCircle2, Search, Filter, BookOpen, UserCheck, AlertTriangle, ArrowUpRight, BarChart3 } from 'lucide-react';

export const TeacherDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRisk, setFilterRisk] = useState('ALL');

  const studentsList = [
    { id: 'STU1001', name: 'Aarav Sharma', department: 'CS', attendance: '92.5%', gpa: '8.8', risk: 'LOW', weakSubject: 'None' },
    { id: 'STU1002', name: 'Priya Patel', department: 'IT', attendance: '78.0%', gpa: '6.9', risk: 'MEDIUM', weakSubject: 'Probability & Stats' },
    { id: 'STU1003', name: 'Rohan Mehta', department: 'CS', attendance: '85.0%', gpa: '7.8', risk: 'LOW', weakSubject: 'None' },
    { id: 'STU1004', name: 'Ananya Roy', department: 'IT', attendance: '81.2%', gpa: '7.2', risk: 'LOW', weakSubject: 'Database Systems' },
    { id: 'STU1005', name: 'Vikram Singh', department: 'CE', attendance: '68.5%', gpa: '5.4', risk: 'HIGH', weakSubject: 'Operating Systems' },
  ];

  const filteredStudents = studentsList.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = filterRisk === 'ALL' || student.risk === filterRisk;
    return matchesSearch && matchesRisk;
  });

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem 5rem' }} className="animate-fade-in">
      
      {/* Header */}
      <div className="handcrafted-card" style={{ padding: '2rem 2.2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ fontSize: '0.78rem', color: '#06b6d4', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Faculty & Instructor Portal
          </span>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#f9fafb', margin: '4px 0 0' }}>
            Faculty Control Dashboard
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '0.92rem' }}>
            Class Roster • AI Risk Monitoring • Student Evaluation Management
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-handcrafted btn-primary-glow" style={{ borderRadius: '12px' }}>
            + Log Class Attendance
          </button>
          <button className="btn-handcrafted btn-ghost-glass" style={{ borderRadius: '12px' }}>
            Publish Assignment Grades
          </button>
        </div>
      </div>

      {/* Class Statistics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="handcrafted-card" style={{ padding: '1.6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af', fontSize: '0.86rem', fontWeight: 600 }}>
            <span>Total Enrolled Students</span>
            <Users size={20} color="#6366f1" />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', margin: '0.6rem 0 0' }}>120</h2>
          <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>3 Active Class Sections</span>
        </div>

        <div className="handcrafted-card" style={{ padding: '1.6rem', borderLeft: '4px solid #fb7185' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af', fontSize: '0.86rem', fontWeight: 600 }}>
            <span>Flagged At-Risk Students</span>
            <ShieldAlert size={20} color="#fb7185" />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fb7185', margin: '0.6rem 0 0' }}>1 Student</h2>
          <span style={{ fontSize: '0.78rem', color: '#fb7185', fontWeight: 700 }}>Requires Faculty Intervention</span>
        </div>

        <div className="handcrafted-card" style={{ padding: '1.6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af', fontSize: '0.86rem', fontWeight: 600 }}>
            <span>Class Average Attendance</span>
            <UserCheck size={20} color="#34d399" />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#34d399', margin: '0.6rem 0 0' }}>84.2%</h2>
          <span style={{ fontSize: '0.78rem', color: '#34d399' }}>+2.1% from last month</span>
        </div>

        <div className="handcrafted-card" style={{ padding: '1.6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af', fontSize: '0.86rem', fontWeight: 600 }}>
            <span>Class Mean GPA</span>
            <BarChart3 size={20} color="#06b6d4" />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#06b6d4', margin: '0.6rem 0 0' }}>7.6 / 10</h2>
          <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>Target Benchmark: 7.5</span>
        </div>
      </div>

      {/* Class Student AI Risk & Performance Table */}
      <div className="handcrafted-card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f9fafb', margin: 0 }}>
            Class Roster & AI Risk Assessment
          </h3>
          
          {/* Search & Filter Controls */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
              <input
                type="text"
                placeholder="Search student..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', padding: '0.55rem 0.8rem 0.55rem 2.2rem', color: '#fff', fontSize: '0.85rem', outline: 'none' }}
              />
            </div>
            
            <select
              value={filterRisk}
              onChange={(e) => setFilterRisk(e.target.value)}
              style={{ background: '#111827', color: '#fff', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', padding: '0.55rem 0.9rem', fontSize: '0.85rem', outline: 'none' }}
            >
              <option value="ALL">Filter: All Risk Levels</option>
              <option value="HIGH">High Risk Only</option>
              <option value="MEDIUM">Medium Risk Only</option>
              <option value="LOW">Low Risk Only</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#9ca3af', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                <th style={{ padding: '0.8rem 1rem' }}>Student ID</th>
                <th style={{ padding: '0.8rem 1rem' }}>Student Name</th>
                <th style={{ padding: '0.8rem 1rem' }}>Dept</th>
                <th style={{ padding: '0.8rem 1rem' }}>Attendance</th>
                <th style={{ padding: '0.8rem 1rem' }}>GPA</th>
                <th style={{ padding: '0.8rem 1rem' }}>Weak Subject</th>
                <th style={{ padding: '0.8rem 1rem' }}>AI Risk Status</th>
                <th style={{ padding: '0.8rem 1rem' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((st) => (
                <tr key={st.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }}>
                  <td style={{ padding: '1rem', fontWeight: 700, color: '#e5e7eb' }}>{st.id}</td>
                  <td style={{ padding: '1rem', fontWeight: 600, color: '#ffffff' }}>{st.name}</td>
                  <td style={{ padding: '1rem', color: '#9ca3af' }}>{st.department}</td>
                  <td style={{ padding: '1rem', color: parseFloat(st.attendance) < 75 ? '#fb7185' : '#34d399', fontWeight: 700 }}>{st.attendance}</td>
                  <td style={{ padding: '1rem', color: '#e5e7eb', fontWeight: 700 }}>{st.gpa}</td>
                  <td style={{ padding: '1rem', color: st.weakSubject === 'None' ? '#9ca3af' : '#fbbf24' }}>{st.weakSubject}</td>
                  <td style={{ padding: '1rem' }}>
                    <span className={`risk-pill risk-pill-${st.risk.toLowerCase()}`}>
                      {st.risk} RISK
                    </span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <button className="btn-handcrafted btn-ghost-glass" style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem', borderRadius: '8px' }}>
                      Send Advice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
