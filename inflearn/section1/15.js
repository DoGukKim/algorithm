// Title: 가운데 문자 출력
// Time: O(1)
// Space: O(1)
const main = (word) => {
  const mid = Math.floor(word.length / 2);

  if (word.length % 2 === 1) console.log(word[mid]);
  else console.log(word[mid - 1] + word[mid]);
};

main("good");
