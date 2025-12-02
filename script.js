// //javascript data types
// // Numbers,Strings,Arrays,Objects,Booleans,Undefined,Null

// // javascript variables
// // const,let,var

// // const => it is not changeble/not mutable

// const fruits = ["Mango", "Orange", "Apple", "Pinneaple", "Kiwi"];
// console.log(fruits);

// const number = 5;

// const string = "Bingo";

// const car = {
//   color: "black",
//   brand: "rolls Royce",
//   accesory: "rearview mirror",
// };
// let fruit = 1;
// fruit = 2;

// // booleans
// // true, false

// // functions

// function changeColor() {
//   let color = "ffffff";
//   console.log(color);
// }
// changeColor();

// background color changer
const button = document.getElementById("button");

function backgroundColorChanger() {
  const hexadecimal = Date.now().toString(16).slice(-6);
  const hexadecimalString = `#${hexadecimal}`;

  const angle = Date.now().toLocaleString();
  const design = Date.now().toString();
  const correctAngle = Number(angle.slice(-2));
  const design1 = Number(design.slice(-2));
  const design2 = Number((design * 154).toString().slice(-2));

  //   console.log("Correct Angle",correctAngle)

  const hexadecimalColor2 = (Date.now() * 10).toString(16).slice(-6);
  // console.log("Second hexadecimal", hexadecimalColor2);

  // console.log(
  //   "Angle",
  //   correctAngle,
  //   "Color1",
  //   hexadecimalString,
  //   "Color2",
  //   hexadecimalColor2
  // );

  document.body.style.background = `linear-gradient(${correctAngle}deg, ${hexadecimalString} ${design1}%, #${hexadecimalColor2} ${design2}%`;
  //   <body style="backgroundColor: blue; "></body>
  // console.log(
  //   `Design 1: ${design1}% for the color: ${hexadecimalString}
  //    Design 2: ${design2}% for the color: #${hexadecimalColor2} and the angle is ${correctAngle}deg`
  // );
}
// event listeners
button.addEventListener("click", backgroundColorChanger);
// button.addEventListener("click", backgroundColorChanger);

const date = Date.now();
console.log(date);
const random = date.toString(16);
//  base 16 valeus making up a hexadecimal kind of presentation
// 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f

console.log(random);

// // slicing a value
// const hexadecimal = random.slice(-6);
// console.log(hexadecimal);

// // string concatination
// // string literal
// const hexString = `#${hexadecimal}`;
// console.log(hexString);

// template literal
// const string = "#" + hexadecimal;
// console.log(string);

// conditional statements
// if(){}

// multiply => use *
// divide => use /
// subrtract => use -
// add => use +
// equals =>===
// greater than => use >
// less than => use <
// greater than or equal to => use >=
//  less than or equal to => use <=
// OR => use ||
// AND => use &&

function checkNumber() {
  const won = document.getElementById("win");
  const lose = document.getElementById("lose");

  // win.innerText = "Hello";
  const number = Number(Date.now().toString().slice(-4));
  // console.log(number);
  const correctNumber = Number(number);

  if (correctNumber >= 6000) {
    console.log("Hurray");
    win.innerText = "****HURRY****";
    lose.innerText = "";
    // console.log(correctNumber);
  } else if (correctNumber >= 5000) {
    console.log("oopsy dupsy! try again");
    lose.innerText = "Almost there";
    win.innerText = "";
  } else if (correctNumber >= 4000) {
    console.log("keep going");
    lose.innexText = "Keep going";
    win.innerText = "";
  } else if (correctNumber >= 3000) {
    console.log("wow keep it going");
    lose.innerText = "wow keep it going";
    win.innerText = "";
  } else if (correctNumber >= 2000) {
    console.log("This is a good start");
    lose.inneText = "This is a good start";
    win.innerText = "";
  } else {
    console.log("journey of a thousand miles.....");
    lose.innerText = "journey of a thound miles";
    win.innerText = "";
  }
}

// // button.addEventListener("click", checkNumber);
// addEventListener("keypress", function (event) {
//   if (event.key === "Enter" || event.key === " ") {
//     checkNumber();
//   }
// });

const play = document.getElementById("play");

play.addEventListener("click", checkNumber);

play.addEventListener("keypress", function (event) {
  if (event.key === "enter") {
    checkNumber();
  }
});

// floats in js
let float = 2.7654;

let fixedfloat = float.toFixed(2);
console.log(fixedfloat);

const float2 = 67;
fixedfloat = float2.toFixed(2);
console.log(fixedfloat);

// loops in js
let value = 9;
value++;
console.log(value);

let loopedValue = document.getElementById("loopedValue");
for (let i = 1; i < 5; i++) {
  document.body.innerText += "Hello";
  console.log(i);
}
// for...in loop
// it is used to repeat /loop into object keys

// syntax:for(const key in object)

const someone = {
  name: "jonteh",
  gender: "male",
  age: 20,
  occupation: "manager",
};

for (const key in someone) {
  console.log(`${key}: ${someone[key]}`);
}

// for...of loops
// loops into arrays
// synatx for(const variable of array){}

let fruits = ["mango", "orrange", "orange", "kiwi"];

for (const fruit of fruits) {
  document.body.innerHTML += `<h2>i like ${fruit}</h2>`;
}

// for each loop
// synatx- array.forEach(callBackFunction(currentValue,index,array))

fruits.forEach(function (fruit, index) {
  document.body.innerHTML += `<h3>${index + 1} 
  ${fruit}, number ${index} is the best</h3>`;
});

// arrow functions
// syntax () => {}

const newFunc = (a, b) => {
  console.log(a + b);
};
newFunc(1, 3);
newFunc("Hello", "you");
newFunc("sema", "wazi");

// old function
// syntax: function(){}
const oldFunc = function funcName() {};
