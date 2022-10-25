'use strict';

const array1 = [8, 4, 23, 42, 16, 15];
const array2 = [20, 18, 12, 8, 5, -2];
const array3 = [5, 12, 7, 5, 5, 7];
const array4 = [2, 3, 5, 7, 13, 11];

const mergeSort = input => {
  if (input.length < 2){
    return input;
  } else {
    let mid = input.length/2;
    let left = input.splice(0, mid);
    return merge(mergeSort(left),mergeSort(input));
  }
};

const merge = (left, right) => {
  let newArr = [];
  while (left.length && right.length) {
    if (left[0] < right [0]) {
      newArr.push(left.shift());
    } else {
      newArr.push(right.shift());
    }
  }
  // console.log('test here', newArr);
  return [...newArr, ...left, ...right];
};

module.exports = {mergeSort, merge};

console.log(mergeSort(array1));
console.log(mergeSort(array2));
console.log(mergeSort(array3));
console.log(mergeSort(array4));
