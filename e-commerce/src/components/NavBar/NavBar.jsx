import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function NavBar() {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <>
            <div className={styles.mainDiv}>
                <div className={styles.titleDiv}>
                    Exclusive
                </div>
                <div className={styles.pagesButtonsDiv}>
                    <button className={styles.navButton} onClick={() => handleNavigation('/')}>
                        Home
                    </button>
                    <button className={styles.navButton} onClick={() => handleNavigation('/contact')}>
                        Contact
                    </button>
                    <button className={styles.navButton} onClick={() => handleNavigation('/about')}>
                        About
                    </button>
                    <button className={styles.navButton} onClick={() => handleNavigation('/sign-up')}>
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