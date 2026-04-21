import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AppPrivacyPolicy = () => {
  const { appName } = useParams();

  const formatTitle = (slug) =>
    slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  const formattedAppName = formatTitle(appName || "app");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const defaultSections = [
    {
      num: "01",
      title: "Introduction",
      color: "purple",
      content: `Welcome to the Privacy Policy for ${formattedAppName}, developed by Genius App Hub. This policy explains how our app handles your information. By installing and using this app, you agree to the practices described here.`,
    },
    {
      num: "02",
      title: "Data We Collect",
      color: "cyan",
      content: `${formattedAppName} does not collect any personal information such as your name, email, or phone number. The app processes all data locally on your device. We do not upload your photos, videos, or personal files to any server.`,
    },
    {
      num: "03",
      title: "Device Permissions",
      color: "indigo",
      content: `The app may request certain device permissions (such as storage access) that are essential for its core features to work — for example, saving your edited photos to your gallery. These permissions are used solely for the app's functionality and nothing else.`,
    },
    {
      num: "04",
      title: "Advertising",
      color: "pink",
      content: `${formattedAppName} may display advertisements powered by Google AdMob. AdMob may collect anonymized data to serve relevant ads. This data collection is governed by Google's own Privacy Policy, which you can review at policies.google.com.`,
    },
    {
      num: "05",
      title: "Policy Updates",
      color: "amber",
      content: `We may update this Privacy Policy from time to time to reflect changes in our app or legal requirements. Updates will be posted on this page. We encourage you to review this policy periodically.`,
    },
  ];

  const moneyMateSections = [
    {
      num: "01",
      title: "Introduction",
      color: "purple",
      content: <>Welcome to the MoneyMate Privacy Policy page. Our app is developed by <strong>Genius App Hub</strong>. We take your privacy very seriously and are committed to protecting your personal data.</>,
    },
    {
      num: "02",
      title: "Sensitive Data Disclosure (SMS)",
      color: "cyan",
      content: (
        <>
          MoneyMate requires <strong>READ_SMS</strong> and <strong>RECEIVE_SMS</strong> permissions to provide financial tracking.
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li><strong>Financial Keywords Only:</strong> We process transactional SMS from Banks and Financial providers.</li>
            <li><strong>Local Processing:</strong> All data is parsed only locally on your mobile device. We do not upload your messages.</li>
            <li><strong>Strict Privacy:</strong> Personal contact names, personal texts, and OTPs are strictly ignored.</li>
          </ul>
        </>
      ),
    },
    {
      num: "03",
      title: "Local Data Security (Encryption)",
      color: "indigo",
      content: <>Your local data is secured using <strong>SQLCipher encryption</strong>. This ensures your financial records are safe on your device storage. We do not sell or share your data with third parties.</>,
    },
    {
      num: "04",
      title: "Third-Party Services",
      color: "pink",
      content: (
        <>
          We integrate specific, industry-standard third-party services to ensure app stability, provide free access through monetization, and deliver seamless updates. Below is the detailed breakdown:
          <ul className="mt-3 list-disc list-inside space-y-2">
            <li>
              <strong>Google AdMob:</strong> We use AdMob to serve advertisements, which allows us to keep MoneyMate 100% free. AdMob may collect and process device identifiers (like your Advertising ID) to serve non-intrusive, personalized ads. (<a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-pink-400 hover:text-pink-300 underline underline-offset-2">AdMob Privacy Policy</a>)
            </li>
            <li>
              <strong>Firebase Analytics:</strong> This service helps us understand app usage by tracking anonymous metrics, such as screen views and session duration. This data is strictly non-identifiable and helps us optimize user flows and performance.
            </li>
            <li>
              <strong>Firebase Crashlytics:</strong> If the app experiences an unexpected crash, Crashlytics sends an automated technical log (including OS version, device model, and stack traces). These logs contain <strong>zero personal or financial data</strong> and are used exclusively to fix bugs rapidly. (<a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer" className="text-pink-400 hover:text-pink-300 underline underline-offset-2">Firebase Privacy Policy</a>)
            </li>
            <li>
              <strong>Firebase Remote Config:</strong> This is a lightweight service used securely in the background to check for mandatory version updates. It allows us to notify you of critical security patches or app enhancements seamlessly.
            </li>
          </ul>
        </>
      ),
    },
    {
      num: "05",
      title: "Children's Privacy",
      color: "amber",
      content: <>MoneyMate does not knowingly collect data from children under 13. If you have concerns, or need support, please contact us at <a href="mailto:geniusapphub.dev@gmail.com" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">geniusapphub.dev@gmail.com</a>.</>,
    },
  ];

  const sections = appName === "money-mate" ? moneyMateSections : defaultSections;

  const colorMap = {
    purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400", via: "via-purple-500/30" },
    cyan:   { bg: "bg-cyan-500/10",   border: "border-cyan-500/20",   text: "text-cyan-400",   via: "via-cyan-500/30"   },
    indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-400", via: "via-indigo-500/30" },
    pink:   { bg: "bg-pink-500/10",   border: "border-pink-500/20",   text: "text-pink-400",   via: "via-pink-500/30"   },
    amber:  { bg: "bg-amber-500/10",  border: "border-amber-500/20",  text: "text-amber-400",  via: "via-amber-500/30"  },
  };

  return (
    <div className="bg-[#030712] text-gray-200 min-h-screen">
      <Helmet>
        <title>{formattedAppName} — Privacy Policy | Genius App Hub</title>
        <meta name="description" content={`Read the privacy policy for ${formattedAppName} by Genius App Hub. Learn about data handling, permissions, and advertising.`} />
        <link rel="canonical" href={`https://geniusapphub.com/privacy/${appName}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-saas-gradient border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-600/12 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_40%,transparent_100%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="section-badge">App Privacy Policy</div>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-3">
            <span className="premium-gradient-text">{formattedAppName}</span>
          </h1>
          <p className="text-gray-400 text-lg">Privacy Policy & Data Handling</p>
          <p className="text-gray-600 text-sm mt-3">Last updated: April 2025 · Genius App Hub</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 py-5">
        <nav className="flex items-center space-x-2 text-xs text-gray-600">
          <Link to="/" className="hover:text-gray-400 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy</Link>
          <span>›</span>
          <span className="text-gray-400">{formattedAppName}</span>
        </nav>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-5">
        {sections.map((sec) => {
          const c = colorMap[sec.color];
          return (
            <div key={sec.num} className="premium-card" data-aos="fade-up">
              <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent ${c.via} to-transparent`} />
              <div className="flex items-start space-x-4">
                <div className={`w-8 h-8 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <span className={`text-xs font-black ${c.text}`}>{sec.num}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-white mb-3">{sec.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{sec.content}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Contact card */}
        <div className="premium-card" data-aos="fade-up">
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-black text-green-400">06</span>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white mb-3">Contact Us</h2>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                For any questions or concerns about this privacy policy or about {formattedAppName}, feel free to contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:geniusapphub.dev@gmail.com"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white btn-primary"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>Email Us</span>
                </a>
                <Link
                  to="/privacy-policy"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold btn-ghost"
                >
                  <span>Global Privacy Policy</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Back home */}
        <div className="mt-8 text-center">
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

export default AppPrivacyPolicy;
