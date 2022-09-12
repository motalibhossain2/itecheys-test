import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from "react-router-dom";

const BlogDetails = () => {
    const {title}=useParams()
    let location = useLocation()
    // let { id, title, description } = useParams();

    // const [post, setPost] = useState([])
    // const [singlepost, setSinglepost] = useState([])

    // useEffect(() => {
    //     const ShowPost = async () => {
    //         const response = await fetch("https://api.escuelajs.co/api/v1/products")
    //         const data = await response.json()
    //         return data
    //     }
    //     ShowPost()
    //         .then((data) => {
    //             setPost(data)
    //         })
    // }, [])

    // useEffect(() => {
    //     const blog = post.filter((Item) => Item.title === title)
    //     setSinglepost(blog)
    // }, [post])

    // console.log("our post", singlepost)


    return (
        <>
            <div className='container'>
                <h1>{title}</h1>
                <h1>{location.state.id}</h1>
                <img src={location.state.images} alt="post image" />
                <h1>{location.state.title}</h1>
                <p>{location.state.description}</p>
            </div>
            {/* {singlepost && singlepost.map((Item, index) => {
                return (
                    <div className='container' key={index}>
                        <div className="post-card-img">
                            <img src={Item.images} alt="post image" />
                        </div>
                        <h1>{Item.id}</h1>
                        <h1>{Item.title}</h1>
                        <p>{Item.description}</p>
                    </div>
                )
            })} */}
        </>
    )
}

export default BlogDetails