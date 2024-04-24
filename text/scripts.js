function addText() {
    const input = document.getElementById('inputText');
    const output = document.getElementById('outputText');
    if(input.value.trim() !== "") {
        output.value += input.value + "\n";
        input.value = ""; // Limpa o campo de entrada
    }
}

function clearTextArea() {
    document.getElementById('outputText').value = ""; // Limpa a área de texto
}
