const data = require('./data');

// 4 - Filtre e retorne um array apenas com o nome das bandas que são dos Estados Unidos

const usaFilter = (data) => {
    const { bands } = data;
    const country = bands.filter((band) =>  { 
      return  band.country.includes('United States');
    }).map((el) => el.bandName );
    return country
}

console.log(usaFilter(data));

module.exports = usaFilter;
