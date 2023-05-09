// 1 задача
//test git
let res = sumDigits(12345);
//10. 1+ 2 + 3 + 4
console.log(`res sumDigits = ${res}`); //res = 10;
function sumDigits(x) {
  let sum = 0;
  let result = x + "".split("");

  for (let i = 0; i < result.length; i++) {
    sum = sum + +result[i];
  }
  return sum;
}

//2 задача

let resLuckyDigits = luckyNumber(412124); // 1+2+3 == 1+2+3. если равно Lucky, если нет Unlucky
console.log(resLuckyDigits ? "Lucky" : "Unlucky");

function luckyNumber(x) {
  let sum1 = 0;
  let sum2 = 0;
  let result = x.toString();

  if (result.length % 2 == 0) {
    let half = result.length / 2; 
    for (let i = 0; i < half; i++) {
      sum1 = sum1 + +result[i];
    }

    for (let i = half; i < result.length; i++) {
      sum2 = sum2 + +result[i];
    }
    return sum1 === sum2;
  } else {
    let half = Math.floor(result.length / 2); 

    for (let i = 0; i <= half; i++) {
      sum1 = sum1 + +result[i];
    }

    for (let i = half; i < result.length; i++) {
      sum2 = sum2 + +result[i];
    }
    return sum1 === sum2;
  }
}

//  3
let bananaResult = banana();
console.log(bananaResult);

function banana() {
  let result = ("b" + "a" + (+"b") + "a").toLowerCase();
  return result;
}
