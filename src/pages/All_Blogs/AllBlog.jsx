import React, { useEffect, useState } from "react";
import axios from "axios"
import Navbar from "../../components/Navbar";
import './AllBlog.css'
import { useNavigate } from "react-router-dom";

const AllBlog = () => {
    const navigate =useNavigate()
    const [blogs,setBlogs]=useState([])
    const fetchBlogs=async()=>{
        const response=  await axios.get("https://65151e3edc3282a6a3cde05e.mockapi.io/blogs")
        // console.log(response)
        if (response.status==200){
            setBlogs(response.data)
            console.log(blogs)
        }
    }
    useEffect(()=>{
        // console.log("Hello")
        fetchBlogs();
    },[])
  return (
    <div>
      <Navbar />
    <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
   {
    blogs.map((blog)=>{
        return(
            <div className="card" key={blog.id}>
            <img src={blog.avatar} alt="Avatar" width='100%'/>
            <div className="container">
              <h4>
                <b>{blog.title}</b>
              </h4>
              <p style={{margin:'15px', padding:"2px"}}>{blog.description}</p>
              <p style={{marginTop:'280px',marginRight:'280px'}}>{blog.createdAt}</p>
            </div>
              <button onClick={()=>navigate('/single/'+blog.id)} style={{textAlign:'center',margin:'0 auto',display:'grid',placeItems:'center'}}>See More</button>
          </div> 
        )
    })
   }
     
</div>

    </div>
  );
};

export default AllBlog;
