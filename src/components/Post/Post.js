import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


import TextTruncate from 'react-text-truncate';

const Post = () => {
    const [post, setPost] = useState([])

    const ShowPost = async () => {
        // const response = await fetch("https://public-api.wordpress.com/rest/v1/sites/YourSite.wordpress.com/posts")
        // const response = await fetch("https://www.googleapis.com/blogger/v3/blogs/2399953?key=AIzaSyCh-fAzjW1xKKgNOospCuTIx1NCqYTYQ6o")
        const response = await fetch("https://api.escuelajs.co/api/v1/products")
        const data = await response.json()
        return data
    }
    useEffect(() => {
        ShowPost()
            .then((data) => {
                setPost(data)
            })
    }, [])
    console.log("my post", post)
    return (
        <>
            <div className="row mb-30">
                {post.map((Item, index) => {
                    const {id, title, description, images}=Item;
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                            <div className='post-card pb-0'>
                                <div className="post-card-img">
                                    <img src={Item.images} alt="post image" />
                                </div>
                                <div className="post-card-body">
                                    <div className="user-title d-flex justify-content-between pt-1 pb-1 mt-1">
                                        <div className='user d-flex mb-0 '>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Profile Image" />
                                            <div className='d-flex mt-1'>
                                                Motalib Hossain
                                            </div>
                                        </div>
                                        <p className='time mb-0 mt-1'>1 week ago</p>
                                    </div>
                                    <div className="post">
                                        <h5 className='post-title mt-2'>
                                            {/* <a href='#' >{Item.title}.slice(0,80)</a> */}
                                            <Link to={Item.title} state={{id, title, description, images}}>
                                                <TextTruncate
                                                    line={1}
                                                    element="span"
                                                    truncateText="........"
                                                    text={Item.title}
                                                    // textTruncateChild={<a href="#">Read on</a>}
                                                />
                                            </Link>
                                        </h5>
                                        {/* <h5 className='post-title mt-2'>ইন্টার্নশিপ বা ট্রেনিং বদলে দিবে বেকারদের জীবন</h5> */}
                                        <p className='post-body'>
                                            {/* {truncateString(Item.description, 60)}...<a href='/'>Read on</a> */}
                                            <TextTruncate
                                                line={2}
                                                element="span"
                                                truncateText="…"
                                                text={Item.description}
                                                textTruncateChild={<a href="#">Read on</a>}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Post