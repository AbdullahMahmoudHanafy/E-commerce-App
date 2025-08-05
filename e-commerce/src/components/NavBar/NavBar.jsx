import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
    return (
        <div className={styles.mainDev}>
            <div className={styles.titleDev}>
                Exclusive
            </div>
            <div className={styles.pagesButtonsDev}>
                <button className={styles.navButton}>
                    Home
                </button>
                <button className={styles.navButton}>
                    Contact
                </button>
                <button className={styles.navButton}>
                    About
                </button>
                <button className={styles.navButton}>
                    Sign Up
                </button>
            </div>
            <div className={styles.actionsDev}>
                <div className={styles.searchDev}>
                    <input type="search" placeholder="What are you looking for?"/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} id={styles.searchIcon}/>
                </div>
                <FontAwesomeIcon icon={faHeart} className={styles.icon}/>
                <FontAwesomeIcon icon={faCartShopping} className={styles.icon}/>
            </div>
        </div>
    );
}

export default NavBar;