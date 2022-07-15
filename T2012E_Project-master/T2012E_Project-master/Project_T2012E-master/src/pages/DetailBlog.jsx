import React, { useState,useEffect } from "react";
import {
  Image,
} from "react-bootstrap";

import axios from "axios";
import { Link } from 'react-router-dom'

const DetailBlog = (props) => {
  console.log('propss details: ', props)
  const [blog, setBlog] = useState([]);
  const img =
    "https://kenh14cdn.com/thumb_w/660/2019/12/7/photo-1-15757038486841320969200.png";
  const imgFile =
    "https://i.pinimg.com/originals/71/c6/b0/71c6b0e088a04dc7c4b2b4e34d96b5e5.jpg";

    useEffect(()=>{
      const fetchData = async () =>{
           const data = await axios.get(`https://elevatorsystemdashboard.azurewebsites.net/api/Blogs/${props.match.params.id}`);
           if(data.status == 200){
            // console.log('data', data)
            setBlog(data.data);
           }else{
                alert('loi')
           }
           
      }
      fetchData();
 },[]);
 const apiUrl = "https://elevatorsystemdashboard.azurewebsites.net/api";

  const [blogs, setBlogs] = useState([]);
  // const [img, setImg] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `${apiUrl}/Blogs`
      );
      if (data.status == 200) {
        setBlogs(data.data);
      } else {
        alert("loi");
      }
    };
    fetchData();
  }, []);
 const data = blog.PostContent
  return (
    <>
      <div className="container">
        <div className="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
          <div className="h-100 tofront">
            <div className="row justify-content-between">
              <div className="col-md-6 pt-6 pb-6 pr-6 align-self-center">
                <p className="text-uppercase font-weight-bold">
                  <a className="text-danger" href="./category.html">
                    Stories
                  </a>
                </p>
                <h1 className="display-4 secondfont mb-3 font-weight-bold">
                  {blog.Title}
                </h1>
                <p className="mb-3">
                {blog.Summary}
                </p>
                {/* <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src={blog.Thumbnail}
                    width="70"
                  />
                  <small className="ml-2">
                    Jane Seymour{" "}
                    <span className="text-muted d-block">
                      A few hours ago &middot; 5 min. read
                    </span>
                  </small>
                </div> */}
              </div>
              <div className="col-md-6 pr-0">
                <Image
                  src={blog.Thumbnail}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <div className="row justify-content-center">
         
          <div className="col-md-12 col-lg-12">
            {/* <article className="article-post"> */}
             {/* {blog.PostContent} */}
             <div
              dangerouslySetInnerHTML={{ __html: data ? data : '' }}
             ></div>
            {/* </article> */}
            {/* <div className="border p-5 bg-lightblue">
              <div className="row justify-content-between">
                <div className="col-md-5 mb-2 mb-md-0">
                  <h5 className="font-weight-bold secondfont">Become a member</h5>
                  Get the latest news right in your inbox. We never spam!
                </div>
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your e-mail address"
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <button type="submit" className="btn btn-success btn-block">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="container pt-4 pb-4">
        <h5 className="font-weight-bold spanborder">
          <span>Read next</span>
        </h5>
        <div className="row">
          <div className="col-lg-6">
            <div className="card border-0 mb-4 box-shadow h-xl-300">
            <Link to={`/blog/${blogs && blogs.length > 0 ? blogs[0].ID : ""}`}>
            <div className="card border-0 mb-4 box-shadow h-xl-300">
              <div
                style={{
                  height: "100px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${blogs && blogs.length > 0 ? blogs[0].Thumbnail : ""})`,
                }}
              ></div>
              <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
                <h2 className="h4 font-weight-bold">
                  <a className="text-dark" >
                  {blogs && blogs.length > 0 ? blogs[0].Title : ""}
                  </a>
                </h2>
                <p className="card-text">
                {blogs && blogs.length > 0 ? blogs[0].Summary : ""}
                </p>
                <div>
                  {/* <small className="d-block">
                    <a className="text-muted" href="./author.html">
                      Favid Rick
                    </a>
                  </small> */}
                  <small className="text-muted">
                    {blogs && blogs.length > 0 ? blogs[0].CreatedAt : ""}
                  </small>
                </div>
              </div>
            </div>
            </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="flex-md-row mb-4 box-shadow h-xl-300">
            <Link to={`/blog/${blogs && blogs.length > 0 ? blogs[1].ID : ""}`}>
              <div className="mb-3 d-flex align-items-center">
                <Image
                  src={blogs && blogs.length > 0 ? blogs[1].Thumbnail : ""}
                  style={{
                    height: "80px",
                    width: "120px",
                    marginRight: "10px"
                  }}
                />
                <div className="pl-3 p-lg-3">
                  <h2 className="mb-2 h6 font-weight-bold">
                    <a className="text-dark" >
                    {blogs && blogs.length > 0 ? blogs[1].Title : ""}
                    </a>
                  </h2>
                  <div className="card-text text-muted small">
                  {blogs && blogs.length > 0 ? blogs[1].Slug : ""}
                  </div>
                  <small className="text-muted">
                    {blogs && blogs.length > 0 ? blogs[1].CreatedAt : ""}
                  </small>
                </div>
              </div>
              </Link>
              <Link to={`/blog/${blogs && blogs.length > 0 ? blogs[2].ID : ""}`}>
              <div className="mb-3 d-flex align-items-center">
                <Image
                  src={blogs && blogs.length > 0 ? blogs[2].Thumbnail : ""}
                  style={{
                    height: "80px",
                    width: "120px",
                    marginRight: "10px"
                  }}
                />
                <div className="pl-3 p-lg-3">
                  <h2 className="mb-2 h6 font-weight-bold">
                    <a className="text-dark" >
                    {blogs && blogs.length > 0 ? blogs[2].Title : ""}
                    </a>
                  </h2>
                  <div className="card-text text-muted small">
                  {blogs && blogs.length > 0 ? blogs[2].Slug : ""}
                  </div>
                  <small className="text-muted">
                    {blogs && blogs.length > 0 ? blogs[2].CreatedAt : ""}
                  </small>
                </div>
              </div>
              </Link>
              <Link to={`/blog/${blogs && blogs.length > 0 ? blogs[3].ID : ""}`}>
              <div className="mb-3 d-flex align-items-center">
                <Image
                  src={blogs && blogs.length > 0 ? blogs[3].Thumbnail : ""}
                  style={{
                    height: "80px",
                    width: "120px",
                    marginRight: "10px"
                  }}
                />
                <div className="pl-3 p-lg-3">
                  <h2 className="mb-2 h6 font-weight-bold">
                    <a className="text-dark" >
                    {blogs && blogs.length > 0 ? blogs[3].Title : ""}
                    </a>
                  </h2>
                  <div className="card-text text-muted small">
                  {blogs && blogs.length > 0 ? blogs[3].Slug : ""}
                  </div>
                  <small className="text-muted">
                    {blogs && blogs.length > 0 ? blogs[3].CreatedAt : ""}
                  </small>
                </div>
              </div>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBlog;
