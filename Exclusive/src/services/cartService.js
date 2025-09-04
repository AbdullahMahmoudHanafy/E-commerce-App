function loadCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function updateCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addTocart(product, amount = 1) {
    const id = product.id;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.some(item => item.id === id)) {
        cart = cart.map(item => item.id === id ? { ...item, amount: item.amount + amount } : item);
        localStorage.setItem('cart', JSON.stringify(cart));
        return;
    }
    product.amount = amount;
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromcart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function clearCart() {
    localStorage.removeItem('cart');
}

export { loadCart, addTocart, removeFromcart, updateCart, clearCart };