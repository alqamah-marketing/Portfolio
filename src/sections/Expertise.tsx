import React from 'react';

export const Expertise: React.FC = () => {
  const capabilities = [
    {
      num: '01',
      title: 'Search Engine Optimization',
      skills: [
        'Keyword Research & Search Intent Mapping',
        'On-Page Technical & Content SEO',
        'Backlink & Competitor Research',
        'Metadata & Internal Linking Optimization',
        'Google Search Console Monitoring'
      ]
    },
    {
      num: '02',
      title: 'AI Content Generation & SEO Writing',
      skills: [
        'AI-Driven Long-Form SEO Blog Generation',
        'Topic Clustering & Educational Guides via AI',
        'Prompt Engineering for Content Structuring',
        'Human Review & Search Intent Alignment',
        'Website Content Optimization with AI Tools'
      ]
    },
    {
      num: '03',
      title: 'Social Media Marketing',
      skills: [
        'Content Planning & Editorial Calendars',
        'Organic Audience Development (Threads, Pinterest)',
        'Multi-Platform Publishing & Scheduling',
        'Visual Carousel & Graphic Direction',
        'Community Engagement & Trend Monitoring'
      ]
    },
    {
      num: '04',
      title: 'Marketing Analytics',
      skills: [
        'Google Search Console Impression Analysis',
        'Ubersuggest Keyword & Domain Audits',
        'Microsoft Excel Data Modeling',
        'PivotTables & Interactive Slicers',
        'KPI Executive Dashboard Visualization'
      ]
    },
    {
      num: '05',
      title: 'Lead Generation & Outreach',
      skills: [
        'B2B Prospect Research & List Building',
        'LinkedIn Outbound Research',
        'Audience Profiling & ICP Qualification',
        'Outreach Message Structuring',
        'Email Prospect Discovery'
      ]
    },
    {
      num: '06',
      title: 'AI & Marketing Automation',
      skills: [
        'Claude Cowork Workflow Acceleration',
        'AI SEO Audit & Research Prompts',
        'Structured Prompt Engineering',
        'Content Research Automation',
        'Digital Product Stacking Workflows'
      ]
    }
  ];

  return (
    <section
      id="expertise"
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
              <span>№ 06</span>
              <span>—</span>
              <span className="section-tag-gold">EXPERTISE</span>
            </div>

            <h2 className="section-title">
              What I bring to the table.
            </h2>

            <p className="section-subtitle">
              Six core areas of digital marketing competence, with the concrete skills and execution methods under each.
            </p>
          </div>

          {/* Right Column: 6 Structured Rows */}
          <div className="content-col" style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {capabilities.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '28px 0',
                    borderBottom: '1px solid var(--border-default)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '24px',
                    alignItems: 'start',
                    transition: 'background-color 0.2s ease',
                  }}
                  className="expertise-row"
                >
                  {/* Category Title & Number */}
                  <div style={{ gridColumn: 'span 5' }} className="expertise-title-col">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '13px',
                          color: 'var(--color-gold)',
                          fontWeight: 600,
                        }}
                      >
                        {item.num}
                      </span>
                      <span
                        style={{
                          width: '18px',
                          height: '1px',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          display: 'inline-block',
                        }}
                      />
                      <h3
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div style={{ gridColumn: '6 / -1' }} className="expertise-skills-col">
                    <ul
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '10px 16px',
                      }}
                    >
                      {item.skills.map((skill, sIdx) => (
                        <li
                          key={sIdx}
                          style={{
                            fontSize: '0.92rem',
                            color: 'var(--text-dim)',
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '8px',
                          }}
                        >
                          <span style={{ color: 'var(--color-gold)', fontSize: '10px' }}>•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Editorial Quote Callout */}
            <div
              style={{
                marginTop: '20px',
                padding: '36px',
                borderRadius: '16px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'var(--color-gold)',
                  marginBottom: '14px',
                }}
              >
                · PHILOSOPHY NOTE
              </div>

              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                  fontStyle: 'italic',
                  lineHeight: 1.35,
                  color: 'var(--text-primary)',
                }}
              >
                "Effective digital marketing connects clear search intent with genuine, helpful value — turning attention into measurable business outcomes."
              </blockquote>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .expertise-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .expertise-title-col {
            grid-column: 1 / -1 !important;
          }
          .expertise-skills-col {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </section>
  );
};
