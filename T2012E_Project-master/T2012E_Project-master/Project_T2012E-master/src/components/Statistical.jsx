import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Statistical = () => {
    const [products, setProducts] = useState([])
    const [blogs, setBlogs] = useState([]);
    const [users, setUsers] = useState('');
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const data = await axios.get(
            `https://elevatorsystemdashboard.azurewebsites.net/api/Elevators`
          );
          if (data.status == 200) {
            setProducts(data.data);
          } else {
            alert("loi");
          }
        };
        fetchData();
      }, []);
      useEffect(() => {
        const fetchData = async () => {
          const data = await axios.get(
            `https://elevatorsystemdashboard.azurewebsites.net/api/Blogs`
          );
          if (data.status == 200) {
            setBlogs(data.data);
          } else {
            alert("loi");
          }
        };
        fetchData();
      }, []);
      useEffect(() => {
        const fetchData = async () => {
          const data = await axios.get(
            `https://elevatorsystemdashboard.azurewebsites.net/api/Orders`
          );
          if (data.status == 200) {
            setOrders(data.data);
          } else {
            alert("loi");
          }
        };
        fetchData();
      }, []);
      useEffect(() => {
        const fetchData = async () => {
          const data = await axios.get(
            `https://elevatorsystemdashboard.azurewebsites.net/api/getCountUser`
          );
          if (data.status == 200) {
            setUsers(data.data);
          } else {
            alert("loi");
          }
        };
        fetchData();
      }, []);
  return (
    <>
      <div class="container-fluid pt-5 pb-2" style={{backgroundColor: 'rgb(248 248 248)', marginTop: '150px'}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mb-5">
                    <small class=" text-white text-uppercase font-weight-bold px-1" style={{backgroundColor:'#4267b2'}}>Why Choose Us</small>
                    <h2 class="mt-2 mb-3" style={{fontSize: '40px', fontWeight: '800'}}>15 Years Expereince</h2>
                    <h4 class="font-weight-normal text-muted mb-4">Experienced many projects, installation experience. Display information about existing products, projects and users accurately</h4>
                    {/* <div class="list-inline mb-4">
                        <p class="font-weight-semi-bold mb-2"><i class="fa fa-angle-right mr-2"></i>Lorem ut kasd dolores elitr</p>
                        <p class="font-weight-semi-bold mb-2"><i class="fa fa-angle-right mr-2"></i>Jsto dolor lorem ipsum</p>
                        <p class="font-weight-semi-bold mb-2"><i class="fa fa-angle-right mr-2"></i>Diama ipsum est dolor</p>
                    </div> */}
                    <a href="" class="btn py-md-2 px-md-4 font-weight-semi-bold" style={{backgroundColor:'#4267b2'}}>Learn More</a>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-sm-6 pb-1">
                            <div class="d-flex flex-column align-items-center border px-4 mb-4">
                                <h2 class="display-3 mb-3" data-toggle="counter-up" style={{color:'#4267b2', fontWeight:'600'}}>{products.length}</h2>
                                <h5 class="font-weight-bold mb-4">Products</h5>
                            </div>
                        </div>
                        <div class="col-sm-6 pb-1">
                            <div class="d-flex flex-column align-items-center border px-4 mb-4">
                                <h2 class="display-3 mb-3" data-toggle="counter-up" style={{color:'#4267b2', fontWeight:'600'}}>{blogs.length}</h2>
                                <h5 class="font-weight-bold mb-4">Blogs</h5>
                            </div>
                        </div>
                        <div class="col-sm-6 pb-1">
                            <div class="d-flex flex-column align-items-center border px-4 mb-4">
                                <h2 class="display-3 mb-3" data-toggle="counter-up" style={{color:'#4267b2', fontWeight:'600'}}>{users}</h2>
                                <h5 class="font-weight-bold mb-4">Users</h5>
                            </div>
                        </div>
                        <div class="col-sm-6 pb-1">
                            <div class="d-flex flex-column align-items-center border px-4 mb-4">
                                <h2 class="display-3 mb-3" data-toggle="counter-up" style={{color:'#4267b2', fontWeight:'600'}}>{orders.length}</h2>
                                <h5 class="font-weight-bold mb-4">Complete Projects</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Statistical