import { useState } from "react";
import BlogHeader from "../Components/blog/BlogHeader";
import { getBlogs } from "../util/api";
import { LoadingSpinner } from "../Components/Loader";
import BlogItem from "../Components/blog/BlogItem";
import { useQuery } from "@tanstack/react-query";

function BlogPage() {
  const { 
    data, 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const response = await getBlogs();
      return response.data.blogs;
    }
  });
  
  const blogs = data || [];
  return (
    <div className="dark:bg-darkblack max-w-screen">
      <BlogHeader />
      <div className="wrapper pb-[3rem]">
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error.message || "Failed to load blogs. Please try again later."}</div>
        ) : (
          <div
            data-aos="fade-up"
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {blogs.length > 0 ? (
              blogs.map((blog) => <BlogItem key={blog._id} item={blog} />)
            ) : (
              <div className="col-span-3 text-center text-2xl py-10 dark:text-white">
                No blogs found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
