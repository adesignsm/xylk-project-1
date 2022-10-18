import React, { useEffect, useState } from "react";
import Client from "shopify-buy";
import Product from "./Product";
import "../style/Cart.css"

const SHOPIFY_KEY = process.env.REACT_APP_SHOPIFY_KEY;

const client = Client.buildClient({
    storefrontAccessToken: SHOPIFY_KEY,
    domain: "xylk.myshopify.com"
});


const Cart = (setCartOpen) => {

    //Shopify 'cart' data
    const [cartData, setCartData] = useState([]);

        const fetchCartData = () => {
            client.checkout.create().then((checkout) => {
                setCartData(checkout);
                console.log(checkout);

          }).catch((error) => {
            console.log(error);
          })

    };

    useEffect(() => {
        fetchCartData();
    }, []);

    return (

        <>
            <div className="cart-container">
                {cartData.id}
            </div>
        </>

    )
}

export default Cart;