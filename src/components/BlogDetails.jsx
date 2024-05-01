import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="mb-10 flex flex-col gap-1 ">
      <NavLink to={`/blog/${post.id}`}>
        <span className="text-lg font-bold hover:underline">{post.title}</span>
      </NavLink>
      <p className="text-sm">
        By
        <span className="mx-1 italic">{post.author}</span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline font-semibold">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-sm"> Posted On {post.date} </p>
      <p className="mt-3 mb-1 font-normal"> {post.content}</p>
      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="underline mr-2 text-[#1D4ED8] font-semibold text-xs">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
