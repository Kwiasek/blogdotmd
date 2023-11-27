import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { addNewPost, removePost } from "../state/postsSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const selectPosts = (state) => state.value.posts;

const Admin = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const reversed = [...posts].reverse();
  const state = useSelector((state) => state.value);
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(state));
  }, [state]);
  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col gap-5 items-center justify-center pt-20">
        <div>
          <button
            className="px-3 py-2 bg-green-600 text-white rounded-lg"
            onClick={() => dispatch(addNewPost())}
          >
            Add new post
          </button>
        </div>
        {reversed &&
          reversed.map((post) => {
            return (
              <div key={post.id} className="py-1 underline cursor-pointer">
                <Link to={`/edit/${post.id}`}>{post.title}</Link>
                <button
                  className="mx-2 px-3 py-2 bg-red-700 text-black"
                  onClick={() => {
                    dispatch(removePost(post.id));
                  }}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Admin;
