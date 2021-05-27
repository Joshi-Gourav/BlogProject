import React, { useState, useEffect } from 'react'
import BlogList from '../components/BlogList'
// import useFetch from '../components/useFetch'

const Home = () => {
    //    const {data:blogs,isPending,error} = useFetch("http://localhost:8000/blogs")
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)


    useEffect(() => {
        setTimeout(() => { 
            fetch("http://localhost:8000/blogs")
                .then((res) => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error("Could not fetch the data for that request")
                        // This block works when the request is reaching the server but server is sending an error back
                        // maybe the end point which we are trying to reach doesnt exist
                        // So if error response is sent by server will be thrown which will be catched by catch block and dispayed
                        // Ille request server ga reach aagirtada but server error send maadtad andre response object na send maadirtad
                        // but ad response walag data irudiila matta ad status byare irtad or false irtad  
                        // End point nu change aagirtad i mean url tapp idru hinta error send maadtad
                    }
                    return res.json()
                })
                .then((blog) => {
                    console.log(blog)
                    setBlogs(blog)
                    setIsPending(false)
                    setError(null)
                })
                
                // This block catches the connection error
                .catch((err) => {
                    setIsPending(false)
                    setError(err.message)
                    {/* To handle errors when we try to make the fetch */}
                    {/* That could be an error sent back from the server or it could be and 
                    connection error where we cant even connect to the server  */}
                    // Ille server ga request reach aagude illa or connection cholo irudilla

                })
        }, 1000)

    }, [])




    return (
        <div className="home">
            {/* To handle errors when we try to make the fetch */}
            {/* That could be an error sent back from the server or it could be and 
            connection error where we cant even connect to the server  */}
            {error && <div >{error}</div>}
            {isPending && <div className="loader">Loading....</div>}
            {blogs && <BlogList blogData={blogs} title="All Blogs!!!!!!" /*handleDelete={handleDelete}*/ />}
        </div>
    )
}

export default Home



    // This method deletes from the local
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs)
    // }
