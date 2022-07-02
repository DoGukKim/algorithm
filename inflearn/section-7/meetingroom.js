// 재풀이
const solution = (arr) => {
  let result = 0;

  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let endPoint = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i][0] >= endPoint) {
      result++;
      endPoint = arr[i][1];
    }
  }

  return result;
};

// 복습
const solution = (arr) => {
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let result = 0;
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] >= end) {
      end = arr[i][1];
      result++;
    }
  }
  return result;
};

const main = (arr) => {
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let result = 0;
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] >= end) {
      end = arr[i][1];
      result++;
    }
  }

  console.log(result);
};

main([
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
]);

// main([
//   [3, 3],
//   [1, 3],
//   [2, 3],
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
console.log(result);
