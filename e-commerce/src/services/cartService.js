function loadCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

export { loadCart };