function loadCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function addTocart(product) {
    const id = product.id;
    let wishlist = JSON.parse(localStorage.getItem('cart')) || [];
    if (wishlist.some(item => item.id === id)) {
        return; // already in wishlist, do nothing
    }
    wishlist.push(product);
    localStorage.setItem('cart', JSON.stringify(wishlist));
}

export { loadCart, addTocart };