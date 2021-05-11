"use strict";

// let date = new Date();
// let wd = date.getDate();
// let wk = date.getDay() - 1;
// console.log(date);

// const week = [
//   "monday",
//   "tuesday",
//   "wednedsday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];
// console.log(`Today is ${week[wk]}`);

// let hour = date.getHours();
// let min = date.getMinutes();
// let sec = date.getSeconds();
// console.log(`${hour}:${min}:${sec}`);
// console.log(hour);
// let D = date.toLocaleString("en-US", {
//   weekday: "long",
//   hour: "numeric",
//   minute: "numeric",
//   hour12: true,
// });
// console.log(`Cuurent time is ${D}`);

// function clickP() {
//   window.print();
// }

// let side1 = 5;
// let side2 = 6;
// let side3 = 7;
// let s = (side1 + side2 + side3) / 2;
// console.log(s);
// let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
// console.log(area);
const arr = [
  {
    id: 1,
    name: "NoSql - New Hope",
    author: "Layla Jones",
    topics: ["noSql", "sql", "future databases"],
    price: 25,
    extras: [
      {
        name: "hard cover",
        price: 30,
      },
      {
        name: "cd",
        price: 15,
      },
    ],
  },
  {
    id: 2,
    name: "Databases - The rise and fall",
    author: "Antony Lee",
    topics: ["data storages", "sql", "noSql"],
    price: 45,
    extras: [
      {
        name: "signed by author",
        price: 80,
      },
      {
        name: "dvd",
        price: 65,
      },
    ],
  },
  {
    id: 3,
    name: "Hacking databases",
    author: "Emily White",
    topics: [],
    price: 30,
    extras: [],
  },
];
function getTotalPrice(id) {
  for (let book of arr) {
    if (book.id === id) {
      let sum = book.price;
      console.log(sum);
      for (let ex of book.extras) {
        sum += ex.price;
        console.log(sum);
      }
    }
  }
}

// getTotalPrice(1);

function getPriceOfExtr(id) {
  for (let ex of arr) {
    if (ex.id === id) {
      let sum = 0;
      for (let e of ex.extras) {
        sum += e.price;
        console.log(sum);
      }
    }
  }
}

// getPriceOfExtr(3);
// function animate_string(id) {
//   let element = document.getElementById("test");
//   console.log(element);
//   let textNode = element.childNodes[0];
//   console.log(textNode);
//   let text = textNode.data;
//   console.log(text);
//   setInterval(() => {
//     text = text[text.length - 1] + text.substring(0, text.length - 1);
//     console.log(text);
//     textNode.data = text;
//   }, 1000);
// }
// animate_string();
let inp = document.getElementById("test");
function rotate(stringI) {
  let k = () => {
    stringI = inp.innerHTML = stringI.slice(1) + stringI[0];
    console.log(stringI.slice(0));
  };
  let setI = setInterval(k, 1000);
  setTimeout(() => clearInterval(setI), 10000);
}
// rotate("w3resource");

let word = document.getElementById("test");

function rot(stringI) {
  let text = () => {
    stringI = word.innerHTML = stringI.slice(1) + stringI[0];
    console.log(stringI);
  };
  let i = setInterval(text, 100);
  setTimeout(() => clearInterval(i), 10000);
}
// rot("w3resource");
function leapYear(year) {
  if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0)
    return console.log(`Leap year`);
  else console.log(`Not a leap year`);
}

// leapYear(2000);
// leapYear(2020);
// leapYear(2002);
// leapYear(2024);
// for (let year = 1987; year <= 2050; year++) {
//   let data = new Date(year, 0, 1);
//   if (data.getDay() === 0) {
//     console.log(data.getFullYear().toString(), `Yes sunday`);
//   }
// }
// console.log(new Date().getDate());
// console.log(new Date().getDay());
// function random() {
//   let num = prompt("Enter your number");
//   if (Math.floor(Math.random() * 10 + 1) === num) alert("Good work");
//   else alert("Next time");
//   console.log(+num);
//   console.log(Math.floor(Math.random() * 10 + 1));
// }
// random();
// const now = new Date();
// const december = new Date(2021, 11, 25);
// console.log(december);
// let difference = december - now;
// let oneDayMillisec = 1000 * 60 * 60 * 24;
// let daysToChristmas = Math.ceil(difference / oneDayMillisec);
// console.log(difference / oneDayMillisec);
// console.log(daysToChristmas);
// console.log(difference);
// let num1 = document.getElementById("num1");
// let num2 = document.getElementById("num2");
// let multiply = document.getElementById("mul");
// let divide = document.getElementById("div");
// let result = document.getElementById("result");

