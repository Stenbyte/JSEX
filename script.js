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
//54
// function str(str) {
//   let vowelCount = 0;
//   let vowel = ["a", "e", "i", "o", "u"];
//   for (let char of str) {
//     if (vowel.includes(char)) {
//       vowelCount++;
//     }
//   }
//   return vowelCount;
// }
// console.log(str("javascript"));
// console.log(str("python"));
// function str1(str) {
//   let regex = new RegExp(/a/g);
//   let s = str.match(regex);
//   return s.length;
// }
// console.log(str1("Python"));
// console.log(str1("Java bizzare"));
//55
// function str(str) {
//   let p = str.replace(/[^p]/g, "");
//   let t = str.replace(/[^t]/g, "");
//   return p.length === t.length;
// }
// console.log(str("paatpss"));
// console.log(str("paatpsst"));
//56
// function division_string(n1, n2) {
//   n1 = 80;
//   n2 = 6;

//   let div = Math.floor(n1 / n2).toString();
//   let resultAr = div.split("");
//   console.log(div);
//   console.log(resultAr);
// }
// division_string();
//57
// function str(str, n) {
//   if (n < 0) {
//     return false;
//   }
//   if (n > 0) {
//     return str.repeat(n);
//   }
// }
// console.log(str("abc", 5));
//58
// function str(str, n) {
//   if (str.length <= 3) {
//     return false;
//   }
//   if (str.length >= 3 && n > 0) {
//     return str.slice(3).repeat(n);
//   }
// }
// console.log(str("python", 5));
// console.log(str("pyt", 5));
//59
// function str(str) {
//   if (str.length % 2 === 0) {
//     return str.slice(0, 5);
//   } else return false;
// }
// console.log(str("javascript"));
// console.log(str("javascipt"));
//60
// function str(str) {
//   return str.slice(1, -1);
// }
// console.log(str("python"));
// console.log(str("javascript"));
//61
// function str(str1, str2) {
//   const f = str1.slice(1);
//   const s = str2.substring(1);

//   return f + s;
// }
// console.log(str("PHP", "JS"));
// console.log(str("PHPJ", "JSJ"));
// console.log(str("Apple", "JSJ"));
//62
// function str(str) {
//   if (str.length >= 3) {
//     const f = str.substring(str.length - 3);

