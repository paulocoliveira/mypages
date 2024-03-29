function simulateAction(elementId, message) {
    document.getElementById(elementId).textContent = 'Processando...';
    setTimeout(() => {
        document.getElementById(elementId).textContent = message;
        if (elementId === "email-status") {
            document.title = "Email enviado com sucesso"; // Altera o título da página
        }
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

function checkAgreement() {
    const checkbox = document.getElementById('agree-terms');
    const messageElement = document.createElement('p');

    if (checkbox.checked) {
        messageElement.textContent = 'Você concordou com os termos.';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'É necessário concordar com os termos para continuar.';
        messageElement.style.color = 'red';
    }

    document.getElementById('terms-section').appendChild(messageElement);
}

document.getElementById('agree-button').addEventListener('click', function() {
    setTimeout(function() {
        const checkbox = document.getElementById('agree-terms');
        checkbox.checked = true;
        document.getElementById('confirm-button').disabled = false; // Habilita o segundo botão
    }, 4000); // Adiciona um delay de 4 segundos
});

document.getElementById('confirm-button').addEventListener('click', function() {
    const checkbox = document.getElementById('agree-terms');
    const messageElement = document.getElementById('terms-message');
    if (!checkbox.checked) {
        messageElement.textContent = 'É necessário concordar com os termos para continuar.';
        messageElement.style.color = 'red';
        messageElement.classList.remove('hidden');
    } else {
        messageElement.textContent = 'Você concordou com os termos com sucesso.';
        messageElement.style.color = 'green';
        messageElement.classList.remove('hidden');
    }
});


window.onload = () => {
    setTimeout(() => {
        document.body.classList.remove('preload');
        const container = document.querySelector('.container');
        if (container) {
            container.style.opacity = 1;
        }
    }, 5000); // Ajuste para 5 segundos
};