import styles from './ProductCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

function ProductCard({name, rating = 3}) {
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
                    <p className={styles.finalPrice}>$39.99</p>
                    <p className={styles.originalPrice}>$49.99</p>
                </div>
                <div className={styles.stars}>
                    {Array.from({ length: 5 }, (_, index) => {
                        if (rating >= index + 1) {
                        return <FontAwesomeIcon key={index} icon={solidStar} />;
                        } else if (rating > index && rating < index + 1) {
                        return <FontAwesomeIcon key={index} icon={faStarHalfAlt} />;
                        } else {
                        return <FontAwesomeIcon key={index} icon={regularStar} />;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;