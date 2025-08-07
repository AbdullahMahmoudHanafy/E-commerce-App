import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

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
    </div>
  );
}

export default Home;