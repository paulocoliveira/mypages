function cadastrar() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;

    if (nome && sobrenome && email) {
        const output = document.getElementById('output');
        output.value += `${nome} ${sobrenome} foi registrado com sucesso\n`;

        // Limpa os campos
        document.getElementById('nome').value = '';
        document.getElementById('sobrenome').value = '';
        document.getElementById('email').value = '';
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function concluir() {
    const currentTime = document.getElementById('current_time').value;
    const formattedDate1 = document.getElementById('formatted_date1').value;
    const formattedDate2 = document.getElementById('formatted_date2').value;
    const dateIn60Days = document.getElementById('date_in_60_days').value;
    const year2099 = document.getElementById('year_2099').value;

    const output = document.getElementById('output');
    output.value += `Hora atual: ${currentTime}\n`;
    output.value += `Data formatada (dd-mm-yy): ${formattedDate1}\n`;
    output.value += `Data formatada (YYYY-mm-dd HH:MM:SS): ${formattedDate2}\n`;
    output.value += `Dia daqui 60 dias: ${dateIn60Days}\n`;
    output.value += `Data com ano mudado para 2099: ${year2099}\n`;

    // Limpa os campos
    document.getElementById('current_time').value = '';
    document.getElementById('formatted_date1').value = '';
    document.getElementById('formatted_date2').value = '';
    document.getElementById('date_in_60_days').value = '';
    document.getElementById('year_2099').value = '';
}

function limparOutput() {
    document.getElementById('output').value = '';
}


function concluirLocale() {
    const currentLocale = document.getElementById('current_locale').value;
    const newLocale = document.getElementById('new_locale').value;
    const formattedNumber = document.getElementById('formatted_number').value;

    const output = document.getElementById('output');
    output.value += `Locale atual: ${currentLocale}\n`;
    output.value += `Novo locale setado: ${newLocale}\n`;
    output.value += `Número formatado com locale: ${formattedNumber}\n`;

    // Limpa os campos
    document.getElementById('current_locale').value = '';
    document.getElementById('new_locale').value = '';
    document.getElementById('formatted_number').value = '';
}

function addLanguage(language) {
    const output = document.getElementById('output');
    output.value += language + '\n';
}
