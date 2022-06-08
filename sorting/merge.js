const mergeSortedArrays = (leftArray, rightArray) => {
  const sortedArray = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    let minElement = null;

    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      minElement = leftArray[leftIndex];
      leftIndex += 1;
    } else {
      minElement = rightArray[rightIndex];
      rightIndex += 1;
    }

    sortedArray.push(minElement);
  }

  return sortedArray
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
};

const originalArray = [2, 5, 6, 7, 3, 4];
const middleIndex = Math.floor(originalArray.length / 2);
const leftArray = originalArray.slice(0, middleIndex);
const rightArray = originalArray.slice(middleIndex, originalArray.length);

const leftSortedArray = leftArray.sort();
const rightSortedArray = rightArray.sort();

const result = mergeSortedArrays(leftSortedArray, rightSortedArray);
