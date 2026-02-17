
import React from 'react';
import logo from './assets/logo.png';

const SOCIAL_LINKS = {
  tiktok: 'https://tiktok.com/@suaconta',
  instagram: 'https://instagram.com/suaconta',
  telegram: 'https://t.me/seuclube'
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-md text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
  <img
    src={logo}
    alt="ShopTrend Logo"
className="h-[75px] w-auto object-contain transition-transform duration-500 hover:scale-105"  />
</div>
            <p className="text-zinc-500 leading-relaxed font-medium">
              Sua curadoria de elite para os produtos mais virais da internet. 
              Qualidade verificada e links diretos para as melhores ofertas.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <h4 className="text-white font-bold tracking-[0.2em] uppercase text-xs opacity-50">Nossas Comunidades</h4>
            <div className="flex gap-4">
              <SocialIcon href={SOCIAL_LINKS.tiktok} type="tiktok" />
              <SocialIcon href={SOCIAL_LINKS.instagram} type="instagram" />
              <SocialIcon href={SOCIAL_LINKS.telegram} type="telegram" />
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-700 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>© 2024 SHOPTREND HUB. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex items-center gap-4">
            <span className="text-brand-800">Conectado ao Neon DB</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ href: string; type: 'tiktok' | 'instagram' | 'telegram' }> = ({ href, type }) => {
  const icons = {
    tiktok: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14 1.01.23 2.08.94 2.79.68.68 1.66 1.04 2.63.94 1.31-.07 2.5-1.01 2.87-2.26.11-.38.14-.77.14-1.17V.02z" />
      </svg>
    ),
    instagram: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    telegram: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
      </svg>
    )
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-500 hover:text-white hover:bg-brand-500 hover:border-brand-500 transition-all duration-500 shadow-2xl"
    >
      {icons[type]}
    </a>
  );
};
