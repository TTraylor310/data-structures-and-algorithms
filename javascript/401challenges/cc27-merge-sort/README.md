# Class 27 - Code Challenge - Merge Sort

[Description of Assignment](https://canvas.instructure.com/courses/5233640/assignments/32144438)

## Description of Problem Domain

## Pseudocode

```js
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

-----------------------------------------------------

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0
    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
        k <-- k + 1
    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Blog details of Challenge

`sampleArray = [ 8 , 4 , 23 , 42 , 16 , 15 ]`

Part 1: Working through the pseudocode, I worked how the arrays were starting to get sorted and put back together with merge. Some of that code felt wrong to my javascript mind but I think that it made logical sense about how to put it all back together.

Part 2: mergeSort splits up the array in half, and organizes the numbers recursively.

Part 3: merge puts the arrays all back together by value continuously.
