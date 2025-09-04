import styles from './ProductCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import { addTocart } from '../../services';

function ProductCard({product, wishListed = false, onRemove = () => {}, onAddToWishlist = () => {}}) {
    const navigate = useNavigate();

    function handleProductClick() {
        navigate(`/products/${product.id}`);
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.card}>
                <img src={product.image} alt="Product" className={styles.image}  onClick={handleProductClick}/>
                <div className={styles.addToCart} onClick={() => addTocart(product)}>Add to Cart</div>
                {!wishListed && (
                    <>
                        <button className={styles.button}>
                            <FontAwesomeIcon icon={faHeart} className={styles.icon} onClick={() => onAddToWishlist(product)}/>
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
                <p className={styles.title}>
                    {product.title.length > 20 
                    ? product.title.slice(0, 20) + "..." 
                    : product.title}
                </p>
                <div className={styles.priceContainer}>
                    <p className={styles.finalPrice}>${product.price}</p>
                </div>
                {!wishListed && (
                    <div className={styles.stars}>
                        {Array.from({ length: 5 }, (_, index) => {
                            if (product.rating['rate'] >= index + 1) {
                            return <FontAwesomeIcon key={index} icon={solidStar} />;
                            } else if (product.rating['rate'] > index && product.rating['rate'] < index + 1) {
                            return <FontAwesomeIcon key={index} icon={faStarHalfAlt} />;
                            } else {
                            return <FontAwesomeIcon key={index} icon={regularStar} />;
                            }
                        })}
                        <span className={styles.ratingCount}>  ({product.rating['count']})</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCard;