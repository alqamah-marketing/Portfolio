import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

// Import images
import threadsImg from '../assets/images/projects/threads.webp';
import pinterestImg from '../assets/images/projects/pinterest.webp';
import digitalProductSalesImg from '../assets/images/projects/digital-product-sales.webp';
import productSalesImg from '../assets/images/projects/product-sales.webp';
import excelDashboardImg from '../assets/images/projects/excel-mis-report.webp';
import excelPivotsImg from '../assets/images/projects/excel-pivot-tables.webp';

export const SelectedWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const [selectedBotmetryxImage, setSelectedBotmetryxImage] = useState(0);

  const filters = [
    'All',
    'SEO & Content',
    'Social Media',
    'Analytics',
    'Independent Projects'
  ];

  const botmetryxImages = [
    { src: threadsImg, caption: 'Threads Community Profile — 3,100 followers & 1,402 recent views' },
    { src: pinterestImg, caption: 'Pinterest Strategy — 174 followers & 519 monthly organic views' },
    { src: digitalProductSalesImg, caption: 'Gumroad Free Products — 92 total downloads across 3 resources ($0 revenue)' },
    { src: productSalesImg, caption: 'Gumroad Traffic & Product Sales Sources — Conversion from Threads, Search & Direct' }
  ];

  const publishedArticles = [
    {
      site: 'VidyaNova',
      siteUrl: 'https://vidyanova.com',
      title: 'The Hidden Formula Behind Every Successful Online Courses Website and How You Can Build Yours',
      url: 'https://vidyanova.com/blog/hidden-formula-online-courses-website',
      desc: 'In-depth analysis of high-converting course website architecture, student UX, and search-driven structure.'
    },
    {
      site: 'VidyaNova',
      siteUrl: 'https://vidyanova.com',
      title: "E-Learning Portals Explained: How They're Changing the Way We Learn in 2025",
      url: 'https://vidyanova.com/blog/e-learning-portals-transforming-learning-2025',
      desc: 'Exploration of modern LMS architectures, interactive digital classrooms, and asynchronous retention patterns.'
    },
    {
      site: 'VidyaNova',
      siteUrl: 'https://vidyanova.com',
      title: 'How an Online Class Website Can Supercharge Your Learning in Just Weeks',
      url: 'https://vidyanova.com/blog/online-class-website-learning',
      desc: 'Structured breakdown of virtual learning platforms, micro-learning modules, and measurable learning outcomes.'
    },
    {
      site: 'Whoozit',
      siteUrl: 'https://whoozit.in',
      title: 'This Social Media Plan Sample Will Transform How You Grow Online',
      url: 'https://whoozit.in/blog/social-media-plan-sample',
      desc: 'Actionable multi-platform content roadmap with scheduling templates and organic engagement principles.'
    },
    {
      site: 'Whoozit',
      siteUrl: 'https://whoozit.in',
      title: 'The Secret to a Standout Personal Web Page Every Creator Should Know',
      url: 'https://whoozit.in/blog/personal-web-page-creator-guide',
      desc: 'Guide to personal branding, conversion-focused personal portfolios, and digital creator identity.'
    },
    {
      site: 'Schezy',
      siteUrl: 'https://schezy.com',
      title: 'Discover How Schezy Is Revolutionizing Resources for Class 8 Students',
      url: 'https://schezy.com/blog/schezy-resources-for-class-8-students',
      desc: 'SEO-targeted guide highlighting interactive academic materials, NCERT alignment, and structured student resources.'
    },
    {
      site: 'Schezy',
      siteUrl: 'https://schezy.com',
      title: 'National Board of Accreditation: How It Improves the Quality of Higher Education in India',
      url: 'https://schezy.com/blog/national-board-of-accreditation-guide-india',
      desc: 'Comprehensive overview of NBA evaluation criteria, institutional standards, and higher education credibility in India.'
    },
    {
      site: 'DemoDazzle',
      siteUrl: 'https://demodazzle.com',
      title: 'How an AI PPT Creator Can Revolutionize Your Product Demos and Employee Training',
      url: 'https://demodazzle.com/blog/ai-ppt-creator-product-demos-training',
      desc: 'Examining AI presentation tools for accelerating corporate onboarding decks, demo scripting, and sales decks.'
    },
    {
      site: 'DemoDazzle',
      siteUrl: 'https://demodazzle.com',
      title: 'Powerful Interactive Demonstration Examples That Transform Training, Onboarding, and Sales',
      url: 'https://demodazzle.com/blog/interactive-demonstration-examples-for-training-onboarding-and-sales',
      desc: 'Showcasing interactive interactive walkthroughs, self-guided demo environments, and buyer engagement strategies.'
    }
  ];

  // Filter logic
  const showBotmetryx = activeFilter === 'All' || activeFilter === 'Social Media' || activeFilter === 'Independent Projects';
  const showSEO = activeFilter === 'All' || activeFilter === 'SEO & Content';
  const showAnalytics = activeFilter === 'All' || activeFilter === 'Analytics';

  return (
    <section
      id="work"
      className="section-wrapper section-divider"
      style={{
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Top Split Layout: Sticky Aside + Content Stream */}
        <div className="grid-split">
          {/* Left Aside: Sticky Title & Filter Tabs */}
          <div className="aside-col">
            <div className="section-tag">
              <span>№ 03</span>
              <span>—</span>
              <span className="section-tag-gold">SELECTED WORK</span>
            </div>

            <h2 className="section-title">
              Selected projects. Different sides of digital marketing.
            </h2>

            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              A look at my professional assignments and independent projects across SEO, content marketing, social media, and analytics.
            </p>

            {/* Filter Pills */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                borderTop: '1px solid var(--border-default)',
                paddingTop: '20px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--text-dim)',
                  marginBottom: '4px',
                }}
              >
                Filter by Discipline
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontFamily: 'var(--font-mono)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        transition: 'all 0.2s ease',
                        border: isActive ? '1px solid var(--color-gold)' : '1px solid var(--border-default)',
                        backgroundColor: isActive ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.03)',
                        color: isActive ? '#000000' : 'var(--text-secondary)',
                        fontWeight: isActive ? 600 : 400,
                      }}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Case Studies & Projects Stream */}
          <div className="content-col" style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            
            {/* ============================================================== */}
            {/* PROJECT 01 — BOTMETRYX (FEATURED CASE STUDY)                   */}
            {/* ============================================================== */}
            {showBotmetryx && (
              <article
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '16px',
                  border: '1px solid var(--border-default)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
                className="project-card"
              >
                {/* Visual Header / Gallery */}
                <div className="card-gallery-header" style={{ position: 'relative', backgroundColor: '#000000' }}>
                  {/* Active Screenshot Display */}
                  <div
                    style={{
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      maxHeight: '440px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#0a0a0c',
                    }}
                  >
                    <img
                      src={botmetryxImages[selectedBotmetryxImage].src}
                      alt={botmetryxImages[selectedBotmetryxImage].caption}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '440px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>

                  {/* Caption & Image selector tabs */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '16px',
                      gap: '12px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-dim)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      📸 {botmetryxImages[selectedBotmetryxImage].caption}
                    </p>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      {botmetryxImages.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedBotmetryxImage(idx)}
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '6px',
                            border: selectedBotmetryxImage === idx ? '1px solid var(--color-gold)' : '1px solid var(--border-default)',
                            backgroundColor: selectedBotmetryxImage === idx ? 'rgba(187, 163, 59, 0.2)' : 'transparent',
                            color: selectedBotmetryxImage === idx ? 'var(--color-gold)' : 'var(--text-dim)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11px',
                            fontWeight: 600,
                          }}
                        >
                          0{idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="card-content-body">
                  {/* Badges */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '16px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: '#f43f5e',
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f43f5e' }} />
                      FEATURED CASE 01
                    </span>

                    <span
                      style={{
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--text-dim)',
                      }}
                    >
                      Independent Project · Social Media · Organic Distribution
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                      fontWeight: 700,
                      lineHeight: 1.25,
                      color: 'var(--text-primary)',
                      marginBottom: '14px',
                    }}
                  >
                    Botmetryx: Building an Independent Digital Marketing Brand Through Organic Content and Digital Product Distribution
                  </h3>

                  {/* Overview */}
                  <p
                    style={{
                      fontSize: '0.98rem',
                      color: 'var(--text-dim)',
                      lineHeight: 1.7,
                      marginBottom: '28px',
                    }}
                  >
                    Botmetryx is my independent digital marketing project through which I explored social media content strategy, organic audience development, digital product creation, and multi-channel content distribution.
                  </p>

                  {/* Historical Screenshot Evidence Grid */}
                  <div
                    className="botmetryx-metrics-grid"
                    style={{
                      padding: '20px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-default)',
                      marginBottom: '28px',
                    }}
                  >
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block' }}>
                        Threads Audience
                      </span>
                      <strong style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 700 }}>3,100</strong>
                      <span style={{ fontSize: '11px', color: 'var(--text-dim)', display: 'block' }}>Followers (1,402 views)</span>
                    </div>

                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block' }}>
                        Pinterest Reach
                      </span>
                      <strong style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 700 }}>519</strong>
                      <span style={{ fontSize: '11px', color: 'var(--text-dim)', display: 'block' }}>Monthly Views (174 followers)</span>
                    </div>

                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block' }}>
                        Free Product Checkouts
                      </span>
                      <strong style={{ fontSize: '1.4rem', color: 'var(--color-gold)', fontWeight: 700 }}>92 Total</strong>
                      <span style={{ fontSize: '11px', color: 'var(--text-dim)', display: 'block' }}>Across 3 Free Resources</span>
                    </div>

                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block' }}>
                        Resource Pricing
                      </span>
                      <strong style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 700 }}>$0.00</strong>
                      <span style={{ fontSize: '11px', color: 'var(--text-dim)', display: 'block' }}>Free Community Guides</span>
                    </div>
                  </div>

                  {/* Authentic Transparency Note */}
                  <div
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(187, 163, 59, 0.08)',
                      border: '1px solid rgba(187, 163, 59, 0.25)',
                      marginBottom: '28px',
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: 1.5,
                    }}
                  >
                    <strong style={{ color: 'var(--color-gold)' }}>Authentic Evidence Note:</strong> The supplied Gumroad report displays $0 revenue for these resources as they were intentionally published as free educational playbooks and automation templates. These figures represent documented historical screenshot proof of organic community interest.
                  </div>

                  {/* Expandable Deep-Dive Case Study */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setExpandedCase(expandedCase === 'botmetryx' ? null : 'botmetryx')}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 20px',
                        borderRadius: '9999px',
                        border: '1px solid var(--border-default)',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)')}
                    >
                      <span>{expandedCase === 'botmetryx' ? 'Close Full Case Study' : 'Read Full Case Study Breakdown'}</span>
                      {expandedCase === 'botmetryx' ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {expandedCase === 'botmetryx' && (
                      <div
                        style={{
                          marginTop: '28px',
                          paddingTop: '28px',
                          borderTop: '1px solid var(--border-default)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '24px',
                        }}
                      >
                        <div>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                            1. Project Objectives
                          </h4>
                          <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                            Test organic social media distribution without ad spend. Measure engagement across text-first (Threads) vs visual search (Pinterest), and gauge interest in AI & automation resources.
                          </p>
                        </div>

                        <div>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                            2. Strategy & Content Execution
                          </h4>
                          <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                            Authored step-by-step carousel breakdowns on Instagram, concise prompt engineering playbooks on Threads, and infographic pins on Pinterest linking to friction-free Gumroad download pages.
                          </p>
                        </div>

                        <div>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                            3. Digital Product Distribution
                          </h4>
                          <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                            Published 3 distinct resources: "The Claude Skills Mastery Playbook 2026" (54 downloads), "Claude Skills & n8n SEO Audits Workflow" (32 downloads), and "Instagram Carousels Automation" (6 downloads) — reaching 92 total organic community downloads.
                          </p>
                        </div>

                        <div>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                            4. What I Learned
                          </h4>
                          <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                            Direct traffic from engaged Threads communities converts at high intent when the asset solves a narrow, acute problem. Organic distribution compounds when content answers immediate practitioner questions.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            )}

            {/* ============================================================== */}
            {/* PROJECT 02 — SEO CONTENT WRITING & PUBLISHING                  */}
            {/* ============================================================== */}
            {showSEO && (
              <article
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '16px',
                  border: '1px solid var(--border-default)',
                  overflow: 'hidden',
                }}
                className="project-card card-content-body"
              >
                {/* Badges */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'var(--color-gold)',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-gold)' }} />
                    PROFESSIONAL EXPERIENCE · CASE 02
                  </span>

                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--text-dim)',
                    }}
                  >
                    SEO · Content Writing · Agami Technologies Internship
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: 'var(--text-primary)',
                    marginBottom: '14px',
                  }}
                >
                  SEO Content Writing Across Education, Social Media, Personal Branding, and AI Tools
                </h3>

                <p
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--text-dim)',
                    lineHeight: 1.7,
                    marginBottom: '28px',
                  }}
                >
                  During my SEO internship at Agami Technologies, I conducted in-depth keyword research, competitive topic structuring, and published 9 comprehensive articles across multiple live domains.
                </p>

                {/* Published Articles Interactive Grid */}
                <div className="articles-grid">
                  {publishedArticles.map((article, idx) => (
                    <a
                      key={idx}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '20px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-default)',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(187, 163, 59, 0.4)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                        e.currentTarget.style.borderColor = 'var(--border-default)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div>
                        {/* Domain Tag */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '10px',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '11px',
                              fontWeight: 600,
                              color: 'var(--color-gold)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.1em',
                            }}
                          >
                            {article.site}
                          </span>
                          <ExternalLink size={13} color="var(--text-dim)" />
                        </div>

                        {/* Article Title */}
                        <h4
                          style={{
                            fontSize: '0.98rem',
                            fontWeight: 600,
                            lineHeight: 1.4,
                            color: 'var(--text-primary)',
                            marginBottom: '10px',
                          }}
                        >
                          {article.title}
                        </h4>

                        {/* Description */}
                        <p
                          style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-dim)',
                            lineHeight: 1.5,
                          }}
                        >
                          {article.desc}
                        </p>
                      </div>

                      <div
                        style={{
                          marginTop: '16px',
                          paddingTop: '12px',
                          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <span>Read Live Article</span>
                        <ArrowUpRight size={13} />
                      </div>
                    </a>
                  ))}
                </div>
              </article>
            )}

            {/* ============================================================== */}
            {/* PROJECT 03 — SALES PERFORMANCE DASHBOARD (EXCEL ANALYTICS)     */}
            {/* ============================================================== */}
            {showAnalytics && (
              <article
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '16px',
                  border: '1px solid var(--border-default)',
                  overflow: 'hidden',
                }}
                className="project-card card-content-body"
              >
                {/* Badges */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: '#10b981',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                    ANALYTICAL PROJECT · CASE 03
                  </span>

                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--text-dim)',
                    }}
                  >
                    Microsoft Excel · PivotTables · Data Visualization · KPI Dashboards
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: 'var(--text-primary)',
                    marginBottom: '14px',
                  }}
                >
                  Sales Data Analysis and Interactive Excel Dashboard
                </h3>

                <p
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--text-dim)',
                    lineHeight: 1.7,
                    marginBottom: '24px',
                  }}
                >
                  An analytical practice project demonstrating raw dataset preparation, PivotTables, KPI metric modeling, interactive timeline slicers, and executive dashboard visualization.
                </p>

                {/* Dashboard Image Showcase */}
                <div className="excel-showcase-grid">
                  <div
                    style={{
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-default)',
                      backgroundColor: '#000000',
                    }}
                  >
                    <img
                      src={excelDashboardImg}
                      alt="Sales Performance Interactive Dashboard"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div style={{ padding: '10px 14px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                      📊 Executive Dashboard View: Monthly trends, regional splits, product Pareto analysis
                    </div>
                  </div>

                  <div
                    style={{
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-default)',
                      backgroundColor: '#000000',
                    }}
                  >
                    <img
                      src={excelPivotsImg}
                      alt="Excel PivotTable Analysis"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div style={{ padding: '10px 14px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                      📑 Underlying PivotTables: Sum of revenue by month, sales channels, top 5 products
                    </div>
                  </div>
                </div>

                {/* KPI Metrics Breakdown from Dataset */}
                <div
                  className="kpi-metrics-grid"
                  style={{
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-default)',
                    marginBottom: '20px',
                  }}
                >
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Dataset Revenue</span>
                    <strong style={{ fontSize: '1.2rem', color: '#ffffff', display: 'block' }}>$2.45M</strong>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Total Orders</span>
                    <strong style={{ fontSize: '1.2rem', color: '#ffffff', display: 'block' }}>2,000</strong>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Quantity Sold</span>
                    <strong style={{ fontSize: '1.2rem', color: '#ffffff', display: 'block' }}>5,552</strong>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Avg Order Value</span>
                    <strong style={{ fontSize: '1.2rem', color: '#ffffff', display: 'block' }}>~$1.23K</strong>
                  </div>
                </div>

                {/* Practice Disclaimer Note */}
                <p
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    lineHeight: 1.5,
                  }}
                >
                  * Note: The underlying dataset represents demonstration/practice sales data used for mastering data modeling, KPI tracking, and interactive dashboard engineering in Microsoft Excel.
                </p>
              </article>
            )}

          </div>
        </div>
      </div>

      <style>{`
        .card-content-body {
          padding: 36px;
        }
        .card-gallery-header {
          padding: 24px;
        }
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: 16px;
          margin-bottom: 20px;
        }
        .excel-showcase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        .botmetryx-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .kpi-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 12px;
          padding: 16px;
        }

        @media (max-width: 900px) {
          .botmetryx-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
        }

        @media (max-width: 768px) {
          .card-content-body {
            padding: 20px 16px !important;
          }
          .card-gallery-header {
            padding: 16px 12px !important;
          }
          .articles-grid {
            grid-template-columns: 1fr !important;
          }
          .excel-showcase-grid {
            grid-template-columns: 1fr !important;
          }
          .project-card {
            border-radius: 12px !important;
          }
        }

        @media (max-width: 480px) {
          .botmetryx-metrics-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
            padding: 14px 10px !important;
          }
          .kpi-metrics-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
            padding: 12px 10px !important;
          }
        }
      `}</style>
    </section>
  );
};
