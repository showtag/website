function closeLogin() {
    var login = document.getElementById("login-form");
    login.style.display = "none";
}

function openLogin() {
    var login = document.getElementById("login-form");
    if (login.style.display === "none") {
        login.style.display = "block";
    } else {
        login.style.display = "none";
    }
}