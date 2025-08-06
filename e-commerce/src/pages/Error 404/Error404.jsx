import styles from './Error404.module.css';
function Error404() {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.mainError}>404 Not Found</h1>
            <p className={styles.paragraph}>Your visited page not found. You may go home page.</p>
            <button className={styles.navigateButton}>Back to home page</button>
        </div>
    );
}

export default Error404;