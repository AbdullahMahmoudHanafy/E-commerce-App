import styles from './Account.module.css';
import { useEffect, useState } from 'react';
import { getCurrentUser, setCurrentUser } from '../../services';

function Account() {
    const titlesList = [{title: "Manage My Account", subTitles: ["My Profile", "Address Book", "My Payment Options"]},
    {title: "My Orders", subTitles: ["My Returns", "My Cancellations"]},
    {title: "My Wishlists", subTitles: []}]

    const [selectedSubtitle, setSelectedSubtitle] = useState("My Profile");

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: ""
    });

    const [userName, setUserName] = useState("");

    const [passwordFields, setPasswordFields] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    useEffect(() => {
        const user = getCurrentUser();
        setUserData(user);
        setUserName(user.firstName);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordFields(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        // Password check logic
        if (passwordFields.currentPassword) {
            if (passwordFields.currentPassword !== userData.password) {
                alert("Current password is incorrect.");
                return;
            }
            if (passwordFields.newPassword !== passwordFields.confirmPassword) {
                alert("New passwords do not match.");
                return;
            }
            // Update password
            console.log(passwordFields)
            userData.password = passwordFields.newPassword;
        }
        setCurrentUser(userData);
        setUserName(userData.firstName);
        alert("Profile updated!");
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.breadcrumb}>
                <p className={styles.blackText}><a href="http://localhost:5173/">Home</a> / Account</p>
                <div className={styles.nameDiv}>
                    <p className={styles.blackText}>welcome! </p>
                    <p className={styles.name}>{userName}!</p>
                </div>
            </div>
            <div className={styles.contentDiv}>
                <div className={styles.navigatorsDiv}>
                    <div>
                        {titlesList.map((title, index) => (
                        <div className={styles.titleDiv} key={index}>
                            <p className={styles.title}>{title.title}</p>
                            {title.subTitles.map((subtitle, subIndex) => (
                            <p
                                key={subIndex}
                                className={`${styles.subtitle} ${selectedSubtitle === subtitle ? styles.selectedSubtitle : ""}`}
                                onClick={() => setSelectedSubtitle(subtitle)}
                            >
                                {subtitle}
                            </p>
                            ))}
                        </div>
                        ))}
                    </div>
                </div>
                <div className={styles.accountDiv}>
                    <p className={styles.editTitle}>Edit Your Profile</p>
                    <div className={styles.personalInfo}>
                        {[
                            { label: "First Name", name: "firstName", type: "text" },
                            { label: "Last Name", name: "lastName", type: "text" },
                            { label: "Email", name: "email", type: "text", disabled: true },
                            { label: "Address", name: "address", type: "text" }
                        ].map((field, index) => (
                            <div className={styles.inputDiv} key={index}>
                            <p className={styles.inputTitle}>{field.label}</p>
                            <input
                                className={styles.input}
                                name={field.name}
                                type={field.type}
                                disabled={field.disabled || false}
                                value={userData[field.name] || ""}
                                onChange={handleInputChange}
                            />
                            </div>
                        ))}
                    </div>
                    <div className={styles.passwordDiv}>
                        <p className={styles.inputTitle}>Password Change</p>
                        {[
                            { name: "currentPassword", placeholder: "Current Password" },
                            { name: "newPassword", placeholder: "New Password" },
                            { name: "confirmPassword", placeholder: "Confirm New Password" }
                        ].map((field, index) => (
                            <input
                                key={index}
                                type="password"
                                name={field.name}
                                className={styles.input}
                                placeholder={field.placeholder}
                                value={passwordFields[field.name]}
                                onChange={handlePasswordChange}
                            />
                        ))}
                    </div>
                    <div className={styles.buttonsDiv}>
                        <button>Cancel</button>
                        <button id={styles.saveButton} onClick={handleSave}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account