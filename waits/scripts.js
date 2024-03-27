function simulateAction(elementId, message) {
    document.getElementById(elementId).textContent = 'Processando...';
    setTimeout(() => {
        document.getElementById(elementId).textContent = message;
    }, 3000); // Delay de 3 segundos para simular a espera, ideal para testar Explicit e Fluent Waits.
}

function toggleElementVisibility(elementId) {
    var element = document.getElementById(elementId);
    var message = document.getElementById("message");
    // Verifica se o elemento já está visível
    if (element.classList.contains('hidden')) {
        // Remove a classe 'hidden' depois de um delay, tornando o elemento visível
        setTimeout(() => {
            element.classList.remove('hidden');
        }, 3000); // Ajuste este tempo conforme necessário
    } else {
        // Se o elemento já está visível, este bloco pode ocultá-lo imediatamente ou após um delay
        element.classList.add('hidden');
        message.classList.add("hidden")
    }
}

function changeUrl() {
    setTimeout(() => {
        history.pushState({}, '', window.location.href + '?language=python&framework=selenium');
        document.getElementById('url-status').textContent = 'URL modificada para incluir parâmetros!';
    }, 1500); // Adiciona um pequeno delay para simular a espera, podendo ser utilizado para testar o Implicit Wait.
}

function showMessage() {
    document.getElementById("message").textContent = "Você interagiu com o elemento oculto!";
    document.getElementById("message").classList.remove("hidden");
}

window.onload = () => {
    setTimeout(() => {
        document.body.classList.remove('preload');
        const container = document.querySelector('.container');
        if (container) {
            container.style.opacity = 1;
        }
    }, 5000); // Ajuste para 5 segundos
};