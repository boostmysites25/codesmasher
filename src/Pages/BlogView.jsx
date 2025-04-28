import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../util/blog";
import BlogBody from "../Components/blog/blogBody";
import RoundedHeader from "../Components/RoundedHeader";
import ViewBlogHeader from "../Components/blog/ViewBlogHeader";
import Faq from "../Components/Faq";

function BlogView() {
  const { id } = useParams();
  const blogId = Number(id);
  const blog = blogPosts.find((post) => post.id === blogId);

  function getRandomPosts(posts, count, excludeId) {
    const filteredPosts = posts.filter((post) => post.id !== excludeId);
    const shuffled = filteredPosts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomPosts = getRandomPosts(blogPosts, 3, blogId);

  if (!blog) {
    return (
      <div className="text-center flex items-center justify-center min-h-[30rem] text-2xl font-medium bg-white text-black dark:text-white dark:bg-darkblack">
        Blog not found
      </div>
    );
  }

  return (
    <div className="relative bg-white dark:bg-darkblack overflow-x-hidden max-w-screen">
      <div className="relative max-w-5xl mx-auto px-4 space-y-10 pt-[7rem] overflow-hidden ">
        <ViewBlogHeader
          image={blog.imageUrl}
          title={blog.title}
          // readTime={blog.readTime}
          // date={blog.date}
        />
        <div
          className="text-black dark:text-white/90"
          dangerouslySetInnerHTML={{ __html: blog.html }}
        />
      </div>
      <div className="wrapper paddingtop">
        <div className="flex justify-center items-center flex-col">
          <RoundedHeader title={"Recent Posts"} />
          <h1 data-aos="fade-up" className="main-title my-3">
            Related Posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 dark:bg-darkblack">
            {randomPosts.map((post, index) => (
              <BlogBody key={index} {...post} passkey={true} />
            ))}
          </div>
        </div>
        <Faq />
      </div>
    </div>
  );
}

export default BlogView;
