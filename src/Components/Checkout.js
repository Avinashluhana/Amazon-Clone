import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "./StateProvider"
import './Checkout.css'
import Subtotal from './Subtotal';


export const Checkout = () => {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">

            {basket?.length === 0 ? (
                <div>
                    <h2>Your basket is empty</h2>
                </div>
            ) : (
                    <div>
                        <h2 className="checkoutTitle">Your Shoping basket</h2>

                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />

                        ))}
                    </div>
                )}
            {basket.length > 0 && (
                <div className="checkoutRight">
                    <Subtotal />
                </div>
            )}

        </div>

    );
}
