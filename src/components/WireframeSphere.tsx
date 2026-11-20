import React, { useEffect, useRef } from 'react';

interface WireframeSphereProps {
  size?: number;
  color?: string;
  accentColor?: string;
}

export const WireframeSphere: React.FC<WireframeSphereProps> = ({
  size = 360,
  color = 'rgba(255, 255, 255, 0.25)',
  accentColor = '#1e7909'
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotX = 0.3;
    let rotY = 0;
    let targetRotX = 0.3;
    let targetRotY = 0;

    // Generate geodesic/icosahedron-like vertices
    const radius = size * 0.38;
    const rings = 9;
    const segments = 16;
    const points: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i <= rings; i++) {
      const theta = (i * Math.PI) / rings;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      for (let j = 0; j < segments; j++) {
        const phi = (j * 2 * Math.PI) / segments;
        points.push({
          x: radius * sinTheta * Math.cos(phi),
          y: radius * cosTheta,
          z: radius * sinTheta * Math.sin(phi)
        });
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      targetRotY = x * 0.8;
      targetRotX = -y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      rotY += (targetRotY - rotY) * 0.05 + 0.005; // auto-spin
      rotX += (targetRotX - rotX) * 0.05;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Project 3D points
      const projected = points.map((p) => {
        // Rotate Y
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;

        // Rotate X
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective
        const fov = size * 1.15;
        const scale = fov / (fov + z2 + radius * 1.3);

        return {
          px: cx + x1 * scale,
          py: cy + y2 * scale,
          z: z2,
          scale
        };
      });

      // Draw latitude lines
      ctx.lineWidth = 1;
      for (let i = 0; i <= rings; i++) {
        ctx.beginPath();
        for (let j = 0; j <= segments; j++) {
          const idx = i * segments + (j % segments);
          const pt = projected[idx];
          if (j === 0) ctx.moveTo(pt.px, pt.py);
          else ctx.lineTo(pt.px, pt.py);
        }
        ctx.strokeStyle = color;
        ctx.stroke();
      }

      // Draw longitude lines
      for (let j = 0; j < segments; j++) {
        ctx.beginPath();
        for (let i = 0; i <= rings; i++) {
          const idx = i * segments + j;
          const pt = projected[idx];
          if (i === 0) ctx.moveTo(pt.px, pt.py);
          else ctx.lineTo(pt.px, pt.py);
        }
        ctx.strokeStyle = color;
        ctx.stroke();
      }

      // Draw glowing vertices
      projected.forEach((pt, idx) => {
        if (idx % 3 === 0 && pt.z > 0) {
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, 2 * pt.scale, 0, Math.PI * 2);
          ctx.fillStyle = idx % 6 === 0 ? accentColor : '#bba33b';
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [size, color, accentColor]);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: `${size}px`,
        aspectRatio: '1 / 1',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
      }}
    >
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
};
