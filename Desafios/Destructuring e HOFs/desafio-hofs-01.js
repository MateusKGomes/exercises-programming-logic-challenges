const data = require('./data');

/** 1 - Retorne e exiba um array com as informações da primeira e da segunda banda utilizando destructuring
*/
const getBandsInformation = () => {
    const { bands } = data;
    const [ele1, ele2] = bands;
    return [ele1, ele2];
};

let isNumber = 'String with space';

console.log(isNumber.includes(' '));

// Brasil
// Russia
// China
// Chile
// Estados Unidos
// Espanha
// USA


console.log(getBandsInformation());
module.exports = getBandsInformation;
