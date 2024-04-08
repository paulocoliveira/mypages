document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    var username = document.getElementById("username").value;
    var userType;
    
    if (username == "admin"){
        userType = "adminUser"
    } else if (username == "superadmin"){
        userType = "superAdminUser"
    } else if (username == "regularUser"){
        userType = "regularUser"
    }
    window.location.href = "home.html?userType=" + userType;
});
