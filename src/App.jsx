import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import AllBlog from "./pages/All_Blogs/AllBlog";
import Single from "./pages/SingleBlog/Single";
import CreateBog from "./pages/CreateBlog/CreateBog";
import EditBlog from "./pages/EditBlog/EditBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllBlog />} />
          <Route path="/createBlog" element={<CreateBog />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/editBlog/:id" element={<EditBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
