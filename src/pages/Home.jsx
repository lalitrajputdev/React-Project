/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// ——— Stats ———
const stats = [
  { value: "100K+", label: "Downloads", icon: "⬇️" },
  { value: "3", label: "Premium Apps", icon: "📱" },
  { value: "100%", label: "Free Forever", icon: "🔓" },
  { value: "0", label: "Login Required", icon: "🚀" },
];

// ——— Features ———
const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "cyan",
    title: "Zero Latency",
    desc: "Native async computation ensures buttery-smooth performance. No lag, no wait — ever.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "green",
    title: "Always Free",
    desc: "Enterprise-grade software at zero cost. No subscriptions, no paywalls — pure unlimited access.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    color: "purple",
    title: "No Login Needed",
    desc: "Open the app, start creating instantly. Zero registration loops. Maximum access, minimum friction.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "indigo",
    title: "100% Data Safe",
    desc: "All processing is device-bound. Your photos, identity and content never leave your phone.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "pink",
    title: "Ultra-HD Quality",
    desc: "Every image, every frame — rendered in stunning 4K resolution for professional-grade output.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: "amber",
    title: "Regular Updates",
    desc: "Continuous improvements delivered automatically. Our apps keep getting better, always.",
  },
];

const colorMap = {
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400", glow: "rgba(6,182,212,0.6)" },
  green: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400", glow: "rgba(16,185,129,0.6)" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400", glow: "rgba(168,85,247,0.6)" },
  indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-400", glow: "rgba(99,102,241,0.6)" },
  pink: { bg: "bg-pink-500/10", border: "border-pink-500/20", text: "text-pink-400", glow: "rgba(236,72,153,0.6)" },
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400", glow: "rgba(245,158,11,0.6)" },
};

