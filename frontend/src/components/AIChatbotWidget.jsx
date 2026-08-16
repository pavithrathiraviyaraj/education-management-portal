import React, { useState } from 'react';
import { Bot, Send, X, Sparkles, User, RefreshCw } from 'lucide-react';
import { sendAIChatQuery } from '../services/aiEngineService';

export const AIChatbotWidget = ({ studentId, studentData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hello ${studentData?.name || 'Student'}! 👋 I am your AI Academic Advisor. How can I help you improve your grades or study strategy today?`
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
      setMessages((prev) => [...prev, { sender: 'bot', text: "Sorry, I had trouble generating a response. Please try again!" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickPrompt = (promptText) => {
    setInput(promptText);
  };

  return (
    <>
      {/* Floating Toggle FAB Button */}
      <button className="chat-widget-fab" onClick={() => setIsOpen(!isOpen)} title="AI Academic Advisor">
        {isOpen ? <X size={28} /> : <Bot size={30} />}
      </button>

      {/* Slide-out Chat Window Drawer */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg, #4f46e5, #0284c7)', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Sparkles size={22} />
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>AI Academic Advisor</h4>
                <span style={{ fontSize: '0.75rem', opacity: 0.9 }}>Powered by FastAPI & LLM</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          {/* Messages Body */}
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '8px', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                {msg.sender === 'bot' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Bot size={16} color="#fff" />
                  </div>
                )}
                <div style={{
                  maxWidth: '80%',
                  padding: '0.75rem 1rem',
                  borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                  background: msg.sender === 'user' ? '#6366f1' : 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  lineHeight: '1.4',
                  border: msg.sender === 'bot' ? '1px solid rgba(255,255,255,0.1)' : 'none'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.85rem' }}>
                <RefreshCw size={16} className="animate-spin" /> Thinking & analyzing student context...
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div style={{ padding: '0.5rem 1rem', display: 'flex', gap: '6px', overflowX: 'auto', background: 'rgba(0,0,0,0.2)' }}>
            <button onClick={() => handleQuickPrompt("How can I improve my weak subjects?")} style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', color: '#38bdf8', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              💡 Weak Subjects Help
            </button>
            <button onClick={() => handleQuickPrompt("Am I at academic risk?")} style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', color: '#38bdf8', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              ⚠️ Risk Analysis
            </button>
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSend} style={{ padding: '0.8rem', display: 'flex', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(15,23,42,0.8)' }}>
            <input
              type="text"
              placeholder="Ask your AI advisor..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ flex: 1, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '0.6rem 0.9rem', color: '#fff', outline: 'none', fontSize: '0.9rem' }}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '0.6rem 1rem', borderRadius: '10px' }}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
