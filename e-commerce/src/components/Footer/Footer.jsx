import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';


function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.contentDiv}>
                <div className={styles.div}>
                    <h3>Exclusive</h3>
                    <h4>Subscribe</h4>
                    <p>Get 10% off your first order.</p>
                    <div className={styles.inputContainer}>
                        <input type="text" className={styles.input} placeholder="Enter your email"/>
                        <FontAwesomeIcon icon={faPaperPlane} id={styles.paperPlaneIcon}/>
                    </div>
                </div>
                <div className={styles.div}>
                    <h3>Support</h3>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className={styles.div}>
                    <h3>Account</h3>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className={styles.div}>
                    <h3>Quick Link</h3>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className={styles.div}>
                    <h3>Download App</h3>
                    <p id={styles.smallParagraph}>Save $3 with App New User Only</p>
                    <div className={styles.downloadingMethodsContainer}>
                        <img src="/images/QRCode.jpg" alt="Qr Code" id={styles.qrImg}/>
                        <button className={styles.downloadButton}>
                            <img src="/images/googlePlayLogo.png" alt="Google play image" className={styles.methodImg}/>
                            Get it on Google Play
                        </button>
                        <button className={styles.downloadButton}>
                            <img src="/images/appleStoreLogo.png" alt="Apple store image" className={styles.methodImg}/>
                            Download Via App Store
                        </button>
                    </div>
                </div>
            </div>
            <p id={styles.copyrightParagraph}>© 2025 Exclusive. All rights reserved.</p>
        </div>
    )
}

export default Footer;