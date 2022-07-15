import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'

import banner from '../assets/images/banner.png'

import Images from '../assets/fake-data/images'
import AboutUs from '../components/AboutUs'
import OurTeam from '../components/OurTeam'
import OurServices from '../components/OurServices'
import Statistical from '../components/Statistical'
import Blog from '../components/Blog'

// import Images from '../assets/fake-data/images'

const Home = () => {
    // const bannerElevator = "http://www.wvtelevators.com/wp-content/uploads/2016/07/panaromic-elevator-banner.jpg"
    return (
        <Helmet title="Home">
            <HeroSlider images={Images} />
            <Section >
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end policy section */}
           
            {/* best selling section */}
            <Section >
                <AboutUs/>
                <OurTeam/>
                <OurServices/>
                <Statistical/>
               
            </Section>
            {/* end best selling section */}

            {/* new arrival section */}
          
            
            {/* banner */}
            {/* <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={bannerElevator} alt="" />
                    </Link>
                </SectionBody>
            </Section> */}
            {/* end banner */}


            <Section  className="container">
                <Blog/>
            </Section>
        </Helmet>
    )
}

export default Home
