'use strict';

const array1 = [8, 4, 23, 42, 16, 15];
const array2 = [20, 18, 12, 8, 5, -2];
const array3 = [5, 12, 7, 5, 5, 7];
const array4 = [2, 3, 5, 7, 13, 11];


const selectionSort = (input) => {
  let n = input.length;
  for (let i = 0; i < n-1; i++){
    let tempV;
    for (let j = i+1; j < n; j++){
      if (input[i]>input[j]){
        tempV = input[i];
        input[i] = input[j];
        input[j] = tempV;
      }
    }
  }
  return input;
};

module.exports = selectionSort;

console.log(selectionSort(array1));
console.log(selectionSort(array2));
console.log(selectionSort(array3));
console.log(selectionSort(array4));
