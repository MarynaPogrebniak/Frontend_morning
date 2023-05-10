const arr = [1, 2, 3, "four", "five"];
console.log(typeof arr);
console.log("==== push ====");

// push добавляет элементы в конец массива
let res = arr.push(6, 7, 8);
// push возвращает новую длину массива = 8
console.log(res); // 8
console.log(arr);

console.log("==== pop ====");

// pop удаляет с конца массива последний элемент
// pop возвращает удаленный элемент
res = arr.pop();

console.log(arr); // 7 элементов
console.log(res); // 8 удаленный элемент

console.log("==== shift ====");
// shift удаляет с массива первый элемент
// shift возвращает удаленный элемент

res = arr.shift();
console.log(arr);
console.log(res); // 1 удаленный элемент

console.log("==== unshift ====");
// unshift добавляет элементы в начало массива
// unshift возвращает новую длину массива

res = arr.unshift(0);
console.log(arr);
console.log(res);

console.log("==== concat ====");
// concat не изменяет исходные массивы
// возвращает новый массив

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

res = arr1.concat(arr2);
console.log(arr1); // concat не изменяет исходные массивы
console.log(arr2); // concat не изменяет исходные массивы
console.log(res); // возвращает новый массив

console.log("==== slice ====");

res = arr.slice(2, 6); // slice не изменяет исходный массив.
// Он просто возвращает новый массив элементов,
// который является подмножеством исходного массива.
//стартовый индекс входит, конечный нет
console.log(arr);
console.log(res); // возвращает новый массив

console.log("==== splice ====");
//splice изменяет исходный массив
//  и возвращает массив, содержащий удаленные элементы.
res = arr.splice(1, 4); // splice вырезает элементы из исходного массива
console.log(arr);
console.log(res); // (start, countElement количества элементов,
// который мы хотим захватить)
//  возвращает вырезанный отрезок массива


console.log("==== spread ====");
// Оператор spread ...
// исходный массив не меняется
const uniteArr = [...arr1, ...arr2];
console.log(arr1); // 1,2,3
console.log(arr2); // 4,5,6
console.log(uniteArr); // 1, 2, 3, 4, 5, 6

let arr4 = [1, 2, 3];
let arr5 = [...arr4]; //глубокая копия массива
// изменение одного массива не повлечет изменение 2го массива

// arr5 = arr4; поверхностная копия массива
// изменение одного массива повлечет изменение 2го массива

arr5[0] = 100;
console.log(arr5); // 100, 2, 3
console.log(arr4); // 1, 2, 3

console.log("==== destructure ====");
// Деструктуризация
// let arr4 = [1, 2, 3];
const [id, name, c, d] = arr4; 
console.log([id, name, c, d]); // id=1 name=2 c=3 d = undefined


