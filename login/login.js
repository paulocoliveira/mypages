document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    var username = document.getElementById("username").value;
    var userType = username === "admin" ? "adminUser" : "regularUser";
    window.location.href = "home.html?userType=" + userType;
});
