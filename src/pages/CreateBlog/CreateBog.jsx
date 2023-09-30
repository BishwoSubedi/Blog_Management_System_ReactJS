import React from "react";
import axios from "axios";
import "./Create.css";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
const CreateBog = () => {
  const navigate = useNavigate();
  // const[title,setTitle]=useState(" ")
  // const[desp,setDesp]=useState(" ")
  // const[img,setImg]=useState(" ")

  const createBlog = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const data = Object.fromEntries(formdata);
    // console.log(formdata)
    // const data={
    //     title:title,
    //     description:desp,
    //     avatar:img
    // }
    const response = await axios.post(
      "https://65151e3edc3282a6a3cde05e.mockapi.io/blogs/",
      data
    );
    //   console.log(response)
    if (response.status == 201) {
      // window.location.href='/'
      navigate("/");
    } else {
      alert("Something Went Wrong");
    }
  };
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", fontSize: "30px", marginTop: "20px" }}>
        Add Blog
      </h1>
      <form onSubmit={createBlog}>
        <h2>Title:</h2>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter title"
          required
        />

        <h2>Description:</h2>
        <textarea
          name="description"
          id="description"
          placeholder="Enter description"
          required
        ></textarea>

        <h2>Image:</h2>
        <input type="text" name="avatar" id="image" required />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default CreateBog;
