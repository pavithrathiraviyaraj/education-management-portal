import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { getStudentAIAnalysis } from '../../services/aiEngineService';
import { ShieldAlert, Award, TrendingUp, AlertCircle, CheckCircle2, Lightbulb, BookOpen, UserCheck, RefreshCw, Zap, Target, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const StudentDashboard = () => {
  const { activeStudentId, setActiveStudentId } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

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
        { subject_code: 'CS101', subject_name: 'Data Structures & Algo', assignment_score: 90, midterm_score: 88, endterm_score: 92, total_score: 90, grade: 'A+' },
        { subject_code: 'CS102', subject_name: 'Database Systems', assignment_score: 85, midterm_score: 82, endterm_score: 86, total_score: 84.3, grade: 'A' },
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

  const getRiskClass = (level) => {
    if (level === 'HIGH') return 'risk-pill-high';
    if (level === 'MEDIUM') return 'risk-pill-medium';
    return 'risk-pill-low';
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem 5rem' }} className="animate-fade-in">
      
      {/* Header */}
      <div className="handcrafted-card" style={{ padding: '1.8rem 2.2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--brand-red)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Student Academic Analytics Hub
            </span>
            <span style={{ background: '#f1f5f9', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', color: '#475569', fontWeight: 600 }}>
              Sem {currentStudent.semester}
            </span>
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
            {currentStudent.name}
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.92rem', marginTop: '4px' }}>
            ID: <strong style={{ color: '#0f172a' }}>{currentStudent.student_id}</strong> • Department of {currentStudent.department}
          </p>
        </div>

        {/* Demo Switcher */}
        <div style={{ background: '#f8fafc', padding: '8px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, paddingLeft: '8px', marginBottom: '6px', textTransform: 'uppercase' }}>
            Switch Demo Persona:
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button 
              style={{ background: activeStudentId === 'STU1001' ? '#ffffff' : 'transparent', border: activeStudentId === 'STU1001' ? '1px solid #cbd5e1' : '1px solid transparent', padding: '6px 10px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', color: '#0f172a', boxShadow: activeStudentId === 'STU1001' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none' }}
              onClick={() => setActiveStudentId('STU1001')}
            >
              🟢 Aarav (Low Risk)
            </button>
            <button 
              style={{ background: activeStudentId === 'STU1002' ? '#ffffff' : 'transparent', border: activeStudentId === 'STU1002' ? '1px solid #cbd5e1' : '1px solid transparent', padding: '6px 10px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', color: '#0f172a', boxShadow: activeStudentId === 'STU1002' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none' }}
              onClick={() => setActiveStudentId('STU1002')}
            >
              🟡 Priya (Medium Risk)
            </button>
            <button 
              style={{ background: activeStudentId === 'STU1005' ? '#ffffff' : 'transparent', border: activeStudentId === 'STU1005' ? '1px solid #cbd5e1' : '1px solid transparent', padding: '6px 10px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', color: '#0f172a', boxShadow: activeStudentId === 'STU1005' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none' }}
              onClick={() => setActiveStudentId('STU1005')}
            >
              🔴 Vikram (High Risk)
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '5rem 2rem', color: '#475569' }}>
          <RefreshCw size={40} className="animate-spin" style={{ margin: '0 auto 1.2rem', color: 'var(--brand-red)' }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>Processing Python AI Microservice Analytics...</h3>
          <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '4px' }}>Evaluating attendance metrics, grade trends & risk factors</p>
        </div>
      ) : (
        <>
          {/* Risk Banner */}
          {data?.risk_prediction && (
            <div className="handcrafted-card" style={{ 
              padding: '1.6rem 2rem', 
              marginBottom: '2rem', 
              background: data.risk_prediction.risk_level === 'HIGH' ? '#fff1f2' : data.risk_prediction.risk_level === 'MEDIUM' ? '#fefce8' : '#ecfdf5',
              borderColor: data.risk_prediction.risk_level === 'HIGH' ? '#fecdd3' : data.risk_prediction.risk_level === 'MEDIUM' ? '#fef08a' : '#a7f3d0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  <div style={{ 
                    padding: '12px', 
                    borderRadius: '14px', 
                    background: '#ffffff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}>
                    <ShieldAlert size={32} color={data.risk_prediction.risk_level === 'HIGH' ? '#e11d48' : data.risk_prediction.risk_level === 'MEDIUM' ? '#d97706' : '#059669'} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        AI Academic Risk Prediction
                      </h3>
                      <span className={`risk-pill ${getRiskClass(data.risk_prediction.risk_level)}`}>
                        {data.risk_prediction.risk_level} RISK (Score: {data.risk_prediction.risk_score})
                      </span>
                    </div>
                    <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: '6px' }}>
                      Identified Risk Drivers: <span style={{ color: '#0f172a', fontWeight: 600 }}>{data.risk_prediction.primary_risk_factors.join(' • ')}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Metric Tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div className="handcrafted-card" style={{ padding: '1.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.88rem', fontWeight: 600 }}>
                <span>Overall Performance Score</span>
                <Award size={22} color="var(--brand-red)" />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', margin: '0.8rem 0' }}>
                <h2 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.03em' }}>
                  {data?.performance_analysis?.overall_score || 82.5}%
                </h2>
                <span style={{ fontSize: '0.85rem', color: '#059669', fontWeight: 700 }}>
                  {data?.performance_analysis?.academic_status || 'Good Standing'}
                </span>
              </div>
              <div className="track-bg">
                <div className="track-fill" style={{ width: `${data?.performance_analysis?.overall_score || 82.5}%`, background: 'var(--brand-red)' }} />
              </div>
            </div>

            <div className="handcrafted-card" style={{ padding: '1.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.88rem', fontWeight: 600 }}>
                <span>Estimated Cumulative GPA</span>
                <TrendingUp size={22} color="var(--brand-red)" />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', margin: '0.8rem 0' }}>
                <h2 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.03em' }}>
                  {data?.performance_analysis?.gpa_estimate || 8.5}
                </h2>
                <span style={{ fontSize: '1.1rem', color: '#64748b', fontWeight: 700 }}>/ 10.0</span>
              </div>
              <p style={{ color: '#64748b', fontSize: '0.82rem' }}>Calculated using weighted internal exam algorithms</p>
            </div>

            <div className="handcrafted-card" style={{ padding: '1.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.88rem', fontWeight: 600 }}>
                <span>Attendance Standing</span>
                <UserCheck size={22} color={currentStudent.attendance_pct < 75 ? '#e11d48' : '#059669'} />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', margin: '0.8rem 0' }}>
                <h2 style={{ fontSize: '2.8rem', fontWeight: 900, color: currentStudent.attendance_pct < 75 ? '#e11d48' : '#0f172a', letterSpacing: '-0.03em' }}>
                  {currentStudent.attendance_pct}%
                </h2>
                {currentStudent.attendance_pct < 75 && (
                  <span style={{ fontSize: '0.78rem', color: '#e11d48', fontWeight: 700, background: '#ffe4e6', padding: '2px 8px', borderRadius: '10px' }}>
                    Critical Warning
                  </span>
                )}
              </div>
              <div className="track-bg">
                <div className="track-fill" style={{ width: `${currentStudent.attendance_pct}%`, background: currentStudent.attendance_pct < 75 ? '#e11d48' : '#059669' }} />
              </div>
            </div>
          </div>

          {/* AI Visual Performance Graph */}
          <div className="handcrafted-card" style={{ padding: '2rem', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Activity size={22} color="var(--brand-red)" /> Subject-wise Performance Analytics
            </h3>
            <div style={{ width: '100%', height: '350px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentStudent.subject_marks} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="subject_code" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontWeight: 600, fontSize: '0.85rem' }}
                    cursor={{ fill: 'rgba(220, 38, 38, 0.04)' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '0.85rem', fontWeight: 600, color: '#475569' }} iconType="circle" />
                  <Bar dataKey="assignment_score" name="Assignments" fill="#fca5a5" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="midterm_score" name="Midterm Exam" fill="#f87171" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="endterm_score" name="Endterm Score" fill="#dc2626" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Weak Subjects & Recommendations */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
            <div className="handcrafted-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <AlertCircle size={22} color="#d97706" /> Weak Subjects ({data?.weak_subject_detection?.weak_subjects_count || 0})
                </h3>
              </div>
              
              {data?.weak_subject_detection?.weak_subjects?.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {data.weak_subject_detection.weak_subjects.map((sub, idx) => (
                    <div key={idx} style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '14px', border: '1px solid #e2e8f0', borderLeft: '4px solid #e11d48' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontWeight: 800, fontSize: '1rem', color: '#0f172a' }}>{sub.subject_name}</span>
                        <span style={{ color: '#e11d48', fontWeight: 800, fontSize: '0.95rem' }}>Score: {sub.total_score}%</span>
                      </div>
                      <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: '1.4' }}>
                        Deficit Level: <strong style={{ color: '#d97706' }}>{sub.severity}</strong> — {sub.reason}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ padding: '2.5rem 1.5rem', textAlign: 'center', color: '#059669', background: '#ecfdf5', borderRadius: '14px', border: '1px solid #a7f3d0' }}>
                  <CheckCircle2 size={36} style={{ margin: '0 auto 0.8rem' }} />
                  <h4 style={{ fontWeight: 800, fontSize: '1.05rem', color: '#047857' }}>All Subjects in Good Standing</h4>
                  <p style={{ color: '#065f46', fontSize: '0.85rem', marginTop: '4px' }}>Every enrolled subject score exceeds the 60% baseline benchmark.</p>
                </div>
              )}
            </div>

            <div className="handcrafted-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Lightbulb size={22} color="var(--brand-red)" /> AI Study Action Plan
                </h3>
              </div>
              <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '1.2rem', lineHeight: '1.5' }}>
                {data?.recommendations?.summary}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {data?.recommendations?.action_items?.map((item, idx) => (
                  <div key={idx} style={{ background: '#f8fafc', padding: '1rem 1.2rem', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ 
                      padding: '4px 10px', 
                      borderRadius: '8px', 
                      fontSize: '0.72rem', 
                      fontWeight: 800, 
                      background: item.priority === 'High' ? '#ffe4e6' : '#fef2f2', 
                      color: item.priority === 'High' ? '#e11d48' : 'var(--brand-red)',
                      textTransform: 'uppercase'
                    }}>
                      {item.priority}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>{item.action}</div>
                      <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>Target Benchmark: <strong style={{ color: 'var(--brand-red)' }}>{item.target}</strong></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="handcrafted-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BookOpen size={22} color="var(--brand-red)" /> Executive AI Analytics Summary
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
              {data?.insights?.key_takeaways?.map((takeaway, idx) => (
                <div key={idx} style={{ background: '#f8fafc', padding: '1rem 1.2rem', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Zap size={18} color="var(--brand-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: '1.5' }}>{takeaway}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