export default function Home() {
  return (
    <div className="bg-[#030712] text-gray-200 min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Genius App Hub | Free Premium Android Apps — No Login Required</title>
        <meta name="description" content="Download free, premium Android apps from Genius App Hub. Pic Genius, 15 August Photo Editor and more. High-quality tools with no registration, no fees, and data-safe technology." />
        <meta name="keywords" content="free android apps, genius app hub, pic genius app, 15 august photo editor, independence day photo editor, free photo editing android, download free apps india" />
        <meta property="og:title" content="Genius App Hub | Free Premium Android Apps" />
        <meta property="og:description" content="Download free, premium Android apps. No login. No fees. Just powerful tools." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://geniusapphub.com/" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Organization","name":"Genius App Hub","url":"https://geniusapphub.com","description":"Free premium Android apps with no login required","contactPoint":{"@type":"ContactPoint","email":"geniusapphub.dev@gmail.com","contactType":"customer support"}}`}</script>
      </Helmet>

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-saas-gradient">

        {/* Background orbs */}
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-purple-700/20 rounded-[100%] blur-[140px] pointer-events-none animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[40%] left-[-5%] w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_50%,#000_40%,transparent_100%)]" />

        {/* Floating particles */}
        {[
          { cls: "top-1/4 left-1/4", color: "bg-cyan-400/50", delay: "0s" },
          { cls: "top-1/3 right-1/3", color: "bg-purple-400/50", delay: "1.8s" },
          { cls: "bottom-1/3 left-1/3", color: "bg-pink-400/50", delay: "3.2s" },
          { cls: "top-2/3 right-1/4", color: "bg-indigo-400/40", delay: "1s" },
          { cls: "top-1/2 left-1/6", color: "bg-cyan-300/30", delay: "2.5s" },
        ].map((p, i) => (
          <div key={i} className={`absolute w-1.5 h-1.5 rounded-full ${p.color} ${p.cls} animate-particle`} style={{ animationDelay: p.delay }} />
        ))}

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-24">

          {/* Badge */}
          <div className="flex justify-center mb-10" data-aos="fade-down">
            <div className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span>Genius App Hub · Free Android Apps</span>
            </div>
          </div>

          {/* H1 */}
          <h1 className="text-5xl sm:text-7xl md:text-[88px] font-black tracking-tighter mb-8 leading-[1.0] text-white" data-aos="fade-up" data-aos-delay="100">
            Premium Apps.<br />
            <span className="premium-gradient-text">Zero&nbsp;Cost.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 mb-5 max-w-2xl mx-auto font-medium leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Hand-crafted Android tools built for performance, privacy, and beauty.
          </p>
          <p className="text-base text-gray-600 mb-14 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="250">
            No login. No fees. No compromises — for the people of India and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24" data-aos="fade-up" data-aos-delay="300">
            <a href="#apps" className="btn-primary text-base rounded-2xl">
              Explore Our Apps
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </a>
            <a href="#features" className="btn-ghost text-base rounded-2xl">
              Why Choose Us?
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-white/5 bg-white/5" data-aos="fade-up" data-aos-delay="400">
            {stats.map((s) => (
              <div key={s.value} className="py-8 px-4 bg-[#030712] hover:bg-white/3 transition-colors text-center">
                <div className="text-3xl md:text-4xl font-black premium-gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-30">
          <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. MARQUEE TRUST STRIP
      ══════════════════════════════════════════ */}
      <div className="border-y border-white/5 bg-white/1 py-4 overflow-hidden relative">
        <div className="flex space-x-16 animate-marquee whitespace-nowrap" style={{ animation: "marquee 20s linear infinite" }}>
          {["✦ Free Forever", "✦ No Registration", "✦ Made in India", "✦ Privacy First", "✦ Offline Ready", "✦ 4K Quality", "✦ Android Optimized", "✦ Regular Updates", "✦ Free Forever", "✦ No Registration", "✦ Made in India", "✦ Privacy First", "✦ Offline Ready", "✦ 4K Quality", "✦ Android Optimized", "✦ Regular Updates"].map((t, i) => (
            <span key={i} className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t}</span>
          ))}
        </div>
        <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </div>

      {/* ══════════════════════════════════════════
          3. APPS SECTION
      ══════════════════════════════════════════ */}
      <section id="apps" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-20" data-aos="fade-up">
            <div className="flex justify-center mb-5">
              <div className="section-badge">Our Applications</div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-5">
              Intelligent <span className="premium-gradient-text">Toolsets</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Each app is precision-engineered — built for speed, crafted for beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 — MoneyMate */}
            <div className="premium-card flex flex-col group" data-aos="fade-up" data-aos-delay="50">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10 group-hover:border-emerald-500/40 transition-all shadow-xl flex-shrink-0 bg-white flex items-center justify-center p-1">
                  <img src="./images/moneymate-logo.png" alt="MoneyMate Express Tracker" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-400/80 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">Finance Tech</span>
                  <h3 className="text-lg font-bold text-white mt-1.5">MoneyMate</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                Premium auto-expense tracking powered by advanced SMS parsers. Encrypted locally with weekly analytic bar charts and non-intrusive updates.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Auto SMS Reader", "Analytics", "Secure"].map((t) => (
                  <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-white/4 border border-white/8 text-gray-500 font-medium">{t}</span>
                ))}
              </div>
              <div className="flex flex-col space-y-2 mt-auto">
                <button
                  onClick={() => window.open("https://play.google.com/store/apps/details?id=com.geniusapphub.moneymate", "_blank")}
                  className="btn-playstore"
                  style={{ borderColor: "rgba(16,185,129,0.3)", boxShadow: "0 0 20px rgba(16,185,129,0.1)" }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,16.05C19.15,16.29 19.34,16.9 19.1,17.39C19.03,17.53 18.93,17.66 18.8,17.76L15.11,21.45L12,18.34M16.81,8.88L15.11,2.55L18.8,6.24C19.26,6.7 19.26,7.45 18.8,7.91L16.81,8.88M12,5.66L13.69,12L12,18.34L10.31,12L12,5.66Z" /></svg>
                  <span>Get on Google Play</span>
                </button>
                <Link to="/privacy/money-mate"
                  className="w-full py-2 text-[11px] font-semibold text-center text-gray-500 hover:text-gray-300 uppercase tracking-widest transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="premium-card flex flex-col group" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10 group-hover:border-orange-500/40 transition-all shadow-xl flex-shrink-0">
                  <img src="./images/15Aguestapplogo.jpg" alt="15 August Editor for Android" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-orange-400/80 uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full">Photo Editor</span>
                  <h3 className="text-lg font-bold text-white mt-1.5">15 August Editor</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                Create stunning Independence Day photo frames with intelligent AI overlays,
                national theme filters, and premium artistic borders in seconds.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Independence Day", "HD Frames", "Festival"].map((t) => (
                  <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-white/4 border border-white/8 text-gray-500 font-medium">{t}</span>
                ))}
              </div>
              <div className="flex flex-col space-y-2 mt-auto">
                <a
                  href="./images/app-release.apk"
                  download
                  className="btn-playstore"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,16.05C19.15,16.29 19.34,16.9 19.1,17.39C19.03,17.53 18.93,17.66 18.8,17.76L15.11,21.45L12,18.34M16.81,8.88L15.11,2.55L18.8,6.24C19.26,6.7 19.26,7.45 18.8,7.91L16.81,8.88M12,5.66L13.69,12L12,18.34L10.31,12L12,5.66Z" /></svg>
                  <span>Get on Google Play</span>
                </a>
                <Link to="/privacy/15-august-photo-editor"
                  className="w-full py-2 text-[11px] font-semibold text-center text-gray-500 hover:text-gray-300 uppercase tracking-widest transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Card 2 — Pic Genius */}
            <div className="premium-card flex flex-col group" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan-500/40 transition-all shadow-xl flex-shrink-0">
                  <img src="./images/picgenius1.png" alt="Pic Genius HD Quotes Android App" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-cyan-400/80 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">Quotes & Pics</span>
                  <h3 className="text-lg font-bold text-white mt-1.5">Pic Genius</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                Browse thousands of ultra-HD 4K motivational quotes and stunning visuals
                perfectly optimized for Instagram, WhatsApp, and all social platforms.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["4K Quotes", "Social Media", "Motivation"].map((t) => (
                  <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-white/4 border border-white/8 text-gray-500 font-medium">{t}</span>
                ))}
              </div>
              <div className="flex flex-col space-y-2 mt-auto">
                <a
                  href="./images/picgenius.apk"
                  download
                  className="btn-playstore"
                  style={{ borderColor: "rgba(6,182,212,0.3)", boxShadow: "0 0 20px rgba(6,182,212,0.1)" }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,16.05C19.15,16.29 19.34,16.9 19.1,17.39C19.03,17.53 18.93,17.66 18.8,17.76L15.11,21.45L12,18.34M16.81,8.88L15.11,2.55L18.8,6.24C19.26,6.7 19.26,7.45 18.8,7.91L16.81,8.88M12,5.66L13.69,12L12,18.34L10.31,12L12,5.66Z" /></svg>
                  <span>Get on Google Play</span>
                </a>
                <Link to="/privacy/pic-genius"
                  className="w-full py-2 text-[11px] font-semibold text-center text-gray-500 hover:text-gray-300 uppercase tracking-widest transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="relative rounded-3xl p-8 flex flex-col items-center justify-center text-center group overflow-hidden"
              style={{ border: "1px dashed rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.01)" }}
              data-aos="fade-up" data-aos-delay="300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-16 h-16 rounded-2xl border border-white/8 bg-white/2 flex items-center justify-center mb-5 group-hover:border-purple-500/30 transition-colors relative">
                <svg className="w-7 h-7 text-gray-600 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-400 mb-2 group-hover:text-white transition-colors">More Apps Coming</h3>
              <p className="text-sm text-gray-600 mb-6">Our ecosystem is actively expanding. Next big drop soon.</p>
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-purple-500/8 border border-purple-500/15">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest">In Development</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. FEATURES SECTION
      ══════════════════════════════════════════ */}
      <section id="features" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#040608]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
        <div className="absolute -top-60 right-0 w-[700px] h-[700px] bg-purple-700/8 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-60 left-0 w-[700px] h-[700px] bg-cyan-700/8 blur-[180px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="flex justify-center mb-5">
              <div className="section-badge">Why Choose Us</div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-5">
              Built Different.<br /><span className="premium-gradient-text">Engineered Better.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every decision is intentional. Every feature is purposeful. Zero bloat, zero compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => {
              const c = colorMap[f.color];
              return (
                <div key={f.title} className="premium-card" data-aos="fade-up" data-aos-delay={i * 80}>
                  <div className="absolute top-0 right-8 w-16 h-[2px] rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${c.glow})` }} />
                  <div className={`w-12 h-12 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mb-5 ${c.text}`}>
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="py-28 px-6 relative border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="flex justify-center mb-5">
              <div className="section-badge">Simple Process</div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              Get Started in <span className="premium-gradient-text">3 Steps</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-purple-500/30" />

            {[
              { step: "01", title: "Open Play Store", desc: "Find our app on Google Play Store and hit Install.", icon: "📲", color: "text-purple-400" },
              { step: "02", title: "Install & Open", desc: "App installs in seconds. Open it — no signup needed.", icon: "⚡", color: "text-cyan-400" },
              { step: "03", title: "Create & Share", desc: "Start using premium features instantly. Share your work!", icon: "🎨", color: "text-pink-400" },
            ].map((s) => (
              <div key={s.step} className="relative text-center group" data-aos="fade-up" data-aos-delay={parseInt(s.step) * 80}>
                <div className="w-20 h-20 mx-auto rounded-2xl border border-white/8 bg-white/3 flex items-center justify-center mb-5 group-hover:border-purple-500/30 transition-colors text-3xl">
                  {s.icon}
                </div>
                <div className={`text-xs font-black ${s.color} uppercase tracking-widest mb-2`}>{s.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. ABOUT / CTA
      ══════════════════════════════════════════ */}
      <section id="about" className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[500px] bg-gradient-to-r from-indigo-600/12 via-purple-600/18 to-cyan-600/12 rounded-full blur-[140px] animate-pulse" />
        </div>

        {/* Decorative ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-500/5 rounded-full pointer-events-none animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan-500/5 rounded-full pointer-events-none" style={{ animation: "spin-slow 30s linear infinite reverse" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="flex justify-center mb-6">
            <div className="section-badge">About Genius App Hub</div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white">
            Built with<br /><span className="premium-gradient-text">Passion & Purpose</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-5 leading-relaxed max-w-2xl mx-auto">
            We are an independent team crafting free, premium Android experiences for millions of users
            — without ever compromising on quality, speed, or privacy.
          </p>
          <p className="text-gray-600 text-base mb-14 max-w-xl mx-auto">
            Every app in our ecosystem is tested, optimized, and maintained to high standards —
            completely free of cost for every user.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#apps" className="btn-primary rounded-2xl text-base">
              Browse All Apps →
            </a>
            <a href="/#contact" className="btn-ghost rounded-2xl text-base">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
