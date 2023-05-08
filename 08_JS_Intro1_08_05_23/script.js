console.log("Hello world!");

let x;
console.log(x); //undefined
x = 7;
x = "bye";
console.log(x);

const pi = 3.1415926;
// pi = 3.14 константу нельзя переопределить

let y = x;
console.log(y); //bye

console.log("pi = " + pi);

const exp = pi;
console.log(`exp = ${exp} or ${pi}`);

x = true;
console.log(x);

x = null;
console.log(x);

let res = 7 % 2; //остаток от деления  на 2
console.log(`res = ${res}`); //res = 1

res = "true" + 5;
console.log(`res = ${res}`); //res = true5

res = true + 5;
// false = 0; true = 0; при сложении
console.log(`res = ${res}`); //res = 6.

x = "2" === 2;
console.log(`x = ${x}`); //false при ===

x = "2" == 2;
console.log(`x = ${x}`); //true при ==

res = 5; //number
res = "5"; //string

// + перед строкой делает его числом!
res = +"5"; //number 5.

//если после числа поставить '', число станет строкой!
res = 5 + ""; // string '5'

switch (res) {
  case 5:
    console.log(`number: ${res}`);
    break;
  case "5":
    console.log(`string: ${res}`);
    break;
  default:
    console.log("Not a 5");
}

let age = 17;
let vol = age >= 18 ? "> 18" : "<18";
console.log(`vol = ${vol}`);

// сделали пи строкой, вывели длину
console.log(("" + pi).length);

// toFixed берет 3 знака после запятой
console.log(pi.toFixed(3)); //3.142 pi строка
console.log(+pi.toFixed(3)); //3.142 pi число

//age =17
res = -age;
console.log(res); // res = -17;

//прибавление на 1
++age; // вначаде прибавляем, потом используем значение age
age++; // вначале используем значение age,потом прибавляем

x = 10;
res = x++ + ++x; // 10 + 12 = 22
console.log(res);

//typeOf покажет тип number
console.log(typeof age);

age = "5";
//typeOf покажет тип string
console.log(typeof age);

age = true;
//typeOf покажет тип boolean
console.log(typeof age);

age = undefined;
//typeOf покажет тип undefined
console.log(typeof age);

age = null;
//typeOf покажет тип object
console.log(typeof age);

let a = 10;
let b = 5;
let result = add(a, b);
console.log(`result = ${result}`);

function add(a, b) {
  return a + b;
}

// неявное приведение переменной к boolean значению
a = !!a;
// любое число будет true, кроме 0.
// 0 будет false.
console.log(a); // true.

let example = "hello";
console.log(!!example); //true
// false = null, undefined, NaN, 0, false, ''

// все, кроме 0 будут false
a = !a;
console.log(a); //false

let userName = null;
let nickName = userName || "Anonymous";
console.log(nickName); //Anonymous

let userName1 = "Petr";
let nickName1 = userName1 || "Anonymous";
console.log(nickName1); //Petr

greeting(); // Hello Anonymous
greeting("Vasya"); // Hello Vasya

function greeting(nickName2 = "Anonymous") {
  // nickName2 = nickName2 || 'Anonymous';
  console.log(`Hello ${nickName2}`);
}

// int [] arr = new int [5];
// int [] arr = {2, 3, 4, 5};

// в js любые типы в массиве
const arr = [1, 2, 3, "four", "five", "six", true];

console.log(typeof arr); // type object
console.log(arr[3]); // 3й элемент массива
console.log(typeof arr[3]); // string тип 3го элемента

arr[3] = 4;
console.log(arr[3]); //4

console.log(arr.length);

arr[10] = 100500;
console.log(arr[10]); //100500
console.log(arr[9]); // промежуточные значения стали undefined
printArray(arr);
console.log(arr);

arr.length = 3;
//останутся первые 3 элемента
console.log(arr);

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

res = sumDigits(1234);

//10. 1+ 2 + 3 + 4
console.log(`res sumDigits = ${res}`); //res = 10;

function sumDigits(x) {
  //TODO сумму цифр нашего числа
  let sum = 0;
  let result = x + "".split("");
  console.log(result);

  for (let i = 0; i < result.length; i++) {
    sum = sum + +result[i];
  }
  return sum;
}

let resLuckyDigits = luckyNumber(123123); // 1+2+3 == 1+2+3. если равно тру, если нет фолс
console.log(resLuckyDigits ? "Lucky" : "Unlucky");