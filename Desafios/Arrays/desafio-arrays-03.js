/*

03 - Encontre uma pessoa convidada em uma lista de nomes

Escreva um algoritmo que recebe um array de nomes quaisquer e o nome da pessoa convida a ser encontrada. 

Se encontrar o nome na lista retorne:
-----------------------
"O nome está na lista."
-----------------------

Caso o contrário:
---------------------------
"O nome não está na lista."
---------------------------

*/

function findGuest(names, guest){
  // const checkList = names.filter((el) => el.includes(guest));
  for (let index = 0; index < names.length; index++) {
    if (names[index] === guest) {
      return "O nome está na lista."
    }
    
  }
    return "O nome não está na lista.";
}
const invetedNames = ['mateus', 'Carol'];
console.log(findGuest(invetedNames, name)); 

module.exports = findGuest;
