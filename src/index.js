const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const decodeToLetters = (arr) => {
    const resultArr = []
    let str = ''
    arr.forEach(element => {
        if (element[0] === '.' || element[0] === '-') {
            console.log(MORSE_TABLE[element])
            str+= MORSE_TABLE[element]
        }
        else if (element = ' ') {
            console.log('пробел')
            str+= ' '
        }
    });
    console.log(str)
    return str;
}


function decode(expr) {
    const arr = []

    for (let i = 0; i < expr.length; i += 10) {//Режет строку на строки по 10.
        let str = expr.slice(i, i + 10);
        arr.push(str)
    }
    // console.log(arr)

    const decodeStageTwoArr = []
    const letters = []

    arr.forEach(element => {
        // console.log(element)

        const decodeArr = [];
        if (element[0] === '0' || element[0] === '1') { //Режет строки в массиве на пары (00, 01 или 02.)
            for (let i = 0; i < element.length; i += 2) {
                let str = element.slice(i, i + 2);
                decodeArr.push(str);
                // console.log(decodeArr)
            }
            //Добавить второе условие, что если попадается звёздочка, то запушить ПРОБЕЛ.(А может и не нужно)
        }
        console.log(decodeArr)

        let str = ''
        decodeArr.forEach(element => { //Переводит пары строк (01 или 02) в точку или тире.

            if (element === '10') {
                str += '.';
            } else if (element === '11') {
                str += '-'
            }

        });
        decodeStageTwoArr.push(str);

    });
    console.log(decodeStageTwoArr)
   const result = decodeToLetters(decodeStageTwoArr)
    return result;
}


module.exports = {
    decode
}

console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'))