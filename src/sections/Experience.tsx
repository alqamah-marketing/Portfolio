import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Agami Technologies',
      role: 'SEO Intern',
      period: 'Nov 2025 – Apr 2026',
      badge: 'Recent Experience',
      responsibilities: [
        'Conducted keyword research and competitor backlink analysis using Google Search Console and Ubersuggest.',
        'Authored and published 9 comprehensive SEO-focused blog articles across diverse domains (VidyaNova, Whoozit, Schezy, DemoDazzle).',
        'Implemented on-page website content optimization, internal linking, and meta tag structuring to improve organic indexing.',
        'Managed social media presence and planned multi-channel content scheduling across LinkedIn, Facebook, and X using sociamonials.',
        'Conducted LinkedIn prospect research and supported outbound marketing efforts for targeted B2B audiences.',
        'Tracked organic impressions, click-through rates, and query performance in Google Search Console.'
      ],
      tools: ['Google Search Console', 'Ubersuggest', 'sociamonials', 'LinkedIn']
    },
    {
      company: 'UnlockDiscounts',
      role: 'Digital Marketing Intern',
      period: 'May 2025 – Aug 2025',
      award: 'Awarded Employee of the Month',
      responsibilities: [
        'Wrote SEO-friendly blog articles and optimized educational copy around high-intent discount and product keywords.',
        'Managed blog publishing, formatting, and on-page media structuring directly within WordPress / CMS.',
        'Executed organic search visibility activities and continuous on-page content optimization.',
        'Optimized YouTube video titles, descriptions, and tags to drive higher discoverability in search and recommended feeds.',
        'Conducted prospect research and provided lead generation support for marketing campaigns.'
      ],
      tools: ['WordPress / CMS', 'SEO Copywriting', 'YouTube Studio', 'Keyword Optimization', 'Prospect Research']
    }
  ];

  return (
    <section
      id="experience"
      className="section-wrapper section-divider"
      style={{
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
      }}
    >
      <div className="container">
        <div className="grid-split">
          {/* Left Column: Sticky Aside */}
          <div className="aside-col">
            <div className="section-tag">
              <span>№ 05</span>
              <span>—</span>
              <span className="section-tag-gold">EXPERIENCE</span>
            </div>

            <h2 className="section-title">
              The experience behind my journey.
            </h2>

            <p className="section-subtitle">
              My professional journey across SEO, content marketing, social media management, and independent organic projects.
            </p>
          </div>

          {/* Right Column: Timeline Stream + Education */}
          <div className="content-col" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            
            {/* Timeline Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  style={{
                    paddingBottom: '36px',
                    borderBottom: '1px solid var(--border-default)',
                  }}
                >
                  {/* Top Metadata Row: Date & Company & Role */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      marginBottom: '14px',
                      gap: '8px',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: '1.4rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                        }}
                      >
                        <Briefcase size={18} color="var(--color-gold)" />
                        {exp.company}
                      </h3>
                      <span
                        style={{
                          fontSize: '1rem',
                          fontWeight: 500,
                          color: 'rgba(255, 255, 255, 0.85)',
                          display: 'block',
                          marginTop: '2px',
                        }}
                      >
                        {exp.role}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '12px',
                          color: 'var(--text-dim)',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {exp.period}
                      </span>

                      {exp.badge && (
                        <span
                          style={{
                            padding: '3px 10px',
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(187, 163, 59, 0.1)',
                            border: '1px solid rgba(187, 163, 59, 0.3)',
                            color: 'var(--color-gold)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                          }}
                        >
                          {exp.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Recognition Highlight if any */}
                  {exp.award && (
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 14px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(187, 163, 59, 0.12)',
                        border: '1px solid rgba(187, 163, 59, 0.35)',
                        color: 'var(--color-gold)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '16px',
                      }}
                    >
                      <Award size={14} />
                      <span>{exp.award}</span>
                    </div>
                  )}

                  {/* Responsibilities Bullets */}
                  <ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      marginBottom: '20px',
                    }}
                  >
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        style={{
                          fontSize: '0.94rem',
                          color: 'var(--text-dim)',
                          lineHeight: 1.6,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                        }}
                      >
                        <span style={{ color: 'var(--color-gold)', lineHeight: 1.6 }}>—</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tools / Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: 'rgba(255, 255, 255, 0.7)',
                          padding: '3px 10px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education Sub-Block */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '20px',
                }}
              >
                <GraduationCap size={18} color="var(--color-gold)" />
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'var(--text-dim)',
                  }}
                >
                  Education & Academic Foundation
                </h3>
              </div>

              <div
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-default)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#ffffff' }}>
                    Bachelor of Management Studies (BMS)
                  </h4>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-gold)' }}>
                    Currently in Final Year · Expected Early 2027
                  </span>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                  Coursework focused on Marketing Management, Strategic Management, Consumer Behavior, Market Research, Quantitative Analysis, and Digital Business Fundamentals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
