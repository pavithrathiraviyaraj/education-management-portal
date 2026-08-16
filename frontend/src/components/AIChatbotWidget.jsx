import React, { useState } from 'react';
import { Bot, Send, X, Sparkles, User, RefreshCw, MessageSquare } from 'lucide-react';
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
      {/* Handcrafted Floating Pill Launcher */}
      <button className="chat-launcher-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Sparkles size={20} />}
        <span>{isOpen ? 'Close AI Chat' : 'AI Academic Advisor'}</span>
      </button>

      {/* Slide-Up Handcrafted Drawer */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '95px',
          right: '28px',
          width: '390px',
          height: '540px',
          background: 'rgba(17, 24, 39, 0.95)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(79, 70, 229, 0.2)',
          zIndex: 1000,
          overflow: 'hidden',
          animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg, #4f46e5, #0284c7)', padding: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#ffffff' }}>
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
          <div style={{ flex: 1, padding: '1.2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                {msg.sender === 'bot' && (
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Bot size={16} color="#fff" />
                  </div>
                )}
                <div style={{
                  maxWidth: '82%',
                  padding: '0.85rem 1.1rem',
                  borderRadius: msg.sender === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                  background: msg.sender === 'user' ? 'linear-gradient(135deg, #4f46e5, #7c3aed)' : 'rgba(255,255,255,0.06)',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  lineHeight: '1.45',
                  border: msg.sender === 'bot' ? '1px solid rgba(255,255,255,0.08)' : 'none'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af', fontSize: '0.85rem', padding: '6px' }}>
                <RefreshCw size={16} className="animate-spin" color="#818cf8" /> Analyzing context & generating advice...
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div style={{ padding: '0.6rem 1rem', display: 'flex', gap: '8px', overflowX: 'auto', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <button onClick={() => handleQuickPrompt("How to improve my weak subjects?")} style={{ fontSize: '0.76rem', padding: '6px 12px', borderRadius: '99px', background: 'rgba(255,255,255,0.08)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.2)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              💡 Improve Weak Subjects
            </button>
            <button onClick={() => handleQuickPrompt("Explain my risk factors")} style={{ fontSize: '0.76rem', padding: '6px 12px', borderRadius: '99px', background: 'rgba(255,255,255,0.08)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.2)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              ⚠️ My Risk Analysis
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSend} style={{ padding: '0.9rem 1.2rem', display: 'flex', gap: '10px', background: 'rgba(9, 13, 22, 0.95)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <input
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '0.75rem 1rem', color: '#fff', outline: 'none', fontSize: '0.9rem' }}
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
