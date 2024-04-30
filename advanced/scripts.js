document.getElementById('range-slider').addEventListener('input', function() {
    document.getElementById('slider-value').textContent = this.value;
});

document.getElementById('switch').addEventListener('change', function() {
    var button = document.getElementById('toggle-button');
    button.disabled = !this.checked;
});

document.getElementById('primary-select').addEventListener('change', function() {
    var secondary = document.getElementById('secondary-select');
    secondary.innerHTML = '<option value="">Selecione uma opção</option>';
    if (this.value == 'opcao1') {
        ['Subopção 1.1', 'Subopção 1.2'].forEach(opt => {
            var option = document.createElement('option');
            option.text = opt;
            secondary.add(option);
        });
    } else if (this.value == 'opcao2') {
        ['Subopção 2.1', 'Subopção 2.2'].forEach(opt => {
            var option = document.createElement('option');
            option.text = opt;
            secondary.add(option);
        });
    }
});

document.getElementById('open-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('submit-name').addEventListener('click', function() {
    var name = document.getElementById('name-input').value;
    document.getElementById('success-message').textContent = `Sucesso! Olá, ${name}!`;
});

window.addEventListener('DOMContentLoaded', (event) => {
    var frameDoc = document.getElementById('example-frame').contentDocument;
    frameDoc.body.innerHTML = `
        <label for="nickname">Apelido:</label>
        <input type="text" id="nickname" placeholder="Digite seu apelido">
        <button id="confirm-button">Confirmar</button>
        <p id="confirmation-message"></p>
    `;
    frameDoc.getElementById('confirm-button').addEventListener('click', function() {
        var nickname = frameDoc.getElementById('nickname').value;
        frameDoc.getElementById('confirmation-message').textContent = `Pronto! Deu tudo certo, ${nickname}!`;
    });
});

document.getElementById('final-button').addEventListener('click', function() {
    var name = document.getElementById('name-input').value;
    document.getElementById('final-message').textContent = `A aula acabou!`;
});