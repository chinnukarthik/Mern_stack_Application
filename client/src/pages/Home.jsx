import RecentBlog from "@/components/RecentBlog";
import Hero from "../components/Hero";

import React from "react";
import PopularAuthors from "../components/PopularAuthors";

function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <RecentBlog />
      <PopularAuthors />
    </div>
  );
}

export default Home;
