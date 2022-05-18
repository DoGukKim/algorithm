// 풀이
function solution(s) {
  let answer = "";
  let stack = [];
  let acc = 1;
  for (let i = 0; i < s.length; i++) {
    if (stack.length < 1) {
      stack.push(s[i]);
      continue;
    }
    const current = stack.pop();
    if (current === s[i]) {
      stack.push(s[i]);
      acc++;
    } else {
      answer += current + acc + s[i];
      acc = 1;
    }
  }
  return answer;
}

// 다른 사람 풀이
function otherSolution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}
