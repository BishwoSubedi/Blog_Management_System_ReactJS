import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Single.css";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
const Single = () => {
  const [content, setContent] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const fetchBlog = async () => {
    const response = await axios.get(
      `https://65151e3edc3282a6a3cde05e.mockapi.io/blogs/${id}`
    );
    console.log(response);
    if (response.status == 200) {
      setContent(response.data);
      console.log(content);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  //Delete blog
  const deleteBlog = async () => {
    const response = await axios.delete(
      `https://65151e3edc3282a6a3cde05e.mockapi.io/blogs/${id}`
    );
    if (response.status == 200) {
      navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <div className="blog-post">
        <img src={content?.avatar} alt="Blog Post Image" />
        <h1 className="blog-title">{content?.title}</h1>
        <p className="blog-description">{content?.description}</p>
        <button className="btn" onClick={() => deleteBlog()}>
          Delete
        </button>
        <button className="btn" onClick={() => navigate("/editBlog/" +content.id)}>
          Edit
        </button>
      </div>
    </>
  );
};

export default Single;
