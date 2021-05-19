"use strict";
// Basic Exercise
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
// const arr = [
//   {
//     id: 1,
//     name: "NoSql - New Hope",
//     author: "Layla Jones",
//     topics: ["noSql", "sql", "future databases"],
//     price: 25,
//     extras: [
//       {
//         name: "hard cover",
//         price: 30,
//       },
//       {
//         name: "cd",
//         price: 15,
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Databases - The rise and fall",
//     author: "Antony Lee",
//     topics: ["data storages", "sql", "noSql"],
//     price: 45,
//     extras: [
//       {
//         name: "signed by author",
//         price: 80,
//       },
//       {
//         name: "dvd",
//         price: 65,
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Hacking databases",
//     author: "Emily White",
//     topics: [],
//     price: 30,
//     extras: [],
//   },
// ];
// function getTotalPrice(id) {
//   for (let book of arr) {
//     if (book.id === id) {
//       let sum = book.price;
//       console.log(sum);
//       for (let ex of book.extras) {
//         sum += ex.price;
//         console.log(sum);
//       }
//     }
//   }
// }

// getTotalPrice(1);

// function getPriceOfExtr(id) {
//   for (let ex of arr) {
//     if (ex.id === id) {
//       let sum = 0;
//       for (let e of ex.extras) {
//         sum += e.price;
//         console.log(sum);
//       }
//     }
//   }
// }

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
// let inp = document.getElementById("test");
// function rotate(stringI) {
//   let k = () => {
//     stringI = inp.innerHTML = stringI.slice(1) + stringI[0];
//     console.log(stringI.slice(0));
//   };
//   let setI = setInterval(k, 1000);
//   setTimeout(() => clearInterval(setI), 10000);
// }
// // rotate("w3resource");

// let word = document.getElementById("test");

// function rot(stringI) {
//   let text = () => {
//     stringI = word.innerHTML = stringI.slice(1) + stringI[0];
//     console.log(stringI);
//   };
//   let i = setInterval(text, 100);
//   setTimeout(() => clearInterval(i), 10000);
// }
// // rot("w3resource");
// function leapYear(year) {
//   if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0)
//     return console.log(`Leap year`);
//   else console.log(`Not a leap year`);
// }

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
//31
// function num(a, b, c, d, e, f) {
//   return Math.max(a, b, c, d, e, f);
// }
// console.log(num(1, 2, 4, 10, 12, 3));
//32
// function largest(x, y) {
//   if (x !== y) {
//     if (x > y) {
//       return x;
//     }
//     if (x < y) {
//       return y;
//     }
//   } else return false;
// }

// console.log(largest(84, 95));
//33
// function num(x, y) {
//   if (
//     (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
//     (x >= 70 && x <= 100 && y >= 70 && y <= 100)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(num(40, 90));
//34
// function num(x, y) {
//   if (x > y) return x;
//   if (y > x) return y;
// }

// console.log(num(55, 47));
//35
// function char(string, char) {
//   let ctr = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string.charAt(i) === char && i >= 1 && i <= 3) {
//       ctr = 1;
//       break;
//     }
//   }
//   if (ctr === 1) return true;
//   return false;
// }

// console.log(char("Javascript", "a"));
//36
// function num(x, y, z) {
//   if (x > 0 && y > 0 && z > 0) {
//     return x % 10 === y % 10 && y % 10 === z % 10 && z % 10 === x % 10;
//   } else return false;
// }
// console.log(num(30, 20, 30));
//37
// function str(string) {
//   if (string.length <= 3) {
//     return string.toUpperCase();
//   }
//   if (string.length > 3) {
//     let f = string.substring(0, 3).toLowerCase();
//     let s = string.slice(3, string.length);
//     return f + s;
//   }
// }
// console.log(str("PYTHON"));
// console.log(str("pyt"));
// console.log(str("JAVASCRIPT"));
//38
// function num(marks, isExam) {
//   if (isExam === " ") {
//     return marks >= 80 && marks <= 100;
//   }
//   if (isExam) {
//     return marks >= 90;
//   }
// }
// console.log(num(70, "true"));
// console.log(num(80, " "));
// console.log(num(90, "true"));
//39
// function num(x, y) {
//   let sum = 0;
//   sum = x + y;
//   if (sum >= 50 && sum <= 80) {
//     return 65;
//   } else return 85;
// }
// console.log(num(50, 15));
//40
// function num(x, y) {
//   if (x === 8 || y === 8) return true;
//   if (x + y === 8 || Math.abs(x - y) === 8) return true;
// }

