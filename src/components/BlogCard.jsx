import React from "react";
import { Link } from "react-router-dom";

const BlogCard = React.memo(({ image, title, desc, link }) => {
  return (
    <div className="premium-card group">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="p-8 relative bg-white dark:bg-gray-800">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">
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
});

export default BlogCard;
