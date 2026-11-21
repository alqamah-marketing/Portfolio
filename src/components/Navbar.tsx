import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'what-i-do', 'work', 'about', 'experience', 'expertise', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-height)',
          zIndex: 50,
          backgroundColor: isScrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-default)' : '1px solid transparent',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <div
          className="container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand / Logo */}
          <a
            href="#hero"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-gold)',
                display: 'inline-block',
              }}
            />
            ALQAMAH KHAN
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '36px',
            }}
            className="desktop-nav"
          >
            <a
              href="#work"
              style={{
                fontSize: '13px',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: activeSection === 'work' ? 'var(--text-primary)' : 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => {
                if (activeSection !== 'work') e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              Work
            </a>

            <a
              href="#about"
              style={{
                fontSize: '13px',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: activeSection === 'about' ? 'var(--text-primary)' : 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => {
                if (activeSection !== 'about') e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              About Me
            </a>

            <a
              href="#contact"
              style={{
                fontSize: '13px',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: activeSection === 'contact' ? 'var(--text-primary)' : 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => {
                if (activeSection !== 'contact') e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              Contact
            </a>
          </nav>

          {/* Right Action: Resume Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="./alqamah-khan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '9999px',
                border: '1px solid rgba(187, 163, 59, 0.4)', // Gold subtle border
                backgroundColor: 'rgba(187, 163, 59, 0.08)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                e.currentTarget.style.borderColor = 'var(--color-gold)';
                e.currentTarget.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(187, 163, 59, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(187, 163, 59, 0.4)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="mobile-menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                padding: '8px',
                color: 'var(--text-primary)',
                display: 'none',
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 45,
            backgroundColor: 'rgba(5, 5, 5, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px 24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            <a
              href="#work"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: '28px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              Work
            </a>

            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: '28px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              About Me
            </a>

            <a
              href="#experience"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: '28px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              Experience
            </a>

            <a
              href="#expertise"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: '28px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              Expertise
            </a>

            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: '28px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              FAQs
            </a>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: '28px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              Contact
            </a>

            <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--border-default)' }}>
              <a
                href="./alqamah-khan-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-gold)',
                  color: '#000000',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                }}
              >
                <FileText size={16} />
                <span>Download Resume</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};
