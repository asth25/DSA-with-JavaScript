// 🧩 Core Concept Focus
// Nested Loops
// Pattern Printing with Logic and Symmetry
// Understanding iteration depth for shapes and designs

// 1 Print Right-Angled Star Triangle

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//   let Pattern = "";
//   for (let j = 1; j <= i; j++) {
//     Pattern = Pattern + "*";
//   }
//   console.log(Pattern);
// }

// 2 Print Inverted Right-Angled Triangle

// let a = 5;
// for (let i = a; i >= 1; i--) {
//   let Pattern = "";
//   for (let k = 1; k <= i; k++) {
//     Pattern = Pattern + "*";
//   }
//   console.log(Pattern);
// }

// 3 Print Pyramid Pattern

// let rows = 5;

// for (let i = 1; i <= rows; i++) {

//   let pattern = "";
//   for (let j = 1; j <= rows - i; j++) {
//     pattern = pattern + " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     pattern = pattern + "*";
//   }
//   console.log(pattern);
// }

// 4 Print Inverted Pyramid Pattern

// let rows = 5;

// for (let i = rows; i >= 1; i--) {

//   let pattern = "";
//   for (let j = 1; j <= rows - i; j++) {
//     pattern = pattern + " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     pattern = pattern + "*";
//   }
//   console.log(pattern);
// }

// 5 Print Hollow Square Pattern

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let pattern = "";
//   for (let j = 1; j <= n; j++) {
//     if (i === 1 || i === n || j === 1 || j === n) {
//       pattern = pattern + "*";
//     } else {
//       pattern = pattern + " ";
//     }
//   }
//   console.log(pattern);
// }

// 6 Print Hollow Pyramid Pattern

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//   let pattern = "";
//   for (let j = 1; j <= rows - i; j++) {
//     pattern = pattern + " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k === 1 || k === 2 * i - 1 || i === rows) {
//       pattern = pattern + "*";
//     } else {
//       pattern = pattern + " ";
//     }
//   }
//   console.log(pattern);
// }

// 7 Print Alternating Binary Triangle

let rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    if ((i + j) % 2 === 0) {
      pattern = pattern + "1";
    } else {
      pattern = pattern + "0";
    }
  }
  console.log(pattern);
}
