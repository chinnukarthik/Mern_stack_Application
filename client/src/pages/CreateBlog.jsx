const createBlogHandler = async () => {
  try {
    setLoading(true);
    const res = await axios.post(
      `https://coding-samurai-internship-task-q4e7.onrender.com/api/v1/blog`,
      { title, category },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );

    if (res.data.success) {
      if (!blog) {
        dispatch(setBlog([res.data.blog]));
        navigate(`/dashboard/write-blog/${res.data.blog._id}`);
        toast.success(res.data.message);
      } else {
        dispatch(setBlog([...blog, res.data.blog]));
        navigate(`/dashboard/write-blog/${res.data.blog._id}`);
        toast.success(res.data.message);
      }
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    console.error("Blog creation error:", error);
    toast.error("Failed to create blog");
  } finally {
    setLoading(false);
  }
};
