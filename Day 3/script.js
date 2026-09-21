// 🧩 Core Concept Focus
// Nested Loops
// Pattern Printing with Logic and Symmetry
// Understanding iteration depth for shapes and designs

// 1 Print Right-Angled Star Triangle

let rows = 5;
for (let i = 1; i <= rows; i++) {
  let Pattern = "";
  for (let j = 1; j <= i; j++) {
    Pattern = Pattern + "*";
  }
  console.log(Pattern);
}

// 2 Print Inverted Right-Angled Triangle

let a = 5;
for (let i = a; i >= 1; i--) {
  let Pattern = "";
  for (let k = 1; k <= i; k++) {
    Pattern = Pattern + "*";
  }
  console.log(Pattern);
}
