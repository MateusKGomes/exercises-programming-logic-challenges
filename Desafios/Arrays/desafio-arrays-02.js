/*

02 - Encontre o menor número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o menor valor e o retorne.

*/

function getMinNumber(numbers) {
  let smaller = numbers[0];

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < smaller) {
      smaller = numbers[index]
    }
    
  }
  // Desenvolva seu código nessa função
  return smaller; // Retorne o resultado aqui
}


console.log(getMinNumber([1, 2, 3, 4, 5]));

module.exports = getMinNumber;
