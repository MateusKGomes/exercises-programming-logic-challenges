/*

04 - Verifique se todos os dados de uma lista são do mesmo tipo

Escreva uma algoritmo que recebe um array de dados quaisquer e verifique se todos são do mesmo tipo.

Se todos forem retorne:
------
true
------

Caso contrário:
-------
false
-------

Obs: Os retornos tem que ser dados do tipo boolean.

*/

function dataType(types) {
  const type = types[0];
  // console.log(typeof type);

  for (let index = 1; index < types.length; index++) {
    if (typeof type !== typeof types[index]) {
      return false;
    }
    
  }

  return true;
}

const arr = [1, 2, 3, 4, 5, 'String'];
console.log(dataType(arr));

module.exports = dataType;
