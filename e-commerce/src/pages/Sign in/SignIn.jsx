import styles from './SignIn.module.css';

function SignIn() {
    return (
        <div className={styles.mainContainer}>
            <img src="/images/Side Image.png" alt="A phone image" className={styles.sideImage}/>
            <div className={styles.formContainer}>
                <p className={styles.header}>Log in to Exclusive</p>
                <p className={styles.paragraph}>Enter your details below</p>
                <form action="">
                    <input type="email" placeholder='Email or Phone Number' className={styles.input}/>
                    <input type="password" placeholder='Password' className={styles.input}/>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.submitButton}>Log in</button>
                        <button className={styles.forgetPasswordButton}>Forget Password?</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn;