import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider";


function CheckoutProduct({ id, title, image, price, rating }) {
    
    const[{basket}, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };
    return (
        <div className="checkoutproduct">
            <img src={image} className="checkoutproductimage" />

            <div className="checkoutproductInfo">
                <p className="checkoutproducttite">{title}</p>
                <p classNam=" checkoutproductPrice">
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproductRating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
                <button  onClick={removeFromBasket} type="button" class="btn btn-warning">Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
