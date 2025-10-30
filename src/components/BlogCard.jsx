import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ image, title, desc, link }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {desc}
        </p>
        <Link
          to={link}
          className="text-indigo-600 font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
