import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GeniusLogo = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4"/>
        <stop offset="50%" stopColor="#7c3aed"/>
        <stop offset="100%" stopColor="#ec4899"/>
      </linearGradient>
    </defs>
    <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" stroke="url(#lg1)" strokeWidth="1.5" fill="rgba(124,58,237,0.1)"/>
    <path d="M23 16H18C16.9 16 16 16.9 16 18V22C16 23.1 16.9 24 18 24H22C23.1 24 24 23.1 24 22V20H21"
      stroke="url(#lg1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="20" cy="2" r="1.5" fill="url(#lg1)" opacity="0.8"/>
    <circle cx="20" cy="38" r="1.5" fill="url(#lg1)" opacity="0.8"/>
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Apps", href: "/#apps" },
    { label: "Features", href: "/#features" },
    { label: "About", href: "/#about" },
  ];

  const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 100,
    transition: "all 0.4s ease",
    background: scrolled ? "rgba(3,7,18,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
    boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.5)" : "none",
  };

  const innerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1.5rem",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    textDecoration: "none",
    flexShrink: 0,
  };

  return (
    <>
      <header style={headerStyle}>
        <div style={innerStyle}>

          {/* Logo */}
          <Link to="/" style={logoStyle}>
            <GeniusLogo />
            <div style={{display:"flex",flexDirection:"column",lineHeight:1}}>
              <span style={{fontFamily:"Outfit,sans-serif",fontWeight:900,fontSize:"1.15rem",color:"white",whiteSpace:"nowrap"}}>
                Genius{" "}
                <span style={{background:"linear-gradient(135deg,#06b6d4,#818cf8,#a855f7)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                  App Hub
                </span>
              </span>
              <span style={{fontSize:"0.55rem",color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.2em",fontWeight:700,marginTop:"2px"}}>
                App Ecosystem
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{display:"flex",alignItems:"center",gap:"0.25rem"}} className="desktop-nav">
            {navLinks.map(item => (
              <Link key={item.label} to={item.href} style={{
                padding:"0.5rem 1rem",
                fontSize:"0.875rem",
                fontWeight:500,
                color:"#9ca3af",
                textDecoration:"none",
                borderRadius:"0.75rem",
                transition:"all 0.2s",
              }}
              onMouseEnter={e=>{e.currentTarget.style.color="white";e.currentTarget.style.background="rgba(255,255,255,0.05)";}}
              onMouseLeave={e=>{e.currentTarget.style.color="#9ca3af";e.currentTarget.style.background="transparent";}}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/privacy-policy" style={{
              padding:"0.5rem 1rem",fontSize:"0.875rem",fontWeight:500,color:"#9ca3af",textDecoration:"none",borderRadius:"0.75rem",transition:"all 0.2s",
            }}
            onMouseEnter={e=>{e.currentTarget.style.color="white";e.currentTarget.style.background="rgba(255,255,255,0.05)";}}
            onMouseLeave={e=>{e.currentTarget.style.color="#9ca3af";e.currentTarget.style.background="transparent";}}
            >Privacy</Link>
          </nav>

          {/* Right Side */}
          <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
            {/* CTA - desktop only */}
            <a href="/#contact" className="btn-primary desktop-cta" style={{
              padding:"0.6rem 1.5rem",
              borderRadius:"0.75rem",
              fontSize:"0.85rem",
              display:"inline-flex",
              alignItems:"center",
              gap:"0.4rem",
              whiteSpace:"nowrap",
            }}>
              Contact Us
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hamburger-btn"
              aria-label="Toggle menu"
              style={{
                width:"42px",height:"42px",
                display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"5px",
                borderRadius:"0.75rem",
                border:"1px solid rgba(255,255,255,0.1)",
                background:"transparent",
                cursor:"pointer",
                padding:0,
              }}
            >
              <span style={{display:"block",width:"20px",height:"2px",background:"white",borderRadius:"2px",transition:"all 0.3s",transform:isOpen?"rotate(45deg) translate(5px,5px)":"none"}}/>
              <span style={{display:"block",width:"20px",height:"2px",background:"white",borderRadius:"2px",transition:"all 0.3s",opacity:isOpen?0:1}}/>
              <span style={{display:"block",width:"20px",height:"2px",background:"white",borderRadius:"2px",transition:"all 0.3s",transform:isOpen?"rotate(-45deg) translate(5px,-5px)":"none"}}/>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} style={{
          position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:200,backdropFilter:"blur(4px)",
        }}/>
      )}

      {/* Mobile Drawer */}
      <div style={{
        position:"fixed",top:0,right:0,height:"100%",width:"17rem",
        zIndex:300,
        background:"rgba(8,8,20,0.97)",
        backdropFilter:"blur(24px)",
        borderLeft:"1px solid rgba(255,255,255,0.06)",
        transform:isOpen?"translateX(0)":"translateX(100%)",
        transition:"transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        display:"flex",flexDirection:"column",
        padding:"5rem 1.5rem 2rem",
        gap:"0.25rem",
      }}>
        <div style={{display:"flex",alignItems:"center",gap:"0.6rem",marginBottom:"2rem"}}>
          <GeniusLogo/>
          <span style={{fontFamily:"Outfit,sans-serif",fontWeight:900,color:"white",fontSize:"1rem"}}>Genius App Hub</span>
        </div>
        {navLinks.map(item => (
          <Link key={item.label} to={item.href} onClick={()=>setIsOpen(false)} style={{
            display:"flex",alignItems:"center",padding:"0.75rem 1rem",
            color:"#d1d5db",borderRadius:"0.75rem",fontWeight:500,textDecoration:"none",transition:"all 0.2s",
          }}
          onMouseEnter={e=>{e.currentTarget.style.color="white";e.currentTarget.style.background="rgba(255,255,255,0.05)";}}
          onMouseLeave={e=>{e.currentTarget.style.color="#d1d5db";e.currentTarget.style.background="transparent";}}
          >{item.label}</Link>
        ))}
        <Link to="/privacy-policy" onClick={()=>setIsOpen(false)} style={{
          display:"flex",alignItems:"center",padding:"0.75rem 1rem",
          color:"#d1d5db",borderRadius:"0.75rem",fontWeight:500,textDecoration:"none",transition:"all 0.2s",
        }}>Privacy</Link>
        <div style={{marginTop:"auto",paddingTop:"1.5rem"}}>
          <a href="/#contact" onClick={()=>setIsOpen(false)} className="btn-primary" style={{
            width:"100%",justifyContent:"center",borderRadius:"0.75rem",fontSize:"0.875rem",padding:"0.75rem 1rem",
          }}>Contact Us →</a>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .hamburger-btn { display: none !important; }
        }
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
