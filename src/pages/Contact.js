import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState({
    fname: "",
    lname: "",
    company: "",
    phone: "",
    email: "",
    url: "",
  })

  const handleOnChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setName((prev) => {
      return { ...prev, [name]: value }
    })
  }
  const HandleSubmit = (e) => {
    e.preventDefault()
    const datapost = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "post",
        headers: {
          // "Content-Type": "multipart/form-data",
        },
        body: name})
        return res
    }
    datapost().then((res)=>{
      console.log(res)
      if(res.ok){
        alert("successfull")
      }
      else{
        console.log("error");
      }
    })
    
    e.target.reset()
  }
  console.log(name);


  return (
    <>
      <div className="container">
        <form onSubmit={HandleSubmit}>
          <h2>Contact Us</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label >First Name</label>
                <input type="text" name='fname' className="form-control" placeholder="" id="first" onChange={handleOnChange} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label >Last Name</label>
                <input type="text" name='lname' className="form-control" placeholder="" id="last" onChange={handleOnChange} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label >Company</label>
                <input type="text" name='company' className="form-control" placeholder="" id="company" onChange={handleOnChange} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label >Phone Number</label>
                <input type="tel" name='phone' className="form-control" id="phone" placeholder="phone" onChange={handleOnChange} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label >Email address</label>
                <input type="email" name='email' className="form-control" id="email" placeholder="email" onChange={handleOnChange} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label >Your Website <small>Please include http://</small></label>
                <input type="url" name='url' className="form-control" id="url" placeholder="url" onChange={handleOnChange} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="form-group mt-3">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>

        </form>
      </div>
    </>
  )
}

export default Contact