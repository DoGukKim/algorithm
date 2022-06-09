const solution = (arr) => {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let end = arr[i][1];
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][0] >= end) {
        end = arr[j][1];
        count++;
      }
    }

    if (count > answer) answer = count;
  }

  return answer;
};

const result = solution([
  [3, 3],
  [1, 3],
  [2, 3],
]);

// const result = solution([
//   [1, 4],
//   [2, 3],
//   [3, 5],
//   [4, 6],
//   [5, 7],
// ]);

// 다른 사람 풀이

function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}
