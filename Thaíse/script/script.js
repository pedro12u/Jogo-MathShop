let total = 0;

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
    alert(`Total da compra: R$ ${total.toFixed(2)}`);
    total = 0;
    updateTotal();
  }
}

updateTotal();

document.addEventListener("DOMContentLoaded", function () {
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
    "Açucar",
    "Arroz",
    "Cebola",
  ];

  function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  function updateMonsterText() {
    const monsterText = document.getElementById("texto");
    const randomItem = getRandomItem();
    monsterText.textContent = `Eu quero ${randomItem}!`;
  }

  setInterval(updateMonsterText, 5000);

  updateMonsterText();
});

//calculadora

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function limparTela() {
  display.value = "";
}

function calcular() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERRO";
  }
}
