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
