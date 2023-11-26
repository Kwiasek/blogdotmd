import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const selectPosts = (state) => state.posts.value.posts;

const Posts = () => {
  const posts = useSelector(selectPosts);
  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col items-center justify-center pt-20">
        <p className="max-w-prose text-center">
          <span className="font-bold">DISCLAIMER</span>: All these posts comes
          from{" "}
          <a
            href="https://machinelearningmastery.com/"
            className="cursor-pointer text-purple-500"
            target="_blank"
            rel="noreferrer"
          >
            https://machinelearningmastery.com/
          </a>
          . I only use them as example to showcase my programming skills, and I
          do not have any benefits from pasting in them here.
        </p>
        {posts &&
          posts.map((blogPost) => {
            return (
              <Link
                key={blogPost.id}
                to={`/posts/${blogPost.id}`}
                className="py-1 px-2 border-2 border-gray-700 mt-2 cursor-pointer hover:border-gray-600 text-xl"
              >
                <span className="border-2 border-gray-700 px-1 mr-1">
                  #{blogPost.id}
                </span>
                {blogPost.title}
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Posts;
