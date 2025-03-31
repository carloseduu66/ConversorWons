function conversor() {
    let valor = prompt("Digite um valor em Wons:");
    
    let reais = valor * 0.0039;
    
    let reaisFormatado = reais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    alert("O valor em Reais é: " + reaisFormatado);
}
