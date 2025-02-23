document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('registerButton');
    const loginButton = document.getElementById('loginButton');
    const loginForm = document.getElementById('log');
    const registerForm = document.getElementById('reg');

    registerButton.addEventListener('click', function() {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    loginButton.addEventListener('click', function() {
        loginForm.style.display = "block";
        registerForm.style.display = "none";

    });


    
});