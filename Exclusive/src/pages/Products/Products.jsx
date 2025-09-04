import styles from "./Products.module.css";
import { ProductList } from "../../components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../services";
import { saveToWishlist } from "../../services";

function Products() {
    const location = useLocation();
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        if (location.state) {
            setProducts(location.state.products);
        } else {
            async function fetchData() {
                const allProducts = await getAllProducts();
                setProducts(allProducts);
            }
            fetchData();
        }
    }, []);
    return (
        <div className={styles.mainContainer}>
            <p className={styles.blackText}>
                <a href="http://localhost:5173/">Home</a> / Contact
            </p>
            <ProductList products={products} onAddToWishlist={saveToWishlist} />
        </div>
    )
}

export default Products