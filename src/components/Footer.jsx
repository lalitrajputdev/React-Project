import React from "react";

export default function Footer() {
  return (
    <footer id="contact" class="bg-gray-900 text-white py-10 px-6" data-aos="fade-up">
      <div class="max-w-4xl mx-auto text-center">
        <h3 class="text-2xl font-semibold mb-4">Get in Touch</h3>
        <p class="text-sm mb-2">Have a question or want to partner? Drop us a message!</p>

        <p class="text-sm mb-2">📧 <a href="mailto:geniusapphub.dev@gmail.com" class="underline text-indigo-400">geniusapphub.dev@gmail.com</a></p>
        <p class="text-sm mb-6">📞 <a href="tel:+917568129604" class="underline text-indigo-400">+91 7568129604</a></p>

        <a href="mailto:geniusapphub.dev@gmail.com" class="inline-block bg-indigo-600 px-6 py-3 rounded-full">Email Us</a>

        <div class="mt-6 flex justify-center space-x-4">
          <a href="https://facebook.com/VidGegnius" class="hover:text-indigo-400">Facebook</a>
          <a href="https://instagram.com/VidGegnius" class="hover:text-indigo-400">Instagram</a>
          <a href="https://twitter.com/VidGegnius" class="hover:text-indigo-400">Twitter</a>
        </div>
        <p class="text-xs mt-6">&copy; 2025 Genius App Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}