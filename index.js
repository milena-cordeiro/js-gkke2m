// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Abra o console</h1>`;

// 1. BRL the Balanced Burger

// Para comer com um pouco mais de variedade. você lê sobre The Balanced Burger, uma série de recomendações sobre a ordem e as quantidades dos vários ingredientes que compõem um hambúrguer.BRL

// Segundo o artigo, um hambúrguer perfeitamente equilibrado:

// - 1 tem pão em cima e em Baixo
// - 2 tem pelo menos 2 vegetais
// - 3 usa exatamente 1 molho
// - 4 não contém mais de 2 proteínas
// - 5 tem queijo imediatamente antes de qualquer proteínas

//  Aqui está uma lista de ingredientes possíveis:

//  Queremos saber o quão equilibrado é uma lista de ingredientes, então você criará uma função balancedBurgerScore que recebe uma lista de ingredientes e retorna um número de 0 a 5, onde o é a pontuação mais baixa possível.

//  O parâmetro ingredientsList contém os ingredinetes de baixo para cima (enquanto você empilha os ingredientes para criar o seu hambúrguer).

//  Se a ingredientsList for uma lista vazia. imprima uma mensagem É necessária uma lista de ingredientes.

//  Quaisquer ingredientes não reconhecidos devem ser ignorados da lista.

const vegetables = [
  'tomato',
  'onion',
  'letuce',
  'eggplant',
  'mushroom',
  'bellpepper',
];
const breads = ['potato bread', 'sesame bread', 'white bread'];
const sauces = [
  'mayonnaise',
  'ketchup',
  'mustard',
  'barbecue',
  'chipotle',
  'hot sauce',
];
const protein = ['beef', 'chicken', 'pork', 'lentils', 'chikpeas'];
const cheese = ['cheddar', 'gouda', 'parmesan', 'mozzarela', 'cheese'];

// function checkBreads(ingredientsList) {}

// function checkSauces(ingredientsList) {}

// function checkProteins(ingredientsList) {}

// function checkCheeses(ingredientsList) {}

// function checkVegetables(ingredientsList) {}

function balancedBurgerScore(ingredientsList) {
  // seu código aqui
}

// teste 1
const msg = 'É necessária uma lista de ingredientes';
const results1 = balancedBurgerScore();
console.log(
  `Retorno da função teste 1: ${results1}, Approve: ${msg === results1}`
);

// teste 2
const results2 = balancedBurgerScore(['tomato', 'sesame bread']);
console.log(
  `Retorno da função teste 2: ${results2}, Approve: ${0 === results2}`
);

//teste 3
const results3 = balancedBurgerScore(['white bread', 'white bread']);
console.log(
  `Retorno da função teste 3: ${results3}, Approve: ${1 === results3}`
);

//teste 4
const results4 = balancedBurgerScore([
  'white bread',
  'letuce',
  'tomato',
  'white bread',
]);
console.log(
  `Retorno da função teste 4: ${results4}, Approve: ${2 === results4}`
);

//teste 5
const results5 = balancedBurgerScore([
  'white bread',
  'letuce',
  'tomato',
  'mayonnaise',
  'white bread',
]);
console.log(
  `Retorno da função teste 5: ${results5}, Approve: ${3 === results5}`
);

//teste 6
const results6 = balancedBurgerScore([
  'white bread',
  'letuce',
  'tomato',
  'cheese',
  'mayonnaise',
  'chicken',
  'white bread',
]);
console.log(
  `Retorno da função teste 6: ${results6}, Approve: ${4 === results6}`
);

//teste 7
const results7 = balancedBurgerScore([
  'white bread',
  'letuce',
  'tomato',
  'mayonnaise',
  'cheese',
  'chicken',
  'white bread',
]);
console.log(
  `Retorno da função teste 7: ${results7}, Approve: ${5 === results7}`
);
