/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import BlogCard from "../components/BlogCard";

export default function Home() {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const showToastMsg = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleDownload = (appName, apkPath) => {
    // Step 1: Start Toast
    showToastMsg(`📥 Jai Hind! ${appName} APK is downloading...`);

    // Step 2: Trigger APK download
    const link = document.createElement("a");
    link.href = apkPath;
    link.download = `${appName}.apk`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Step 3: Success Toast (2s delay for realistic effect)
    setTimeout(() => {
      showToastMsg(`✅ ${appName} APK downloaded successfully!`);
    }, 2000);
  };

  return (
    <div>
      <section class="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-20 text-center" data-aos="fade-up">
        <div class="max-w-3xl mx-auto px-4">
          <h2 class="text-4xl sm:text-5xl font-bold mb-4">Explore Top Android Apps</h2>
          <p class="text-lg sm:text-xl mb-6">Find your next favorite app. Free, fast, and safe downloads.</p>
          <a href="#apps" class="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">View Apps</a>
        </div>
      </section>

      <section id="apps" class="py-16 px-6 max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Featured Apps</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-1" data-aos="zoom-in">
            <img
              src="./images/15Aguestapplogo.jpg"
              alt="15 August Photo Editor"
              className="rounded-t-2xl"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">15 August Photo Editor</h3>
              <p class="text-sm mb-4">Create stunning Independence Day themed photos with flags, frames, and effects.</p>
              <button
                onClick={() => handleDownload("15 August Photo Editor", "/images/app-release.apk")}
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm"
              >
                Download APK
              </button>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-1" data-aos="zoom-in">
            <img
              src="./images/picgenius1.png"
              alt="Pic Genius App"
              className="rounded-t-2xl"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Pic Genius App</h3>
              <p class="text-sm mb-4">Pic Genius App offers beautiful 4K photos and inspiring quotes you can download and share easily.</p>
              <button
                onClick={() => handleDownload("Pic Genius Appr", "/images/picgenius.apk")}
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm"
              >
                Download APK
              </button>
            </div>
          </div>


          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-1" data-aos="zoom-in">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3184/3184758.png"
              alt="App Demo"
              className="rounded-t-2xl"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Weather Genie</h3>
              <p class="text-sm mb-4">Accurate weather updates and forecasts in your pocket.</p>
              <a href="#" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">Download APK</a>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-1" data-aos="zoom-in">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1583/1583793.png"
              alt="App Demo 2"
              className="rounded-t-2xl"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Focus Timer</h3>
              <p class="text-sm mb-4">Boost productivity with Pomodoro technique sessions.</p>
              <a href="#" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">Download APK</a>
            </div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-1" data-aos="zoom-in">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3489/3489877.png"
              alt="App Demo 2"
              className="rounded-t-2xl"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Note Rocket</h3>
              <p class="text-sm mb-4">Lightweight and fast note-taking app for everyday use.</p>
              <a href="#" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">Download APK</a>
            </div>
          </div>
        </div>
      </section>

<section id="blog" className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        🌿 Latest Blogs
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard
          image="/images/cactus-home-decor.webp"
          title="Cactus Plant for Home – Nature ka Stylish Touch"
          desc="Indoor cactus plants are trending! Learn how to care for them and how they add positive vibes to your home decor."
          link="/blog/cactus-plant-for-home"
        />

         <BlogCard
          image="/images/offlineappimg.webp"
          title="📱 Best Offline Apps 2025 – Bina Internet ke Must-Have Apps"
          desc="Discover top offline apps 2025 jo bina internet ke bhi kaam karein. Perfect for travelers!"
          link="/blog/offline-apps"
        />

        {/* Add more blogs below */}
      </div>
    </section>

      {/* <section id="blog" class="py-16 bg-gray-100 dark:bg-gray-800 px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Latest From the Blog</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow hover:shadow-lg transition" data-aos="fade-right">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                alt="Demo Blog 1"
              />
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">Why Offline Apps Still Matter</h3>
                <p class="text-sm mb-4">Offline-first mobile experiences are more relevant than ever. Learn why.</p>
                <a href="#" class="text-indigo-600 font-semibold">Read More →</a>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow hover:shadow-lg transition" data-aos="fade-left">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1047/1047719.png"
                alt="Demo Blog 2"
              />
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">Best Android Tools in 2025</h3>
                <p class="text-sm mb-4">Explore must-have tools for Android developers and power users.</p>
                <a href="#" class="text-indigo-600 font-semibold">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="about" class="py-16 px-6 max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-6">About Genius App Hub</h2>
        <p class="text-sm leading-relaxed">
          Genius App Hub is your go-to platform for discovering quality Android apps and insightful tech content. Our goal is to provide users with secure, fast, and useful apps along with informative articles to help you get the most out of your devices.
        </p>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(90deg, #6366F1, #3B82F6)",
            color: "#fff",
            padding: "14px 24px",
            borderRadius: "9999px",
            fontWeight: "500",
            fontSize: "14px",
            letterSpacing: "0.5px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            animation: "fadeInOut 3s ease-in-out",
            zIndex: 1000,
          }}
        >
          {toastMessage}
        </div>
      )}

    </div>
  );
}
