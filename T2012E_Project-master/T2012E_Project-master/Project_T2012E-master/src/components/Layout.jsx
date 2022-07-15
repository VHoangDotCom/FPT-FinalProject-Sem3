import React, {useState,useEffect} from "react";

import {
  BrowserRouter,
  // Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ProductViewModal from "./ProductViewModal";

import Routes from "../routes/Routes";
import Login from "../pages/Login";
import axios from "axios";
import HeroSlider from "./HeroSlider";

import Images from '../assets/fake-data/images'
import ScrollButton from "./ScrollButton";
import Profile from "../pages/Profile";

const Layout = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
            <Login/>
          </Route>
         
         <Route
          render={(props) => (
            <div>
              <Header {...props} />
             
              <div className="container">
                <div className="main">
                  <Routes/>
                </div>
              </div>
              <Footer />
              <ProductViewModal />
              <ScrollButton />
            </div>
          )}
        />
       
      </Switch>
    </BrowserRouter>
  );
};

export default Layout;