// console.log(num(7, 8));
// console.log(num(16, 8));
// console.log(num(24, 32));
//41
// function num(x, y, z) {
//   if (x === y && y === z) {
//     return 30;
//   }
//   if (x === y || y === z || x === z) {
//     return 40;
//   }
//   return 20;
// }
// console.log(num(3, 1, 2));
//42
// function num(x, y, z) {
//   if (x < y && y < z) {
//     return "Strict mode";
//   }
//   if (y < z) {
//     return "Soft mode";
//   }
// }
// console.log(num(10, 11, 12));
// console.log(num(18, 15, 25));
// console.log(num(10, 9, 120));
//43
// function num(x, y, z) {
//   if (x % 10 === y % 10 && y % 10 === z % 10) return true;
//   else return false;
// }
// console.log(num(22, 32, 42));
// console.log(num(22, 32, 43));
//44
// function num(x, y, z) {
//   return (
//     (x >= 20 && (x < y || x < z)) ||
//     (y >= 20 && (y < x || y < z)) ||
//     (z >= 20 && (z < x || z < y))
//   );
// }
// console.log(num(30, 31, 32));
// console.log(num(30, 32, 31));
// console.log(num(32, 31, 30));
// console.log(num(23, 45, 10));
// console.log(num(23, 23, 10));
//45
// function num(x, y) {
//   if (x - y === 15) {
//     return true;
//   }
//   if (x + y === 15) {
//     return true;
//   }
//   return false;
// }
// console.log(num(7, 8));
// console.log(num(25, 10));
// console.log(num(24, 11));
//46
// function num(x, y) {
//   if (!((x % 7 == 0 || x % 11 == 0) && (y % 7 == 0 || y % 11 == 0))) {
//     return x % 7 == 0 || x % 11 == 0 || y % 7 == 0 || y % 11 === 0;
//   } else return false;
// }
// console.log(num(14, 21));
// console.log(num(14, 20));
// console.log(num(16, 20));
//47
// function num(num) {
//   return num >= 40 && num <= 10000 ? true : false;
// }
// console.log(num(40));
// console.log(num(30));
// console.log(num(3000));
//48
// function str(str) {
//   return str.split("").reverse().join("");
// }
// console.log(str("Javascript"));
// console.log(str("Hello"));
//49
// function str(str) {
//   let s = str.split("");
//   for (let i = 0; i < s.length; i++) {
//     console.log(s[i]);
//     switch (s[i]) {
//       case " ":
//         break;
//       case "z":
//         s[i] = "a";
//         break;
//       case "Z":
//         s[i] = "A";
//         break;
//       default:
//         s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
//     }
//   }
//   return s;
// }
// console.log(str("PYTHON"));
// console.log(str("abc"));
// console.log("p".charCodeAt(0));
// console.log(String.fromCharCode(113));
//50
// function str(str) {
//   const s = str.slice(0, 1).toUpperCase();
//   const f = str.slice(1);
//   return s + f;
// }
// console.log(str("java"));
// console.log(str("pava"));
// console.log(str("sava"));
// console.log(str("savasldfjfhds"));
//51
// function num(num) {
//   const hour = Math.floor(num / 60);
//   const min = num % 60;
//   return `${hour}:${min}`;
// }
// console.log(num(30));
// console.log(num(350));
// console.log(num(300));
//52
// function str(str) {
//   return str.split("").sort().join("");
// }
// console.log(str("python"));
//53
// function str(str) {
//   return /a...b/.test(str) || /b...a/.test(str);
// }
// console.log(str("chainsbreak"));
