import React, { useState } from 'react';
import { Bot, Send, X, Sparkles, RefreshCw } from 'lucide-react';
import { sendAIChatQuery } from '../services/aiEngineService';

export const AIChatbotWidget = ({ studentId, studentData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hello ${studentData?.name || 'Student'}! 👋 I am your AI Academic Advisor. Ask me anything about your grades, study schedule, or weak subjects.`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    try {
      const context = {
        student_id: studentId || "STU1001",
        name: studentData?.name || "Aarav",
        attendance_pct: studentData?.attendance_pct || 80,
        gpa_estimate: studentData?.previous_gpa || 7.5
      };

      const res = await sendAIChatQuery(studentId, userText, context);
      setMessages((prev) => [...prev, { sender: 'bot', text: res.reply || res.message || "Here is my advice." }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'bot', text: "Sorry, I had trouble connecting. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickPrompt = (promptText) => {
    setInput(promptText);
  };

  return (
    <>
      {/* Handcrafted Floating Pill Launcher - Red Theme */}
      <button className="chat-launcher-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Sparkles size={20} />}
        <span>{isOpen ? 'Close AI Chat' : 'AI Academic Advisor'}</span>
      </button>

      {/* Slide-Up Handcrafted Drawer - Light Theme */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '95px',
          right: '28px',
          width: '390px',
          height: '540px',
          background: '#ffffff', /* Clean white background */
          border: '1px solid #e2e8f0',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15), 0 0 30px rgba(220, 38, 38, 0.15)',
          zIndex: 1000,
          overflow: 'hidden',
          animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {/* Header - Crimson Red */}
          <div style={{ background: 'var(--brand-red)', padding: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '8px', borderRadius: '12px' }}>
                <Bot size={22} color="#ffffff" />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, letterSpacing: '-0.01em' }}>AI Academic Advisor</h4>
                <span style={{ fontSize: '0.74rem', opacity: 0.9 }}>Live FastAPI LLM Integration</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          {/* Chat Messages */}
          <div style={{ flex: 1, padding: '1.2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', background: '#f8fafc' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                {msg.sender === 'bot' && (
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--brand-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Bot size={16} color="#fff" />
                  </div>
                )}
                <div style={{
                  maxWidth: '82%',
                  padding: '0.85rem 1.1rem',
                  borderRadius: msg.sender === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                  background: msg.sender === 'user' ? 'var(--brand-red)' : '#ffffff',
                  color: msg.sender === 'user' ? '#ffffff' : '#0f172a',
                  fontSize: '0.9rem',
                  lineHeight: '1.45',
                  border: msg.sender === 'bot' ? '1px solid #e2e8f0' : 'none',
                  boxShadow: msg.sender === 'bot' ? '0 2px 4px rgba(0,0,0,0.02)' : 'none'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '0.85rem', padding: '6px' }}>
                <RefreshCw size={16} className="animate-spin" color="var(--brand-red)" /> Analyzing context & generating advice...
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div style={{ padding: '0.6rem 1rem', display: 'flex', gap: '8px', overflowX: 'auto', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
            <button onClick={() => handleQuickPrompt("How to improve my weak subjects?")} style={{ fontSize: '0.76rem', padding: '6px 12px', borderRadius: '99px', background: 'var(--brand-red-light)', color: 'var(--brand-red)', border: '1px solid var(--brand-red-border)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              💡 Improve Weak Subjects
            </button>
            <button onClick={() => handleQuickPrompt("Explain my risk factors")} style={{ fontSize: '0.76rem', padding: '6px 12px', borderRadius: '99px', background: 'var(--brand-red-light)', color: 'var(--brand-red)', border: '1px solid var(--brand-red-border)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              ⚠️ My Risk Analysis
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSend} style={{ padding: '0.9rem 1.2rem', display: 'flex', gap: '10px', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
            <input
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ flex: 1, background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '0.75rem 1rem', color: '#0f172a', outline: 'none', fontSize: '0.9rem' }}
            />
            <button type="submit" className="btn-handcrafted btn-primary-glow" style={{ padding: '0.75rem 1.1rem', borderRadius: '12px' }}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
