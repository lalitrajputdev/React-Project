import React from "react";
import { Link } from "react-router-dom";

const GeniusLogoSmall = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="50%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" stroke="url(#fLogoGrad)" strokeWidth="1.5" fill="rgba(124,58,237,0.08)"/>
    <path d="M23 16H18C16.9 16 16 16.9 16 18V22C16 23.1 16.9 24 18 24H22C23.1 24 24 23.1 24 22V20H21" stroke="url(#fLogoGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="20" cy="2" r="1.5" fill="url(#fLogoGrad)" opacity="0.8"/>
    <circle cx="20" cy="38" r="1.5" fill="url(#fLogoGrad)" opacity="0.8"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/5 bg-[#03070f]">
      {/* Glow decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-700/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-700/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Top divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <GeniusLogoSmall />
              <div>
                <div className="text-white font-black text-lg tracking-tight" style={{fontFamily:'Outfit,sans-serif'}}>
                  Genius <span className="premium-gradient-text">App Hub</span>
                </div>
                <div className="text-[9px] text-gray-600 uppercase tracking-[0.2em]">App Ecosystem</div>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Premium Android apps — completely free, always private, and built for everyday humans.
            </p>
            {/* Status node */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-full bg-green-500/5 border border-green-500/15">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">All Systems Live</span>
            </div>
          </div>

          {/* Col 2 — Apps */}
          <div className="space-y-5">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">Our Apps</h4>
            <ul className="space-y-3">
              <li><a href="/#apps" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors font-medium flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>MoneyMate
              </a></li>
              <li><a href="/#apps" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors font-medium flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>15 August Editor
              </a></li>
              <li><a href="/#apps" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors font-medium flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>Pic Genius
              </a></li>
              <li><a href="/#apps" className="text-gray-500 hover:text-purple-400 text-sm transition-colors font-medium flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>More Coming Soon
              </a></li>
              <li><a href="/#features" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors font-medium flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>All Features
              </a></li>
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div className="space-y-5">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-gray-500 hover:text-purple-400 text-sm transition-colors font-medium flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>Global Privacy Policy
              </Link></li>
              <li><Link to="/privacy/money-mate" className="text-gray-500 hover:text-purple-400 text-sm transition-colors font-medium flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>MoneyMate Policy
              </Link></li>
              <li><Link to="/privacy/pic-genius" className="text-gray-500 hover:text-purple-400 text-sm transition-colors font-medium flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>Pic Genius Policy
              </Link></li>
              <li><Link to="/privacy/15-august-photo-editor" className="text-gray-500 hover:text-purple-400 text-sm transition-colors font-medium flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>15 August Policy
              </Link></li>
              <li><span className="text-gray-700 text-sm font-medium flex items-center gap-2 cursor-not-allowed">
                <span className="w-1 h-1 rounded-full bg-gray-800"></span>Terms of Service (Soon)
              </span></li>
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="space-y-5">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:geniusapphub.dev@gmail.com" className="text-gray-500 hover:text-white text-sm transition-colors font-medium flex items-center gap-2 group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  geniusapphub.dev@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:text-white border border-white/8 hover:border-white/20 bg-white/3 hover:bg-white/8 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:text-white border border-white/8 hover:border-white/20 bg-white/3 hover:bg-white/8 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
              <a href="mailto:geniusapphub.dev@gmail.com" aria-label="Email" className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:text-white border border-white/8 hover:border-white/20 bg-white/3 hover:bg-white/8 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-600 font-medium">
            © {year} Genius App Hub · All rights reserved
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors">Privacy</Link>
            <span className="text-gray-700">·</span>
            <a href="mailto:geniusapphub.dev@gmail.com" className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors">Contact</a>
            <span className="text-gray-700">·</span>
            <span className="text-[11px] text-gray-600 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 inline-block"></span>
              Made with ❤️ in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}