import styles from "./CartCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function CartCard({ product, onRemove, onUpdateAmount }) {
    const [amount, setAmount] = useState(product.amount);
    const [totalProductPrice, setTotalProductPrice] = useState(0);

    useEffect(() => {
        setTotalProductPrice(parseFloat((product.price * amount).toFixed(2)));
    }, [product.price, amount]);

    const handleAmountChange = (e) => {
        const newAmount = Math.max(1, Number(e.target.value));
        setAmount(newAmount);
        onUpdateAmount(product.id, newAmount);
    };

    const shortTitle =
        product.title.length > 10 ? product.title.slice(0, 10) + "..." : product.title;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.productContainer}>
                <div className={styles.imageContainer}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon
                            icon={faTrashCan}
                            className={styles.icon}
                            onClick={() => onRemove(product.id)}
                        />
                    </div>
                    <img src={product.image} alt="Product" />
                </div>
                <p className={styles.name}>{shortTitle}</p>
            </div>

            <p>${product.price}</p>

            <input
                type="number"
                className={styles.input}
                value={amount}
                min={1}
                onChange={handleAmountChange}
            />

            <p>${totalProductPrice}</p>
        </div>
    );
}

export default CartCard;
