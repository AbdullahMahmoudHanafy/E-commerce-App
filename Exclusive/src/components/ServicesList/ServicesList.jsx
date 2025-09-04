import styles from './ServicesList.module.css';
import { faTruck, faHeadphones, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { ServiceIcon } from '../';

function ServicesList() {
    return (
        <div className={styles.serviceSection}>
            <div className={styles.featureDiv}>
                <ServiceIcon icon={faTruck}/>
                <p className={styles.serviceTitle}>FREE AND FAST DELIVERY</p>
                <p>Free delivery for all orders over $140</p>
            </div>
            <div className={styles.featureDiv}>
                <ServiceIcon icon={faHeadphones}/>
                <p className={styles.serviceTitle}>24/7 CUSTOMER SERVICE</p>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div className={styles.featureDiv}>
                <ServiceIcon icon={faSquareCheck}/>
                <p className={styles.serviceTitle}>MONEY BACK GUARANTEE</p>
                <p>We return money within 30 days</p>
            </div>
        </div>
    )
}

export default ServicesList;