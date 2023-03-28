// Title: 보이는 학생
// Time: O(n)
// Space: O(1)
function main(students) {
  let result = 1;
  let min = students[0];

  for (let i = 1; i < students.length; i++) {
    if (students[i] > min) {
      min = students[i];
      result++;
    }
  }

  console.log(result);
}

// Time: O(n)
// Space: O(1)
function main(students) {
  let result = 0;

  // 선생님은 첫 번째 아이는 무조건 볼 수 있습니다.
  for (let i = 1; i < students.length; i++) {
    if (students[i] > students[i - 1]) {
      result++;
    }
  }

  console.log(result);
}

main([130, 135, 148, 140, 145, 150, 150, 153]);
