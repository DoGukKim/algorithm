// TimeComplexity O(n!)
// SpaceComplexity O(n!)
const main = (word, anagram = "", anagrams = []) => {
  if (word.length === 0) return anagrams.push(anagram);

  for (let i = 0; i < word.length; i += 1) {
    anagram += word[i];
    main(word.slice(0, i) + word.slice(i + 1), anagram, anagrams);
    anagram = anagram.slice(0, anagram.length - 1);
  }

  return anagrams;
};

console.log(main("abc"));

// const main = (numbers) => {
//   let result = [];
//   dfs(numbers, result);

//   return result;
// };

// const dfs = (numbers, all, i = 0) => {
//   if (i === numbers.length) return all.push(numbers.slice());

//   for (let j = i; j < numbers.length; j++) {
//     [numbers[i], numbers[j]] = [numbers[j], numbers[i]];

//     dfs(numbers, all, i + 1);
//     console.log(i, j);
//     [numbers[j], numbers[i]] = [numbers[i], numbers[j]];
//   }
// };

// console.log(main([1, 2, 3]));
