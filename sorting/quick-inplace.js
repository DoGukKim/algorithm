const quickSort = (
  originalArray,
  inputLowIndex = 0,
  inputHighIndex = originalArray.length - 1,
  recursiveCall = false
) => {
  const array = recursiveCall ? originalArray : [...originalArray];

  const partitionArray = (lowIndex, highIndex) => {
    const swap = (leftIndex, rightIndex) => {
      const temp = array[leftIndex];
      array[leftIndex] = array[rightIndex];
      array[rightIndex] = temp;
    };

    const pivot = array[highIndex];
    let partitionIndex = lowIndex;

    for (
      let currentIndex = lowIndex;
      currentIndex < highIndex;
      currentIndex += 1
    ) {
      if (array[currentIndex] < pivot) {
        swap(partitionIndex, currentIndex);
        partitionIndex += 1;
      }
    }
    swap(partitionIndex, highIndex);
    return partitionIndex;
  };

  if (inputLowIndex < inputHighIndex) {
    const partitionIndex = partitionArray(inputLowIndex, inputHighIndex);
    const RECURSIVE_CALL = true;
    quickSort(array, inputLowIndex, partitionIndex - 1, RECURSIVE_CALL);
    quickSort(array, partitionIndex + 1, inputHighIndex, RECURSIVE_CALL);
  }

  return array;
};

// const result = quickSort([0, 5, 2, 1, 6, 3]);
// console.log(result);

// otherVersion

let items = [0, 5, 2, 1, 6, 3];
function swap(items, leftIndex, rightIndex) {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}

// const result = quickSort(items, (left = 0), (right = items.length - 1));
// console.log(result);
