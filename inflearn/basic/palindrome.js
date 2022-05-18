// 풀이
const solution = (string) => {
  string = string.toLowerCase();
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) return "NO";
    else return "YES";
  }
};

// stack
const stackSolution = (string) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }
  for (let j = s.length - 1; j >= 0; j--) {
    if (stack.pop() !== s[j]) return "NO";
    else "YES";
  }
};
