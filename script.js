function converterMoeda() {
    let valorEmReais = document.getElementById("real").value;

    let taxaDeCambio = 5.48;

    let valorEmDolares = valorEmReais / taxaDeCambio;

    document.getElementById("resultado").textContent = valorEmDolares.toFixed(2);
}
