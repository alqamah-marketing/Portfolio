import React from 'react';
import { WireframeSphere } from '../components/WireframeSphere';

export const WhatIDo: React.FC = () => {
  return (
    <section
      id="what-i-do"
      className="section-wrapper section-divider"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '48px',
            alignItems: 'center',
          }}
          className="what-grid"
        >
          {/* Left Column: Narrative Content */}
          <div
            style={{
              gridColumn: 'span 7',
            }}
            className="what-left-col"
          >
            {/* Section Tag */}
            <div className="section-tag">
              <span>№ 02</span>
              <span>—</span>
              <span className="section-tag-gold">WHAT I DO</span>
            </div>

            {/* Main Headline */}
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)',
                fontWeight: 600,
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '28px',
              }}
            >
              I work across the different parts of digital marketing that help brands get discovered, attract audiences, and grow online.
            </h2>

            {/* Tier 1: Main Paragraph */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-dim)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              My work combines search visibility, content development, social media management, and marketing analysis. 
              I enjoy understanding how these areas connect and how practical marketing activities can support genuine business objectives.
            </p>

            {/* Tier 2: Specific Pillars */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '36px',
                borderLeft: '2px solid rgba(187, 163, 59, 0.4)', // Gold accent line
                paddingLeft: '20px',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  Search Optimization & On-Page SEO
                </span>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                  In-depth keyword research, competitive backlink discovery, and structured content optimization that captures organic search demand.
                </p>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  AI-Assisted SEO Content Development
                </span>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                  Utilizing AI tools for topic research, outlining, and content generation, then structuring and refining articles to satisfy search intent and rank organically.
                </p>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  Organic Social & Digital Distribution
                </span>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                  Organic community development on Threads and Pinterest, coupled with friction-free digital resource distribution.
                </p>
              </div>
            </div>

            {/* Tier 3: Editorial Punchline */}
            <div
              style={{
                paddingTop: '20px',
                borderTop: '1px solid var(--border-default)',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                  lineHeight: 1.4,
                  color: 'var(--text-primary)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    color: '#ffffff',
                    fontSize: '1.15em',
                  }}
                >
                  "Practical marketing is about connecting search intent with genuine value."
                </span>{' '}
                <span style={{ color: 'var(--text-dim)', fontSize: '0.9em' }}>
                  That is the foundation behind every project I build.
                </span>
              </p>
            </div>
          </div>

          {/* Right Column: 3D Wireframe Geometric Sphere */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              minWidth: 0,
            }}
            className="what-right-col"
          >
            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '520px',
              }}
            >
              {/* Ambient radial blur behind sphere */}
              <div
                style={{
                  position: 'absolute',
                  width: '90%',
                  height: '90%',
                  maxWidth: '460px',
                  maxHeight: '460px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(30, 121, 9, 0.28) 0%, rgba(14, 37, 130, 0.2) 50%, transparent 70%)',
                  filter: 'blur(60px)',
                  pointerEvents: 'none',
                }}
              />
              <WireframeSphere size={520} color="rgba(255, 255, 255, 0.25)" accentColor="#1e7909" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .what-left-col {
          min-width: 0;
          word-break: normal;
          overflow-wrap: break-word;
        }

        @media (max-width: 900px) {
          .what-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .what-left-col {
            grid-column: 1 / -1 !important;
            width: 100% !important;
          }
          .what-right-col {
            grid-column: 1 / -1 !important;
            width: 100% !important;
            margin-top: 10px;
            overflow: hidden;
          }
        }
      `}</style>
    </section>
  );
};
