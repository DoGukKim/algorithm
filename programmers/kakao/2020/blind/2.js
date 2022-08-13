const main = (p) => {
  const correctResult = isCorrectBracket(p);
  if (correctResult) return p;

  function formatBrackets(s) {
    if (s.length === 0) return ""; // 기저 조건

    const { u, v } = makeUV(s); // u, v 생성
    const correctResult = isCorrectBracket(u); // u의 올바른 괄호 확인

    if (correctResult) {
      return u + formatBrackets(v);
    } else {
      const reversed = u
        .slice(1, u.length - 1)
        .split("")
        .map((element) => (element === "(" ? ")" : "("))
        .join(""); // 반전

      return "(" + formatBrackets(v) + ")" + reversed;
    }
  }

  return formatBrackets(p);
};

const isCorrectBracket = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return true;
};

const makeUV = (s) => {
  let flag = s[0] === "(" ? 1 : -1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(") flag += 1;
    else flag -= 1;

    if (flag === 0) {
      const u = s.slice(0, i + 1);
      const v = s.slice(i + 1, s.length) || "";
      return { u, v };
    }
  }
};

console.log(main("(()())()"));
console.log(main(")("));
console.log(main("()))((()"));
