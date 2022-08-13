const main = (new_id) => {
  new_id = new_id.toLowerCase(); // 1

  const notAllowChar = "~!@#$%^&*()=+[{]}:?,<>/";
  let format_id = ""; // 2
  for (let i = 0; i < new_id.length; i += 1)
    if (!notAllowChar.includes(new_id[i])) format_id += new_id[i];

  let result = ""; // 3
  for (let i = 0; i < format_id.length; i += 1) {
    if (format_id[i] === "." && format_id[i + 1] === ".") continue;
    result += format_id[i];
  }

  if (result[0] === ".") result = result.slice(1); // 4

  if (result[result.length - 1] === ".")
    result = result.slice(0, result.length - 1); // 4

  if (result.length === 0) result = "a"; // 5

  if (result.length > 15) result = result.slice(0, 15); // 6

  if (result[0] === "") result = result.slice(1); // 4

  if (result[result.length - 1] === ".")
    result = result.slice(0, result.length - 1); // 4

  // 7
  if (result.length < 3)
    while (result.length < 3) result += result[result.length - 1];

  return result;
};

console.log(main("...!@BaT#*..y.abcdefghijklm"));
console.log(main("z-+.^."));
console.log(main("=.="));
console.log(main("123_.def"));
console.log(main("abcdefghijklmn.p"));
