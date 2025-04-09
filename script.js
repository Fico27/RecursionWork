function myMergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  //half the array

  const midArray = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midArray);
  const rightArray = array.slice(midArray);

  return myMerge(myMergeSort(leftArray), myMergeSort(rightArray));
}

function myMerge(leftArray, rightArray) {
  let sortedArr = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArr.push(leftArray.shift());
    } else {
      sortedArr.push(rightArray.shift());
    }
  }
  return [...sortedArr, ...leftArray, ...rightArray];
}

let myArray = [5, 7, 9, 1, 0, 6, 7, 8];

function fibRecursion(num) {
  //What is my base case?
  // We know that fib of 0 is 0
  // We know that fib of 1 is [0,1]
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  }

  let array = fibRecursion(num - 1);

  array.push(array[array.length - 1] + array[array.length - 2]);
  return array;
}
