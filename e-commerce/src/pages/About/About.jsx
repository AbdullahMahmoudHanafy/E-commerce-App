import styles from './About.module.css';
import { ServicesList } from '../../components';

function About() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.colDiv}>
                <p className={styles.blackText}>
                    <a href="http://localhost:5173/">Home</a> / About
                </p>
                <div className={styles.storyDiv}>
                    <div className={styles.textDiv}>
                        <h3 className={styles.storyTitle}>Our Story</h3>
                        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <img src="/images/aboutImg.png" alt="" />
                </div>
                <ServicesList />
            </div>
        </div>
    )
}

export default About;