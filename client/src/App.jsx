import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import YourBlog from "./pages/YourBlog";
import CreateBlog from "./pages/CreateBlog";
import UpdateBlog from "./pages/UpdateBlog";
import Comments from "./pages/Comments";
import BlogView from "./pages/BlogView";
import Footer from "./components/Footer";
import SearchList from "./pages/SearchList";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "blogs", element: <Blogs /> },
      { path: "about", element: <About /> },
      { path: "search", element: <SearchList /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "blogs/:blogId", element: <BlogView /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { path: "write-blog", element: <CreateBlog /> },
          { path: "write-blog/:blogId", element: <UpdateBlog /> },

          { path: "your-blog", element: <YourBlog /> },
          { path: "comments", element: <Comments /> },
          { path: "profile", element: <Profile /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
