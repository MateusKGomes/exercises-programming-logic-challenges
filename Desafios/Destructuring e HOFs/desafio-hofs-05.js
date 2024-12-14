const data = require('./data');

// 5 - Filtre e retorne um array com os nomes das bandas que contenham 'Rock' no gênero musical

const rockFilter = (data) => {
    const { bands } = data;
    const arrayOfRockBands = bands
    .filter((band) => band.genre.includes('Rock'))
    .map((el) => el.bandName);
    return arrayOfRockBands;
}

console.log(rockFilter(data));

module.exports = rockFilter;
