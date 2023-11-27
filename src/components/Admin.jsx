import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { addNewPost, removePost } from "../state/postsSlice";
import { Link } from "react-router-dom";

const selectPosts = (state) => state.value.posts;

const Admin = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const reversed = [...posts].reverse();

  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col items-center justify-center pt-20">
        <button
          className="px-3 bg-green-600 text-black"
          onClick={() => dispatch(addNewPost())}
        >
          +
        </button>
        {reversed &&
          reversed.map((post) => {
            return (
              <div key={post.id} className="py-1 underline cursor-pointer">
                <Link to={`/edit/${post.id}`}>{post.title}</Link>
                <button
                  className="mx-2 px-3 bg-red-700 text-black"
                  onClick={() => dispatch(removePost(post.id))}
                >
                  -
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Admin;
