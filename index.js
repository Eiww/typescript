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
  return console.log(`${star.repeat(count || 0)}${card.slice(12)}`);
}

getHiddenCard("1234567812345678", 2); // "**5678"
getHiddenCard("1234567812345678", 3); // "***5678"
getHiddenCard("1234567812345678"); // "****5678"
getHiddenCard("2034399002121100", 1); // "*1100"

//task 4

function getEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
console.log(getEvenNumbers(numbers));
