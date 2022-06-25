const main = (s) => {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) result += s[i];
  }
  console.log(parseInt(result));
};
const str = "good0123";
main(str);
