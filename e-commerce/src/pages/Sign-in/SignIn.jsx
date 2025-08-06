import styles from './SignIn.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page refresh

        try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            email: emailOrPhone,
            password: password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Login success:', data);
            navigate('/');
        } else {
            console.error('Login failed:', data.message);
            alert('Invalid credentials');
        }
        } catch (error) {
        console.error('Error during login:', error);
        }
    };

    return (
        <div className={styles.mainContainer}>
            <img src="/images/Side Image.png" alt="A phone image" className={styles.sideImage}/>
            <div className={styles.formContainer}>
                <p className={styles.header}>Log in to Exclusive</p>
                <p className={styles.paragraph}>Enter your details below</p>
                <form action="" onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email or Phone Number' className={styles.input} value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} required/>
                    <input type="password" placeholder='Password' className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <div className={styles.buttonsContainer}>
                        <button type='submit' className={styles.submitButton}>Log in</button>
                        <button className={styles.forgetPasswordButton}>Forget Password?</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn;