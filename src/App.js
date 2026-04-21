import React, { useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = React.lazy(() => import("./pages/Home"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const AppPrivacyPolicy = React.lazy(() => import("./pages/AppPrivacyPolicy"));

// ✅ Lazy load your blog page
const CactusPlant = React.lazy(() => import("./pages/blog/CactusPlant"));
const OfflineApps = React.lazy(() => import("./pages/blog/OfflineApps"));

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />

      {/* Suspense will show a fallback while lazy components load */}
      <Suspense
        fallback={
          <div className="text-center py-20 text-lg font-medium text-gray-600">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy/:appName" element={<AppPrivacyPolicy />} />
          <Route
            path="/blog/cactus-plant-for-home"
            element={<CactusPlant />}
          />
           <Route
            path="/blog/offline-apps"
            element={<OfflineApps />}
          />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
