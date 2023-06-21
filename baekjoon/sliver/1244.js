// title: 스위치 켜고 끄기
// time: O(kn)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const switches = input[1].split(" ");
const k = Number(input[2]);
const students = input
  .slice(3, input.length)
  .map((i) => i.split(" ").map(Number));

for (let i = 0; i < k; i++) {
  const [sex, num] = students[i];

  if (sex === 1) {
    for (let j = num - 1; j < n; j++) if ((j + 1) % num === 0) switching(j);
    continue;
  }

  if (sex === 2) {
    const [lt, rt] = getRangeBy(num - 1);
    for (let j = lt; j <= rt; j++) switching(j);
  }
}

let result = "";
for (let i = 0; i < n; i++) {
  if ((i + 1) % 20 === 0) {
    result += `${switches[i]}\n`;
    continue;
  }
  result += `${switches[i]} `;
}

console.log(result);

function switching(index) {
  if (switches[index] === "1") {
    switches[index] = "0";
  } else if (switches[index] === "0") {
    switches[index] = "1";
  }

  return null;
}

function getRangeBy(index) {
  let lt = index;
  let rt = index;

  while (true) {
    if (switches[lt - 1] !== switches[rt + 1]) return [lt, rt];

    lt--;
    rt++;
  }
}
