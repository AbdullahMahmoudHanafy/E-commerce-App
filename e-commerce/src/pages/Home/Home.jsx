import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { ProductCard } from '../../components';
import { useRef } from 'react';

function Home() {
    const scrollRef = useRef();

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 300; // adjust based on card width
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    const products = [
        { name: "HAVIT HV-G92 Gamepad", rating: 4.5, ratingCount: 150, price: 120, discount: 40, lastPrice: 160, image: "/images/products/gamepad.png" },
        { name: "AK-900 Wired Keyboard", rating: 4.0, ratingCount: 200, price: 960, discount: 35, lastPrice: 1160, image: "/images/products/keyboard.png" },
        { name: "IPS LCD Gaming Monitor", rating: 4.2, ratingCount: 180, price: 370, discount: 30, lastPrice: 400, image: "/images/products/ipsscreen.png" },
        { name: "S-Series Comfort Chair ", rating: 4.6, ratingCount: 99, price: 375, discount: 25, lastPrice: 400, image: "/images/products/chair.png" },
        { name: "IPS LCD Gaming Monitor", rating: 4.2, ratingCount: 180, price: 370, discount: 30, lastPrice: 400, image: "/images/products/ipsscreen.png" },
        { name: "HAVIT HV-G92 Gamepad", rating: 4.5, ratingCount: 150, price: 120, discount: 40, lastPrice: 160, image: "/images/products/gamepad.png" },
        { name: "AK-900 Wired Keyboard", rating: 4.0, ratingCount: 200, price: 960, discount: 35, lastPrice: 1160, image: "/images/products/keyboard.png" },
        { name: "IPS LCD Gaming Monitor", rating: 4.2, ratingCount: 180, price: 370, discount: 30, lastPrice: 400, image: "/images/products/ipsscreen.png" },
        { name: "S-Series Comfort Chair ", rating: 4.6, ratingCount: 99, price: 375, discount: 25, lastPrice: 400, image: "/images/products/chair.png" },
        { name: "IPS LCD Gaming Monitor", rating: 4.2, ratingCount: 180, price: 370, discount: 30, lastPrice: 400, image: "/images/products/ipsscreen.png" }
    ]
  return (
    <div className={styles.home}>
        <div className={styles.firstSection}>
            <div className={styles.leftContainer}>
                <button className={styles.titlesWithArrow}>
                    <p className={styles.leftSideTitle}>Woman’s Fashion</p>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button className={styles.titlesWithArrow}>
                    <p className={styles.leftSideTitle}>Men’s Fashion</p>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button className={styles.titlesWithoutArrow}><p className={styles.leftSideTitle}>Electronics</p></button>
                <button className={styles.titlesWithoutArrow}><p className={styles.leftSideTitle}>Home & Lifestyle</p></button>
                <button className={styles.titlesWithoutArrow}><p className={styles.leftSideTitle}>Medicine</p></button>
                <button className={styles.titlesWithoutArrow}><p className={styles.leftSideTitle}>Sports & Outdoor</p></button>
                <button className={styles.titlesWithoutArrow}><p className={styles.leftSideTitle}>Baby’s & Toys</p></button>
                <button className={styles.titlesWithoutArrow}><p className={styles.leftSideTitle}>Groceries & Pets</p></button>
                <button className={styles.titlesWithoutArrow}><p className={styles.leftSideTitle}>Health & Beauty</p></button>            
            </div>
            <div className={styles.verticalLine}></div>
            <img className={styles.rightSideImg} src="/images/rightSideImg.png" alt="Iphone offer image" />
        </div>
        <div className={styles.secondSection}>
            <div className={styles.sectionTitle}>
                <div className={styles.dummyDiv}></div>
                <p className={styles.redTitle}>Today's</p>
            </div>
            <div className={styles.secondRow}>
                <div className={styles.secondRowTitlesContainer}>
                    <p className={styles.secondRowTitles}>Flash Sales</p>
                    <p className={styles.secondRowTitles}>03<p className={styles.redMarkers}> : </p>23<p className={styles.redMarkers}> : </p>19<p className={styles.redMarkers}> : </p>56</p>
                </div>
                <div className={styles.navigators}>
                    <button className={styles.navigationButton} onClick={() => scroll('left')}><FontAwesomeIcon icon={faAngleLeft} /></button>
                    <button className={styles.navigationButton} onClick={() => scroll('right')}><FontAwesomeIcon icon={faAngleRight} /></button>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.productCardsContainer} ref={scrollRef}>
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product}/>
                    ))}
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.viewAllButton}>View All Products</button>
            </div>
        </div>
    </div>
  );
}

export default Home;