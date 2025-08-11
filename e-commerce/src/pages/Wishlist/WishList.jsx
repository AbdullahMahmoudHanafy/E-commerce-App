import styles from "./WishList.module.css";
import { ProductCard } from "../../components";

function WishList() {
    const products = [
        { name: "HAVIT HV-G92 Gamepad", rating: 4.5, ratingCount: 150, price: 120, discount: 40, lastPrice: 160, image: "/images/products/gamepad.png" },
        { name: "AK-900 Wired Keyboard", rating: 4.0, ratingCount: 200, price: 960, discount: 35, lastPrice: 1160, image: "/images/products/keyboard.png" },
        { name: "IPS LCD Gaming Monitor", rating: 4.2, ratingCount: 180, price: 370, discount: 30, lastPrice: 400, image: "/images/products/ipsscreen.png" },
        { name: "S-Series Comfort Chair ", rating: 4.6, ratingCount: 99, price: 375, discount: 25, lastPrice: 400, image: "/images/products/chair.png" },
        { name: "IPS LCD Gaming Monitor", rating: 4.2, ratingCount: 180, price: 370, discount: 30, lastPrice: 400, image: "/images/products/ipsscreen.png" },
        { name: "HAVIT HV-G92 Gamepad", rating: 4.5, ratingCount: 150, price: 120, discount: 40, lastPrice: 160, image: "/images/products/gamepad.png" },
        { name: "AK-900 Wired Keyboard", rating: 4.0, ratingCount: 200, price: 960, discount: 35, lastPrice: 1160, image: "/images/products/keyboard.png" },
        { name: "IPS LCD Gaming Monitor", rating: 4.2, ratingCount: 180, price: 370, discount: 30, lastPrice: 400, image: "/images/products/ipsscreen.png" }
    ]
    return (
        <div className={styles.mainContainer}>
            <div className={styles.headerContainer}>
                <p className={styles.header}>
                    Wishlist
                </p>
                <button className={styles.headerButton}>
                    Move All To Bag
                </button>
            </div>
            <div className={styles.productContainer}>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
}

export default WishList;