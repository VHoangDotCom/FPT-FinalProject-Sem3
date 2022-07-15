import React, { useState, useEffect } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Button from "./Button";
import axios from "axios";
import {
  addByIdOrder,
  checkOrder,
} from "../redux/shopping-cart-2/shoppingCart";
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const initalState = {
     Title: "",
     ProblemFaced: "",
 
  Description: "",
};

const Complaint = ( props ) => {
  const { IdOrder } = props;
  const [lgShow, setLgShow] = useState(false);
  const [order, setOrder] = useState(initalState);
  const { Title, Description, ProblemFaced } = order;
  const token = JSON.parse(localStorage.getItem("dataUser"));
  const [profile, setProfile] = useState({});
  const dispatch = useDispatch();
  let history = useHistory();
  
  useEffect(() => {
     async function fetchMyAPI() {
       var getToken = JSON.parse(localStorage.getItem("dataUser"));
 
       if (!getToken) {
         history.push("/login");
       } else {
         const getToken1 = getToken.access_token;
         let resData = await axios.get("https://elevatorsystemdashboard.azurewebsites.net/api/Profile", {
           headers: {
             Authorization: `Bearer ${getToken1}`,
           },
         });
         setProfile(resData.data.data);
       }
     }
 
     fetchMyAPI();
   }, []);
 
  const handlerChangeOrder = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmitOrder = async () => {
     if(!order.Title && !order.Description && !order.ProblemFaced){
          toast.error("Full fields must be entered", {
                   position: "top-right",
                   autoClose: 2000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                 });
     }else{
          try {
               const data = await axios.post(
                 "https://elevatorsystemdashboard.azurewebsites.net/api/Complaints",
                 {
                   Title: order.Title,
                   Description: order.Description,
                   ProblemFaced: order.ProblemFaced,
                   OrderID: IdOrder,
               //     ApplicationUser: profile.Id,
                 },
                 {
                   headers: { Authorization: "Bearer " + token.access_token },
                 }
               );
         
              if(data.status == 201){
               toast.success("Phản ánh thành công", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
              }
              setLgShow(false)
              setOrder(initalState)
             } catch (err) {
               console.log(err);
             }
     }
   
  };

  return (
    <>
      <Button style={{ maxHeight: "30px" }} onClick={() => setLgShow(true)}>
        Complaint
      </Button>
      <Modal
        size="md"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
           <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Complaint
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} className="border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center">
                  {/* {/ <h4 className="text-right"></h4> /} */}
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label className="labels">
                      Title<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="Title"
                      value={Title}
                      onChange={handlerChangeOrder}
                      className="form-control"
                      placeholder="Enter title"
                      // onChange={(e)=> setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">
                      Description<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="Description"
                      value={Description}
                      onChange={handlerChangeOrder}
                      className="form-control"
                      placeholder="Enter description"
                    />
                  </div>
                </div>
               
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">
                      Problem Faced<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="ProblemFaced"
                      value={ProblemFaced}
                      onChange={handlerChangeOrder}
                      className="form-control"
                      placeholder="Enter Problem Faced"
                    />
                  </div>
                </div>
                
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary profile-button"
            type="button"
            onClick={handleSubmitOrder}
          >
            Save
          </button>
          {/* </div> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Complaint;
