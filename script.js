// Função para calcular os valores e atualizar o Total na tela
document.addEventListener("DOMContentLoaded", () => {
  const linhas = document.querySelectorAll("tbody tr");
  let totalGeral = 0;

  linhas.forEach((linha) => {
    const preco = parseFloat(linha.querySelector(".preco").getAttribute("data-valor"));
    const qtd = parseInt(linha.querySelector(".qtd").textContent, 10);
    const subtotal = preco * qtd;

    totalGeral += subtotal;
  });

  // Formata o total final no padrão BRL (R$)
  const totalFormatado = totalGeral.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  // Atualiza o texto da célula do Total
  document.getElementById("valor-total").textContent = totalFormatado;
});
