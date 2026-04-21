import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Information We Collect",
    content:
      "Genius App Hub does not collect any personal information directly from users visiting this website. We may use standard analytics tools (such as Google Analytics) that collect anonymized data like page views and general location to help us improve our services. This data is governed by Google's own privacy policies.",
  },
  {
    title: "Third-Party Services",
    content:
      "Our apps may use third-party services such as Google AdMob for advertising. These services have their own privacy policies that govern the data they collect. We encourage you to review their privacy policies for more details.",
  },
  {
    title: "App Data & Permissions",
    content:
      "Our Android apps may request device permissions (such as storage access) that are strictly necessary for core functionality — for example, saving edited photos. We do not upload or share your personal photos or files with any server.",
  },
  {
    title: "Cookies",
    content:
      "This website may use cookies for basic functionality and analytics. By continuing to use our website, you consent to the use of cookies in accordance with this policy. You may disable cookies in your browser settings at any time.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We reserve the right to update this Privacy Policy at any time. Changes will be reflected on this page with an updated date. We encourage users to periodically review this page for the latest information.",
  },
  {
    title: "Contact Us",
    content: null,
    isContact: true,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#030712] text-gray-200 min-h-screen">
      <Helmet>
        <title>Privacy Policy — Genius App Hub</title>
        <meta name="description" content="Read the Privacy Policy of Genius App Hub. Learn how we handle your data, app permissions, and third-party services." />
        <link rel="canonical" href="https://geniusapphub.com/privacy-policy" />
      </Helmet>

      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-saas-gradient border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[100px] pointer-events-none" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_40%,transparent_100%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="section-badge">Legal</div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Privacy <span className="premium-gradient-text">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            We believe in transparency. Here's exactly how Genius App Hub handles your information.
          </p>
          <p className="text-gray-600 text-sm mt-4">Last updated: April 2025</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 py-5">
        <nav className="flex items-center space-x-2 text-xs text-gray-600">
          <Link to="/" className="hover:text-gray-400 transition-colors">Home</Link>
          <span>›</span>
          <span className="text-gray-400">Privacy Policy</span>
        </nav>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 pb-24">
        <div className="space-y-5">
          {sections.map((sec, i) => (
            <div
              key={sec.title}
              className="premium-card"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-black text-purple-400">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-white mb-3">{sec.title}</h2>
                  {sec.isContact ? (
                    <div>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        For any privacy-related questions or concerns, please reach out to us directly.
                      </p>
                      <a
                        href="mailto:geniusapphub.dev@gmail.com"
                        className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white btn-primary"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <span>geniusapphub.dev@gmail.com</span>
                      </a>
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm leading-relaxed">{sec.content}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back home */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 btn-ghost rounded-2xl text-sm px-8 py-3"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
