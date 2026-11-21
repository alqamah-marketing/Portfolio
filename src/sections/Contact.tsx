import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, FileText } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'alqamahkhan7@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="section-wrapper section-divider"
      style={{
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: '140px',
      }}
    >
      {/* Decorative ambient brand circles */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          border: '1.5px solid rgba(14, 37, 130, 0.3)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-5%',
          right: '5%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          border: '1.5px solid rgba(30, 121, 9, 0.25)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Tag */}
        <div className="section-tag">
          <span>№ 08</span>
          <span>—</span>
          <span className="section-tag-gold">CONTACT</span>
        </div>

        {/* Progressive Opacity Stack Headlines */}
        <div style={{ marginBottom: '36px' }}>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4.4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#ffffff',
            }}
          >
            Have an opportunity for me?
          </h2>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4.4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'rgba(255, 255, 255, 0.65)',
            }}
          >
            Project or role in mind?
          </h2>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4.4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'rgba(255, 255, 255, 0.35)',
            }}
          >
            Let's start a conversation.
          </h2>
        </div>

        {/* Subtext */}
        <p
          style={{
            fontSize: '1.15rem',
            color: 'var(--text-dim)',
            lineHeight: 1.7,
            maxWidth: '680px',
            marginBottom: '44px',
          }}
        >
          I'm actively interested in connecting with recruiters, hiring managers, and digital marketing leaders. 
          Whether discussing a Digital Marketing Executive role, an SEO assignment, or sharing ideas, I'd be glad to connect.
        </p>

        {/* Action Buttons Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          {/* Primary CTA: Email link */}
          <a
            href={`mailto:${email}?subject=Digital%20Marketing%20Opportunity%20-%20Alqamah%20Khan`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '9999px',
              backgroundColor: 'var(--color-gold)',
              color: '#000000',
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 600,
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-gold-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-gold)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Mail size={18} />
            <span>Let's Connect</span>
            <ArrowUpRight size={18} />
          </a>

          {/* Secondary CTA: One-Click Copy Email */}
          <button
            type="button"
            onClick={handleCopyEmail}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 24px',
              borderRadius: '9999px',
              border: '1px solid var(--border-default)',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
              e.currentTarget.style.borderColor = 'var(--border-default)';
            }}
          >
            {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
            <span>{copied ? 'Email Copied!' : email}</span>
          </button>

          {/* Tertiary: Download Resume */}
          <a
            href="./alqamah-khan-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 24px',
              borderRadius: '9999px',
              border: '1px solid rgba(187, 163, 59, 0.35)',
              backgroundColor: 'rgba(187, 163, 59, 0.05)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(187, 163, 59, 0.15)';
              e.currentTarget.style.borderColor = 'var(--color-gold)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(187, 163, 59, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(187, 163, 59, 0.35)';
            }}
          >
            <FileText size={16} color="var(--color-gold)" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Quick Social & Professional Links Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '24px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border-default)',
            fontSize: '13px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-secondary)',
          }}
        >
          <a
            href="https://www.linkedin.com/in/alqamah-khan-digitalmarketing/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-secondary)',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <span>LinkedIn Profile</span>
            <ArrowUpRight size={14} />
          </a>

          <span>•</span>

          <a
            href="https://alqamahmarketing.gumroad.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-secondary)',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <span>Gumroad Profile</span>
            <ArrowUpRight size={14} />
          </a>

          <span>•</span>

          <span style={{ color: 'var(--text-dim)' }}>
            Direct Response within 24 Hours
          </span>
        </div>
      </div>
    </section>
  );
};
