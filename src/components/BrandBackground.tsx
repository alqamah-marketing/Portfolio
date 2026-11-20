import React from 'react';
import { 
  Search, 
  BarChart3, 
  Mail, 
  Calendar, 
  ShoppingCart, 
  Megaphone, 
  Play
} from 'lucide-react';

interface BrandBackgroundProps {
  variant?: 'hero' | 'subtle' | 'accent';
  showCircles?: boolean;
}

export const BrandBackground: React.FC<BrandBackgroundProps> = ({ variant = 'hero', showCircles = true }) => {
  return (
    <div 
      className="brand-bg-container"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {/* Large Brand Circular Outlines (Green & Blue) */}
      {variant === 'hero' && showCircles && (
        <>
          {/* Top-Right Intersecting Circles */}
          <div
            style={{
              position: 'absolute',
              top: '-15%',
              right: '-10%',
              width: '65vw',
              maxWidth: '850px',
              height: '65vw',
              maxHeight: '850px',
              borderRadius: '50%',
              border: '2px solid rgba(14, 37, 130, 0.45)', // Brand Blue
              boxShadow: '0 0 80px rgba(14, 37, 130, 0.15)',
              transform: 'rotate(-15deg)',
              transition: 'transform 0.5s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '-8%',
              right: '-5%',
              width: '55vw',
              maxWidth: '720px',
              height: '55vw',
              maxHeight: '720px',
              borderRadius: '50%',
              border: '2px solid rgba(30, 121, 9, 0.55)', // Brand Green
              boxShadow: '0 0 80px rgba(30, 121, 9, 0.15)',
              transform: 'rotate(25deg)',
            }}
          />

          {/* Bottom-Left Intersecting Circles */}
          <div
            style={{
              position: 'absolute',
              bottom: '-25%',
              left: '-15%',
              width: '60vw',
              maxWidth: '800px',
              height: '60vw',
              maxHeight: '800px',
              borderRadius: '50%',
              border: '2px solid rgba(30, 121, 9, 0.4)', // Brand Green
              boxShadow: '0 0 90px rgba(30, 121, 9, 0.12)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-18%',
              left: '-8%',
              width: '50vw',
              maxWidth: '650px',
              height: '50vw',
              maxHeight: '650px',
              borderRadius: '50%',
              border: '2px solid rgba(14, 37, 130, 0.5)', // Brand Blue
              boxShadow: '0 0 90px rgba(14, 37, 130, 0.15)',
            }}
          />
        </>
      )}

      {variant === 'hero' && (
        <>
          {/* Subtle Ambient Radial Glows */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              right: '15%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(14, 37, 130, 0.18) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '10%',
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle, rgba(30, 121, 9, 0.15) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          />

          {/* Floating Outline Marketing Icons (from Banner) */}
          <div
            style={{
              position: 'absolute',
              top: '22%',
              left: '8%',
              opacity: 0.25,
              animation: 'floatSlow 7s ease-in-out infinite',
            }}
          >
            <Mail size={32} strokeWidth={1.5} color="#ffffff" />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '38%',
              left: '5%',
              opacity: 0.2,
              animation: 'floatSlow 9s ease-in-out infinite 1s',
            }}
          >
            <Play size={28} strokeWidth={1.5} color="#ffffff" />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '28%',
              left: '12%',
              opacity: 0.22,
              animation: 'floatSlow 8s ease-in-out infinite 2s',
            }}
          >
            <Calendar size={30} strokeWidth={1.5} color="#ffffff" />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '18%',
              right: '12%',
              opacity: 0.25,
              animation: 'floatSlow 8.5s ease-in-out infinite 0.5s',
            }}
          >
            <BarChart3 size={32} strokeWidth={1.5} color="#ffffff" />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '42%',
              right: '6%',
              opacity: 0.22,
              animation: 'floatSlow 10s ease-in-out infinite 1.5s',
            }}
          >
            <ShoppingCart size={30} strokeWidth={1.5} color="#ffffff" />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '32%',
              right: '10%',
              opacity: 0.25,
              animation: 'floatSlow 7.5s ease-in-out infinite 2.5s',
            }}
          >
            <Megaphone size={28} strokeWidth={1.5} color="#ffffff" />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '12%',
              left: '45%',
              opacity: 0.15,
              animation: 'floatSlow 11s ease-in-out infinite',
            }}
          >
            <Search size={26} strokeWidth={1.5} color="#ffffff" />
          </div>
        </>
      )}

      {variant === 'subtle' && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              border: '1.5px solid rgba(30, 121, 9, 0.25)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-20%',
              left: '-10%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              border: '1.5px solid rgba(14, 37, 130, 0.25)',
            }}
          />
        </>
      )}

      {/* Floating Keyframes */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-14px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
};
