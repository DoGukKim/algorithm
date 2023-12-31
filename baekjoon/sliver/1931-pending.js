let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
input = input
  .slice(1)
  .map((i) => i.split(" ").map(Number))
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

const convertOfMeetingTime = input.map((item) => Math.abs(item[0] - item[1]));
const min = Math.min(...convertOfMeetingTime);
const leastMeetingIndex = convertOfMeetingTime.findIndex((i) => i === min);

let result = 1;
const currentMeeting = input[leastMeetingIndex];
for (let i = leastMeetingIndex + 1; i < n; i++) {
  const [s, e] = input[i];

  if (currentMeeting[1] <= s) {
    console.log("cur", input[i]);
    currentMeeting[0] = s;
    currentMeeting[1] = e;
    result++;
  }
}

console.log(result);

// 위의 풀이는 틀린 이유가 회의 시작을 회의시간이 작은 기준으로 하게 되면 더 일찍 회의를 시작할 수 있음에도 불구하고 늦게 시작하기 때문에,
// 최대로 회의할 수 있는 것이 아니게 된다.
