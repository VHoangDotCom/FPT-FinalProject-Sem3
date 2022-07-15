import React from 'react'

import { FaHammer,FaEnvelope,FaPhoneSquareAlt,FaHouseUser } from "react-icons/fa";

const OurServices = () => {
  return (
    <>
       <div class="container-fluid pt-5 pb-3" style={{backgroundColor: 'rgb(248 248 248)', marginTop: '150px'}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-5">
                    <small class="text-white text-uppercase font-weight-bold px-1" style={{backgroundColor:'#4267b2'}}>What we do</small>
                    <h2 class="mt-2 mb-3" style={{fontSize: '40px', fontWeight: '800'}}>We Offer Creative Services</h2>
                    <h4 class="font-weight-normal text-muted mb-4">The services we provide to our customers. All are provided correctly</h4>
                    <a href="" class="btn py-md-2 px-md-4 font-weight-semi-bold"  style={{backgroundColor:'#4267b2'}}>Discover More</a>
                </div>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-md-6 mb-5">
                            <div class="d-flex">
                                <i class="fa fa-3x fa-laptop-code text-primary mr-4" style={{width: '60px'}}>
                                   <FaPhoneSquareAlt style={{width: '50px', height:'50px', color:'black', marginRight:'8px', color:'#4267b2'}}/>
                                </i>
                                <div class="d-flex flex-column">
                                    <h4 class="font-weight-bold mb-3">Call center 24/7</h4>
                                    <p>The call center is on the page continuously every day</p>
                                    {/* <a class="font-weight-semi-bold" href="" style={{color:'#4267b2 !important'}}>Read More<i class="fa fa-angle-double-right"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-5">
                            <div class="d-flex">
                                <i class="fa fa-3x fa-laptop-code text-primary mr-4" style={{width: '60px'}}>
                                   <FaEnvelope style={{width: '50px', height:'50px', color:'black', marginRight:'8px', color:'#4267b2'}}/>
                                </i>
                                <div class="d-flex flex-column">
                                    <h4 class="font-weight-bold mb-3">Message</h4>
                                    <p>Send and receive messages about product information, service reviews</p>
                                    {/* <a class="font-weight-semi-bold" href="" style={{color:'#4267b2 !important'}}>Read More<i class="fa fa-angle-double-right"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-5">
                            <div class="d-flex">
                                <i class="fa fa-3x fa-laptop-code text-primary mr-4" style={{width: '60px'}}>
                                   <FaHammer style={{width: '50px', height:'50px', color:'black', marginRight:'8px', color:'#4267b2'}}/>
                                </i>
                                <div class="d-flex flex-column">
                                    <h4 class="font-weight-bold mb-3">Repair and install</h4>
                                    <p>Free installation and repair, dedicated</p>
                                    {/* <a class="font-weight-semi-bold" href="" style={{color:'#4267b2 !important'}}>Read More<i class="fa fa-angle-double-right"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-5">
                            <div class="d-flex">
                                <i class="fa fa-3x fa-laptop-code text-primary mr-4" style={{width: '60px'}}>
                                   <FaHouseUser style={{width: '50px', height:'50px', color:'black', marginRight:'8px', color:'#4267b2'}}/>
                                </i>
                                <div class="d-flex flex-column">
                                    <h4 class="font-weight-bold mb-3">Professional service</h4>
                                    <p>The company that provides the best service</p>
                                    {/* <a class="font-weight-semi-bold" href="" style={{color:'#4267b2 !important'}}>Read More<i class="fa fa-angle-double-right"></i></a> */}
                                </div>
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

export default OurServices
