import styles from './ServiceIcon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServiceIcon({ icon}) {
    return (
        <div className={styles.buttonDiv}>
            <button><FontAwesomeIcon icon={icon} className={styles.serviceIcon}/></button>
        </div>
    )
}

export default ServiceIcon;