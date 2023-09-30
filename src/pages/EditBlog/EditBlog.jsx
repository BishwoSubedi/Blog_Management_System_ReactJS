import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditBlog = () => {
  const {id} = useParams();
  // console.log(id);
   const navigate=useNavigate()

  const [content, setContent] = useState();



  const fetchBlog = async () => {
  const response = await axios.get(`https://65151e3edc3282a6a3cde05e.mockapi.io/blogs/${id}` );
    console.log(response);
    if (response.status == 200) {
      setContent(response.data);
      //  console.log(content);
    } else {
      ("Soemthing went wrong");
    }
  };

  const editblog= async(e)=>{
    e.preventDefault();
    const response=await axios.put("https://65151e3edc3282a6a3cde05e.mockapi.io/blogs/"+ id,content)
   //  console.log(response);
    if(response.status==200){
     navigate("/single/"+id)
    }
    else{
     alert("Someething went wrong");
    }
  }
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", fontSize: "30px", marginTop: "20px" }}>
        Edit Blog
      </h1>
      <form onSubmit={editblog} >
        <h2>Title:</h2>
        <input
          type="text"
          name="title"
          id="title"
          value={content?.title}
          onChange={(e) => setContent({ ...content,title:e.target.value })}
          required
        />

        <h2>Description:</h2>
        <textarea
         name="description"
          id="description"
          value={content?.description}
          onChange={(e) =>
            setContent({ ...content, description:e.target.value })
          }
          required
          />

        <h2>Image:</h2>
        <input
          type="text"
          name="avatar"
          id="image"
          value={content?.avatar}
          onChange={(e) => setContent({ ...content,avatar:e.target.value })}
          required
        />

        <input type="submit" value="Edit" />
      </form>
    </>
  );
};

export default EditBlog;
