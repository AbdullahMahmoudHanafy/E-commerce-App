import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
        console.log(formData); // Log the form data to check values
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/sign-in'); // Redirect to Sign In page after form submission
    };
    return (
        <div className={styles.mainContainer}>
            <img src="/images/Side Image.png" alt="A phone image" className={styles.sideImage}/>
            <div className={styles.formContainer}>
                <p className={styles.header}>Create an account</p>
                <p className={styles.paragraph}>Enter your details below</p>
                <form action="" onSubmit={handleSubmit}>
                    <input name='name' type="name" placeholder='Name' className={styles.input} value={formData.name} onChange={handleChange} required/>
                    <input name='email' type="email" placeholder='Email or Phone Number' className={styles.input}  value={formData.email} onChange={handleChange} required/>
                    <input name='password' type="password" placeholder='Password' className={styles.input}  value={formData.password} onChange={handleChange} required/>
                    <input name='confirmPassword' type="password" placeholder='Confirm password' className={styles.input}  value={formData.confirmPassword} onChange={handleChange} required/>
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