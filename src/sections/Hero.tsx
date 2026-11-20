import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import profileImg from '../assets/images/profile/alqamah-digital-marketer.webp';
import { BrandBackground } from '../components/BrandBackground';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)',
        paddingTop: 'var(--nav-height)',
      }}
    >
      {/* Brand Background Outlines & Floating Marketing Icons */}
      <BrandBackground variant="hero" showCircles={false} />

      {/* Layer 1: Giant Background Ghost Watermark */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 1,
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontSize: 'clamp(5rem, 19vw, 18rem)',
            fontWeight: 800,
            fontFamily: 'var(--font-sans)',
            letterSpacing: '-0.04em',
            color: 'rgba(255, 255, 255, 0.03)',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
          }}
        >
          ALQAMAH
        </span>
      </div>

      {/* Layer 2: Central Portrait Photograph (Desktop) */}
      <div
        className="hero-desktop-portrait"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingTop: '40px',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'relative',
            height: '100%',
            maxHeight: '80vh',
            width: 'auto',
          }}
        >
          <img
            src={profileImg}
            alt="Alqamah Khan"
            style={{
              height: '100%',
              width: 'auto',
              maxHeight: '78vh',
              objectFit: 'contain',
              objectPosition: 'top center',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.6) 72%, transparent 92%)',
              maskImage: 'linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.6) 72%, transparent 92%)',
              filter: 'contrast(1.05) brightness(0.96)',
            }}
          />
        </div>
      </div>

      {/* Layer 3: Foreground Content Grid */}
      <div
        className="container hero-content-container"
        style={{
          position: 'relative',
          zIndex: 10,
          paddingBottom: 'clamp(40px, 6vw, 70px)',
          width: '100%',
        }}
      >
        {/* Mobile Portrait View: Prominently displayed above text so face is fully visible */}
        <div className="hero-mobile-portrait">
          <img
            src={profileImg}
            alt="Alqamah Khan"
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px',
            alignItems: 'flex-end',
          }}
          className="hero-grid"
        >
          {/* Left Column: Role badge, Availability, Headline */}
          <div
            style={{
              gridColumn: 'span 7',
            }}
            className="hero-left-col"
          >
            {/* Top Badges: Availability Pill + Gold Role Badge */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px',
              }}
            >
              {/* Availability status */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  backgroundColor: 'rgba(16, 185, 129, 0.08)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 10px #10b981',
                    display: 'inline-block',
                    animation: 'pulseGreen 2s infinite',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 500,
                  }}
                >
                  OPEN TO DIGITAL MARKETING OPPORTUNITIES
                </span>
              </div>
            </div>

            {/* Main Hero Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.4vw, 4.2rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '12px',
              }}
            >
              Hello, I'm Alqamah.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.35,
                maxWidth: '620px',
              }}
            >
              Building organic visibility, content systems, and data-backed digital marketing.
            </p>
          </div>

          {/* Right Column: Bio summary + CTAs */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
            className="hero-right-col"
          >
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-dim)',
                lineHeight: 1.65,
                marginBottom: '24px',
              }}
            >
              Specializing across SEO, content marketing, social media, and marketing analytics. 
              I connect practical search visibility and content distribution to real business objectives.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px',
              }}
            >
              <a
                href="#work"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'underline',
                  textUnderlineOffset: '6px',
                  textDecorationColor: 'rgba(255, 255, 255, 0.3)',
                  transition: 'text-decoration-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecorationColor = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecorationColor = 'rgba(255, 255, 255, 0.3)')}
              >
                <span>See selected work</span>
                <ArrowDown size={15} />
              </a>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-gold)',
                  color: '#000000',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
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
                <span>Let's Talk</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulseGreen {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.9);
          }
        }

        .hero-mobile-portrait {
          display: none;
        }

        .hero-desktop-portrait {
          display: flex;
        }

        @media (max-width: 768px) {
          #hero {
            min-height: auto !important;
            justify-content: flex-start !important;
            padding-top: calc(var(--nav-height) + 12px) !important;
            padding-bottom: 40px !important;
          }

          .hero-desktop-portrait {
            display: none !important;
          }

          .hero-mobile-portrait {
            display: flex !important;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-bottom: 20px;
          }

          .hero-mobile-portrait img {
            width: auto;
            max-width: 250px;
            height: auto;
            max-height: 38vh;
            object-fit: contain;
            object-position: top center;
            -webkit-mask-image: linear-gradient(to bottom, black 0%, black 80%, transparent 100%);
            mask-image: linear-gradient(to bottom, black 0%, black 80%, transparent 100%);
            filter: contrast(1.05) brightness(0.96);
          }

          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          .hero-left-col, .hero-right-col {
            grid-column: 1 / -1 !important;
            min-width: 0 !important;
          }

          .hero-content-container {
            padding-bottom: 24px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .hero-left-col, .hero-right-col {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </section>
  );
};
