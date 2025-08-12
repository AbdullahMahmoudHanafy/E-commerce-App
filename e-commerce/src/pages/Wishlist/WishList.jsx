import styles from "./WishList.module.css";
import { ProductCard, ProductList } from "../../components";
import { useEffect, useState } from "react";

function WishList() {
    const [wishlist, setWishlist] = useState([]);

    function loadWishlist() {
        return JSON.parse(localStorage.getItem("wishlist")) || [];
    }

    useEffect(() => {
        setWishlist(loadWishlist());
    }, []);

    function removeFromWishlist(productId) {
        const updated = wishlist.filter(item => item.id !== productId);
        setWishlist(updated);
        localStorage.setItem("wishlist", JSON.stringify(updated));
    }
    function saveToWishlist(product) {
        let newWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        newWishlist.push(product);
        setWishlist(newWishlist);
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    }
    const products = [
        { name: "HAVIT HV-G92 Gamepad", rating: 4.5, ratingCount: 150, price: 120, discount: 40, lastPrice: 160, image: "/images/products/gamepad.png", id: 1 },
        { name: "AK-900 Wired Keyboard", rating: 4.0, ratingCount: 200, price: 960, discount: 35, lastPrice: 1160, image: "/images/products/keyboard.png", id: 2 },
        { name: "IPS LCD Gaming Monitor", rating: 4.2, ratingCount: 180, price: 370, discount: 30, lastPrice: 400, image: "/images/products/ipsscreen.png", id: 3 },
        { name: "S-Series Comfort Chair ", rating: 4.6, ratingCount: 99, price: 375, discount: 25, lastPrice: 400, image: "/images/products/chair.png", id: 4 },
        { name: "IPS LCD Gaming Monitor", rating: 4.2, ratingCount: 180, price: 370, discount: 30, lastPrice: 400, image: "/images/products/ipsscreen.png", id: 5 },
    ]
    return (
        <div className={styles.mainContainer}>
            <div className={styles.headerContainer}>
                <p className={styles.header}>
                    Wishlist ({wishlist.length})
                </p>
                <button className={styles.headerButton}>
                    Move All To Bag
                </button>
            </div>
            <ProductList products={wishlist} wishListed={true} onRemove={removeFromWishlist}/>
            <div className={styles.sectionTitle}>
                <div className={styles.titleContainer}>
                    <div className={styles.dummyDiv}></div>
                    <p className={styles.recommendedTitle}>Just For You</p>
                </div>
                <button className={styles.headerButton}>See All</button>
            </div>
            <ProductList products={products} onAddToWishlist={saveToWishlist}/>
        </div>
    );
}

export default WishList;