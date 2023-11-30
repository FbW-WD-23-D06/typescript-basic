const getOddNumbers = (numbers) => {
  return numbers.filter((number) => number % 2 === 0);
};

console.log(
  "getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]):",
  getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) 
);
console.log("getOddNumbers():", getOddNumbers()); // undefined 
console.log('getOddNumbers("hello"):', getOddNumbers("hello")); // []
