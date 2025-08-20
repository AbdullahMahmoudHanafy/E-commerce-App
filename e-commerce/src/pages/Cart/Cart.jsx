import styles from './Cart.module.css';
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

    const handleRemove = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleUpdateAmount = (id, newAmount) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, amount: newAmount } : item
            )
        );
    };

    // Calculate totals
    const subtotal = cartItems
        .reduce((sum, item) => sum + item.price * item.amount, 0)
        .toFixed(2);

    const shipping = cartItems.length > 0 ? "Free" : "$0.00";
    const total = subtotal; // if you add taxes/shipping later, adjust here

    const cartTitles = ["Product", "Price", "Quantity", "Subtotal"];

    const handleUpdateCart = () => {
        // Here you can send cartItems to backend or localStorage
        console.log("Updated cart:", cartItems);
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.colDiv}>
                <p className={styles.blackText}>
                    <a href="http://localhost:5173/">Home</a> / Cart
                </p>

                <div className={styles.contentDiv}>
                    <div className={styles.cartTitles}>
                        {cartTitles.map((title, index) => (
                            <p
                                key={index}
                                className={styles.productColTitle}
                                id={title === "Product" ? styles.productTitle : ""}
                            >
                                {title}
                            </p>
                        ))}
                    </div>

                    {cartItems.map((item) => (
                        <CartCard
                            key={item.id}
                            product={item}
                            onRemove={handleRemove}
                            onUpdateAmount={handleUpdateAmount}
                        />
                    ))}

                    <div className={styles.cartButtons}>
                        <button
                            className={styles.cartButton}
                            onClick={() => navigate("/products")}
                        >
                            Return to shop
                        </button>
                        <button className={styles.cartButton} onClick={handleUpdateCart}>
                            Update Cart
                        </button>
                    </div>
                </div>

                <div className={styles.payDiv}>
                    <div className={styles.couponDiv}>
                        <input type="text" placeholder="Coupon Code" />
                        <button>Apply Coupon</button>
                    </div>

                    <div className={styles.checkoutDiv}>
                        <p className={styles.checkoutTitle}>Cart Total</p>

                        <div className={styles.checkoutDetails}>
                            <p className={styles.checkoutText}>Subtotal:</p>
                            <p className={styles.checkoutText}>${subtotal}</p>
                        </div>
                        <hr />
                        <div className={styles.checkoutDetails}>
                            <p className={styles.checkoutText}>Shipping:</p>
                            <p className={styles.checkoutText}>{shipping}</p>
                        </div>
                        <hr />
                        <div className={styles.checkoutDetails}>
                            <p className={styles.checkoutText}>Total:</p>
                            <p className={styles.checkoutText}>${total}</p>
                        </div>

                        <div className={styles.buttonDiv}>
                            <button className={styles.redButton}>Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