// function multi() {
//   result.innerHTML = num1.value * num2.value;
//   console.log(result);
// }
// function divid() {
//   result.innerHTML = num1.value / num2.value;
//   console.log(result.innerHTML);
// }
// function celsiusToF(celsius) {
//   let t = (celsius * 9) / 5 + 32;
//   console.log(t);
// }
// celsiusToF(120);
// function farToCel(far) {
//   let t = ((far - 32) * 5) / 9;
//   console.log(t);
// }
// farToCel(248);
// alert(document.URL);

// const varname = "abc";
// const n = 120;
// console.log(this[varname]);
// this[varname] = n;
// console.log(this[varname]);
//14
// let file = "img.jpeg";
// console.log(file.split(".").pop());
// let f = "abs.bbb";
// console.log(f.split(".").pop());
// function diff(num) {
//   if (num > 13) {
//     return (num - 13) * 2;
//   }
//   return 13 - num;
// }
// console.log(diff(3));
// console.log(diff(134));
// function sum(num1, num2) {
//   let sum = 0;
//   if (num1 === num2) {
//     return (sum = (num1 + num2) * 3);
//   } else return (sum = num1 + num2);
// }
// console.log(sum(1, 3));
// console.log(sum(3, 3));
// function diff(num) {
//   if (num > 19) {
//     return (num - 19) * 3;
//   } else return 19 - num;
// }
// console.log(diff(10));
// console.log(diff(100));
// console.log(diff(25));
// function sum(n1, n2) {
//   let sum = n1 + n2;
//   if (n1 === 50 || n2 === 50) return true;
//   if (sum === 50) return true;
//   if (sum !== 50) return false;
// }
// console.log(sum(50, 3));
// console.log(sum(47, 3));
// console.log(sum(44, 3));
// function num(x) {
//   return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
// }
// console.log(num(120));
// console.log(num(300));
// console.log(num(3000));
// console.log(num(3));
// function num(x, y) {
//   if ((x > 0 && y < 0) || (x < 0 && y > 0)) return true;
//   else return false;
// }

// console.log(num(2, -2));
// console.log(num(-2, -2));
// console.log(num(2, 2));
//21
// function str(str) {
//   if (str.substring(0, 2) === "Py" || str.slice(0, 2) === "py") return str;
//   else return "Py" + str;
// }

// console.log(str("Python"));
// console.log("Python".substring(0, 1));
// console.log(str("thon"));
// console.log(str("python"));
// function str(str, char) {
//   let part1 = str.substring(0, char);
//   let part2 = str.substring(char + 1, str.length);
//   return part1 + part2;
// }

// console.log(str("Javascript", 5));
// console.log(str("Javascript", 8));
// console.log(str("Javascript", 2));
// function str(str) {
// let first = str.slice(0, 1);
// let sec = str.slice(-1);
// let s = str.substring(1, 9);
// return `${sec}${s}${first}`;
//   let first = str.substring(1, str.length - 1);
//   return str.charAt(str.length - 1) + first + str.charAt(0);
// }

// console.log(str("Javascript"));
// console.log(str("Apple"));
// console.log(str("Iphone"));
// function str(str) {
//   let f = str.slice(0, 1);
//   console.log(f);
//   return f + str + f;
// }

// console.log(str("Javascript"));
// console.log(str("Apple"));
// function num(num) {
//   if (num % 3 === 0 || num % 7 === 0) return true;
//   else return false;
// }

// console.log(num(2));
// console.log(num(133));
// console.log(num(7));
// function str(str) {
//   if (str.length >= 3) {
//     let f = str.substring(0, 3);
//     return f + str + f;
//   } else return false;
// }

// console.log(str("Apple"));
// console.log(str("Ap"));
// function str(str) {
//   if (str.startsWith("Java")) return true;
//   else return false;
// }
// console.log(str("Javascript"));
// console.log(str("asdsfpt"));
// function num(num) {
//   if (num >= 50 && num <= 99) return true;
//   else return false;
// }
// console.log(num(50));
// console.log(num(69));
// console.log(num(6));
// console.log(num(99));
// console.log(num(100));
// function num(x, y, z) {
//   if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99))
//     return true;
//   else return false;
// }
// console.log(num(1, 53, 23));
// console.log(num(100, 3, 23));
// console.log(num(1, 33, 23));
// console.log(num(1, 33, 53));
// console.log(num(99, 33, 3));
// function str(str) {
//   return str.slice(4) === "script" ? str.slice(0, 4) : str;
// }

// console.log(str("Javascript"));
// console.log(str("Javacript"));
