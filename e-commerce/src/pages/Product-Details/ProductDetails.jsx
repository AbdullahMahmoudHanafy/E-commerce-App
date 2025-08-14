import styles from './ProductDetails.module.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStarHalfAlt, faHeart, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar, faTruck } from '@fortawesome/free-regular-svg-icons';
import {ProductList} from '../../components';
import { saveToWishlist } from '../../services';

function ProductDetails() {
    const [selectedColor, setSelectedColor] = useState("blue");
    const [selectedSize, setSelectedSize] = useState("M");
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams(); // get ID from URL
    const [product, setProduct] = useState(null);
    const [suggestedProducts, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
                const category = data.category;
                fetch("https://fakestoreapi.com/products")
                .then(res => {
                    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                    return res.json();
                })
                .then(json => {
                    const filteredProducts = json.filter(product => product.category === category).slice(0, 5);
                    console.log(filteredProducts);
                    setProducts(filteredProducts);
                })
                .catch(err => console.error("Fetch error:", err));
            })
            .catch(err => console.error(err));
    }, [id]);

    const sizes = ["XS", "S", "M", "L", "XL"];

    function incrementQuantity() {
        setQuantity(quantity + 1);
    }
    function decrementQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        product ? (
            <div className={styles.mainContainer}>
                <div className={styles.productContainer}>
                    <div className={styles.imageContainer}>
                        <img src={product.image} alt={product.title} className={styles.productImg}/>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.title}>{product.title}</p>
                        <div className={styles.ratingDiv}>
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
                                <p className={styles.ratingCount}>({product.rating['count']} Reviews) | </p>
                                <p className={styles.inStock}>In Stock</p>
                            </div>
                        </div>
                        <p className={styles.price}>${product.price}</p>
                        <p className={styles.description}>{product.description}</p>
                        <hr className={styles.separator}/>
                        <div className={styles.chooseDiv}>
                            <p>Colors: </p>
                            <div className={styles.colorsButtons}>
                                <button
                                id={styles.blue}
                                className={`${styles.colorButton} ${
                                    selectedColor === "blue" ? styles.selectedColor : ""
                                }`}
                                onClick={() => setSelectedColor("blue")}
                                ></button>
                                <button
                                id={styles.red}
                                className={`${styles.colorButton} ${
                                    selectedColor === "red" ? styles.selectedColor : ""
                                }`}
                                onClick={() => setSelectedColor("red")}
                                ></button>
                            </div>
                        </div>
                        <div className={styles.chooseDiv}>
                            <p>Size: </p>
                            <div className={styles.sizesButtons}>
                                {sizes.map((size) => (
                                <button
                                    key={size}
                                    id={styles[size]}
                                    className={`${styles.baseButton} ${
                                        selectedSize === size ? styles.selectedSize : ""
                                    }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                                ))}
                            </div>
                        </div>
                        <div className={styles.buyDiv}>
                            <div className={styles.quantityDiv}>
                                <button id={styles.minus} onClick={decrementQuantity}>
                                    -
                                </button>
                                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                                <button id={styles.plus} onClick={incrementQuantity}>
                                    +
                                </button>
                            </div>
                            <button className={styles.buyButton}>Buy Now</button>
                            <button className={styles.baseButton} onClick={saveToWishlist(product)}>
                                <FontAwesomeIcon icon={faHeart} className={styles.wishlistIcon} />
                            </button>
                        </div>
                        <div className={styles.serviceDiv}>
                            <div className={styles.serviceDetails}>
                                <FontAwesomeIcon icon={faTruck} className={styles.serviceIcon}/>
                                <div className={styles.textDiv}>
                                    <p className={styles.serviceTitle}>Free Delivery</p>
                                    <p>Enter your postal code for Delivery Availability</p>
                                </div> 
                            </div>
                            <hr />
                            <div className={styles.serviceDetails}>
                                <FontAwesomeIcon icon={faArrowsRotate} className={styles.serviceIcon}/>
                                <div className={styles.textDiv}>
                                    <p className={styles.serviceTitle}>Return Delivery</p>
                                    <p>Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.recommendedContainer}>
                    <div className={styles.titleContainer}>
                        <div className={styles.dummyDiv}></div>
                        <p className={styles.recommendedTitle}>Just For You</p>
                    </div>
                    <ProductList products={suggestedProducts} saveToWishlist={saveToWishlist}/>
                </div>
            </div>
        ) : (
            <p>Loading...</p>
        )
    );
}

export default ProductDetails