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

window.onload = () => {
    const shadowHost = document.getElementById('shadow-host');
  
    // Verifica se o shadowRoot já foi criado
    if (!shadowHost.shadowRoot) {
      const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
  
      // Adiciona conteúdo ao Shadow DOM com aparência Material UI
      shadowRoot.innerHTML = `
        <style>
          * {
            font-family: 'Roboto', sans-serif;
            box-sizing: border-box;
          }
  
          .form-container {
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
            padding: 16px;
            border: 1px solid #ddd;
            border-radius: 8px;
            width: 500px;
            background-color: #f9f9f9;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
  
          label {
            font-size: 14px;
            color: #333;
            font-weight: 500;
          }
  
          input[type="text"] {
            padding: 8px;
            width: 100%;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            transition: border-color 0.3s ease;
          }
  
          input[type="text"]:focus {
            border-color: #3f51b5;
            outline: none;
            box-shadow: 0 0 4px rgba(63, 81, 181, 0.5);
          }
  
          button {
            padding: 10px 20px;
            background-color: #6200ea;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
          }
  
          button:hover {
            background-color: #6200ea;
          }
  
          .confirmation {
            color: green;
            font-size: 18px;
            margin-top: 10px;
          }
        </style>
        <div class="form-container">
          <label for="name">Nome:</label>
          <input id="name" type="text" placeholder="Digite seu nome" />
          <button id="confirm-btn">Confirmar</button>
          <p id="confirmation-msg" class="confirmation"></p>
        </div>
      `;
  
      // Função para capturar e exibir a mensagem de confirmação
      const inputField = shadowRoot.querySelector("#name");
      const confirmButton = shadowRoot.querySelector("#confirm-btn");
      const confirmationMsg = shadowRoot.querySelector("#confirmation-msg");
  
      confirmButton.addEventListener("click", () => {
        const inputValue = inputField.value;
        if (inputValue) {
          confirmationMsg.textContent = `Sua inscrição está confirmada, ${inputValue}!`;
        }
      });
    }
  };
  