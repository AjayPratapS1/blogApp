import React from "react";
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="w-11/12 max-w-2xl mx-auto flex flex-col mt-24">
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
