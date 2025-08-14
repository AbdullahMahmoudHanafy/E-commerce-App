import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faTruck, faHeadphones, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { ProductCard } from '../../components';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveToWishlist, getAllProducts } from '../../services';

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

    const [products, setProducts] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const allProducts = await getAllProducts();
            setData(allProducts);
            setProducts(allProducts.slice(0, 10));
        }
        fetchData();
    }, []);

    const navigate = useNavigate();
    function navigateToProductsPage() {
        navigate('/products', { state: { products: data } });
    }
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
                    {products && products.map((product, index) => (
                        <ProductCard key={index} product={product} onAddToWishlist={saveToWishlist}/>
                    ))}
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.viewAllButton} onClick={navigateToProductsPage}>View All Products</button>
            </div>
        </div>
        <div className={styles.thirdSection}>
            <div className={styles.sectionTitle}>
                <div className={styles.dummyDiv}></div>
                <p className={styles.redTitle}>Featured</p>
            </div>
            <div className={styles.secondRowTitlesContainer}>
                <p className={styles.secondRowTitles}>New Arrival</p>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.bigImg} src="/images/playStationFrame.png" alt="" />
                <img className={styles.mediumImg} src="/images/womenFrame.png" alt="" />
                <img src="/images/speakersFrame.png" alt="" />
                <img src="/images/perfumeFrame.png" alt="" />
            </div>
        </div>
        <div className={styles.serviceSection}>
            <div className={styles.featureDiv}>
                <div className={styles.buttonDiv}><button><FontAwesomeIcon icon={faTruck} className={styles.serviceIcon}/></button></div>
                <p className={styles.serviceTitle}>FREE AND FAST DELIVERY</p>
                <p>Free delivery for all orders over $140</p>
            </div>
            <div className={styles.featureDiv}>
                <div className={styles.buttonDiv}><button><FontAwesomeIcon icon={faHeadphones} className={styles.serviceIcon}/></button></div>
                <p className={styles.serviceTitle}>24/7 CUSTOMER SERVICE</p>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div className={styles.featureDiv}>
                <div className={styles.buttonDiv}><button><FontAwesomeIcon icon={faSquareCheck} className={styles.serviceIcon}/></button></div>
                <p className={styles.serviceTitle}>MONEY BACK GUARANTEE</p>
                <p>We return money within 30 days</p>
            </div>
        </div>
    </div>
  );
}

export default Home;