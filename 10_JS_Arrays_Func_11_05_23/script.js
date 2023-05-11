console.log("===== Regular Function =====");
console.log(multiply(3, 4));

// такую функцию можно вызвать до инициализации
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 5));

console.log("===== Arrow Function =====");
// стрелочная функция
// ее нельзя вызвать до инициализации
const multiplyArrow = (a, b) => {
  return a * b;
};
// аналогично
// const multiplyArrow = (a, b) => a * b;
console.log(multiplyArrow(4, 5));

const obj = {
  userName: "John",
  sayHello: function () {
    console.log(this); // this = obj
    console.log(`Hello ${this.userName}`); // Hello John
  },
};

obj.sayHello();

const objArrow = {
  userName: "John",
  sayHello: () => {
    console.log(this); // this - global field window
    console.log(`Hello ${this.userName}`); // Hello undefined
  },
};

objArrow.sayHello();

const person = {
  firstName: "John",
  lastName: "Smith",
  age: 34,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

//получить ключи
let arr = Object.keys(person);
console.log(arr);

//значения
arr = Object.values(person);
console.log(person);

// ключи и значения
arr = Object.entries(person);
console.log(person);

arr = Object.entries(person); // Array with arrays [key, value]
console.log(arr[2]); // ['age', 34]

arr = Object.entries(person);
// у элемента с индексом 2 возьми значение первое с индексом 0
console.log(arr[2][0]); // age.

arr = ["one", "two", "threE", "eight", "tHree", "three", "six"];

console.log("===== indexOf =====");

let res = arr.indexOf("three");
// console.log(arr); // исходный массив не меняется
console.log(res); // 5 index three. Если элемента нет, то -1

res = arr.includes("three");
// console.log(arr);
console.log(res); // true, если элемент есть. false, если нет

// Возвращает индекс искомого элемента или -1, если элемента нет
res = arr.findIndex((x, i) => i > 2 && x.toLowerCase() === "three");
console.log(res); // 4 tHree

// Возвращает индекс искомого элемента или -1, если элемента нет
res = arr.findIndex(predicateLength3);
console.log(res); // 6 six

function predicateLength3(element, index) {
  return index >= 2 && element.length === 3;
}

const persons = [
  {
    userName: "Peter",
    age: 23,
  },
  {
    userName: "John",
    age: 28,
  },
  {
    userName: "Tigran",
    age: 26,
  },
  {
    userName: "Rabindranat",
    age: 23,
  },
];

res = persons.findIndex((person, index) => index > 0 && person.age < 25);
console.log(res); // 3

// filter покажет всех, кто подходит под фильтр
// вернет новый массив с отфильтрованными данными
res = persons.filter((p) => p.age < 25);
console.log(res);

res = persons.map((p, i) => console.log(`${i+1}. Name: ${p.userName}, Age: ${p.age}`));
// 1. Name: Peter, Age: 23
// 2. Name: John, Age: 28
// 3. Name: Tigran, Age: 26
// 4. Name: Rabindranat, Age: 23

res = persons.map((p, i) => `${i+1}. Name: ${p.userName}, Age: ${p.age}`);
console.log(res);
// ['1. Name: Peter, Age: 23', '2. 
// Name: John, Age: 28', '3. 
// Name: Tigran, Age: 26', '4. 
// Name: Rabindranat, Age: 23']

// 1 атрибут аккумулятор, куда будут складываться наши действия
// 2 атрибут который мы перебираем
res = persons.reduce((accum, item) => accum + item.age, 0);
console.log(res); // 23 + 28 + 26 + 23 = 100

res = persons.sort((a, b) => a.age - b.age === 0 ? b.userName.length -a.userName.length : a.age - b.age);
console.log(res);
// 0: 
// {userName: 'Rabindranat', age: 23}
// 1: 
// {userName: 'Peter', age: 23}
// 2: 
// {userName: 'Tigran', age: 26}
// 3: 
// {userName: 'John', age: 28}

