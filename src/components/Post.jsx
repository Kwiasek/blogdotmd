import { useLoaderData } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";
import Navbar from "./Navbar";
import { useContext, useEffect } from "react";
import PostsContext from "../context/PostsContext";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { marked } from "marked";
import "./Post.scss";

const Post = () => {
  const id = useLoaderData();
  const blogPosts = JSON.parse(useContext(PostsContext));
  const blogPost = blogPosts.posts.find((post) => post.id == id);
  const blogContent = DOMPurify.sanitize(marked.parse(blogPost.content));
  useEffect(() => {
    document.getElementById("content").innerHTML = blogContent;
  }, [id]);
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
              className="max-w-[90vw] flex-wrap md:max-w-prose mt-8 flex flex-col gap-5"
              id="content"
            ></div>
          </article>
        )}
      </div>
    </div>
  );
};

export default Post;
