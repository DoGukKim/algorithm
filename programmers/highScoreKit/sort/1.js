// K 번째 수

// Time: O(n^2)
// Space: O(n)
function solution(array, commands) {
  var answer = [];

  for (i = 0; i < commands.length; i++) {
    const sortedArray = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);

    answer.push(sortedArray[commands[i][2] - 1]);
  }

  return answer;
}
