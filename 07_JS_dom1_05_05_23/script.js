// вывод в консоль информации. аля s.o.println
console.log("Hello World!");
console.log(3 - 1);
// покажет наш html
console.log(document);
// посмотреть, что в теге body
console.log(document.body.innerHTML);
console.log(document.body);

// заменяет то, что было в body на то, что мы тут присвоим
// document.body.innerHTML = '<h1>Hello!</h1>';

// переменная var - глобальная переменная
// var
// переменная let -
// let
// const константа. Нельзя переприсваивать значение

// const div1, ссылка на элемент html div1
const div1 = document.getElementById("div1");

console.log(div1);
div1.style.border = "1px solid black";

// обратиться к элементу
const a = document.querySelector("#div1");
console.log(a);

const pDiv1 = document.querySelectorAll("#div1 > p");
console.log(pDiv1);
console.log(pDiv1.length);

// for (let i = 0; i < pDiv1.length; i++) {
//     pDiv1[i].innerHTML = '<span> New Text </span>' ;
// }

// $ обратиться к переменной
for (let i = 0; i < pDiv1.length; i++) {
  pDiv1[i].innerHTML = ` <span> New Text ${i+1} </span> `;
}

const children = div1.children;
console.log(children);
console.log("children = ", children.length);

// сделали детям див, нашим p цвет текста красный
for (let index = 0; index < children.length; index++) {
  children[index].style.color = "red";
}

// можно создавать новые элементы, пустая p
const newP = document.createElement("p");
console.log("new p ", newP);

// можно создать новый текст
const newPText = document.createTextNode("new PText in newP");

// можно их соединить newP, newPText
newP.appendChild(newPText);

// можно теперь newP вставить в наш div1.
// добавляет в конец div1
div1.appendChild(newP);

// можно вставить в начало div1
// 1. что вставляем
// 2. перед чем вставляем
// div1.insertBefore(newP, div1.firstElementChild);
// div1.insertBefore(newP, div1.lastElementChild);
// div1.insertBefore(newP, children[1]);

const newP2 = document.createElement('p');
const newP2Text = document.createTextNode ('new Text for P2');
newP2.appendChild(newP2Text);

// можно сделать замену
div1.replaceChild(newP2, div1.firstElementChild);

// удалить
div1.removeChild(div1.firstElementChild);








