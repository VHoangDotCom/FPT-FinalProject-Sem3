import React from 'react'
import PropTypes from 'prop-types'

import { Link, useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import axios from 'axios'

import Button from './Button'
import { addcartItem } from '../redux/shopping-cart-2/shoppingCart'


// props home component
const ProductCard = props => {
    const dispatch = useDispatch()
    const history = useHistory();
    const handleCreateCart = async (id) => {
        try {
            var data = await axios.get(`https://elevatorsystemdashboard.azurewebsites.net/api/Elevators/${id}`);
            dispatch(addcartItem({ Id: id, Image: data.data.Thumbnails.split(',')[0], Name: data.data.Name, Price: data.data.Price * 1, qty: 1 }));
            history.push("/cart");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="product-card">

            <Link to={`/catalog/${props.ID}`}>
                <div className="product-card__image">
                    <img src={`https://elevatorsystemdashboard.azurewebsites.net${props.img.split(',')[0]}`} alt="" />

                </div>

                <h3 className="product-card__name">{props.name}</h3>
                <div className="product-card__price">
                    {new Intl.NumberFormat('de-DE').format(props.price)} $
                    {/* {props.price} $ */}
                </div>
            </Link>
            <div className="product-card__btn">
                <Button
                    size="sm"
                    icon="bx bx-cart"
                    animate={true}
                    onClick={() => handleCreateCart(props.ID)}
                >
                    
Purchase
                </Button>
            </div>
        </div >
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard;