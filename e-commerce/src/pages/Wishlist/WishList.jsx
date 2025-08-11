import styles from "./WishList.module.css";

function WishList() {
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
                
            </div>
        </div>
    );
}

export default WishList;