//     return f + str;
//   }
// }
// console.log(str("Apple"));
// console.log(str("Javascript"));
//63
// function str(str) {
//   if (str.length % 2 !== 0) {
//     const mid = (str.length + 1) / 2;
//     return str.slice(mid - 2, mid + 1);
//   }
// }
// console.log(str("abcdefg"));
//64
// function str(str1, str2) {
//   if (str1.length >= 2 || str2.length >= 2) {
//     const f = str1.slice(str1.length - 2);
//     const s = str2.slice(str2.length - 2);
//     return f + s;
//   }
//   const m = Math.min(str1.length, str2.length);
//   return str1.slice(str1.length - m) + str2.slice(str2.length - m);
// }
// console.log(str("Python", "JS"));
// console.log(str("Pythonjhjkghfh", "JSJHJHGHGFJGHHJKGHJHJ"));
//65
// function str(str) {
//   if (str.length >= 6) {
//     if (str.substring(str.length - 6, str.length) === "script") {
//       const s = str.substring(str.length - 6, str.length) === "script";
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(str("Javascript"));
// console.log(str("Javascripthjg"));
//66
// function str(str) {
//   if (str.slice(0, 3) === "Los" || str.slice(0, 3) === "New") {
//     return str;
//   } else {
//     return `blank`;
//   }
// }
// console.log(str("Los Angeles"));
// console.log(str("New York"));
// console.log(str("York"));
// console.log(str("York New"));
//67
// function str(str) {
//   let start = 0;
//   let end = str.length;
//   if (str.length > 0 && str.charAt(0) === "P") {
//     start = 1;
//   }
//   if (str.length > 1 && str.charAt(str.length - 1) === "p") {
//     end--;
//   }
//   return str.substring(start, end);
// }
// console.log(str("Paralon"));
// console.log(str("laralonp"));
// console.log(str("laralon"));
//68
// function str(str) {
//   let n = 2;
//   if (str.length >= n) {
//     return str.slice(0, n) + str.slice(str.length - n);
//   }
// }
// console.log(str("Helsinki"));
// console.log(str("Apple"));
// console.log(str("Javascript"));
//69
// function num(arr) {
//   return arr[0] + arr[1] + arr[2];
// }
// let s = [23, 2, 45];
// console.log(num(s));
//70
// function num(arr) {
//   return [arr[1], arr[2], arr[0]];
// }
// console.log(num([2, 3, 4]));
//71
// function num(arr) {
//   if (arr.length >= 1) {
//     let end = arr.length - 1;
//     return arr[0] === 1 || arr[end] === 1;
//   }
// }
// console.log(num([1, 2, 3]));
// console.log(num([3, 2, 1]));
// console.log(num([3, 2, 4]));
//72
// function num(arr) {
//   if (arr[0] === arr[arr.length - 1]) {
//     return true;
//   } else return false;
// }
// console.log(num([1, 2, 1]));
// console.log(num([1, 2, 2]));
//73
// function num(arr) {
//   return arr.reverse();
// }
// console.log(num([2, 3, 4]));
//74
// function num(arr) {
//   const m = Math.max(...arr);
//   const a = [];
//   for (let i of arr) {
//     i = m;
//     a.push(i);
//     console.log(a);
//   }
//   return arr.fill(Math.max(...arr));
// }
// console.log(num([20, 30, 40]));
//75
// function num(a, b) {
//   let c = [];
//   c.push(a[1], b[1]);
//   return c;
// }
// console.log(num([1, 2, 3], [4, 5, 6]));
//76
// function num(arr) {
//   arr.splice(1, 1);
//   return arr;
// }
// console.log(num([20, 30, 40]));
// console.log(num([30, 40, 50]));
//77
// function num(arr) {
//   if (arr.length === 2) {
//     return arr.includes(1) || arr.includes(5);
//   } else {
//     return "To long";
//   }
// }
// console.log(num([1, 5]));
// console.log(num([2, 3]));
// console.log(num([2, 5]));
// console.log(num([2, 5, 4]));
//78
// function num(arr) {
//   return arr.find((number) => number === 1 || number === 3) ? "false" : "ok";
// }
// console.log(num([1, 3]));
// console.log(num([1, 4]));
// console.log(num([2, 4]));
// console.log(num([2, 3]));
//79
// function num(array) {
//   let a = array[0];
//   let b = array[1];
//   if ((a === 30 && b === 30) || (a === 40 && b === 40)) return true;
//   else return false;
// }
// console.log(num([30, 30]));
// console.log(num([30, 40]));
// console.log(num([40, 40]));
// console.log(num([20, 20]));
//80
// function num(arr) {
//   let [a, b, c] = [...arr];
//   return [c, b, a];
// }
// console.log(num([1, 2, 3]));
// console.log(num([3, 2, 5]));
//81
// function num(ar) {
//   return (ar % 10) + Math.floor(ar / 10);
// }
// console.log(num(25));
// console.log(num(22));
//82
// function num(n1, n2) {
//   let result = 0;
//   let x = 1;
//   while (n1 > 0 && n2 > 0) {
//     console.log(n1, n2);
//     result += x * ((n1 + n2) % 10);
//     n1 = Math.floor(n1 / 10);
//     n2 = Math.floor(n2 / 10);
//     console.log(result, "res");
//     x *= 10;
//     console.log(x);
//   }
//   return result;
// }
// console.log(num(222, 911));
//83
// function str(arr) {
//   let max = arr.map((ar) => ar.length);
//   console.log(max);
//   const m1 = Math.max(...max);
//   console.log(m1);
//   let result = arr.filter((word) => word.length === m1);
//   console.log(result);
// }
// str(["aaa", "aaaa", "aaaaaa", "aa"]);
// function longest_string(str_ara) {
//   var max = str_ara[0].length;
//   console.log(max);
//   str_ara.map((v) => (max = Math.max(max, v.length)));
//   console.log(max);
//   let result = str_ara.filter((v) => v.length == max);
//   return result;
// }

