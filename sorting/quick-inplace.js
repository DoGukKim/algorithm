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

const result = quickSort([0, 5, 2, 1, 6, 3]);
console.log(result);
