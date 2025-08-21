import styles from './Checkout.module.css';
import { useState, useEffect } from "react";
import { loadCart } from '../../services';
import { PaymentOptions } from '../../components';
import { getCurrentUser } from '../../services';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("bank");
    useEffect(() => {
        let data = loadCart();
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            data[i].totalPrice = parseFloat((data[i].price * data[i].amount).toFixed(2));
            sum += data[i].totalPrice;
            data[i].title = data[i].title.length > 10 ? data[i].title.slice(0, 10) + "..." : data[i].title;
        }
        setSubtotal(sum.toFixed(2));
        console.log(data);
        setCart(data);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const currentUser = getCurrentUser();
        console.log(user);
        if(!user.firstName)
            return alert("First name is required");
        if (!user.email)
            return alert("Email is required");
        if (!user.phoneNumber)
            return alert("Phone number is required");
        if (!user.town)
            return alert("Town is required");
        if (!user.streetAddress)
            return alert("Street address is required");

        if (currentUser.email === user.email) {
            alert("Successfully checked out!");
            navigate('/');
        }else alert("Emails do not match");
    }

    const inputHeaders = ['First Name', 'Email', 'Phone Number', 'Town/City', 'Street Address', "Appartment, Floor, etc.", "Company"];
    const inputNames = ['firstName', 'email', 'phoneNumber', 'town', 'streetAddress', "appartment", "company"];
    const checkoutDetails = ["Subtotal", "Shipping", "Total"];
    return (
        <div className={styles.mainContainer}>
            <div className={styles.colDiv}>
                <p className={styles.blackText}>
                    <a href="http://localhost:5173/">Home</a> / Checkout
                </p>
                <p className={styles.header}>Billing Details</p>
                <div className={styles.contentDiv}>
                    <div className={styles.personalDetailsDiv}>
                        {
                            inputHeaders.map((header, index) => (
                                <div key={index} className={styles.inputDiv}>
                                    <p className={styles.inputHeader}>{header}{index != inputHeaders.length - 1  && index != inputHeaders.length - 2 && <p className={styles.redStar}>*</p>}</p>
                                    <input type="text" className={styles.input} value={user[inputNames[index]]} onChange={(e) => setUser({...user, [inputNames[index]]: e.target.value})}/>
                                </div>
                            ))
                        }
                        <label className={styles.label}>
                            <input type="checkbox" className={styles.checkbox}/>
                            Save this information for faster check-out next time
                        </label>
                    </div>
                    <div className={styles.paymentDiv}>
                        {
                            cart.map((product, index) => (
                                <div key={index} className={styles.productContainer}>
                                    <div className={styles.imageAndTitleContainer}>
                                        <img src={product.image} alt="Product" />
                                        <p className={styles.productTitle}>{product.title}</p>
                                    </div>
                                    <p className={styles.productPrice}>${product.totalPrice}</p>
                                </div>
                            ))
                        }
                        {
                            checkoutDetails.map((detail, index) => (
                                <>
                                    <div key={index} className={styles.checkoutDiv}>
                                        <p className={styles.checkoutHeader}>{detail}</p>
                                        <p className={styles.checkoutPrice}>{index != 1 && "$"}{index == 1 ? "Free" : subtotal}</p>
                                    </div>
                                    {index != checkoutDetails.length - 1 && <hr/>}
                                </>
                            ))
                        }
                        <PaymentOptions paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
                        <div className={styles.couponDiv}>
                            <input type="text" placeholder="Coupon Code" />
                            <button>Apply Coupon</button>
                        </div>
                        <button className={styles.placeOrderButton} onClick={handleSubmit}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout