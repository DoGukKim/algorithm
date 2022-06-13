// 풀이
const replaceSolution = (string) => string.replaceAll("A", "#");

const solution = (s) => {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") result += "#";
    else result += s[i];
  }
};

// 재귀 풀이
const recursive = (string) => {
  if (string.length === 1) {
    if (string[0] === "A") return "#";
    else return string[0];
  }
  if (string[0] !== "A") {
    return string[0] + recursive(string.substring(1));
  } else {
    return "#" + recursive(string.substring(1));
  }
};

// input
const result = solution("BANANA");
