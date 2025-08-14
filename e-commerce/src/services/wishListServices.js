    function saveToWishlist(product) {
        let newWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        newWishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    }

    export { saveToWishlist };