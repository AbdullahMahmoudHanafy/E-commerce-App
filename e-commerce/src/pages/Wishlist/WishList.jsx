import styles from "./WishList.module.css";
import { ProductList } from "../../components";
import { useEffect, useState } from "react";
import { removeFromWishlistAndRefresh, loadWishlist, saveToWishlistAndRefresh } from "../../services";

function WishList() {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        setWishlist(loadWishlist());
    }, []);

    function saveToWishlist(product) {
        setWishlist(saveToWishlistAndRefresh(product));
    }

    function removeFromWishlist(productId) {
        setWishlist(removeFromWishlistAndRefresh(productId));
    }
    
    const [products, setProducts] = useState(null);
    const [techProducts, setTechProducts] = useState(null);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.json();
        })
        .then(json => {
            setProducts(json);
            setTechProducts(json.filter(item => item.category === "electronics").slice(0, 5));
        })
        .catch(err => console.error("Fetch error:", err));
    }, []);
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
            {products && <ProductList products={wishlist} wishListed={true} onRemove={removeFromWishlist}/> }
            <div className={styles.sectionTitle}>
                <div className={styles.titleContainer}>
                    <div className={styles.dummyDiv}></div>
                    <p className={styles.recommendedTitle}>Just For You</p>
                </div>
                <button className={styles.headerButton}>See All</button>
            </div>
            {products && <ProductList products={techProducts} onAddToWishlist={saveToWishlist}/>}
        </div>
    );
}

export default WishList;