import styles from './ProductCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';

function ProductCard({name}) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.card}>
                <img src="/images/gamePad.png" alt="Product" className={styles.image} />
                <div className={styles.addToCart}>Add to Cart</div>
                <div className={styles.discountBadge}>-20%</div>

                <button className={styles.button}>
                    <FontAwesomeIcon icon={faHeart} className={styles.icon}/>
                </button>
                <button className={styles.button} id={styles.seenButton}>
                    <FontAwesomeIcon icon={faEye} className={styles.icon}/>
                </button>
            </div>
            <div className={styles.info}>
                <p className={styles.title}>{name}</p>
                <div className={styles.priceContainer}>
                    <p className={styles.finalPrice}>$39.99</p> {/* After discount */}
                    <p className={styles.originalPrice}>$49.99</p> {/* Original price with line */}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;