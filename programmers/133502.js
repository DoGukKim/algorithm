// Title: 햄버거 만들기
// Time: O(n)
// Space: O(n)
function solution(ingredient) {
  let result = 0;
  const stack = [];
  const burger = "1231";

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length > 3) {
      const isBurger = stack.slice(-4).join("") === burger;

      if (isBurger) {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        result++;
      }
    }
  }

  return result;
}
