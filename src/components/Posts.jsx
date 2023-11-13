import Navbar from "./Navbar";
import { useContext } from "react";
import PostsContext from "../context/PostsContext";

const Posts = () => {
  const blogPosts = JSON.parse(useContext(PostsContext));
  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col items-center justify-center">
        {blogPosts &&
          blogPosts.posts.map((blogPost) => {
            return <div key={blogPost.id}>{blogPost.title}</div>;
          })}
      </div>
    </>
  );
};

export default Posts;
