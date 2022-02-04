"use strict";
// function upArray(arr) {
//   let find = arr.find((n) => n >= 10);

//   let num = Number(arr.join("")) + 1;
//   let result;
//   if (isNaN(num) || arr.length === 0 || find) {
//     return null;
//   }
//   let regex = /e\+/g;

//   let num1 = num.toString().replace(regex, "").replace(".", "");

//   result = num1.toString().split("").map(Number);

//   return result;
// }
///
// function upArray(arr) {
//   if (typeof arr === "undefined" || arr === null || arr.length === 0) {
//     console.log(null);
//     return null;
//   }

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < 0 || typeof arr[i] !== "number" || arr[i] > 9) {
//       return null;
//     }
//   }
//   for (var j = arr.length - 1; j > -1; j--) {
//     if (arr[j] !== 9) {
//       console.log(arr[j]);
//       arr[j] = arr[j] + 1;
//       break;
//     } else {
//       arr[j] = 0;
//     }

//     if (j === 0) {
//       arr.unshift(1);
//     }
//   }
//   console.log(arr);
//   return arr;
// }
////
// function upArray(arr) {
//   if (typeof arr === "undefined" || arr === null || arr.length === 0) {
//     return null;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0 || arr[i] > 9 || typeof arr[i] !== "number") {
//       return null;
//     }
//   }
//   for (let i = arr.length - 1; i > -1; i--) {
//     if (arr[i] !== 9) {
//       arr[i] = arr[i] + 1;
//       break;
//     } else {
//       arr[i] = 0;
//     }
//     if (i === 0) {
//       arr.unshift(1);
//     }
//   }
//   return arr;
// }
// upArray([2, 3, 4, 8, 9]);
// upArray([9]);
// upArray([-9, 1, 2]);
// upArray([9, 11, 2]);
// upArray([]);
// upArray();
// upArray([
//   2,
//   2,
//   3,
//   3,
//   9,
//   6,
//   1,
//   2,
//   0,
//   8,
//   7,
//   8,
//   6,
//   1,
//   5,
//   9,
//   6,
//   2,
//   3,
//   7,
//   7,
//   3,
//   6,
//   1,
//   2,
//   0,
//   8,
//   7,
// ]);
//
// function isIsogram(str) {
//   const regex = /[A-Z]/g;
//   if (str.length === 0) {
//     return true;
//   }
//   let s = str.toLowerCase();
//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s[i]) !== s.lastIndexOf(s[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("isogram"));
// console.log(isIsogram("aba"));
// console.log(isIsogram("moOse"));
// console.log(isIsogram("isIsogram"));
// function Square(num) {
//   const arr = String(num);
//   const arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr1.push(arr[i] ** 2);
//   }

//   return +arr1.join("");
// }

// console.log(Square(2323));
//8k
// function small(arg) {
//   return Math.min(...arg);
// }

// console.log(small([78, 56, 232, 12, 8]));
//7k
// function nbYear(p0, percent, aug, p) {
//   // 1000 + 1000 * 0.02 + 50 => 1070
//   let pop = p0;
//   let year = 0;
//   while (pop < p) {
//     let perc = pop * (percent / 100);
//     pop = pop + perc + aug;
//     year++;
//   }
//   return year;
// }
// console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
// console.log(nbYear(1500000, 0.25, 1000, 2000000));
//7k
// function longest(s1, s2) {

//   return Array.from(new Set(s1 + s2))
//     .sort()
//     .join("");
// }
// console.log(longest("aretheyhere", "yestheyarehere"));
