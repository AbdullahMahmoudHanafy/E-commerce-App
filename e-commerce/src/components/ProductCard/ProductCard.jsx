import styles from './ProductCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar, faTrashCan } from '@fortawesome/free-regular-svg-icons';

function ProductCard({product, wishListed = false, onRemove = () => {}}) {
    function saveToWishlist(product) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.card}>
                <img src={product.image} alt="Product" className={styles.image} />
                <div className={styles.addToCart}>Add to Cart</div>
                <div className={styles.discountBadge}>-{product.discount}%</div>
                {!wishListed && (
                    <>
                        <button className={styles.button}>
                            <FontAwesomeIcon icon={faHeart} className={styles.icon} onClick={() => saveToWishlist(product)}/>
                        </button>
                        <button className={styles.button} id={styles.seenButton}>
                            <FontAwesomeIcon icon={faEye} className={styles.icon}/>
                        </button>
                    </>
                )}
                {wishListed &&
                    <button className={styles.button}>
                        <FontAwesomeIcon icon={faTrashCan} className={styles.icon} onClick={() => onRemove(product.id)}/>
                    </button>
                }
            </div>
            <div className={styles.info}>
                <p className={styles.title}>{product.name}</p>
                <div className={styles.priceContainer}>
                    <p className={styles.finalPrice}>${product.price}</p>
                    <p className={styles.originalPrice}>${product.lastPrice}</p>
                </div>
                {!wishListed && (
                    <div className={styles.stars}>
                        {Array.from({ length: 5 }, (_, index) => {
                            if (product.rating >= index + 1) {
                            return <FontAwesomeIcon key={index} icon={solidStar} />;
                            } else if (product.rating > index && product.rating < index + 1) {
                            return <FontAwesomeIcon key={index} icon={faStarHalfAlt} />;
                            } else {
                            return <FontAwesomeIcon key={index} icon={regularStar} />;
                            }
                        })}
                        <span className={styles.ratingCount}>  ({product.ratingCount})</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCard;