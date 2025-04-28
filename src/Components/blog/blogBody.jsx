import { Link } from "react-router-dom";

function BlogBody({ imageUrl, title, id, html }) {
  return (
    <>
      <article
        data-aos="fade-up"
        className={`dark:border dark:border-gray-700 rounded-xl overflow-hidden dark:shadow-md dark:bg-darkblack flex  items-center flex-col `}
      >
        <div className="rounded-xl overflow-hidden px-4 object-cover w-full">
          <Link to={`/blog/${id}`}>
            <img
              src={imageUrl}
              alt={title}
              // className="w-[350px] h-[211px] rounded-lg mt-3"
              className="w-full h-[211px] object-cover rounded-xl  mt-3"
            />
          </Link>
        </div>
        <div className="p-4">
          {/* <p className="text-sm text-gray-500 dark:text-white">{readTime}</p> */}
          <Link to={`/blog/${id}`}>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">
              {title}
            </h2>
          </Link>
          <p className="text-gray-700 mb-3 dark:text-white line-clamp-3">
            {html.replace(/<[^>]*>"?/gm, "").substring(0, 150)}...
          </p>
        </div>
      </article>
    </>
  );
}

export default BlogBody;

// ${
//   passkey ? "" : "w-full"
// }
