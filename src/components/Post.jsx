import { BsArrow90DegLeft } from "react-icons/bs";
import Navbar from "./Navbar";
import { Link, useLoaderData } from "react-router-dom";
import "./Post.scss";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { useEffect } from "react";

const selectPost = (state) => state.value.posts;

const Post = () => {
  const postId = useLoaderData();
  const blogPosts = useSelector(selectPost);
  const blogPost = blogPosts.find((post) => postId == post.id);

  useEffect(() => {
    document.querySelector("#content").innerHTML = DOMPurify.sanitize(
      marked.parse(blogPost.content)
    );
  }, [postId, blogPost.content]);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center p-8">
        <div className="w-full">
          <Link to="/posts" className="text-gray-700 text-xl">
            <BsArrow90DegLeft className="inline" /> Take me back!
          </Link>
        </div>
        {blogPost && (
          <article className="flex flex-col">
            <h1 className="text-3xl font-bold">{blogPost.title}</h1>
            <span className="text-md text-gray-400">{blogPost.date}</span>
            <div
              className="max-w-[90vw] flex-wrap md:max-w-prose mt-8 flex flex-col gap-3"
              id="content"
            ></div>
          </article>
        )}
      </div>
    </div>
  );
};

export default Post;
