document.getElementById("toggleButton").addEventListener("click", function() {
    var msg = document.getElementById("hiddenMessage");
    if (msg.style.display === "none") {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
});
