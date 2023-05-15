// Title: 할 일 목록
// Time: O(n)
// Space: O(n)
function solution(todo_list, finished) {
  return todo_list.filter((_, i) => finished[i] === false);
}
