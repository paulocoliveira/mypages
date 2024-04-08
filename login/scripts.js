document.addEventListener("DOMContentLoaded", function() {
    // Obtém o userType da URL
    var params = new URLSearchParams(window.location.search);
    var userType = params.get("userType"); // "adminUser" ou "regularUser"

    var messageElement = document.getElementById("message");

    if(userType === "adminUser") {
        messageElement.textContent = "Bem-vindo, administrador!";
    } else {
        messageElement.textContent = "Bem-vindo, usuário!";
    }
});
