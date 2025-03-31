function conversor() {
    let valor = prompt("Digite um valor em Wons:");
    
    // Converte o valor para Reais
    let reais = valor * 0.0039;
    
    // Formata o valor em Reais com separação de milhar e vírgula como separador decimal
    let reaisFormatado = reais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    alert("O valor em Reais é: " + reaisFormatado);
}
