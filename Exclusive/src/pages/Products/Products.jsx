import styles from "./Products.module.css";
import { ProductList } from "../../components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../services";

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
            <ProductList products={products} />
        </div>
    )
}

export default Products