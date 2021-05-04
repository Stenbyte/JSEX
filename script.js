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
console.log(word);
function rot(stringI) {
  let text = () => {
    stringI = word.innerHTML = stringI.slice(1) + stringI[0];
    console.log(stringI);
  };
  let i = setInterval(text, 100);
  setTimeout(() => clearInterval(i), 10000);
}
// rot("w3resource");
