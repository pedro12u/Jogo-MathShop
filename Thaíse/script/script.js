let total = 0;
let dinheiroRecebido = 0;
let trocomais = Math.floor(Math.random() * 350);

document.addEventListener("DOMContentLoaded", exibirMostrinhoAtual);

function updateTotal() {
  document.getElementById("total").innerText = total.toFixed(2);
}

function scanItem(name, price) {
  total += price;
  alert(`Você escaneou: ${name} - R$ ${price.toFixed(2)}`);
  updateTotal();
}

function checkout() {
  if (total === 0) {
    alert("Nenhum item escaneado.");
  } else {
    alert(`Você deu o troco certo`);
    total = 0;
    updateTotal();
  }
}

function troco() {
  const playerInput = document.getElementById("player-input");
  const monsterText = document.getElementById("texto");
  const trocoValor = parseFloat(playerInput.value);
  if (trocoValor === trocomais) {
    checkout();
    trocomais = Math.floor(Math.random() * 350);
    compras();
  } else {
    monsterText.textContent = `Meu troco está errado!`;
  }
}

updateTotal();

document.addEventListener("DOMContentLoaded", compras);

function compras() {
  exibirMostrinhoAtual();
  const items = [
    "Maçã",
    "Pão",
    "Leite",
    "Água",
    "Bolacha Recheada",
    "Empanado de Frango",
    "Café Torrado",
    "Farinha de Trigo",
    "Sardinha em Lata",
    "Ervilha em Conserva",
    "Papel Higiênico",
    "Extrato de Tomate",
    "Gatorade",
    "Açúcar",
    "Arroz",
    "Cebola",
  ];

  let itemCount = 0;
  maxItems = Math.floor(Math.random() * items.length);
  const uniqueItems = [...new Set(items)];
  console.log(trocomais);

  function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * uniqueItems.length);
    return uniqueItems[randomIndex];
  }

  function updateMonsterText() {
    const monsterText = document.getElementById("texto");
    if (itemCount < maxItems) {
      console.log(itemCount);
      console.log(maxItems);
      const randomItem = getRandomItem();
      monsterText.textContent = `Eu quero ${randomItem}!`;
      itemCount++;
    } else {
      if (total > 0) {
        const dinheiro = parseFloat((total + trocomais).toFixed(2));
        monsterText.textContent = `Não quero mais nada!, aqui está o dinheiro R$ ${dinheiro}`;
      }
    }
  }

  setInterval(updateMonsterText, 6000);
  updateMonsterText();
}

const imagensMostrinhos = [
  "imgs/red.png",
  "imgs/black.png",
  "imgs/blue.png",
  "imgs/green.png",
  "imgs/purple.png",
];

let indiceMostrinhoAtual = 0; // Inicializa com o primeiro mostrinho
function exibirMostrinhoAtual() {
  const mostrinhoContainer = document.getElementById("mostrinho-container");
  mostrinhoContainer.innerHTML = ""; // Limpa o conteúdo anterior

  const img = document.createElement("img");
  img.src = imagensMostrinhos[indiceMostrinhoAtual];
  mostrinhoContainer.appendChild(img);

  // Avança para o próximo mostrinho (circular)
  indiceMostrinhoAtual = (indiceMostrinhoAtual + 1) % imagensMostrinhos.length;
}

// Calculadora
const toggleButton = document.getElementById("toggleCalculator");
const calculator = document.getElementById("calculadora");
toggleButton.addEventListener("click", function () {
  if (calculator.style.display === "none") {
    calculator.style.display = "block"; // Mostra a calculadora
  } else {
    calculator.style.display = "none"; // Esconde a calculadora
  }
});
const display = document.getElementById("display");

window.appendToDisplay = function (input) {
  display.value += input;
};

window.limparTela = function () {
  display.value = "";
};

window.calcular = function () {
  try {
    display.value = eval(display.value).toFixed(2);
  } catch (error) {
    display.value = "ERRO";
  }
};
