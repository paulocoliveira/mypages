function goToEtapa2() {
    window.location.href = 'etapa2.html';
}

function goToEtapa3() {
    window.location.href = 'etapa3.html';
}

document.addEventListener('DOMContentLoaded', function() {
    var formEtapa3 = document.getElementById('formEtapa3');
    if (formEtapa3) {
        formEtapa3.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = 'final.html';
        });
    }
});
