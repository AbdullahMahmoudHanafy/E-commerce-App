import styles from './About.module.css';
import { ServicesList, ServiceIcon } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faShop, faDollarSign, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

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
    const managers = [{
        img: '/images/managers/TomCruise.png',
        name: 'Tom Cruise',
        title: 'Founder & CEO'
    },
    {
        img: '/images/managers/WillSmith.png',
        name: 'Will Smith',
        title: 'Managing Director'
    },  
    {
        img: '/images/managers/EmmaWatson.png',
        name: 'Emma Watson',
        title: 'Head of Sales'
    }]
    
    const repeatedManagers = Array.from({ length: 5 }, (_, i) => i % 2 === 0 ? managers : [...managers].reverse()).flat();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [];
    for (let i = 0; i < repeatedManagers.length; i += 3) {
        slides.push(repeatedManagers.slice(i, i + 3));
    }
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
                <div className={styles.managersDiv}>
                    {slides[currentSlide].map((manager, index) => (
                        <div key={index} className={styles.managerDiv}>
                        <div className={styles.managerImgDiv}>
                            <img src={manager.img} alt={manager.name} />
                        </div>
                        <p id={styles.managerName}>{manager.name}</p>
                        <p className={styles.managerTitle}>{manager.title}</p>
                        <div className={styles.socialDiv}>
                            <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
                            <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialIcon} />
                            <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
                        </div>
                        </div>
                    ))}
                </div>
                <div className={styles.dotsDiv}>
                    {slides.map((_, index) => (
                        <span
                        key={index}
                        className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
                        onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
                <ServicesList />
            </div>
        </div>
    )
}

export default About;