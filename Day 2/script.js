// 🧩 Core Concept Focus
// Conditional statements (if, else if, else)
// Comparison and logical operators

// 1 Find the Maximum of Three Numbers

let n = [10, 20, 5];
if (n[0] >= n[1] && n[0] >= n[2]) {
  console.log(n[0]);
} else if (n[1] >= n[0] && n[1] >= n[2]) {
  console.log(n[1]);
} else {
  console.log(n[2]);
}

// 2 Check if a Number is Positive, Negative, or Zero

let n = -9;
if (n > 0) {
  console.log("Positive");
} else if (n < 0) {
  console.log("Nagetive");
} else {
  console.log("Null");
}

// 3 Calculate Electricity Bill

let Units = 230;
let bill = 0;
if (Units <= 100) {
  bill = Units * 5;
} else if (Units <= 200) {
  bill = 100 * 5 + (Units - 100) * 7;
} else if (Units <= 300) {
  bill = 100 * 5 + 100 * 7 + (Units - 200) * 10;
} else {
  bill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
}
console.log("Total Bill = ₹" + bill);

// 4 Check if a Character is a Vowel or Consonant

let letter = "r";
if (
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u"
) {
  console.log("Vowel");
} else {
  console.log("consonent");
}

// 5 Check if a Year is a Leap Year

let year = 2004;
if (year % 4 === 0) {
  console.log("its a leap year");
} else if (year % 100 !== 0 && year % 400 === 0) {
  console.log("its a leap year");
} else {
  console.log("its not a leap year");
}
