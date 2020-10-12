let a = 14; // примитивные значения
a = 15; // перезаписываем просто ячейку памяти a
console.log(a);

let obj = {
    name: "Вася",
    surname: "Васильев"
}
let obj_2 = obj

obj_2.age = 18;
console.log(obj_2 == obj);
console.log(obj.passport) // undefined, даже не выкидывает ошибку

let arr = [1, 3, 4];
// хотим сделать именно копию нашего массива
arr_2 = [...arr];
arr_2.push(7)
console.log(arr)
// копирование может быть произведено с помощью
// cloneDeep Lodash
//  или делаем свойствами языка клонирование
const obj_3 = Object.assign({}, obj)
// Object.assign это нативный способ


obj_3.specific = 13
console.log(obj.specific)
console.log(obj_3.specific)

