import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1rem' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Contact Support</h1>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Get in touch with the Education Portal administration team.</p>

      <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Mail size={24} color="#6366f1" />
          <div>
            <div style={{ fontWeight: 700 }}>Email Address</div>
            <div style={{ color: '#94a3b8' }}>support@education-portal.edu</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Phone size={24} color="#38bdf8" />
          <div>
            <div style={{ fontWeight: 700 }}>Helpline</div>
            <div style={{ color: '#94a3b8' }}>+1 (800) 555-EDU-AI</div>
          </div>
        </div>
      </div>
    </div>
  );
};
