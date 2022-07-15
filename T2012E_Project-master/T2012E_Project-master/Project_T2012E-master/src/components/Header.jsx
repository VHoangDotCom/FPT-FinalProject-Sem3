import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation, NavLink,useHistory } from "react-router-dom";

import logo from "../assets/images/logo.jpg";

import { Icon } from "@iconify/react";

import { useSelector, useDispatch } from "react-redux";

const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Product",
    path: "/catalog",
  },
  {
    display: "Blogs",
    path: "/blogs",
  },
  {
    display: "About Us",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = (props) => {
  // console.log('props', props);
  const [cartItem, setCartItems] = useState({})

  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);
  const menuLeft = useRef(null);
  const menuToggle = () => menuLeft.current.classList.toggle("active");

//   useEffect(()=>{
    const cartItems = useSelector((state) => state.cart.cartItems);
    // setCartItems(cartItems);
    // console.log('cartItems', typeof cartItems);
//   },[])

  const history = useHistory();
  const removeToken = (userToken) => {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("dataUser");
    history.push('/login')
    // setToken(null);
    // cartItems = 0;
   
};

  return (
    <div className="header shrink" ref={headerRef}>
      <div className="container">
        <div className="header__logo" >
          <Link to="/">
            <img src={logo} alt="" style={{cursor: 'pointer'}}/>
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            {/* <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-search"></i>
                        </div> */}
            <div
              className="header__menu__item header__menu__right__item"
              style={{ marginRight: "-16px" }}
            >
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
                <span>{cartItems.length}</span>
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/profile">
                <i className="bx bx-user"></i>
              </Link>
            </div>
            <div
              className="header__menu__item header__menu__right__item"
              style={{ marginTop: "-10px" }}
            >
              {localStorage.getItem("dataUser") ? (
                <i>
                    <Icon icon="clarity:logout-line" onClick={removeToken}></Icon>
                </i>
              ) : (
                <NavLink to="/login">
                 <i>
                    <Icon icon="clarity:login-line" />
                  </i>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
