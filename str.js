


let new_str = 'Мама \'мыла\' раму';
const verb = ["мыла", "не мыла"]
let new_str_2 = `Мама ${verb[Math.round(Math.random())]} раму`;
let new_str_3 = "Мама \n" +  verb[Math.round(Math.random())] + " \t раму";

console.log(new_str_3)
// const str = "Строка";
// str = str + " другая строка";
// console.log(str)

// у нас есть строка, которая является алфавитом
// нужно два вида алфавите - один нормальный, другой
// сдвинутый на 13 символов
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let shift_alphabet = alphabet.slice(13, 26) + alphabet.slice(0, 13);
console.log(shift_alphabet)

