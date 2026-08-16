import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { getStudentAIAnalysis } from '../../services/aiEngineService';
import { ShieldAlert, Award, TrendingUp, AlertTriangle, CheckCircle, Lightbulb, BookOpen, UserCheck, RefreshCw } from 'lucide-react';
import { AIChatbotWidget } from '../../components/AIChatbotWidget';

export const StudentDashboard = () => {
  const { activeStudentId, setActiveStudentId } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  // Sample data fallback for quick switching demo
  const sampleStudents = {
    'STU1001': {
      student_id: 'STU1001',
      name: 'Aarav Sharma',
      department: 'Computer Science',
      semester: 4,
      attendance_pct: 92.5,
      assignment_avg: 88.0,
      midterm_score: 85.0,
      endterm_score: 89.0,
      previous_gpa: 8.8,
      subject_marks: [
        { subject_code: 'CS101', subject_name: 'Data Structures', assignment_score: 90, midterm_score: 88, endterm_score: 92, total_score: 90, grade: 'A+' },
        { subject_code: 'CS102', subject_name: 'Database Management', assignment_score: 85, midterm_score: 82, endterm_score: 86, total_score: 84.3, grade: 'A' },
        { subject_code: 'MA101', subject_name: 'Discrete Mathematics', assignment_score: 82, midterm_score: 80, endterm_score: 84, total_score: 82, grade: 'A' }
      ]
    },
    'STU1002': {
      student_id: 'STU1002',
      name: 'Priya Patel',
      department: 'Information Technology',
      semester: 3,
      attendance_pct: 78.0,
      assignment_avg: 72.0,
      midterm_score: 64.0,
      endterm_score: 68.0,
      previous_gpa: 6.9,
      subject_marks: [
        { subject_code: 'IT201', subject_name: 'Web Technologies', assignment_score: 78, midterm_score: 70, endterm_score: 75, total_score: 74.3, grade: 'B' },
        { subject_code: 'MA201', subject_name: 'Probability & Statistics', assignment_score: 65, midterm_score: 55, endterm_score: 58, total_score: 59.3, grade: 'C' }
      ]
    },
    'STU1005': {
      student_id: 'STU1005',
      name: 'Vikram Singh',
      department: 'Computer Engineering',
      semester: 5,
      attendance_pct: 68.5,
      assignment_avg: 55.0,
      midterm_score: 48.0,
      endterm_score: 52.0,
      previous_gpa: 5.4,
      subject_marks: [
        { subject_code: 'CE301', subject_name: 'Computer Architecture', assignment_score: 55, midterm_score: 45, endterm_score: 50, total_score: 50, grade: 'D' },
        { subject_code: 'CE302', subject_name: 'Operating Systems', assignment_score: 50, midterm_score: 42, endterm_score: 48, total_score: 46.7, grade: 'F' }
      ]
    }
  };

  const currentStudent = sampleStudents[activeStudentId] || sampleStudents['STU1001'];

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    getStudentAIAnalysis(activeStudentId, currentStudent)
      .then((res) => {
        if (isMounted) {
          setData(res.ai_analytics || res);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setLoading(false);
      });
    return () => { isMounted = false; };
  }, [activeStudentId]);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '4rem' }}>
      {/* Top Profile Header */}
      <div className="glass-card" style={{ padding: '1.5rem 2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Academic Profile Overview
          </span>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '4px' }}>{currentStudent.name}</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
            ID: {currentStudent.student_id} • {currentStudent.department} • Semester {currentStudent.semester}
          </p>
        </div>

        {/* Student Switcher Dropdown */}
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem 1.2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '4px', fontWeight: 600 }}>Switch Demo Student:</label>
          <select 
            value={activeStudentId} 
            onChange={(e) => setActiveStudentId(e.target.value)}
            style={{ background: '#0f172a', color: '#fff', border: '1px solid #6366f1', padding: '6px 12px', borderRadius: '8px', fontWeight: 600, outline: 'none', cursor: 'pointer' }}
          >
            <option value="STU1001">STU1001 - Aarav (Low Risk / High Score)</option>
            <option value="STU1002">STU1002 - Priya (Medium Risk / Caution)</option>
            <option value="STU1005">STU1005 - Vikram (High Risk / Critical)</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#94a3b8' }}>
          <RefreshCw size={36} className="animate-spin" style={{ margin: '0 auto 1rem' }} />
          <h3>Executing Python AI Analytics Pipeline...</h3>
        </div>
      ) : (
        <>
          {/* Risk Level Banner */}
          {data?.risk_prediction && (
            <div className="glass-card" style={{ 
              padding: '1.5rem 2rem', 
              marginBottom: '2rem', 
              borderLeft: `6px solid ${data.risk_prediction.risk_level === 'HIGH' ? '#ef4444' : data.risk_prediction.risk_level === 'MEDIUM' ? '#f59e0b' : '#10b981'}` 
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <ShieldAlert size={36} color={data.risk_prediction.risk_level === 'HIGH' ? '#ef4444' : data.risk_prediction.risk_level === 'MEDIUM' ? '#f59e0b' : '#10b981'} />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Academic Risk Prediction</h3>
                      <span className={`badge-risk ${data.risk_prediction.risk_level}`}>
                        {data.risk_prediction.risk_level} RISK (Score: {data.risk_prediction.risk_score})
                      </span>
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '4px' }}>
                      Primary Factors: {data.risk_prediction.primary_risk_factors.join(' • ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Core Metrics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            {/* Overall Score */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.9rem', fontWeight: 600 }}>
                <span>Overall Performance Score</span>
                <Award size={20} color="#6366f1" />
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0', color: '#f8fafc' }}>
                {data?.performance_analysis?.overall_score || 82.5}%
              </h2>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${data?.performance_analysis?.overall_score || 82.5}%`, background: 'linear-gradient(90deg, #6366f1, #38bdf8)' }} />
              </div>
              <span style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: 600, display: 'inline-block', marginTop: '8px' }}>
                Status: {data?.performance_analysis?.academic_status || 'Good Standing'}
              </span>
            </div>

            {/* GPA Estimate */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.9rem', fontWeight: 600 }}>
                <span>Estimated GPA</span>
                <TrendingUp size={20} color="#38bdf8" />
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0', color: '#f8fafc' }}>
                {data?.performance_analysis?.gpa_estimate || 8.5} / 10
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Based on assignment & exam mark weights</p>
            </div>

            {/* Attendance */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.9rem', fontWeight: 600 }}>
                <span>Attendance Rate</span>
                <UserCheck size={20} color="#10b981" />
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0', color: currentStudent.attendance_pct < 75 ? '#f87171' : '#34d399' }}>
                {currentStudent.attendance_pct}%
              </h2>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${currentStudent.attendance_pct}%`, background: currentStudent.attendance_pct < 75 ? '#ef4444' : '#10b981' }} />
              </div>
              <span style={{ fontSize: '0.8rem', color: currentStudent.attendance_pct < 75 ? '#f87171' : '#94a3b8', marginTop: '8px', display: 'block' }}>
                {currentStudent.attendance_pct < 75 ? '⚠️ Below mandatory 75% threshold' : 'Optimal attendance record'}
              </span>
            </div>
          </div>

          {/* Weak Subjects & Recommendations Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            {/* Weak Subjects */}
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertTriangle size={20} color="#f59e0b" /> Weak Subjects Detected ({data?.weak_subject_detection?.weak_subjects_count || 0})
              </h3>
              {data?.weak_subject_detection?.weak_subjects?.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {data.weak_subject_detection.weak_subjects.map((sub, idx) => (
                    <div key={idx} style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #ef4444' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                        <span>{sub.subject_name}</span>
                        <span style={{ color: '#f87171' }}>Score: {sub.total_score}%</span>
                      </div>
                      <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '4px' }}>
                        Severity: <strong style={{ color: '#fbbf24' }}>{sub.severity}</strong> — {sub.reason}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#34d399', background: 'rgba(16,185,129,0.05)', borderRadius: '12px' }}>
                  <CheckCircle size={32} style={{ margin: '0 auto 0.5rem' }} />
                  <p style={{ fontWeight: 600 }}>No weak subjects detected! All subject scores are above 60%.</p>
                </div>
              )}
            </div>

            {/* AI Action Recommendations */}
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Lightbulb size={20} color="#38bdf8" /> AI Study Recommendations
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem' }}>{data?.recommendations?.summary}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {data?.recommendations?.action_items?.map((item, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.04)', padding: '0.8rem 1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      padding: '2px 8px', 
                      borderRadius: '10px', 
                      fontWeight: 700, 
                      background: item.priority === 'High' ? 'rgba(239,68,68,0.2)' : 'rgba(99,102,241,0.2)', 
                      color: item.priority === 'High' ? '#f87171' : '#818cf8' 
                    }}>
                      {item.priority}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{item.action}</div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Target Goal: {item.target}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Key Insights Summary */}
          <div className="glass-card" style={{ padding: '1.8rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BookOpen size={20} color="#6366f1" /> Executive Dashboard Insights
            </h3>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {data?.insights?.key_takeaways?.map((takeaway, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                  <span style={{ color: '#38bdf8', fontWeight: 700 }}>•</span> {takeaway}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Floating Chatbot Widget */}
      <AIChatbotWidget studentId={activeStudentId} studentData={currentStudent} />
    </div>
  );
};
