import React,{useState,useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";
// import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams()
    const history = useHistory()
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)
    // const {data:blog,error,isPending} = useFetch("http://localhost:8000/blogs/" + id);

    useEffect(() => {
        setTimeout(() => { 
            fetch("http://localhost:8000/blogs/" + id)
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

    const handleClick = () =>{
        fetch("http://localhost:8000/blogs/" + blogs.id,{
            method:"DELETE",
        }).then(()=>{
            history.push("/")

        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading....</div>}
            {error &&  <div>{error}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p className="author">wriiten by <span>{blogs.author}</span></p>
                    <div>{blogs.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}

            
        </div>
    )
}

export default BlogDetails

