import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">Privacy Policy</h2>
        </div>
      </section>

      {/* Privacy Content */}
      <main className="max-w-4xl mx-auto p-8">
        <p className="mb-4 text-sm">Last updated: April 4, 2025</p>
        <p className="mb-4 text-sm">
          Genius App Hub does not collect any personal information directly. However,
          we may use trusted third-party services like Google Analytics and advertising
          networks that may collect data according to their own policies.
        </p>
        <p className="mb-4 text-sm">
          By using our services, you agree to this privacy policy. We may update this
          policy from time to time. For updates, please check this page regularly.
        </p>
        <p className="mb-4 text-sm">
          If you have any questions about our privacy policy, please reach out to us:
        </p>
        <p className="mb-4 text-sm">
          📧 <a href="mailto:geniusapphub.dev@gmail.com" className="text-indigo-500 underline">geniusapphub.dev@gmail.com</a><br />
          📞 +91 75681 29604
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
