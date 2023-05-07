// принимает функцию, 2я число.
// запускает функцию move каждые 20 милисекунд
const t = setInterval(move, 20);
// счетчик
let pos = 0;
let direction = 0;
const box = document.getElementById("box");
var container = document.getElementById("container");

// остановить функцию setInterval
// clearInterval(t);

function move() {
  if (pos <= 150 && direction == 0) {
    pos++;
    box.style.left = pos + "px";
    box.style.top = pos + "px";
    if (pos == 150) {
      direction = 1;
    }
  }

  if (pos >= 0 && direction == 1) {
    pos--;
    box.style.left = pos + "px";
    box.style.top = pos + "px";
    if (pos == 0) {
      direction = 0;
    }
  }
}

// Остановить исполнение можно вызовом clearInterval(time).
var timediv = document.createElement("div");
timediv.setAttribute("id", "time");
timediv.style.cssText = "text-align: center";
container.appendChild(timediv);

function printTime() {
  var date = new Date();
  document.getElementById("time").innerHTML =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
var time_show = setInterval(printTime, 1000);

/*
JavaScript не строго типизированный язык

=   - присвоение
==  - не строгое сравнение( сравнение значений без учета типов данных)
     '1' == 1 - true. 
=== - строгое сравнение (с учетом типов данных)
    '1' === 1 - false. разные типы данных

    Сложение числа и строки называется конкатинацией. 
    Результатом будет соипаяся строчка.
    158 + 'hello world!' - '158hello world!'
    145 * 'a' - NaN - not a number

    1 + + '2' - 3
    + '2' - 2
*/
