import styles from './About.module.css';
import { ServicesList, ServiceIcon } from '../../components';
import { faSackDollar, faShop, faDollarSign, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function About() {
    const details = [{
        icon: faShop,
        Number: '10.5K',
        title: 'Sallers active our site'
    },
    {
        icon: faDollarSign,
        Number: '33K',
        title: 'Mopnthly Produduct Sale'
    },
    {
        icon: faShoppingBag,
        Number: '45.5K',
        title: 'Customer active in our site'
    },
    {
        icon: faSackDollar,
        Number: '25K',
        title: 'Anual gross sale in our site'
    }]
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
                <div className={styles.detailsDiv}>
                    {
                        details.map((detail, index) => (
                            <div key={index} className={styles.detailDiv}>
                                <ServiceIcon icon={detail.icon} />
                                <div className={styles.textDetailDiv}>
                                    <h3 className={styles.numberText}>{detail.Number}</h3>
                                    <p className={styles.titleText}>{detail.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <ServicesList />
            </div>
        </div>
    )
}

export default About;