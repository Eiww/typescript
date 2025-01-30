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

//task 5
function filterAnagrams(word: string, words: string[]): string[] {
  const sortedWord = word.split("").sort().join("");
  return words.filter((w) => w.split("").sort().join("") === sortedWord);
}

console.log(filterAnagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); // ['aabb', 'bbaa']
console.log(
  filterAnagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])
); // ['carer', 'racer']
console.log(filterAnagrams("laser", ["lazing", "lazy", "lacer"])); // []

//task 6

const course = {
  name: "Java",
  lessons: ["variables", "functions", "conditions"],
};

function isComplete(course: { name: string, lessons: string[] }): boolean {
  return course.lessons.length >= 4;
}
console.log(isComplete(course));

//task 7

enum ModalStatus {
  Opened = 'Opened',
  Closed = 'Closed',
}

function buildModal(text: string, status: ModalStatus){
  return {
    text: text,
    status: status,
     }

}
const modal = buildModal('hexlet forever', ModalStatus.Opened);
console.log(modal); 



// task 8
type User = {
  name: string;
  age: number;
};


function getOlderUser(user1: User, user2: User): User | null {
  if (user1.age > user2.age) {
    return user1;
  } else if (user1.age < user2.age) {
    return user2;
  } else {
    return null;
  }
}


const user1: User = { name: 'Petr', age: 10 };
const user2: User = { name: 'Ivan', age: 8 };

const olderUser = getOlderUser(user1, user2);
if (olderUser !== null) {
  console.log(`Старший пользователь: ${olderUser.name}, возраст: ${olderUser.age}`);
} else {
  console.log('Пользователи ровесники');
}

//task 9

