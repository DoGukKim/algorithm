const solution = () => {
  function recursion(m) {
    if (m > 7) return;
    // pre
    console.log(m);
    recursion(m * 2);
    // in
    console.log(m);
    recursion(m * 2 + 1);
    // post
    console.log(m);
  }
  recursion(1);
};
