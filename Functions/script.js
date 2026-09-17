// # Part 1 — Functions Basics (1–20)

// ## Beginner Level

// 1. Create a function named `greet` that prints `"Hello World"`.

function greet() {
  console.log("Hello world");
}
greet();

// 2. Create a function `add(a, b)` that returns the sum.

function add(a, b) {
  sum = a + b;
  return sum;
}
console.log(add(60, 50));

// 3. Write a function to calculate the square of a number.

function square(num) {
  //    return num*2;
  console.log(num * 2);
}
// console.log(square(20));
square(50);

// 4. Create a function that checks whether a number is even or odd.

function checker(num) {
  if (num / 2 === 0) console.log("The number is even");
  else console.log("The number is odd");
}
checker(67);

// 5. Write a function that converts Celsius to Fahrenheit.

function calculation(Celsius) {
  return (Celsius * 9) / 5 + 32;
}
console.log(calculation(50));

// 6. Create a function with default parameter `"Guest"`.

function para(guest) {}
para();

// 7. Write a function that returns the greater of two numbers.

function greater(a, b) {
  if (a >= b) return "A is greater";
  else return "B is greater";
}
console.log(greater(83, 45));

// 8. Create a function to calculate area of rectangle.

function rectangle(){
    

}

// 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
// 10. Create a function to reverse a string.
