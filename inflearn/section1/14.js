// Time: O(n)
// Space: O(1)
const main = (words) => {
  let result = words[0];

  for (let i = 1; i < words.length; i++)
    if (result.length < words[i].length) result = words[i];

  return result;
};

console.log(main(["teacher", "time", "student", "beautiful", "good"]));
