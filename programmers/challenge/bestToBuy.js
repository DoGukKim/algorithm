const main = (want, numbers, discount) => {
  let result = 0;

  for (let i = 0; i < discount.length; i++) {
    let numbersCopy = numbers.slice();

    for (let j = 0; j < 10; j++) {
      const index = want.indexOf(discount[j + i]);
      if (index !== -1) {
        numbersCopy[index] = numbersCopy[index] - 1;
      }
    }

    if (!numbersCopy.filter((item) => item !== 0).length) result++;
  }

  return result;
};

const want = ["banana", "apple", "rice", "pork", "pot"];
const numbers = [3, 2, 2, 2, 1];
const discount = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];

console.log(main(want, numbers, discount));
