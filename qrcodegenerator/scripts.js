document.getElementById('generateBtn').addEventListener('click', function() {
    const link = document.getElementById('linkInput').value;
    if (link) {
        const qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.innerHTML = ''; // Limpa o conteúdo anterior, incluindo "Carregando..."
        const downloadBtn = document.getElementById('downloadBtn');

        // Gerar QR Code
        new QRCode(qrcodeContainer, {
            text: link,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        // Mostrar o botão de download após o QR Code ser gerado
        downloadBtn.classList.remove('hidden');

        // Configura o evento de clique do botão de download apenas uma vez
        downloadBtn.onclick = function() {
            const canvas = qrcodeContainer.querySelector('canvas');
            const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            const link = document.createElement('a');
            link.href = image;
            link.download = 'qrcode.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    }
});
