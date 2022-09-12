import React, { useState, useEffect } from 'react'
// import Truncate from 'react-truncate';
import MainPost from '../components/Post/MainPost';

const Blogs = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-9 ">
          <MainPost />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 ">
          <h1>Side bar</h1>
        </div>
      </div>

    </>
  )
}

export default Blogs