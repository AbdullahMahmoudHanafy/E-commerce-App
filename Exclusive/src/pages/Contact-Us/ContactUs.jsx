import styles from './ContactUs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const contactMethods = [
  {
    title: "Call To Us",
    icon: faPhone,
    details: [
      "We are available 24/7, 7 days a week.",
      "Phone: +8801611112222"
    ]
  },
  {
    title: "Write To Us",
    icon: faEnvelope,
    details: [
      "Fill out our form and we will contact you within 24 hours.",
      "Emails: customer@exclusive.com",
      "Emails: support@exclusive.com"
    ]
  }
];

function ContactUs() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.colDiv}>
                <p className={styles.blackText}>
                    <a href="http://localhost:5173/">Home</a> / Contact
                </p>
                <div className={styles.contentDiv}>
                    <div className={styles.infoDiv}>
                        {contactMethods.map(({ title, icon, details }, index) => (
                            <>
                                <header className={styles.infoHeader}>
                                    <span className={styles.iconDiv}>
                                    <FontAwesomeIcon icon={icon} className={styles.icon} />
                                    </span>
                                    <h2 className={styles.infoTitle}>{title}</h2>
                                </header>

                                {details.map((text, i) => (
                                    <p key={i}>{text}</p>
                                ))}

                                {index === 0 && <hr />} {/* Divider between sections */}
                            </>
                        ))}
                    </div>
                    <div className={styles.formDiv}>
                        <div className={styles.personalInfoDiv}>
                            <input type="text" placeholder="Your Name" className={styles.inputField} required />
                            <input type="email" placeholder="Your Email" className={styles.inputField} required />
                            <input type="text" placeholder="Your Phone" className={styles.inputField} required />
                        </div>
                        <textarea placeholder="Your Message" className={styles.textArea} required></textarea>
                        <button type="submit" className={styles.submitButton}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;