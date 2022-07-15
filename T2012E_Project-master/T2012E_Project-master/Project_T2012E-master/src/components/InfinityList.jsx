import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import Grid from './Grid'
import ProductCard from './ProductCard'

const InfinityList = props => {
   const {product} = props

    const perLoad = 6 // items each load

    const listRef = useRef(null)
    
    const [data, setData] = useState([])

    const [load, setLoad] = useState(true)

    const [index, setIndex] = useState(0)

    useEffect(() => {
        setData(product.slice(0, perLoad))
        setIndex(1)
    }, [product])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (listRef && listRef.current) {
                if (window.scrollY + window.innerHeight >= listRef.current.clientHeight + listRef.current.offsetTop + 200) {
                    console.log("bottom reach")
                    setLoad(true)
                }
            }
            
        })
    }, [listRef])

    useEffect(() => {
        const getItems = () => {
            const pages = Math.floor(product.length / perLoad)
            const maxIndex = product.length % perLoad === 0 ? pages : pages + 1

            if (load && index <= maxIndex) {
                const start = perLoad * index
                const end = start + perLoad

                setData(data.concat(product.slice(start, end)))
                setIndex(index + 1)
            }
        }
        getItems()
        setLoad(false)
    }, [load, index, data, product])

    return (
        <div ref={listRef}>
            <Grid
                col={3}
                mdCol={2}
                smCol={1}
                gap={20}
            >
                {
                    data.map((item, index) => (
                        // console.log('item', item)
                        <ProductCard
                            key={item.index}
                            ID={item.ID}
                            img={item.Thumbnails}
                            name={item.Name}
                            price={item.Price}
                            slug={item.Slug}
                                sku={item.SKU}
                                maxPerson={item.MaxPerson}
                                speed={item.Speed}
                                capacity={item.Capacity}
                                tag={item.Tag}
                        />
                    ))
                }
            </Grid>
        </div>
    )
}

InfinityList.propTypes = {
    data: PropTypes.array.isRequired
}

export default InfinityList
