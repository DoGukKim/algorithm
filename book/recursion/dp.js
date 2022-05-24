const addUtil100 = (array) => {
  if (array.length === 0) return 0;
  const add_until_remainder = addUtil100(array.slice(1));
  if (array[0] + add_until_remainder > 100) {
    return add_until_remainder;
  } else {
    return array[0] + add_until_remainder;
  }
};