// console.log(longest_string(["a", "aa", "aaa", "aaaaa", "aaaa"]));
//84
// function str(str) {
//   let s = str.split("");
//   let ar = [];
//   for (let i = 0; i <= s.length - 1; i++) {
//     let num = s[i].charCodeAt(0);
//     let ss = String.fromCharCode(num + 1);
//     ar.push(ss);

//   }

//   return ar.join("");
// }
// console.log(str("abcdef"));
// console.log(str("klmnop"));
//85
// function num(arr) {
//   let result = [0, 0];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2) {
//       result[0] += arr[i];
//     } else {
//       result[1] += arr[i];
//     }
//   }
//   return result;
// }
// console.log(num([1, 3, 6, 2, 5, 10]));
//86
// function num(angle) {
//   if (angle < 90) return "Acute angel";
//   if (angle === 90) return "Right angle";
//   if (angle > 90 && angle < 180) return "Obtuse angle";
//   if (angle === 180) console.log("Straight angle");
// }
// console.log(num(89));
// console.log(num(90));
// console.log(num(130));
// num(180);
//87
// function num(one, two) {
//   if (one.length !== two.length) return false;
//   for (let i = 0; i < one.length; i++) {
//     return one[i] === two[i];
//   }
// }
// console.log(num([10, 20, 30], [10, 20, 30]));
// console.log(num([10, 20, 30], [30, 10, 20]));
// console.log(num([20, 20, 30], [10, 20, 40]));
//88
// function num(x, y, d) {
//   if (x % d === 0 && y % d === 0) {
//     console.log(true);
//   } else console.log(false);
// }
// num(10, 25, 5);
// num(11, 23, 5);
//89
// function num(x, y, z) {
//   if (x + y === z) return true;
//   if (x - y === z) return true;
//   if (x * y === z) return true;
//   if (x / y === z) return true;
//   else return false;
// }
// console.log(num(10, 25, 35));
// console.log(num(10, 25, 250));
// console.log(num(30, 25, 5));
// console.log(num(100, 25, 4.0));
// console.log(num(100, 25, 25));
//90
// function num(arr, k) {
//   return arr.sort()[k - 1];
// }
// console.log(num([1, 2, 6, 4, 5], 3));
//91
// function num(arr) {
//   let max_diff = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     let diff = Math.abs(arr[i] - arr[i + 1]);
//     console.log(diff);
//     if (diff > max_diff) {
//       max_diff = diff;
//     }
//   }
//   return max_diff;
// }
// console.log(num([1, 2, 3, 8, 9]));
//92
// function num(arr, k) {
//   let max_diff = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     let diff = Math.abs(arr[i] + arr[i + 1]);
//     // console.log(diff);
//     if (diff > max_diff) {
//       max_diff = diff;
//     }
//   }
//   return max_diff;
// }
// console.log(num([1, 2, 3, 14, 5], 2));
//93
// function num(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k != i && k < arr.length; k++) {
//       console.log(arr[i], "I");
//       let diff = Math.abs(arr[i] - arr[k]);
//       console.log(arr[k], "K");
//       max = Math.max(max, diff);
//     }
//   }
//   return max;
// }
// console.log(num([1, 2, 3, 8, 9]));
//94
// function num(arr) {
//   let frequency = {};
//   let max = 0;
//   let result;
//   for (let v in arr) {

//     frequency[arr[v]] = (frequency[arr[v]] || 0) + 1;

