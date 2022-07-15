import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/logo.jpg'

const footerAboutLinks = [
    {
        display: "About Us",
        path: "/about"
    },
    
    {
        display: "Blogs",
        path: "/blogs"
    },
    {
        display: "System Store",
        path: "/catalog"
    }
]

const footerCustomerLinks = [
    {
        display: "Return Policy",
        path: "/about"
    },
    {
        display: "Warranty Policy",
        path: "/about"
    },
    {
        display: "Refund Policy",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                        Support call center
                        </div>
                        <div className="footer__content">
                            <p>
                            Contact to order <strong>0123456789</strong>
                            </p>
                            <p>
                                
Order problems <strong>0123456789</strong>
                            </p>
                            <p>
                            Comments, complaints <strong>0123456789</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            
About ELEVATOR
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                        Customer care
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} style={{width: '60%', height: '50%'}} alt="" />
                            </Link>
                        </p>
                        <p>
                        Aiming to bring the best products to consumers. Products that help improve life, bring convenience and speed</p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
