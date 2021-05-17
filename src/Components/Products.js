import React from 'react'
import './Products.css'
import {useStateValue} from "./StateProvider"

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Products = ({ title, price, rating, image, id }) => {
   
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
        toast.warning("Added Succesfully", { position: "top-center"},); 
    };
    return (
        <div className="product">
            <div className="productInfo">
                <p>{title}</p>
                <p classNam="productPrice">
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <div className="productRating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p className="rating">⭐</p>
                            ))
                    }
                </div>

            </div>

            <img src={image} alt="product image" />
            <div className="bt">
            <button onClick={addToBasket} type="button" class="btn btn-warning">Add to Cart</button>
            <ToastContainer style={{marginTop: '50px'}}/>
            </div>
        </div>

    )
}