//     if (frequency[arr[v]] > max) {
//       max = frequency[arr[v]];
//       result = arr[v];
//     }
//   }
//   return result;
//   let s = [];
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (arr[i]) {
//       s.push(arr[i]);
//       console.log(s);
//     }
//   }
// }
// console.log(num([1, 2, 3, 2, 2, 8, 1, 9]));
//95
// function num(arr, x, z) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       arr[i] = z;
//     }
//   }
//   return arr;
// }
// let arr = [1, 2, 3, 4, 5, 2, 3, 2, 8];
// console.log(num(arr, 2, 9));
//96
// function num(arr) {
//   let result = 0;
//   for (let i = 1; i < arr.length; i++) {
//     console.log(i);
//     result += Math.abs(arr[i] - arr[i - 1]);
//   }
//   return result;
// }
// console.log(num([1, 2, 3, 2, -5]));
//97
// function test(str) {
//   let str1 = str + str.split("").reverse().join("").slice(1);
//   return str1;
// }
// console.log(test("esatto"));
// console.log(test("madam"));
//98
// function str(str) {
//   let x = 0;
//   let y = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (/[A-Z]/.test(str[i])) {
//       x++;
//     } else {
//       y++;
//     }
//   }
//   if (y < x) return str.toUpperCase();
//   else return str.toLowerCase();
// }
// console.log(str("Write"));
// console.log(str("PHp"));
//99
// function str(str1, str2) {
//   let st1 = str1.split("");
//   let st2 = str2.split("");
//   let result = true;
//   st1.sort();
//   st2.sort();
//   for (let i = 0; i < Math.max(st1.length, st2.length); i++) {
//     if (st1[i] !== st2[i]) {
//       result = false;
//     }
//   }
//   return result;
// }
// console.log(str("xyz", "zyx"));
// console.log(str("xyz", "zax"));
//100
// function num(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) return true;
//   }
//   return false;
// }
// console.log(num([1, 2, 3], [3, 4, 5]));
// console.log(num([1, 2, 3], [4, 5, 6]));
//101
// function str(str) {
//   let is_lower_case = function (symbol) {
//     if ("a" <= symbol && symbol <= "z") {
//       return true;
//     }
//     return false;
//   };
//   let is_upper_case = function (symbol) {
//     if ("A" <= symbol && symbol <= "Z") {
//       return true;
//     }
//     return false;
//   };
//   let is_first_char_lower = is_lower_case(str[0]);
//   let is_first_upper_char = is_upper_case(str[0]);
//   //   console.log(is_lower_case(str[0]));

//   if (!(is_first_char_lower || is_first_upper_char)) {
//     return false;
//   }
//   for (var i = 1; i < str.length; i++) {
//     if (i % 2) {
//       if (
//         is_lower_case(str[i]) === is_first_char_lower ||
//         is_upper_case(str[i]) === is_first_upper_char
//       ) {
// console.log(str[i]);
//         return false;
//       }
//     } else {
//       if (
//         is_lower_case(
//           str[i] !== is_first_char_lower ||
//             is_upper_case(str[i]) !== is_first_upper_char
//         )
//       ) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(str("xYr"));
// console.log(str("XXyx"));
// console.log(str("xxYx"));
//102
// function num(arr) {
//   let ctr = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     for (let j = i + 1; j < arr.length; j++) {
//       //   console.log(arr[j], "j");
//       if (arr[i] > arr[j]) {
//         ctr++;
//       }
//     }
//   }
//   return ctr;
// }
// console.log(num([0, 3, 2, 5, 9]));
// console.log(num([1, 5, 4, 3]));
// console.log(num([10, 30, 20, -10]));
//103
// function num(n) {
//   let arr = n.toString().slice();
//   if (arr[0] > 0) {
//     // return arr.split("").find((n) => n > 0);
//     return Math.floor(arr / 10);
//   }
//   console.log(arr);
// }
// console.log(num(100));
// console.log(num(1030));
// console.log(num(1245));
//104
// function num(arr, n) {
//   let ar = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let x = Math.abs(arr[i] - arr[j]);
//       if (x <= n) {
//         ar.push(x);
//       }
//     }
//   }
//   return Math.max(...ar);
// }
// console.log(num([12, 10, 33, 34], 10));
// console.log(num([12, 10, 33, 34], 24));
// console.log(num([12, 10, 33, 44], 40));
//105
// function num(num) {
//   let sum = function (num) {
//     let digitSum = 0;
//     while (num) {
//       digitSum += num % 10;
//       num = Math.floor(num / 10);

//     }
//     return digitSum;
//   };
//   let result = 0;
//   while (num >= 10) {
//     result += 1;
//     num = sum(num);
//   }
//   return result;
// }
// console.log(num(123));
// console.log(num(156));
// console.log(num(156));
//106
// function num(num, d) {
//   if (d === 1) {
//     return num;
//   } else {
//     while (num % d === 0) {
//       num /= d;
//     }
//     return num;
//   }
// }
// console.log(num(-12, 2));
// console.log(num(13, 2));
// console.log(num(13, 1));
// console.log(num(136, 4));
//107
// function num(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
//         result++;
//       }
//     }
//   }
//   return result;
// }
// console.log(num([1, 2, 3]));
// console.log(num([2, 4, 6]));
// console.log(num([2, 4, 16]));
//108
// function num(v1, v2) {
//   let result = 0;
//   for (let i = 0; i < 3; i++) {
//     result += v1[i] * v2[i];
//   }
//   return result;
// }
// console.log(num([1, 2, 3], [1, 2, 3]));
//109
// function num(prime) {
//   let pr1 = [];
//   let pr2 = [];
//   for (let i = 0; i <= prime; i++) {
//     pr2.push(true);
//   }
//   for (let i = 2; i <= prime; i++) {
//     if (pr2[i]) {
//       pr1.push(i);
//       for (let j = 1; i * j <= prime; j++) {
//         console.log(i * j);
//         pr2[i * j] = false;
//       }
//     }
//   }
//   return pr1;
// }
// console.log(num(5));
// console.log(num(11));
//110
// function num(arr, d) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i] < d) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(num([1, 2, 3, 4, 5, 6, 7, 8], 5));
// console.log(num([1, 3, 4, 5, 6, 7, 8], 6));
//111
// function num(x, y, z) {
//   if (x !== y && y !== z && x !== z) {
//     return "All unequal";
//   }
//   if (x === y) return z;
//   if (y === z) return x;
//   if (x === z) return y;
// }
// console.log(num(1, 1, 3));
// console.log(num(1, 2, 3));
// console.log(num(1, 3, 3));
// console.log(num(3, 2, 3));
//112
// function num(n) {
//   let result = 0;
//   for (let i = 5; i <= n; i += 5) {
//     if (i % 5 === 0) {
//       result++;
//     }
//   }
//   return result;
// }
// console.log(num(5));
// console.log(num(9));
// console.log(num(11));
//113
// function num(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num;

//     num = Math.floor(num / 2);
//   }
//   return sum;
// }
// console.log(num(8));
// console.log(num(15));
//114
// function str(str) {
//   let firstChar = str[0];
//   let secondChar = str[str.length - 1];
//   return /[A-Z]/.test(firstChar) && secondChar === ".";
// }
// console.log(str("This is awesome."));
// console.log(str("This is awesome!"));
// console.log(str("sThis is awesome!"));
//115
// function num(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//       console.log(matrix[i], matrix[j]);
//       if (matrix[i][j] !== 0 && i !== j) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(
//   num([
//     [1, 0, 0],
//     [0, 2, 0],
//     [0, 0, 3],
//   ])
// );
//116
// function disible(str) {
//   let result = [];
//   for (let i = 0; i < 10; i++) {
//     let number = Number(str.replace("#", i));
//     if (number % 3 === 0) {
//       result.push(number);
//     }
//   }
//   return result;
// }
// console.log(disible("2#0"));
// console.log(disible("4#2"));
//117
// function matrix(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//       if ((i === j && matrix[i][j] !== 1) || (matrix[i][j] !== 0 && i !== j)) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(
//   matrix([
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1],
//   ])
// );
//118
// function num(arr, i) {
//   if (arr.includes(i)) {
//     return i;
//   } else return "number is not in the range";
// }
// console.log(num([1, 2, 3, 4, 5], 4));
// console.log(num([1, 2, 3, 4, 5], 7));
//119
// function num(str) {
//   let num = String(str);
//   let result = true;
//   for (let i = 1; i <= num.length; i++) {
//     if (num[i] >= num[i + 1]) {
//       result = false;
//     }
//   }
//   return result;
// }
// console.log(num(123));
// console.log(num(1223));
//120
// function circle(a, b, x, y, r) {
//   let distance = Math.floor(Math.sqrt((x - a) ** 2 + (y - b) ** 2));
//   console.log(distance);
//   if (distance < r) {
//     return true;
//   } else return false;
// }
// console.log(circle(0, 0, 2, 4, 6));
// console.log(circle(0, 0, 6, 8, 6));
//121
// function lower(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       console.log(matrix[i], matrix[j]);
//       if (j > i && matrix[i][j] !== 0) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(
//   lower([
//     [1, , 0],
//     [2, 0, 0],
//     [0, 3, 3],
//   ])
// );
//122
// function num(arr) {
//   let sumD = arr[1] - arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (sumD * (arr[i + 1] - arr[i]) <= 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(num([1, 2, 3]));
// console.log(num([1, 2, 2]));
//123
// function num(arr, n) {
//   for (let i = 0; i < n; i++) {
//     if (!arr.includes(i + 1)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(num([1, 2, 3, 4, 5], 5));
// console.log(num([1, 2, 3, 5], 5));
//124
// function nor(a, b) {
//   return !a && !b;
// }
// console.log(nor(true, false));
// console.log(nor(false, false));
// console.log(nor(true, true));
//125
// function str(arr) {
//   let max = arr[0].length;
//   let s = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let st = arr[i].length;
//     // console.log(st);
//     if (st > max) {
//       s = arr[i];
//       max = st;
//       console.log(max);
//     }
//   }
//   return s;
// }
// console.log(str(["aa", "a", "aaa"]));
// console.log(str(["aa", "a", "aaaa"]));
//126
// function num(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr.sort((a, b) => b - a);
//     if (arr[i] % 2 === 0) {
//       return arr[i];
//     }
//   }
// }
// console.log(num([20, 40, 200]));
//127
// function num(n) {
//   return parseInt(n.toString(2).split("").reverse().join(""), 2);
// }
// console.log(num(56));
// console.log(num(234));
//128
// function num(n) {
//   while (n % 10) {
//     n++;
//   }
//   return n;
// }
// console.log(num(56));
//129
// function num(n) {
//   for (let i = n + 1; ; i++) {
//     let isPrime = true;
//     for (let d = 2; d * d <= i; d++) {
//       console.log(i);
//       console.log(d);
//       if (i % d === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       return i;
//     }
//   }
// }
// // console.log(num(3));
// console.log(num(19));
//130
// function num(num) {
//   let str = num.toString().split("");
//   console.log(str.map((item) => parseInt(item, 10)));
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] % 2 === 0) {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(num(123));
// console.log(num(1230));
// console.log(num(12030));
//131
// function num(num) {
//   let sum = [];
//   for (let i = 0; i < num.length; i++) {
//     // console.log(num[i]);
//     sum[i] = 0;
//     console.log(sum);
//     for (let j = 0; j < i + 1; j++) {
//       sum[i] += num[j];
//     }
//   }
//   return sum;
// }
// console.log(num([1, 2, 3, 4, 5]), "F");
// let data = {
//   meta_description: "meta description",
//   brief_description: "brief description",
//   specialty: "work",
// };
// console.log(data);
// let obj = Object.entries(data).map((ob) => ob[0].split("_").join(" "));
// function str(str) {
//   let letter = { A: "T", T: "A", G: "C", C: "G" };
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr[i] = letter[str[i]];
//   }
//   return arr.join("");
// }

// console.log(str("ATTGC"));
// function str(str) {
//   let count = {};
//   return str.split("").forEach((s) => {
//     console.log(count[s]);
//   });
// }

// console.log(str("aba"));

// function str(arr) {
//   let ar = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length === 4) {
//       ar.push(arr[i]);
//     }
//   }

//   return ar;
// }

// console.log(str(["Ryan", "Kieran", "Mark"]));
// function num(arr) {
//   let ar = arr.filter((x) => x % 2).sort((a, b) => a - b);

//   return arr.map((x) => (x % 2 === 0 ? x : ar.shift()));
// }

// console.log(num([5, 8, 6, 3, 4, 10]));
// Mexican wave
// function str(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") continue;
//     arr.push(
//       Array.from(str, (c, h) => (h === i ? c.toUpperCase() : c)).join("")
//     );
//   }
//   return arr;
// }
// console.log(str("hello"));
// console.log(str("two words"));
// function arithmetic(a, b, operator) {

//   switch (operator) {
//     case "add":
//       return a + b;
//     case "subtract":
//       return a - b;

//     case "multiply":
//       return a * b;

//     case "divide":
//       return a / b;
//     default:
//       console.log("nope");
//   }
// }
// console.log(arithmetic(1, 3, "add"));
// function str(arr) {
//     return arr.filter((e) => typeof e !== 'string');

// }
// console.log(str([1, 2, "a", "b", "3"]));
// function lettersOnly(letterOrElse) {
//   return letterOrElse.toUpperCase() !== letterOrElse.toLowerCase();
// }
// console.log(lettersOnly("."));
// function letter(l) {
//   return l.toLowerCase().charCodeAt(0) - "a".charCodeAt(0) + 1;
// }
// console.log(letter("T"));
// function trans(str) {
//   return Array.from(str).filter(lettersOnly).map(letter).join(" ");
// }
// console.log(trans("The sunset sets at twelve o' clock."));
// function str(arr) {
//   let num = arr.sort((a, b) => a - b);
//   let f = num[0];
//   let s = num[1];
//   let sum = f + s;
//   console.log(num);
//   return sum;
// }
// console.log(str([19, 5, 42, 2, 77]));
// function str(arr) {
//   return arr.length === 1
//     ? `${arr[0]} like this`
//     : arr.length === 2
//     ? `${arr[0]} and ${arr[1]} like this`
//     : arr.length === 3
//     ? `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
//     : arr.length >= 4
//     ? `${arr[0]}, ${arr[1]} and ${arr.slice(2).length} like this`
//     : "no one likes this";
// }

// console.log(str(["Peter"]));
// console.log(str([]));
// console.log(str(["Peter", "Jack"]));
// console.log(str(["Peter", "Jack", "Sten"]));
// console.log(str(["Peter", "Jack", "Sten", "Iola"]));
// console.log(str(["Peter", "Jack", "Sten", "Iola", "Peter", "Jack"]));
// function str(str) {
//   let s = str
//     .split(";")
//     .map((n) => n.split(":").reverse().join(":"))
//     .sort()
//     .map((n) => `(${n.split(":")[0]}, ${n.split(":")[1]})`.toUpperCase())
//     .sort()
//     .join("");
//   return `'${s}'`;
// }

// console.log(
//   str(
//     "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
//   )
// );
// function str(str) {
//   let s =
//     str.startsWith("http://www") ||
//     str.startsWith("https://www") ||
//     str.startsWith("www")
//       ? str.split(".")[1]
//       : str.startsWith("http://") || str.startsWith("https://")
//       ? str.split("/")[2].split(".")[0]
//       : str.split(".")[0];

//   let a = str.split();
//   //   console.log(a, "a");
//   return s;
// }
// console.log(str("http://github.com/carbonfive/raygun"));
// console.log(str("http://githubhghgjhkljk.com/carbonfive/raygun"));
// console.log(str("http://www.github.com/carbonfive/raygun"));
// console.log(str("https://www.github-z.com/carbonfive/raygun"));
// console.log(str("http://google.com"));
// console.log(str("http://google.co.jp"));
// console.log(str("www.xakep.ru"));
// console.log(str("https://youtube.com"));
// console.log(str("youtube.com"));
// function str(size) {
//   let table = [];
//   for (let i = 1; i <= size; i++) {
//     const numbers = Array(size)
//       .fill(1)
//       .map((el, index) => (el + index) * i);
//     table.push(numbers);
//   }
//   return table;
// }

// console.log(str(3));
// function str(arr) {
//   let curSum = 0;
//   let maxSum = 0;
//   if (arr.length === 0) {
//     return 0;
//   } else {
//     arr.forEach((a) => {
//       curSum = Math.max(a, curSum + a);
//       maxSum = Math.max(maxSum, curSum);
//     });
//     return maxSum;
//   }
// }
// console.log(str([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(str([-2, 1, -3]));
// console.log(str([4, -1, 2, 1]));
// console.log(str([]));
// function str(str) {
//   let s = str
//     .split(/[uoiea]/)
//     .map((s) => s.split("").reduce((acc, c) => acc + (c.charCodeAt(0) - 96), 0))
//     .sort((a, b) => b - a)[0];
//   console.log(s);
//   return str
//     .split(/[uoiea]/)
//     .map((s) => s.split("").reduce((acc, c) => acc + (c.charCodeAt(0) - 96), 0))
//     .sort((a, b) => b - a)[0];
// }
// console.log(str("zodiacs"));
// console.log(str("strength"));
// function str(arr, sum) {
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = 1; j <= arr.length; j++) {
//       console.log(arr[i] + arr[j]);
//       if (arr[i] + arr[j] === sum) {
//         return [i, j];
//       }
//     }
//   }
// }
// console.log(str([1, 2, 3, 4], 4));
// function str(str) {
//   console.log(str.split(".").reduce((el, c) => el * 256 + +c));
// }
// console.log(str("10.1"));
// function str(str) {
//   console.log(str.match(/(\d*)$/));
//   return str.replace(/(\d*)$/, (t) =>
//     (+t + 1).toString().padStart(t.length, 0)
//   );
// }
// console.log(str("foo23"));
// console.log(str("foo"));
// console.log(str("foo00"));
// console.log(str("foo0"));
// console.log(str("foo7"));
// console.log(str("foo9"));
// console.log(str("foo999"));
// console.log(str("foo99"));
// console.log(str("foo199"));
// console.log(str("foo1000"));
// function num(str) {
//   console.log(str.match(/s/gi));
//   return str.replace(/s/gi, (t) => (t + "d").padStart(3, 0));
// }
// console.log(num("Sten it is Christmas"));
// function chained(functions) {
//   return function (input) {
//     for (let i = 0; i < functions.length; i++) {
//       console.log(functions[i](input));
//       input = functions[i](input);
//     }

//     return input;
//   };
// }
// const chained = (f) => (i) => f.reduce((r, c) => c(r), i);
// function chained(functions) {
//   return function (x) {
//     return functions.reduce(function (acc, curr) {
//       console.log(curr(acc));
//       return curr(acc);
//     }, x);
//   };
// }
// const chained = (functions) => (arg) => functions.reduce((x, y) => y(x), arg);

// function f1(x) {
//   console.log(x * 2);
//   return x * 2;
// }
// function f2(x) {
//   console.log(x + 2);
//   return x + 2;
// }
// function f3(x) {
//   console.log(Math.pow(x, 2));
//   return Math.pow(x, 2);
// }
// console.log(chained([f1, f2, f3], 0, 4));
// console.log(chained([f1, f2, f3]), 2, 36);
// console.log(chained([f1, f2, f3]), 2, 26);
// chained([f1, f2, f3])(2), 36;
// chained([f3, f2, f1])(2), 12;
// function encrypt(s, n) {
//   if (!s || n < 0) return s;
//   let ans = "";
//   while (n--) {
//     for (let i = 1; i < s.length; i += 2) {
//       ans += s[i];
//     }
//     for (let i = 0; i < s.length; i += 2) {
//       ans += s[i];
//     }
//     s = ans;
//   }
//   return s;
// }

// encrypt("012345", 3);

// function decrypt(string, n) {
//   if (!string || n <= 0) return string;
//   const ans = new Array(string.length);
//   while (n--) {
//     let j = 0;
//     for (let i = 1; i < ans.length; i += 2) {
//       ans[i] = string[j++];
//       console.log(ans[i]);
//     }
//     for (let i = 0; i < ans.length; i += 2) {
//       ans[i] = string[j++];
//     }
//     string = ans.join("");
//   }
//   console.log(string);
// }
// decrypt("135024", 1);
