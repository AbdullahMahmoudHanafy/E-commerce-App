import styles from "./PaymentOptions.module.css";
import visaLogo from "/images/visaLogo.png";
import mastercardLogo from "/images/mastercardLogo.png";

function PaymentOptions(props) {
    return (
        <div className={styles.mainContainer}>
            {/* Bank Option */}
            <label className={styles.label}>
                <input
                type="radio"
                name="payment"
                value="bank"
                checked={props.paymentMethod === "bank"}
                onChange={() => props.setPaymentMethod("bank")}
                className={styles.input}
                />
                <span>Bank</span>
                <div className={styles.imagesDiv}>
                    <img src={visaLogo} alt="Visa" className={styles.img}/>
                    <img src={mastercardLogo} alt="MasterCard" className={styles.img}/>
                </div>
                
            </label>

            {/* Cash on Delivery Option */}
            <label className={styles.label}>
                <input
                type="radio"
                name="payment"
                value="cod"
                checked={props.paymentMethod === "cod"}
                onChange={() => props.setPaymentMethod("cod")}
                className={styles.input}
                />
                <span>Cash on Delivery</span>
            </label>
        </div>
    );
}

export default PaymentOptions;