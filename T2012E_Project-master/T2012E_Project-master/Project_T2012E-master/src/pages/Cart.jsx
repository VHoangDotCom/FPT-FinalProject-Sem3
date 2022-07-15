import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import numberWithCommas from "../utils/numberWithCommas";
import axios from "axios";
import {
  addcartItem,
  removecartItem,
  clearOrder,
} from "../redux/shopping-cart-2/shoppingCart";
import OrderInformation from "../components/OrderInformation";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

import { useHistory } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  var checkOrder = JSON.parse(localStorage.getItem("checkOrder")) || false;
  var IDorder = JSON.parse(localStorage.getItem("IdOrder"));
  let history = useHistory();
  const removeCartItem = (Id) => {
    dispatch(removecartItem(Id));
  };
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
    total += cartItems[i].Price * cartItems[i].qty;
  }

  const handleCreateCart = async (id, qty) => {
    try {
      var data = await axios.get(
        `https://elevatorsystemdashboard.azurewebsites.net/api/Elevators/${id}`
      );
      dispatch(
        addcartItem({
          Id: id,
          Image: data.data.Thumbnails.split(",")[0],
          Name: data.data.Name,
          // Price: data.data.Price * parseInt(qty),
          Price: data.data.Price,
          qty: parseInt(qty),
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const HandlerCreateOrderItem = async () => {
    if (IDorder !== null) {
      try {
        for (var i = 0; i < cartItems.length; i++) {
          await axios.post(
            "https://elevatorsystemdashboard.azurewebsites.net/api/Order_Items",
            {
              NumberOfFloor: 1,
              Quantity: cartItems[i].qty,
              ElevatorID: cartItems[i].Id,
              OrderID: IDorder,
            }
          );
        }
        dispatch(clearOrder());

       
        // history.push("/catalog");
      //  setTimeout(()=>{
        toast.success("Order Success!!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      //  },2500)
      setTimeout(()=>{
      window.location.reload();
    },1000)
        
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Helmet title="Cart">
      <div className="cart">
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
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>
              You have {cartItems.length} products in your cart
              {/* Bạn đang có  sản phẩm trong giỏ hàng */}
            </p>
            <div className="cart__info__txt__price">
              <span>Total:</span> {total ? total : 0} $<span></span>
            </div>
          </div>
          <div className="cart__info__btn">
            {checkOrder ? (
              <Button size="block" onClick={HandlerCreateOrderItem}>
                {/* {/ <OrderInformation /> /} */}
                Order
              </Button>
            ) : cartItems.length > 0 ? (
              <Button size="block">
                <OrderInformation total={total} />
              </Button>
            ) : (
              ""
            )}

            <Link to="/catalog">
              {checkOrder ? (
                ""
              ) : (
                <Button size="block">Continue shopping</Button>
              )}
            </Link>
          </div>
        </div>

        <div className="cart__list">
          <thead>
            <tr>
              {/* <th>Product</th> */}
              <th style={{ paddingRight: "80px", paddingLeft: "30px" }}>
                Image
              </th>
              <th style={{ paddingRight: "220px" }}>Product</th>
              <th style={{ paddingRight: "220px" }}>Price</th>
              <th style={{ paddingRight: "100px" }}>Total</th>
              <th></th>
            </tr>
          </thead>
          <br />
          <br />
          {/* <br/> */}
          {cartItems.map((item) => (
            <div className="cart__item">
              <div className="cart__item__image">
                <img
                  src={
                    "https://elevatorsystemdashboard.azurewebsites.net" +
                    item.Image
                  }
                  style={{ width: "100px" }}
                  alt=""
                />
              </div>
              <div className="cart__item__info">
                <div className="cart__item__info__name">
                  <Link to={`/catalog/${item.Id}`}>{`${item.Name}`}</Link>
                </div>
                <div
                  className="cart__item__info__price"
                  style={{ minWidth: "200px" }}
                >
                  {item.Price ? numberWithCommas(item.Price) : 0}
                </div>
                <div className="cart__item__info__quantity">
                  <div className="product__info__item__quantity">
                    <div className="product__info__item__quantity__input">
                      <input
                        value={item.qty}
                        onChange={(e) =>
                          handleCreateCart(item.Id, e.target.value)
                        }
                        type="number"
                        min="1"
                        name="qty"
                      />
                    </div>
                  </div>
                </div>
                <div className="cart__item__del">
                  <span onClick={() => removeCartItem(item.Id)}>
                    <i className="bx bx-trash"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
