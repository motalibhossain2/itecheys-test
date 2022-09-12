import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


import TextTruncate from 'react-text-truncate';
const URL = "https://rest-api-without-db.herokuapp.com/users/";

const User = () => {
    const [user, setUser] = useState([])

    const fetchData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        return data
    }
    // fetch user from api 
    const getUser = () => {
        fetchData(URL)
            .then((data) => {
                setUser(data.users)
            })
    }
    // Delete user from api  id pass are not possible in asyns function
    // const handleDeleteUser = (id) => {
    //     const fetchData = async () => {
    //         const response = await fetch(URL+ `${id}`, { method: "DELETE"})
    //         const data = await response.json()
    //         return data
    //     }
    //     fetchData()
    //         .then((res) => {
    //         console.log(res)
    //         if (!res.ok) {
    //             throw Error("could not delete");
    //         }
    //         getUser()
    //     })
    // .catch((err) => {
    //     console.log(err);
    // });
    // }
const handleDeleteUser = (id) => {
    fetch(URL + `/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not delete");
        }
        getUser();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };



useEffect(() => {
    getUser()
}, [])
console.log("Set user", user)


return (
    <div className='row'>
        {user.map((Item, index) => {
            return (
                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                    <div className='post-card pb-0'>
                        {/* <div className="post-card-img">
                                <img src={Item.images} alt="post image" />
                            </div> */}
                        <div className="post-card-body">
                            <div className="user-title d-flex justify-content-between pt-1 pb-1 mt-1">
                                <div className='user d-flex mb-0 '>
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Profile Image" />
                                    <div className='d-flex mt-1'>
                                        Motalib Hossain
                                        {/* {Item.id} */}
                                    </div>
                                </div>
                                <p className='time mb-0 mt-1'>
                                    <button onClick={() => { handleDeleteUser(Item.id) }}>Delete</button>
                                </p>
                            </div>
                            <div className="post">
                                <h5 className='post-title mt-2'>
                                    {/* <a href='#' >{Item.title}.slice(0,80)</a> */}
                                    {/* <Link > */}
                                    <TextTruncate
                                        line={1}
                                        element="span"
                                        truncateText="........"
                                        text={Item.username}
                                    // textTruncateChild={<a href="#">Read on</a>}
                                    />
                                    {/* </Link> */}
                                </h5>
                                {/* <h5 className='post-title mt-2'>ইন্টার্নশিপ বা ট্রেনিং বদলে দিবে বেকারদের জীবন</h5> */}
                                <p className='post-body'>
                                    {/* {truncateString(Item.description, 60)}...<a href='/'>Read on</a> */}
                                    <TextTruncate
                                        line={2}
                                        element="span"
                                        truncateText="…"
                                        text={Item.email}
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
)
}

export default User