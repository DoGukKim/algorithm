// title: 객체 비교하기
// time: O(nm) m은 값이 object type인 경우
// space: O(nm)
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 35,
  items: [1, 2, 3],
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 35,
  items: [1, 2, "3"],
};

function isDeepEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) return false;

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;

  for (const key of obj1Keys) {
    const obj1Val = obj1[key];
    const obj2Val = obj2[key];
    console.log(obj1Val, obj2Val);
    const isObjects = isObject(obj1Val) && isObject(obj2Val);

    if (
      (isObjects && !isDeepEqual(obj1Val, obj2Val)) ||
      (!isObjects && obj1Val !== obj2Val)
    ) {
      return false;
    }
  }

  return true;
}

console.log(isDeepEqual(person1, person2));

function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

// console.log(typeof null); // object
