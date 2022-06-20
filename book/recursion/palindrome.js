const isPalindrome = (str) => {
  if (str.length === 0 || str.length === 1) return true;

  if (str[0] === str[str.length - 1])
    return isPalindrome(str.substring(1, str.length - 1));

  return false;
};
const result = isPalindrome("kayak");
console.log(result);
