let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
input = input.slice(1, n + 1);
let result = "";

for (let i = 0; i < n; i++) {
  const word = input[i].split("").sort();
  dfs(word, 0);
}

console.log(result);

function dfs(word, i) {
  if (i === word.length - 1) {
    result += `${word.join("")}\n`;
    return;
  }

  for (let j = i; j < word.length; j++) {
    if (j !== i && word[i] === word[j]) continue;

    [word[i], word[j]] = [word[j], word[i]];
    dfs(word, i + 1);
    [word[j], word[i]] = [word[i], word[j]];
  }
}

// 이 문제 시간초과나는 것에 대한 예상은 아마도 중복처리를 set이나 이런 자료구조로 하는 것이 의미가 없기 때문이다.
// 즉, 아예 연산을 수행하지 말아야 하는 듯 이렇게 처리하려면 어떻게 해야할지 생각해봐야됨.
