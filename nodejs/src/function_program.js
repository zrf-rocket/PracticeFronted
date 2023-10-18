const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(`The sum of numbers is ${sum}`);

const squares = numbers.map(num=>num*num);
console.log(`The squares of numbers are ${squares}`);