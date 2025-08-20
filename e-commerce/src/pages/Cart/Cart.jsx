import styles from './Cart.module.css'
import { useEffect, useState } from 'react';
import { CartCard } from '../../components';
import { loadCart } from '../../services';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setCartItems(loadCart());
    }, []);

    const cartTitles = ["Product", "Price", "Quantity", "Subtotal"];
    const cartDetails = {"subtotal": "1750$", "shipping": "Free", "total": "1750$"};
    return (
        <div className={styles.mainContainer}>
            <div className={styles.colDiv}>
                <p className={styles.blackText}><a href="http://localhost:5173/">Home</a> / Cart</p>
                <div className={styles.contentDiv}>
                    <div className={styles.cartTitles}>
                        {
                            cartTitles.map((title, index) => (
                                <p key={index} className={styles.productColTitle} id={title === "Product" ? styles.productTitle : ""}>{title}</p>
                            ))
                        }
                    </div>
                    {
                        cartItems.map((item, index) => (
                            <CartCard key={index} product={item} onRemove={() => {}}/>
                        ))
                    }
                    <div className={styles.cartButtons}>
                        <button className={styles.cartButton} onClick={() => navigate("/products")}>Return to shop</button>
                        <button className={styles.cartButton}>Update Cart</button>
                    </div>
                </div>
                <div className={styles.payDiv}>
                    <div className={styles.couponDiv}>
                        <input type="text" placeholder='Coupon Code'/>
                        <button>Apply Coupon</button>
                    </div>
                    <div className={styles.checkoutDiv}>
                        <p className={styles.checkoutTitle}>Cart Total</p>
                        {
                            Object.keys(cartDetails).map((key, index) => (
                                <>
                                    <div className={styles.checkoutDetails}>
                                        <p key={index} className={styles.checkoutText}>{key}: </p>
                                        <p key={index} className={styles.checkoutText}>{cartDetails[key]}</p>
                                    </div>
                                    {key != "total" && <hr/>}
                                </>
                            ))
                        }
                        <div className={styles.buttonDiv}>
                            <button className={styles.redButton}>Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart