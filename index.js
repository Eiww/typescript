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

//task 3 в процессе

function getHiddenCard(card = String, count = Number) {
  const star = "*";
  return `${star.repeat(count)} ${card.slice(12)}`;
}

console.log(getHiddenCard("1234123412341234", 2));
