import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from "react-redux";

import axios from 'axios'

import Helmet from '../components/Helmet'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'

import productData from '../assets/fake-data/products'
import ReviewProduct from '../components/ReviewProduct'
import ListComment from '../components/ListComment'


const Product = props => {
    // const post = useSelector((state) => state.commentProducts.values);
    // console.log('props product', props)
    const commentProductId = props.match.params.slug;
    return (
        <Helmet>
            <Section>
                <SectionBody>
                    <ProductView/>
                </SectionBody>
            </Section>
            <Section>
            <SectionTitle>
                    Review Product
                </SectionTitle>
                <SectionBody>
                    <div className='container'>
                        <div className='row'>
                        <ListComment commentProductId={commentProductId}/>
                        <ReviewProduct dataReview={props}/>
                        </div>
                    </div>
                </SectionBody>
            </Section>
            <Section>
               
                <SectionBody>
                    {/* <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            relatedProducts.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />   
                            ))
                        }
                    </Grid> */}
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product
