import styles from "./Products.module.css";
import { ProductList } from "../../components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Products() {
    const location = useLocation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (location.state) {
            setProducts(location.state.products);
        }else {
            fetch("https://fakestoreapi.com/products")
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                return res.json();
            })
            .then(json => {
                setProducts(json);
            })
            .catch(err => console.error("Fetch error:", err));
        }
    }, []);
    return (
        <div className={styles.mainContainer}>
            <ProductList products={products} />
        </div>
    )
}

export default Products