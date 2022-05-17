const solution = (string) => string.replaceAll("A", "#");

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
