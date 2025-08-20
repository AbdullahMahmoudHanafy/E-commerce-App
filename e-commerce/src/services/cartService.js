function loadCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function addTocart(product, amount = 1) {
    const id = product.id;
    let wishlist = JSON.parse(localStorage.getItem('cart')) || [];
    if (wishlist.some(item => item.id === id)) {
        return; // already in wishlist, do nothing
    }
    product.amount = amount;
    wishlist.push(product);
    localStorage.setItem('cart', JSON.stringify(wishlist));
}

function removeFromcart(productId) {
    let wishlist = JSON.parse(localStorage.getItem('cart')) || [];
    wishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(wishlist));
}

export { loadCart, addTocart, removeFromcart };