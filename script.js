document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "traveler" && password === "travel123") {
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});