import React from "react";
import { FaArrowRight, FaCalendarAlt, FaUser, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const BlogItem = ({ item, passkey }) => {
  // Format the publish date
  const formattedDate = item.publishDate
    ? format(new Date(item.publishDate), "MMM dd, yyyy")
    : format(new Date(item.createdAt), "MMM dd, yyyy");

  return (
    <div className="flex flex-col h-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
      <Link to={`/blog/${item.slug}`} className="block overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.imageAlt || item.title}
          className="w-full aspect-video object-cover group-hover:scale-105 group-hover:brightness-90 duration-300 transition-all"
        />
      </Link>

      <div className="flex-1 flex flex-col p-5">
        {/* Category and Date */}
        <div className="flex justify-between items-center mb-3">
          {item.categoryId && (
            <span className="text-xs font-medium bg-primary/10 text-primary py-1 px-3 rounded-full">
              {item.categoryId.name}
            </span>
          )}
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <FaCalendarAlt className="mr-1" size={12} />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/blog/${item.slug}`}>
          <h3 className="text-lg font-semibold dark:text-white line-clamp-2 group-hover:text-primary duration-200 transition-all mb-2">
            {item.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="line-clamp-3 text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {item.excerpt}
        </p>

        {/* Read More Link */}
        <Link
          to={`/blog/${item.slug}`}
          className="flex items-center gap-2 text-primary font-medium mt-4 w-fit hover:underline"
        >
          Read More <FaArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
