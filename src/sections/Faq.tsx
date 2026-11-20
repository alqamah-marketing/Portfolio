import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      q: 'What type of opportunities am I looking for?',
      a: 'I am looking for Digital Marketing Executive opportunities involving SEO, AI-assisted content development, social media management, organic audience growth, and digital marketing analytics where I can contribute through practical campaign execution and data-driven optimization.'
    },
    {
      q: 'What areas of digital marketing have I worked on?',
      a: 'My experience encompasses search engine optimization (keyword research, on-page SEO, backlink research), AI-assisted blog content development, website content optimization, multi-channel social media management and scheduling, prospect outreach research, and marketing analytics.'
    },
    {
      q: 'Have I worked on independent projects?',
      a: 'Yes. Botmetryx is my independent project through which I experimented with organic social media marketing on Threads and Pinterest, tested content hooks and carousel design, and distributed free educational digital marketing resources via Gumroad.'
    },
    {
      q: 'Which tools and platforms have I used?',
      a: 'I actively work with Google Search Console, Ubersuggest, sociamonials, Microsoft Excel (PivotTables, data modeling, KPI dashboards), WordPress/CMS platforms, and AI productivity tools like Claude.'
    },
    {
      q: 'Where can I view samples of my work?',
      a: 'You can explore samples directly in the Selected Work section above, which includes live links to 9 published educational SEO articles across VidyaNova, Whoozit, Schezy, and DemoDazzle, alongside screenshot evidence of Botmetryx and interactive Excel dashboards.'
    },
    {
      q: 'How can recruiters and hiring managers connect with me?',
      a: 'You can connect directly via my verified LinkedIn profile (linkedin.com/in/alqamah-khan-digitalmarketing/) or reach me by email at alqamahkhan7@gmail.com. I am always open to discussing relevant digital marketing opportunities.'
    }
  ];

  return (
    <section
      id="faq"
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
              <span>№ 07</span>
              <span>—</span>
              <span className="section-tag-gold">FAQS</span>
            </div>

            <h2 className="section-title">
              A few things you might want to know.
            </h2>

            <p className="section-subtitle">
              Frequently asked questions concerning my background, experience, technical stack, and career goals.
            </p>
          </div>

          {/* Right Column: Accordion List */}
          <div className="content-col">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      borderBottom: '1px solid var(--border-default)',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '24px 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        gap: '20px',
                      }}
                      className="faq-trigger"
                    >
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '12px',
                            color: isOpen ? 'var(--color-gold)' : 'var(--text-dim)',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                          }}
                        >
                          Q. 0{idx + 1}
                        </span>
                        <span
                          style={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
                            transition: 'color 0.2s ease',
                          }}
                        >
                          {faq.q}
                        </span>
                      </div>

                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          border: isOpen ? '1px solid var(--color-gold)' : '1px solid rgba(255, 255, 255, 0.15)',
                          backgroundColor: isOpen ? 'rgba(187, 163, 59, 0.15)' : 'transparent',
                          color: isOpen ? 'var(--color-gold)' : 'var(--text-dim)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {isOpen ? <X size={15} /> : <Plus size={15} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          paddingBottom: '24px',
                          paddingLeft: '48px',
                          paddingRight: '12px',
                        }}
                      >
                        <p
                          style={{
                            fontSize: '0.98rem',
                            color: 'var(--text-dim)',
                            lineHeight: 1.7,
                          }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
