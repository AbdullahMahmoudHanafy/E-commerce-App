function loadWishlist() {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveToWishlist(product) {
    const id = product.id;
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (wishlist.some(item => item.id === id)) {
        return; // already in wishlist, do nothing
    }
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function removeFromWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function removeFromWishlistAndRefresh(productId) {
    removeFromWishlist(productId);
    return loadWishlist();
}

function saveToWishlistAndRefresh(product) {
    saveToWishlist(product);
    return loadWishlist();
}

export { loadWishlist, removeFromWishlist, saveToWishlist, removeFromWishlistAndRefresh, saveToWishlistAndRefresh };