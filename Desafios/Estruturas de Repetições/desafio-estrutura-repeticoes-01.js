/*

01 - Mensagem codificada 

Escreva um algoritmo que recebe uma string e retorne outra string com o index dos respectivos caracteres multiplicado por 3.

Exemplo:
---------
Entrada:
"Trybe"

Saída:
"036912".
---------

*/

function encode(string) {
  const mult =  string.split('').map((el, index) => index * 3);
  return mult
  // console.log(mult);
}

console.log(encode('trybe'));

module.exports = encode;
