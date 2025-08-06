import styles from './SignUp.module.css';

function SignUp() {
    return (
        <div className={styles.mainContainer}>
            <img src="/images/Side Image.png" alt="A phone image" className={styles.sideImage}/>
            <div className={styles.formContainer}>
                <p className={styles.header}>Create an account</p>
                <p className={styles.paragraph}>Enter your details below</p>
                <form action="">
                    <input type="name" placeholder='Name' className={styles.input}/>
                    <input type="email" placeholder='Email or Phone Number' className={styles.input}/>
                    <input type="password" placeholder='Password' className={styles.input}/>
                    <input type="password" placeholder='Confirm password' className={styles.input}/>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.submitButton}>Create Account</button>
                        <button className={styles.signUpWithGoogle}>
                            <img src="/images/googleLogo.webp" alt="Google logo image" id={styles.googleLogo}/>
                            Sign up with Google
                        </button>
                    </div>
                </form>
                <div className={styles.footerContainer}>
                    <p className={styles.paragraph}>
                        Already have an account? <a href="/sign-in" className={styles.link}>Log in</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;