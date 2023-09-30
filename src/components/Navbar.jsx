import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
    <div className="container">
        <h1>Blog Management System</h1>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/createBlog">Create Blog</a></li>
            <li><a href="/single"></a></li>
         
        </ul>
    </div>
</nav>
  )
}

export default Navbar
