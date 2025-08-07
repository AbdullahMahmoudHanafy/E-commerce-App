import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Home() {
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
                    <p className={styles.secondRowTitles}>03<p className={styles.redMarkers}>:</p>23<p className={styles.redMarkers}>:</p>19<p className={styles.redMarkers}>:</p>56</p>
                </div>
                <div className={styles.navigators}>
                    <button className={styles.navigationButton}><FontAwesomeIcon icon={faAngleLeft} /></button>
                    <button className={styles.navigationButton}><FontAwesomeIcon icon={faAngleRight} /></button>
                </div>
            </div>
            <div className={styles.content}>

            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.viewAllButton}>View All Products</button>
            </div>
        </div>
    </div>
  );
}

export default Home;