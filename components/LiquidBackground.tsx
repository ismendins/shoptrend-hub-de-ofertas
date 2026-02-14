
import React, { useEffect, useRef } from 'react';

export const LiquidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w: number, h: number;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Configuração das esferas de "líquido" adaptadas para a nova paleta
    const blobs = [
      { x: 0, y: 0, r: 0.7, color: 'rgba(136, 22, 0, 0.4)', speed: 0.002, offset: 0 },    // Brand Principal
      { x: 0, y: 0, r: 0.6, color: 'rgba(209, 31, 22, 0.3)', speed: 0.0015, offset: 2 },  // Brand 600
      { x: 0, y: 0, r: 0.8, color: 'rgba(121, 23, 18, 0.2)', speed: 0.001, offset: 4 },   // Brand 900
      { x: 0, y: 0, r: 0.5, color: 'rgba(255, 107, 98, 0.25)', speed: 0.0025, offset: 5 } // Brand 400
    ];

    const render = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'screen';

      blobs.forEach((blob) => {
        const x = w / 2 + Math.cos(time * blob.speed + blob.offset) * (w * 0.3);
        const y = h / 2 + Math.sin(time * blob.speed * 0.8 + blob.offset) * (h * 0.3);
        const radius = Math.min(w, h) * blob.r;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#09090b] overflow-hidden">
      {/* O Canvas com o movimento suave */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-60 filter blur-[80px]"
      />
      {/* Overlay de textura de grão (noise) para realismo */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}>
      </div>
      {/* Vinheta para focar no conteúdo central */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]"></div>
    </div>
  );
};