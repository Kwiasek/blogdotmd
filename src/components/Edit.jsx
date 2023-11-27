import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./Edit.scss";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { editPost } from "../state/postsSlice";

const selectPosts = (state) => state.value.posts;

const Edit = () => {
  const dispatch = useDispatch();
  const postId = useLoaderData();
  const posts = useSelector(selectPosts);
  const post = posts.find((post) => post.id == postId);

  const [title, setTitle] = useState(post.title);
  const [date, setDate] = useState(post.date);
  const [content, setContent] = useState(post.content);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const state = useSelector((state) => state.value);
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(state));
  }, [state]);
  useEffect(() => {
    document.querySelector("#show").innerHTML = DOMPurify.sanitize(
      marked.parse(content)
    );
  }, [content]);

  return (
    <div>
      <Navbar />
      {post && (
        <div className="flex flex-col md:flex-row w-screen p-6 md:px-0">
          <div id="edit" className="flex md:flex-col gap-2 w-full md:w-1/2 p-2">
            <div className="flex flex-col gap-2 w-full">
              <button
                className="px-3 py-2 bg-green-600 text-xl rounded-lg"
                onClick={() => {
                  if (title) {
                    dispatch(editPost({ id: postId, title, date, content }));
                    alert("Saved!");
                  } else {
                    alert("Title can't be blank");
                  }
                }}
              >
                Save
              </button>
              <a
                href="https://www.markdownguide.org/cheat-sheet/#basic-syntax"
                rel="noreferrer"
                target="_blank"
                className="text-xl underline"
              >
                Markdown cheat sheet
              </a>
              <label htmlFor="title" className="text-xl font-bold">
                Title:
              </label>
              <input
                type="text"
                value={title}
                onChange={handleChangeTitle}
                className="py-3 px-2 w-full bg-slate-700"
                id="title"
              ></input>
              <label htmlFor="date" className="text-xl font-bold">
                Date:
              </label>
              <input
                type="date"
                className="py-3 px-2 w-full bg-slate-700"
                id="date"
                value={date}
                onChange={handleChangeDate}
              ></input>
              <label htmlFor="content" className="text-xl font-bold">
                Content:
              </label>
              <textarea
                id="content"
                className="h-full w-full bg-slate-700 p-2"
                rows={20}
                value={content}
                onChange={handleChangeContent}
              ></textarea>
            </div>
          </div>
          <article className="flex flex-col p-2 w-full md:w-1/2">
            <h1 className="text-3xl font-bold">{title}</h1>
            <span className="text-md text-gray-400">{date}</span>
            <div
              className="max-w-[90vw] flex-wrap md:max-w-prose mt-8 flex flex-col gap-3"
              id="show"
            ></div>
          </article>
        </div>
      )}
    </div>
  );
};

export default Edit;
