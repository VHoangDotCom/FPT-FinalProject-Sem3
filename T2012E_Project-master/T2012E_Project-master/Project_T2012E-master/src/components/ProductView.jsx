import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { withRouter } from "react-router";

import { useDispatch } from "react-redux";

import { addItem } from "../redux/shopping-cart/cartItemsSlide";
import { remove } from "../redux/product-modal/productModalSlice";

import Button from "./Button";
import numberWithCommas from "../utils/numberWithCommas";

import { Modal, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderInformation from "./OrderInformation";

import {
  addcartItem,
  removecartItem,
  clearOrder,
} from "../redux/shopping-cart-2/shoppingCart";

const ProductView = (props) => {
  const [products, setProduct] = useState([]);
  const [catagory, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://elevatorsystemdashboard.azurewebsites.net/api/Elevators/${props.match.params.slug}`
      );
      if (data.status == 200) {
        setProduct(data.data);
      } else {
        alert("loi");
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://elevatorsystemdashboard.azurewebsites.net/api/Categories`
      );
      if (data.status == 200) {
        setCategory(data.data);
      } else {
        alert("loi");
      }
    };
    fetchData();
  }, []);

  const dispatch = useDispatch();

  let product = products;

  let str = products.Thumbnails;
  let arr = [];
  if (typeof str === "string") {
    arr = str.split(",");
  } else {
    console.log("str is not a string");
  }

  if (product === undefined)
    product = {
      title: "",
      price: "",
      image01: null,
      image02: null,
      categorySlug: "",
      speed: "",
      slug: "",
      sku: "",
      capacity: "",
      maxPerson: "",
      description: "",
    };

  const [previewImg, setPreviewImg] = useState(`https://elevatorsystemdashboard.azurewebsites.net${arr[1]}`);

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(`https://elevatorsystemdashboard.azurewebsites.net${arr[1]}`)
    setQuantity(1);
  }, [product]);

  const addToCart = () => {
    // if (check()) {
    let newItem = {
      slug: product.slug,
      sku: product.SKU,
      capacity: product.Capacity,
      price: product.Price,
      quantity: quantity,
    };
    if (dispatch(addcartItem(newItem))) {
      alert("Success");
    } else {
      alert("Fail");
    }
    // }
  };

  const goToCart = () => {
    // if (check()) {
    let newItem = {
      Id: product.ID,
      Image: product.Thumbnails.split(",")[0],
      Name: product.Name,
      Price: product.Price,
      qty: quantity,
    };
    if (newItem) {
      // dispatch(remove());
      dispatch(addcartItem(newItem));
      props.history.push("/cart");
    } else {
      alert("Fail");
    }
    // }
  };
  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() =>
              setPreviewImg(
                `https://elevatorsystemdashboard.azurewebsites.net${arr[0]}`
              )
            }
          >
            <img
              src={`https://elevatorsystemdashboard.azurewebsites.net${arr[0]}`}
              alt=""
            />
          </div>
          <div 
            className="product__images__list__item"
            onClick={() =>
              setPreviewImg(
                `https://elevatorsystemdashboard.azurewebsites.net${arr[1]}`
              )
            }
          >
            <img
              src={`https://elevatorsystemdashboard.azurewebsites.net${arr[1]}`}
              alt=""
            />
          </div>
          <div 
            className="product__images__list__item"
            onClick={() =>
              setPreviewImg(
                `https://elevatorsystemdashboard.azurewebsites.net${arr[2]}`
              )
            }
          >
            <img
              src={`https://elevatorsystemdashboard.azurewebsites.net${arr[2]}`}
              alt=""
            />
          </div>
        </div>
        <div className="product__images__main">
          <img
          style={{maxWidth: '600px'}}
            src={previewImg}
            alt=""
          />
        </div>
        <div
          className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <div className="product-description__title">Product details</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.Description }}
          ></div>
          <div className="product-description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Collapse" : "see more"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.Name}</h1>
        <div className="product__info__item">
          <div className="product__info__item__title">
          Total: {new Intl.NumberFormat('de-DE').format(product.Price)} $
            {/* Total: {product.Price}$ */}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">SKU: {product.SKU}</div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">
            Capacity: {new Intl.NumberFormat('de-DE').format(product.Capacity)} (kg)
          </div>
          {/* <div className="product__info__item__list">
          {product.SKU}
          </div> */}
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">
            MaxPerson: {product.MaxPerson} (persons)
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">
            SpeedMax: {product.Speed} (kms/h)
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">
            Catagory:{" "}
            {products && catagory
              ? catagory.map((item) => {
                  if (item.ID === products.CategoryID) {
                    return <>{item.Name} </>;
                    // console.log('12',item)
                  }
                })
              : "Không có"}
          </div>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Count</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          {/* <Button onClick={() => addToCart()}>thêm vào giỏ</Button> */}
          <Button onClick={() => goToCart()}>buy now</Button>

          {/* <OrderInformation /> */}
        </div>
      </div>
      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className="product-description__title">Product details</div>
        <div
          className="product-description__content"
          dangerouslySetInnerHTML={{ __html: product.Description }}
        ></div>
        <div className="product-description__toggle">
          <Button
            size="sm"
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "Collapse" : "see more"}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default withRouter(ProductView);
