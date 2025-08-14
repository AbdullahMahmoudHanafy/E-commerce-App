function getProduct(id) {
    return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .catch(err => console.error(err));
}

function getAllProducts() {
    return fetch("https://fakestoreapi.com/products")
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.json();
        })
        .catch(err => console.error("Fetch error:", err));
}
export { getProduct, getAllProducts };