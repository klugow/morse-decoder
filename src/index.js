const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
let finishArray = [];
let storageRoom = [];
let divide = expr.length / 10;

for (let i = 0; i < divide; i++) {
let string = expr.slice(i * 10, i * 10 + 10);
storageRoom.push(string);
}
for (let i = 0; i < storageRoom.length; i++) {
if (storageRoom[i] === "**********") {
finishArray.push(' ');
} else {
storageRoom[i] = storageRoom[i].replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '');
finishArray.push(MORSE_TABLE[storageRoom[i]]);
}
}
return finishArray.join('');
}

module.exports = {
	decode
}