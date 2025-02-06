function adicionarAoDisplay(valor) {
    const display = document.getElementById('display');
    const ultimoCaractere = display.value.slice(-1);
    const operadores = ['+', '-', '*', '/'];

    // Evita múltiplos operadores consecutivos
    if (operadores.includes(valor) && operadores.includes(ultimoCaractere)) {
        return;
    }

    display.value += valor;
}

function limparDisplay() {
    document.getElementById('display').value = '';
}

function apagarUltimo() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        const resultado = eval(document.getElementById('display').value);
        document.getElementById('display').value = resultado;
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}

function calcularPorcentagem() {
    const display = document.getElementById('display');
    const valorAtual = parseFloat(display.value);
    if (!isNaN(valorAtual)) {
        display.value = valorAtual / 100;
    }
}