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
  const ch = Array.from({ length: word.length }, () => 0);
  const map = {};
  dfs(word, ch, [], map);
}

console.log(result);

function dfs(word, ch, permute) {
  if (permute.length === word.length) {
    result += `${permute.join("")}\n`;
    return;
  }

  for (let i = 0; i < word.length; i++) {
    if (ch[i] === 1) continue;

    ch[i] = 1;
    permute.push(word[i]);
    dfs(word, ch, permute);
    permute.pop();
    ch[i] = 0;
  }
}

// 이 문제 시간초과나는 것에 대한 예상은 아마도 중복처리를 set이나 이런 자료구조로 하는 것이 의미가 없기 때문이다.
// 즉, 아예 연산을 수행하지 말아야 하는 듯 이렇게 처리하려면 어떻게 해야할지 생각해봐야됨.
