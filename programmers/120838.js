// Title: 모스부호(1)
// 방법 1
// Time: O(n)
// Space: O(n)
// Input: ".... . .-.. .-.. ---"
function solution(letter) {
  letter = letter.split(" ");

  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };

  let result = "";

  for (let i = 0; i < letter.length; i++) {
    result += morse[letter[i]];
  }

  return result;
} // -> "hello"
