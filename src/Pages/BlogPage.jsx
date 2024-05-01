import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";


const BlogPage = () => {
  const newBaseUrl = process.env.REACT_APP_NEW_BASE_URL
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    // console.log("URL is: ");
    // console.log(url);
    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error aagya in blog id wali call");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div className="w-11/12 max-w-2xl mx-auto flex flex-col gap-y-1 my-4 mt-28">
        <div>
          <button
            className="border-2 py-1 mb-4 px-4 rounded-lg"
            onClick={() => navigation(-1)}
          >
            Back
          </button>
        </div>
        <div>
          {loading ? (
            <div className="min-h-[80vh] w-full flex justify-center items-center">
              <p className="text-center font-bold text-3xl">Loading</p>
            </div>
          ) : blog ? (
            <div>
              <BlogDetails post={blog} />
              <h2 className="font-bold text-3xl my-8"> Related Blogs </h2>
              {relatedblogs.map((post) => (
                <div key={post.id}>
                  <BlogDetails post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="min-h-[80vh] w-full flex justify-center items-center">
              <p className="text-center font-bold text-3xl">No Blogs Found !</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
