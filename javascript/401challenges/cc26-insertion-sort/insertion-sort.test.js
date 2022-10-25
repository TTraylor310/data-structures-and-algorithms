'use strict';
const selectionSort = require('./insertion-sort');


test('Correctly sorts the array', () => {
  let testArray = [3,4,6,9,2];
  expect(selectionSort(testArray)).toEqual([2,3,4,6,9]);
});
