import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Tab,
  Tabs,
  Container,
  Row,
  Col,
  Form,
  Group,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Blog = (props) => {
  const apiUrl = "https://elevatorsystemdashboard.azurewebsites.net/api";

  const [blogs, setBlogs] = useState([]);
  const [postsPerPage] = useState(5);
  const [offset, setOffset] = useState(1);
  const [posts, setAllPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  
  useEffect(() => {
    // setTimeout(()=>{
      async function callAPI() {
        const data = await axios.get(`${apiUrl}/Blogs`);
        // console.log('data', data)
        if (data.status == 200) {
          setBlogs(data.data);
        } else {
          alert("loi");
        }
      }
      callAPI();
      // console.log('blogs',blogs)
    
    const slice = blogs.slice(offset - 1, offset - 1 + postsPerPage);

    // For displaying Data
    const postData = getPostData(slice);

    // Using Hooks to set value
    setAllPosts(postData);
    setPageCount(Math.ceil(blogs.length / postsPerPage));
    // },3000)
  //  },3000)
  }, [offset,blogs]);
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setOffset(selectedPage + 1);
  };

 

  const getPostData = (data) => {
    return data.map((post) => (
      // console.log('porssssss',post)
      <div className="mb-3 d-flex justify-content-between">
        <Link to={`/blog/${post && post.ID ? post.ID : ""}`}>
          <div className="pr-3">
            <h2 className="mb-1 h4 font-weight-bold">
              <a className="text-dark">
                {post && post.Title ? post.Title : ""}
              </a>
            </h2>
            <p>{post && post.Summary ? post.Summary : ""}</p>
            {/* <p className="text-muted">{post && post.Slug ? post.Slug : ""}</p> */}

            <small className="text-muted">
              {new Date(post.CreatedAt).toLocaleString()}
            </small>
          </div>
        </Link>
        <Image
          src={post.Thumbnail ? post.Thumbnail : ""}
          style={{
            height: "100px",
            minWidth: "150px",
            maxWidth: "150px",
          }}
        />
      </div>
    ));
  };
  return (
    <>
      <div className="container">
        <div className="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
          <div className="pl-4 pr-0 h-100 tofront">
            <Link
              to={`/blog/${
                blogs && blogs.length > 0 ? blogs[blogs.length - 1].ID : ""
              }`}
            >
              <Row className="row justify-content-between">
                <div className="col-md-6 pt-6 pb-6 align-self-center">
                  <h1 className="secondfont mb-3 font-weight-bold">
                    {blogs && blogs.length > 0
                      ? blogs[blogs.length - 1].Title
                      : ""}
                  </h1>
                  <p style={{ color: "black" }} className="mb-3">
                    {blogs && blogs.length > 0
                      ? blogs[blogs.length - 1].Summary
                      : ""}
                  </p>
                  <a href="#" className="btn btn-dark">
                    Read More
                  </a>
                </div>
                <div
                  className="col-md-6 d-none d-md-block pr-0"
                  style={{
                    height: "500px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${
                      blogs && blogs.length > 0
                        ? blogs[blogs.length - 1].Thumbnail
                        : ""
                    })`,
                  }}
                >
                  {" "}
                </div>
              </Row>
            </Link>
          </div>
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-lg-6">
            <Link to={`/blog/${blogs && blogs.length > 0 ? blogs[0].ID : ""}`}>
              <div className="card border-0 mb-4 box-shadow h-xl-300">
                <div
                  style={{
                    height: "100px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${
                      blogs && blogs.length > 0 ? blogs[0].Thumbnail : ""
                    })`,
                  }}
                ></div>
                <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
                  <h2 className="h4 font-weight-bold">
                    <a className="text-dark">
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
                      {blogs && blogs.length > 0
                        ? new Date(blogs[0].CreatedAt).toLocaleString()
                        : ""}
                    </small>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-6">
            <div className="flex-md-row mb-4 box-shadow h-xl-300">
              <Link
                to={`/blog/${blogs && blogs.length > 0 ? blogs[1].ID : ""}`}
              >
                <div className="mb-3 d-flex align-items-center">
                  <Image
                    src={blogs && blogs.length > 0 ? blogs[1].Thumbnail : ""}
                    style={{
                      height: "80px",
                      width: "120px",
                      marginRight: "10px",
                    }}
                  />
                  <div className="pl-3 p-lg-3">
                    <h2 className="mb-2 h6 font-weight-bold">
                      <a className="text-dark">
                        {blogs && blogs.length > 0 ? blogs[1].Title : ""}
                      </a>
                    </h2>
                    <div className="card-text text-muted small">
                      {blogs && blogs.length > 0 ? blogs[1].Slug : ""}
                    </div>
                    <small className="text-muted">
                      {blogs && blogs.length > 0
                        ? new Date(blogs[1].CreatedAt).toLocaleString()
                        : ""}
                    </small>
                  </div>
                </div>
              </Link>
              <Link
                to={`/blog/${blogs && blogs.length > 0 ? blogs[2].ID : ""}`}
              >
                <div className="mb-3 d-flex align-items-center">
                  <Image
                    src={blogs && blogs.length > 0 ? blogs[2].Thumbnail : ""}
                    style={{
                      height: "80px",
                      width: "120px",
                      marginRight: "10px",
                    }}
                  />
                  <div className="pl-3 p-lg-3">
                    <h2 className="mb-2 h6 font-weight-bold">
                      <a className="text-dark">
                        {blogs && blogs.length > 0 ? blogs[2].Title : ""}
                      </a>
                    </h2>
                    <div className="card-text text-muted small">
                      {blogs && blogs.length > 0 ? blogs[2].Slug : ""}
                    </div>
                    <small className="text-muted">
                      {blogs && blogs.length > 0
                        ? new Date(blogs[2].CreatedAt).toLocaleString()
                        : ""}
                    </small>
                  </div>
                </div>
              </Link>
              <Link
                to={`/blog/${blogs && blogs.length > 0 ? blogs[3].ID : ""}`}
              >
                <div className="mb-3 d-flex align-items-center">
                  <Image
                    src={blogs && blogs.length > 0 ? blogs[3].Thumbnail : ""}
                    style={{
                      height: "80px",
                      width: "120px",
                      marginRight: "10px",
                    }}
                  />
                  <div className="pl-3 p-lg-3">
                    <h2 className="mb-2 h6 font-weight-bold">
                      <a className="text-dark">
                        {blogs && blogs.length > 0 ? blogs[3].Title : ""}
                      </a>
                    </h2>
                    <div className="card-text text-muted small">
                      {blogs && blogs.length > 0 ? blogs[3].Slug : ""}
                    </div>
                    <small className="text-muted">
                      {blogs && blogs.length > 0
                        ? new Date(blogs[3].CreatedAt).toLocaleString()
                        : ""}
                    </small>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-12">
            <h5 className="font-weight-bold spanborder">
              <span>All Stories</span>
            </h5>
            {posts ? posts : []}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
