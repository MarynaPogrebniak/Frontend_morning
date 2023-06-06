//задаем тип данных, в данном случае необязательно, потому что примет тип значения
let firstname: string = 'Danny'; // typeof firstname = string

let age: number | string; // typeof age = number | string
age = 26;
age = '26';

let userName: any = "Andrew"; // typeof userName = любой тип данных 
userName = 23;
userName = false;

let direction: 'UP' | 'DOWN'; // direction = 'UP' or 'DOWN'
direction = 'UP';
direction = 'DOWN';

// описали переменную person: объект с полями 
// fullName и isProgrammer соответствующих типов данных
let person: { 
    fullName: string,
    isProgrammer: boolean
};

// создали экземпляр объекта person, который соответствует заданной типизации
person = {
    fullName: 'Bill Parker',
    isProgrammer: false
}

// person.age = 10; 
// ERROR - нет ключа age в описании объекта person

// person.isProgrammer = 'Yes'; 
// ERROR - ключ isProgrammer является boolean, а не string

let ids: number[] = [];
ids.push(1);
// ids.push('2'); not a number

let option: (string | number) [];
option = [10, 'left'];

let persons = ['Delia', 'Alex'];
// persons[0] = 43; неявная типизация по значению элемента по тому же индексу при создании массива

function circle(diam:number): string {
    return 'Circle = ' + Math.PI * diam;
}

// описали тип стрелочной функции
let sayHi: (name: string) => void;
// прописали ее
sayHi = (name: string) => console.log('Hi');