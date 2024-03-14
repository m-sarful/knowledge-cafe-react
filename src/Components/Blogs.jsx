import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('Saree.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-full lg:w-2/3">
        <h3 className="font-bold">Blogs : {blogs.length}</h3>
        {
            blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
        }
        </div>
    );
};

export default Blogs;