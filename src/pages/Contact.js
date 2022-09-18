import React, { useState, useEffect } from 'react'

const Contact = () => {
  const [category, setCategory] = useState([]);
  const [formData, SetFormData] = useState({
    name: "",
    // category: "",
    // slug: "",
    // description: "",
    // is_active: "",
  });
  const [name, setName] = useState("");

  // ================================================
  //          Category data fecth from Api
  // ===============================================
  const fetchBlogs = async () => {
    const response = await fetch("https://motalib.pythonanywhere.com/api/blog-category/");
    // const response = await fetch("http://127.0.0.1:8000/api/blog-category/");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchBlogs().then((data) => {
      setCategory(data);
    });
  }, []);
  console.log("category", category);
  // ================================================
  //          /From data save
  // ===============================================
  const HandelChange = (e) => {
    const { name, value } = e.target;
    // SetFormData((Prev) => {
    //   return { ...Prev, [name]: value };
    // });
    setName((Prev) => {
      return { ...Prev, [name]: value };
    });
  };
  const HandleSubmit = (e) => {
    e.preventDefault()
    const form_data = new FormData();
    form_data.append("name", name);
    const datapost = () => {
      const res = fetch("https://motalib.pythonanywhere.com/api/blog-category", {
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: form_data
      })
      return res
    }
    datapost().then((res) => {
      console.log(res)
      if (res.ok) {
        alert("successfull")
      }
      else {
        console.log("error");
      }
    })

    e.target.reset()
  }
  console.log(formData);


  return (
    <>
      <div className="container">
        <form className="submit-post" onSubmit={HandleSubmit}>
          <h2>Submit your Article</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label> Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder=""
                  onChange={HandelChange}
                />
              </div>
            </div>

            {/* <div className="col-md-6">
                            <div className="form-group">
                                <label>Catagory</label>
                                <select className="form-select" name="category" onChange={HandelChange}>
                                    <option>Catagory</option>
                                    {category.map((Item, index) => {
                                        return (
                                            <option value= {Item.id} key={index}>
                                                {Item.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div> */}
          </div>
          {/* <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    id="description"
                                    placeholder="Description"
                                    onChange={HandelChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Slug</label>
                                <input
                                    type="text"
                                    name="slug"
                                    className="form-control"
                                    placeholder=""
                                    onChange={HandelChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="checkbox py-3">
                        <label>
                            <input type="checkbox" name="is_active" value="1" id="newsletter" onChange={HandelChange} />{" "}
                            Is Active!
                        </label>
                    </div> */}
          <div className="row">
            <div className="col-lg-12">
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact