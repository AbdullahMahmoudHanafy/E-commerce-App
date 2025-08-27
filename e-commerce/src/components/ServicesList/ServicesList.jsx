import styles from './ServicesList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadphones, faSquareCheck } from '@fortawesome/free-regular';

function ServicesList() {
    return (
        <div className={styles.serviceSection}>
            <div className={styles.featureDiv}>
                <div className={styles.buttonDiv}><button><FontAwesomeIcon icon={faTruck} className={styles.serviceIcon}/></button></div>
                <p className={styles.serviceTitle}>FREE AND FAST DELIVERY</p>
                <p>Free delivery for all orders over $140</p>
            </div>
            <div className={styles.featureDiv}>
                <div className={styles.buttonDiv}><button><FontAwesomeIcon icon={faHeadphones} className={styles.serviceIcon}/></button></div>
                <p className={styles.serviceTitle}>24/7 CUSTOMER SERVICE</p>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div className={styles.featureDiv}>
                <div className={styles.buttonDiv}><button><FontAwesomeIcon icon={faSquareCheck} className={styles.serviceIcon}/></button></div>
                <p className={styles.serviceTitle}>MONEY BACK GUARANTEE</p>
                <p>We return money within 30 days</p>
            </div>
        </div>
    )
}

export default ServicesList;