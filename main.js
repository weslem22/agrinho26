function atualizarSimulador() {
    // Pegando as caixas de seleção (checkboxes)
    const pratica1 = document.getElementById('pratica1');
    const pratica2 = document.getElementById('pratica2');
    const pratica3 = document.getElementById('pratica3');
    const pratica4 = document.getElementById('pratica4');

    // Elementos da interface que serão modificados
    const barraProgresso = document.getElementById('barra-progresso');
    const scoreValor = document.getElementById('score-valor');
    const statusBadge = document.getElementById('status-badge');
    const taxaValor = document.getElementById('taxa-valor');

    let score = 0;

    // Soma a pontuação conforme o que está marcado
    if (pratica1.checked) score += parseInt(pratica1.value);
    if (pratica2.checked) score += parseInt(pratica2.value);
    if (pratica3.checked) score += parseInt(pratica3.value);
    if (pratica4.checked) score += parseInt(pratica4.value);

    // Atualiza a largura da barra de progresso e texto
    barraProgresso.style.width = score + "%";
    scoreValor.innerText = score;

    // Lógica para definir os juros e os badges baseados na pontuação
    if (score === 0) {
        statusBadge.innerText = "Propriedade Convencional";
        statusBadge.style.backgroundColor = "#cbd5e0";
        statusBadge.style.color = "#4a5568";
        taxaValor.innerText = "10.5% a.a.";
    } else if (score > 0 && score <= 50) {
        statusBadge.innerText = "Práticas Iniciais - Bronze";
        statusBadge.style.backgroundColor = "#cd7f32";
        statusBadge.style.color = "#fff";
        taxaValor.innerText = "8.5% a.a.";
    } else if (score > 50 && score <= 75) {
        statusBadge.innerText = "Agro Sustentável - Prata";
        statusBadge.style.backgroundColor = "#95a5a6";
        statusBadge.style.color = "#fff";
        taxaValor.innerText = "7.0% a.a.";
    } else if (score === 100) {
        statusBadge.innerText = "Agro Forte Excelente - Ouro 🌿";
        statusBadge.style.backgroundColor = "#2d6a4f";
        statusBadge.style.color = "#ffffff";
        taxaValor.innerText = "5.2% a.a.";
    }
}