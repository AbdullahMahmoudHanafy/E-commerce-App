import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
    return (
        <>
            <div className={styles.mainDiv}>
                <div className={styles.titleDiv}>
                    Exclusive
                </div>
                <div className={styles.pagesButtonsDiv}>
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
                <div className={styles.actionsDiv}>
                    <div className={styles.searchDiv}>
                        <input type="search" placeholder="What are you looking for?"/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} id={styles.searchIcon}/>
                    </div>
                    <FontAwesomeIcon icon={faHeart} className={styles.icon}/>
                    <FontAwesomeIcon icon={faCartShopping} className={styles.icon}/>
                </div>
                
            </div>
            <hr id={styles.hr}/>
        </>
    );
}

export default NavBar;