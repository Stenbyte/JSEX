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
// document.getElementById("test").innerText = "Go";
// const btn = document.getElementById("mul");
// btn.textContent = "check";
// const numberG = document.querySelector(".number");
// const mat = Math.trunc(Math.random() * 20) + 1;
// numberG.textContent = mat;

// btn.addEventListener("click", function () {
//   const ch = Number(document.getElementById("num1").value);

//   if (!ch) {
//     document.getElementById("warn").textContent = "Enter a valid number";
//   } else if (ch === +numberG.textContent) {
//     document.getElementById("warn").textContent = "Yes";
//     document.body.style.backgroundColor = "red";
//   }
// });
// const btns = document.querySelectorAll(".show");
// const modal = document.querySelector(".modal");
// const close = document.querySelector(".close");
// const overlay = document.querySelector(".overlay");

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   });
// }
// close.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });
// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   }
// });
/* const newGame = document.querySelector(".new");
const result1 = document.querySelector(".result");
const result2 = document.querySelector(".result1");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const mainNum = document.querySelector(".number");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

// Start
let scores = [0, 0];
let score = 0;
let activeP = 0;
const switchP = function () {
  document.getElementById(`id-${activeP}`).textContent = 0;
  score = 0;
  activeP = activeP === 0 ? 1 : 0;
  left.classList.toggle("back");
  right.classList.toggle("back");
};
roll.addEventListener("click", function () {
  const randomN = Math.trunc(Math.random() * 6) + 1;
  mainNum.textContent = randomN;
  if (randomN !== 1) {
    score += randomN;
    document.getElementById(`id-${activeP}`).textContent = score;
  } else {
    // switch
    switchP();
  }
});
// Hold function
hold.addEventListener("click", function () {
  scores[activeP] += score;
  document.getElementById(`total-${activeP}`).textContent = scores[activeP];
  if (scores[activeP] >= 10) {
    document.getElementById(`left-${activeP}`).style.backgroundColor =
      "crimson";
  } else {
    switchP();
  }
});
newGame.addEventListener("click", function () {
  scores = [0, 0];
  document.getElementById(`total-0`).textContent = 0;
  document.getElementById(`total-1`).textContent = 0;
});
 */
