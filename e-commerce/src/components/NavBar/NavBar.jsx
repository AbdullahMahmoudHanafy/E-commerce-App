import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';


function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.mainDiv}>
                    <div className={styles.titleDiv}>
                        Exclusive
                    </div>
                    <div className={styles.pagesButtonsDiv}>
                        <button className={`${styles.navButton} ${location.pathname === '/' ? styles.active : ''}`}
                            onClick={() => handleNavigation('/')}>
                            Home
                        </button>
                        <button className={`${styles.navButton} ${location.pathname === '/contact' ? styles.active : ''}`}
                            onClick={() => handleNavigation('/contact')}>
                            Contact
                        </button>
                        <button className={`${styles.navButton} ${location.pathname === '/about' ? styles.active : ''}`}
                            onClick={() => handleNavigation('/about')}>
                            About
                        </button>
                        <button className={`${styles.navButton} ${location.pathname === '/sign-up' ? styles.active : ''}`}
                            onClick={() => handleNavigation('/sign-up')}>
                            Sign Up
                        </button>
                    </div>
                    <div className={styles.actionsDiv}>
                        <div className={styles.searchDiv}>
                            <input type="search" placeholder="What are you looking for?"/>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} id={styles.searchIcon}/>
                        </div>
                        <FontAwesomeIcon icon={faHeart} className={styles.icon} onClick={() => handleNavigation('/wish-list')}/>
                        <FontAwesomeIcon icon={faCartShopping} className={styles.icon} onClick={() => handleNavigation('/cart')}/>
                        <FontAwesomeIcon icon={faUser} className={styles.icon} onClick={() => handleNavigation('/account')}/>
                    </div>
                </div>
            </div>
            <hr id={styles.hr}/>
        </>
    );
}

export default NavBar;