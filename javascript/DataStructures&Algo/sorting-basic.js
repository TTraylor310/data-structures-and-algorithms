function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
// console.log(bubbleSort([4,2,6,5,1,3]));


function selectionSort(array) {
  let min;
  for (let i = 0; i < array.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}
// console.log(selectionSort([4, 2, 6, 5, 1, 3]));


function insertionSort(array) {
  let temp;
  for (let i = 1; i < array.length; i++){
    temp = array[i];
    for (var j = i - 1; array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  return array;
}
// console.log(insertionSort([2, 1, 4, 3, 5, 6]));
// O(n^2) typically


function merge (array1, array2){
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]){
      combined.push(array1[i])
      i++
    } else {
      combined.push(array2[j])
      j++
    }
  }
  while (i < array1.length){
    combined.push(array1[i])
    i++
  }
  while (j < array2.length){
    combined.push(array2[j])
    j++
  }
  return combined;
}
// console.log(merge([1,3,7,8], [2,4,5,6]));


function mergeSort(array) {
  if (array.length === 1) return array
  let mid = Math.floor(array.length/2)
  let left = array.slice(0, mid)
  let right = array.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}
// console.log(mergeSort([1,3,7,8,2,4,5,6]));
// O(n log n)

