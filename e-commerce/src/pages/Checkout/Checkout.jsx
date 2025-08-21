import styles from './Checkout.module.css';

function Checkout() {
    const inputHeaders = ['First Name', 'Email Address', 'Phone Number', 'Town/City', 'Street Address', "Appartment, Floor, etc.", "Company"];
    return (
        <div className={styles.mainContainer}>
            <div className={styles.colDiv}>
                <p className={styles.blackText}>
                    <a href="http://localhost:5173/">Home</a> / Cart
                </p>
                <p className={styles.header}>Billing Details</p>
                <div className={styles.contentDiv}>
                    <div className={styles.personalDetailsDiv}>
                        {
                            inputHeaders.map((header, index) => (
                                <div key={index} className={styles.inputDiv}>
                                    <p className={styles.inputHeader}>{header}{index != inputHeaders.length - 1  && index != inputHeaders.length - 2 && <p className={styles.redStar}>*</p>}</p>
                                    <input type="text" className={styles.input} />
                                </div>
                            ))
                        }
                        <label className={styles.label}>
                            <input type="checkbox" className={styles.checkbox}/>
                            Save this information for faster check-out next time
                        </label>
                    </div>
                    <div className={styles.paymentDiv}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout