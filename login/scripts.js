// Supondo que o tipo de usuário é determinado por alguma lógica aqui
document.addEventListener("DOMContentLoaded", function() {
    var userType = "regularUser"; // Ou "adminUser"
    var messageElement = document.getElementById("message");

    if(userType === "adminUser") {
        messageElement.textContent = "Bem-vindo, administrador!";
    } else {
        messageElement.textContent = "Bem-vindo, usuário!";
    }
});
