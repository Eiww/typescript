//task 1

function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 8)); // 24
console.log(multiply(1, 2)); // 2

//task 2

function repeat(text = String, count = Number) {
  return text.repeat(count);
}

console.log(repeat("sometext", 2));
console.log(repeat("wo", 3));
