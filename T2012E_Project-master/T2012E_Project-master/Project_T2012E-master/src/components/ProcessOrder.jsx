import React, { useState, useEffect } from "react";
import axios from "axios";
function ProcessOrder(props) {
  const { Id } = props;
  const [order, setOrder] = useState({});
  useEffect(() => {
    async function fetchMyAPI() {
      var getToken = JSON.parse(localStorage.getItem("dataUser"));
      const getToken1 = getToken.access_token;
      let resData = await axios.get(
        `https://elevatorsystemdashboard.azurewebsites.net/api/Orders/${Id}`,
        {
          headers: {
            Authorization: `Bearer ${getToken1}`,
          },
        }
      );
     //  console.log('response', resData)
      setOrder(resData.data);
    }
    fetchMyAPI();
  }, []);
  // const sortedDate = order.sort((a,b) =>  new Date(b.Problem) - new Date(a.Problem));
  return (
    <>
      {order  ?
     //    order.map((item, index) => {
          <div className="card1" style={{marginBottom: '10px'}}>
            <div className="title">Purchase Reciept</div>
            <div className="info">
              <div className="row">
                <div className="col-7">
                  <span id="heading">Date</span>
                  <br />
                  <span id="details">
                    {order && order.order
                      ? order.order.map((item, index) => {
                          return (
                            <>{new Date(item.CreatedAt).toLocaleDateString()}</>
                          );
                        })
                      : ""}
                    {/* Date */}
                  </span>
                </div>
                <div className="col-5 pull-right">
                  <span id="heading">Order No.</span>
                  <br />
                  <span id="details">
                    {order && order.order
                      ? order.order.map((item, index) => {
                          return <>{item.SKU}</>;
                        })
                      : ""}
                    {/* SKU */}
                  </span>
                </div>
              </div>
            </div>
            <div className="pricing">
              <div className="row">
                {order && order.dataOrder ? (
                  order.dataOrder.map((item, index) => {
                    return (
                      <>
                       <div className="col-2">
                        <img src={`https://elevatorsystemdashboard.azurewebsites.net${item.Elevator.Thumbnails.split(',')[0]}`}/>
                          {/* <span id="name"></span> */}
                        </div>
                        <div className="col-5">
                          <span id="name">{item.Elevator.Name}</span>
                        </div>
                        <div className="col-2">
                          <span id="price">{item.Elevator.Price} $</span>
                        </div>
                        <div className="col-3">
                          <span id="price">{item.Quantity} (Quantity)</span>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <>
                    <div>Rỗng</div>
                  </>
                )}
              </div>
              <div className="row">
                <div className="col-9">
                  <span id="name">Shipping</span>
                </div>
                <div className="col-3">
                  <span id="price">Free</span>
                </div>
              </div>
            </div>
            <div className="total">
              <div className="row">
                <div className="col-9">Total</div>
                <div className="col-3">
                  <big>
                    {order && order.order
                      ? order.order.map((item, index) => {
                          return <>{item.Total} $</>;
                        })
                      : ""}
                    {/* 123 */}
                  </big>
                </div>
              </div>
            </div>
            <div className="tracking">
              <div className="title">Tracking Order</div>
            </div>
            <div className="progress-track">
              <ul id="progressbar">
                <li className="step0 active " id="step1">
                  Ordered
                </li>
                <li className="step0 active text-center" id="step2">
                  Shipped
                </li>
                <li className={order && order.order
                      ? order.order.map((item, index) => {
                          if(item.OrderStatus === 2){
                              return (
                                   "step0 active text-right"
                                 );
                          }
                        })
                      : "step0 text-right"
                      } id="step3">
                  <p className="order-success">Delivered</p>
                </li>
               
              </ul>
            </div>
          </div>
     //    })
     : ""
     }
    </>
  );
}

export default ProcessOrder;
