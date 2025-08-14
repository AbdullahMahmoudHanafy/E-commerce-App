function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}

function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export { getCurrentUser, setCurrentUser };