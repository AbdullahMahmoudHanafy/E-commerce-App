import styles from "./ProductList.module.css";
import ProductCard from "../ProductCard/ProductCard";

function ProductList({products, wishListed = false}) {
    return (
        <div className={styles.mainContainer}> 
            {products.map((product, index) => (
                <ProductCard key={index} product={product} wishListed={wishListed}/>
            ))}
        </div>
    )
};

export default ProductList;