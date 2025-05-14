import React from "react";
import { format } from "date-fns";

function ViewBlogHeader({ blog }) {
  // Format the publish date
  const formattedDate = blog.publishDate
    ? format(new Date(blog.publishDate), "MMMM dd, yyyy")
    : format(new Date(blog.createdAt), "MMMM dd, yyyy");

  return (
    <header className="z-10" data-aos="fade-up">
      <h1 className="text-3xl dark:text-white font-bold mb-2 py-4">
        {blog.title}
      </h1>

      <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-300 gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="font-medium">Author:</span>
          <span>{blog.author?.name || blog.authorId?.name || "Admin"}</span>
        </div>
        <span className="hidden md:inline">|</span>
        <div className="flex items-center gap-2">
          <span className="font-medium">Published:</span>
          <span>{formattedDate}</span>
        </div>
        <span className="hidden md:inline">|</span>
        <div className="flex items-center gap-2">
          <span className="font-medium">Category:</span>
          <span>{blog.categoryId?.name || "Uncategorized"}</span>
        </div>
      </div>

      {blog.excerpt && (
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg italic">
          {blog.excerpt}
        </p>
      )}

      <div className="relative flex justify-center items-center">
        <img
          src={blog.imageUrl}
          alt={blog.imageAlt || blog.title}
          className="w-full max-h-[480px] md:h-[480px] rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default ViewBlogHeader;
