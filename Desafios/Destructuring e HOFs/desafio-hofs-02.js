const data = require('./data');

/* 2 - Através do destructuring, acesse o nome e os melhores álbuns primeira banda, 
retornando uma string no seguinte formato: "os melhores álbuns do Radiohead: In Rainbows,Kid A,OK Computer,Pablo Honey"
*/

const getBestAlbuns = () => {
    const { bands } = data;
    const bestAlbum = bands[0].bestAlbuns?.map((ele) => ele.name)
    const bestAlbum2 = bands[0].bestAlbuns.reduce((acc, cur, index, array) => { 
        if (index === array.length -1) {
            return acc + cur.name + '.'
        } if (index === array.length -2) {
            return acc + cur.name + ' e '
        }
        return acc + cur.name  + ', '
    }, '')
    console.log('reduce', bestAlbum2)
    return `os melhores álbuns do ${bands[0].bandName}: ${bestAlbum2}`
}

console.log(getBestAlbuns());
module.exports = getBestAlbuns;
