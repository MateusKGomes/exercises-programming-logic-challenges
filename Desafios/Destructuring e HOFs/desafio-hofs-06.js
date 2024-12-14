const data = require('./data');

// 6 - Filtre e retorne um array com todos os álbuns que possuem nota igual a 100

// const highestRatingFilter = (data) => {
//     const {  bands } = data;
//     const arrayOfBestRate = bands.map((band) => {
//         return band.bestAlbuns.filter((el) => el.rate === 100)
//     })
//     console.log(arrayOfBestRate);
//     return arrayOfBestRate
// }

const highestRatingFilter = () => {
   const  bandAlbum = data.bands.map((band) => band.bestAlbuns)
      .reduce((a, b) => [...a, ...b])
      .filter((item) => item.rate === 100);
  
    return bandAlbum;
  } 
console.log(highestRatingFilter(data));




module.exports = highestRatingFilter; 
