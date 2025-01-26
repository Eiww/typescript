//task 1

function multiplyy(a, b) {
  return a * b;
}

console.log(multiplyy(3, 8)); // 24
console.log(multiplyy(1, 2)); // 2

//task 2

function repeate(text: string, count: number) {
  return text.repeat(count);
}

console.log(repeate("sometext", 2));
console.log(repeate("wo", 3));

//task 3
function getHiddenCard(card: string, count?: number) {
  const star = "*";
  return `${star.repeat(count || 0)}${card.slice(12)}`;
}

console.log(getHiddenCard("1234123412341234", 2));
