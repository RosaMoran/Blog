// import { useState, useEffect } from "react";
import BlogList from "./blog-list";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div> Loading ... </div>}
           {blogs && <BlogList blogs = {blogs} title= 'all the blogs!'></BlogList>}
        </div>
     );
}
 
export default Home;