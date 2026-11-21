import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#030303',
        borderTop: '1px solid var(--border-default)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* 3-Column Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px',
            marginBottom: '60px',
          }}
          className="footer-grid"
        >
          {/* Column 1: Index Links */}
          <div style={{ gridColumn: 'span 4' }} className="footer-col">
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--text-dim)',
                marginBottom: '20px',
              }}
            >
              Index
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="#work" style={{ fontSize: '14px', color: 'var(--text-secondary)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                  Work
                </a>
              </li>
              <li>
                <a href="#about" style={{ fontSize: '14px', color: 'var(--text-secondary)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" style={{ fontSize: '14px', color: 'var(--text-secondary)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#expertise" style={{ fontSize: '14px', color: 'var(--text-secondary)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                  Expertise
                </a>
              </li>
              <li>
                <a href="#contact" style={{ fontSize: '14px', color: 'var(--text-secondary)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="./alqamah-khan-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '14px', color: 'var(--color-gold)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>Resume</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Connect */}
          <div style={{ gridColumn: 'span 4' }} className="footer-col">
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--text-dim)',
                marginBottom: '20px',
              }}
            >
              Connect
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a
                  href="https://www.linkedin.com/in/alqamah-khan-digitalmarketing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:alqamahkhan7@gmail.com"
                  style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <span>Email</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://alqamahmarketing.gumroad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <span>Gumroad</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Based in & Copyright */}
          <div style={{ gridColumn: 'span 4' }} className="footer-col">
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--text-dim)',
                marginBottom: '20px',
              }}
            >
              Location & Details
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
              Based in India 🇮🇳
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-dim)', marginBottom: '16px' }}>
              Digital Marketing Executive specializing in SEO, content marketing, and organic analytics.
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)' }}>
              © 2026 Alqamah Khan. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Signature Watermark: ALQAMAH KHAN (100% visible, fully responsive without clipping) */}
        <div
          style={{
            paddingTop: '50px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            textAlign: 'center',
            userSelect: 'none',
            pointerEvents: 'none',
            width: '100%',
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          <span
            style={{
              fontSize: 'clamp(1.8rem, 8.2vw, 7.2rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.02em',
              color: 'rgba(255, 255, 255, 0.04)',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              textTransform: 'uppercase',
              display: 'inline-block',
              maxWidth: '100%',
            }}
          >
            ALQAMAH KHAN
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-col {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </footer>
  );
};
