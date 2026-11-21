import React, { useState, useEffect } from 'react';
import { FileText, ArrowUpRight, Globe, Clock, MapPin } from 'lucide-react';
import aboutBannerImg from '../assets/images/profile/alqamas-marketing-portfolio-banner.webp';

export const AboutMe: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format Indian Standard Time (IST - UTC+5:30)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formatted = new Intl.DateTimeFormat('en-GB', options).format(now);
      setTime(`${formatted} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="section-wrapper section-divider"
      style={{
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
      }}
    >
      <div className="container">
        <div className="grid-split">
          {/* Left Column: Sticky Aside with Live IST Clock & Quick Connect */}
          <div className="aside-col">
            <div className="section-tag">
              <span>№ 04</span>
              <span>—</span>
              <span className="section-tag-gold">ABOUT ME</span>
            </div>

            <h2 className="section-title">
              A little about the person behind the work.
            </h2>

            {/* Location & Live Clock Card */}
            <div
              style={{
                marginTop: '28px',
                padding: '24px',
                borderRadius: '16px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} color="var(--color-gold)" />
                <div>
                  <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em', display: 'block' }}>
                    Based In
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#ffffff' }}>
                    India 🇮🇳
                  </span>
                </div>
              </div>

              {/* Dynamic Live Clock */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={16} color="var(--color-gold)" />
                <div>
                  <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em', display: 'block' }}>
                    Local Time
                  </span>
                  <span style={{ fontSize: '14px', fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#ffffff' }}>
                    {time || '19:30:00 IST'}
                  </span>
                </div>
              </div>

              {/* Availability Status */}
              <div
                style={{
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-default)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    display: 'inline-block',
                    boxShadow: '0 0 8px #10b981',
                  }}
                />
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.85)', letterSpacing: '0.08em' }}>
                  Open to Opportunities
                </span>
              </div>
            </div>

            {/* Quick Action Links */}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="/alqamah-khan-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  border: '1px solid rgba(187, 163, 59, 0.3)',
                  backgroundColor: 'rgba(187, 163, 59, 0.05)',
                  color: 'var(--text-primary)',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                  e.currentTarget.style.color = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(187, 163, 59, 0.05)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileText size={15} />
                  Download Resume
                </span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://www.linkedin.com/in/alqamah-khan-digitalmarketing/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-default)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  color: 'var(--text-primary)',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.borderColor = 'var(--border-default)';
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Globe size={15} />
                  LinkedIn Profile
                </span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Narrative Story + Photo */}
          <div className="content-col" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Banner Frame (Alqamas Marketing Portfolio Banner) */}
            <div
              className="about-portrait-frame"
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#000000',
                border: '1px solid var(--border-default)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
              }}
            >
              <img
                src={aboutBannerImg}
                alt="Alqamah Khan — Digital Marketing Specialist"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>

            {/* Narrative Body Copy */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--text-dim)',
              }}
            >
              <p>
                I'm <strong style={{ color: '#ffffff', fontWeight: 600 }}>Alqamah Khan</strong>, a digital marketing professional interested in how businesses build online visibility, connect with audiences, and grow through digital channels.
              </p>

              <p>
                My experience has involved working across <span style={{ color: '#ffffff' }}>SEO, content marketing, social media management, keyword research, website content optimization, and lead generation</span>. Through my internships, I gained practical exposure to different marketing activities, educational website projects, and technical workflow tools.
              </p>

              <p>
                Alongside my professional experience, I developed <span style={{ color: 'var(--color-gold)' }}>Botmetryx</span> as an independent project to experiment with content strategy, organic social media growth, and digital product distribution across Threads, Pinterest, and Gumroad.
              </p>

              <p>
                I also enjoy understanding data and marketing performance. Working with Microsoft Excel dashboards, PivotTables, and Search Console reporting has helped me explore the analytical side of business and marketing.
              </p>

              <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                I am continuously developing my skills and looking for <strong style={{ color: 'var(--color-gold)' }}>Digital Marketing Executive</strong> opportunities where I can contribute through practical marketing execution, research, creativity, and analytical thinking.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-portrait-frame {
            border-radius: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};
