

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    //return x;
    "use strict";

    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0 ) 
       console.log("Корней нет");
    else if (D == 0) {
      let x = -b / 2 * a;
      return x;
    } else if (D > 0) {
      let x1 = (-b + Math.sqrt(D)) / 2 * a;
      let x2 = (-b - Math.sqrt(D)) / 2 * a;
      return [x1, x2];
    }
}
getResult();


/* Подскажите, пожалуйста, как мне сделать 
эту же функцию со switch case. 
Совершенно не могу разобраться, как пользоваться этой консрукцией(((
  Что я здесь неправильно пишу?? */
function giveResult(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  switch(D){
  case (D < 0):
    alert("Корней нет");
    break;
  case 0:
    let x = -b / 2 * a;
    alert("x = " + x);
    break;    
  case D > 0 :
    let x1 = (-b + Math.sqrt(D)) / 2 * a;
    let x2 = (-b - Math.sqrt(D)) / 2 * a;
    let roots = [x1, x2];
    alert("Корни уравнения: " + roots);
  default:
    alert("Я такого не умею");  
  }
}
giveResult();



function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
}
