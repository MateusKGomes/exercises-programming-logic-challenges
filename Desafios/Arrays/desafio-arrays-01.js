/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/



function getMaxNumber(numbers) {
  let bigger = numbers[0];

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > bigger) {
      bigger = numbers[index]
    }
    }
  
  return bigger;
}

console.log(getMaxNumber([1, 72, 434, 23, 34, 10000]));


module.exports = getMaxNumber;
