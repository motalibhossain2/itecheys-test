import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';

const Serch = () => {
    const [user, setUser] = useState([])
    const [filterData, setFilter] = useState([])
    const [profile, setProfile] = useState([])

    // Fetch data from api 
    useEffect(() => {
        const getSearchData = async () => {
            const response = await fetch("https://api.github.com/users")
            const data = await response.json()
            return data
        }
        getSearchData()
            .then((data) => {
                setUser(data)
            })
    }, [])
    console.log("User data", user)

    // Searching data function 
    const HandleSearch = (e) => {
        let SearchValue = e.target.value;
        console.log(SearchValue)
        const filterData = user.filter((value) => {
            return value.login.toLowerCase().includes(SearchValue.toLowerCase())
        })
        setFilter(filterData)
    }
    // Handle click to show user data 
    const Handleclick = (login) => {
        const profileData = filterData.filter((eachProfile) => {
            return eachProfile.login.includes(login)
        })
        setProfile(profileData)
        setFilter([])
        console.log('User profile=', profile)
    }

    return (
        <>
            <div className='row'>
                <div className="col-lg-6">
                    <input className='form-control' type="text" placeholder="Search......." onChange={HandleSearch} />
                    {filterData.length != 0 && filterData.map((Item, index) => {
                        return (
                            <p id={Item.id} key={index} onClick={() => Handleclick(Item.login)}>{Item.login}</p>
                        )
                    })
                    }
                </div>
                <div className="col-lg-6">
                    {profile.map((Item, index) => {
                        return (<>
                            {/* <h1>{Item.login}</h1>
                            <h3>{Item.id}</h3>
                            <h6>{Item.events_url}</h6> */}
                            <div class="container d-flex justify-content-center">
                                <div class="card p-3 py-4">
                                    <div class="text-center">
                                        <img src={Item.avatar_url} width="100" class="rounded-circle" />
                                        <h3 class="mt-2">{Item.login}</h3>
                                        <span class="mt-1 clearfix">Android Developer</span>

                                        <div class="row mt-3 mb-3">

                                            <div class="col-md-4">
                                                <h5>Projects</h5>
                                                <span class="num">10</span>
                                            </div>
                                            <div class="col-md-4">
                                                <h5>Projects</h5>
                                                <span class="num">10</span>
                                            </div>
                                            <div class="col-md-4">
                                                <h5>Projects</h5>
                                                <span class="num">10</span>
                                            </div>

                                        </div>

                                        <hr class="line" />

                                        <div class="profile mt-5">

                                            <a href={Item.url} class="profile_button px-5">View profile</a>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Serch