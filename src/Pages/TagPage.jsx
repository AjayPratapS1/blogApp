import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div className="w-11/12 max-w-2xl mx-auto flex flex-col mt-28">
        <div className="flex gap-2 items-baseline">
          <button
            className="border-2 py-1 mb-4 px-4 rounded-lg w-fit"
            onClick={() => navigation(-1)}
          >
            Back
          </button>
          <h2 className="font-bold text-xl">
            Blogs Tagged{" "}
            <span className="text-[#1D4ED8] underline font-bold text-xl">
              #{tag.replace("-", " ")}
            </span>
          </h2>
        </div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default TagPage;
