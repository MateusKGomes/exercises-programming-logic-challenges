const data = require('./data');

// 3 - Retorne um array utilizando HOF's que contenha apenas o nome das bandas
// console.log(data.bands);
const getBandsName = (data) => {
    const { bands } = data;
    const bandsName = bands?.reduce((acc, cur, index, array) => { 
        if (index === array.length -1) {
            return acc + cur.bandName + '.'
        } if (index === array.length -2) {
            return acc + cur.bandName + ' e '
        }
        return acc + cur.bandName  + ', '
    }, '')
     return bandsName
}
console.log(getBandsName(data));

// const getBandsName = (data) => {
//     const bands = data.bands.map((band) => { 
//          return band.bandName
//      })
//      return bands
// }
// console.log(getBandsName(data));

module.exports = getBandsName;
