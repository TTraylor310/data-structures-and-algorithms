# Class 26 - Code Challenge - Insertion Sort

[Description of Assignment](https://canvas.instructure.com/courses/5233640/assignments/32144437)

## Description of Problem Domain

Selection Sort is a sorting algorithm that traverses the array multiple times as it slowly builds out the sorting sequence. The traversal keeps track of the minimum value and places it in the front of the array which should be incrementally sorted.

## Pseudocode

SelectionSort(int[] arr)
    DECLARE n <-- arr.Length;
    FOR i = 0; i to n - 1  
        DECLARE min <-- i;
        FOR j = i + 1 to n
            if (arr[j] < arr[min])
                min <-- j;

        DECLARE temp <-- arr[min];
        arr[min] <-- arr[i];
        arr[i] <-- temp;

## Blog details of Challenge

`sampleArray =  [ 8 , 4 , 23 , 42 , 16 , 15 ]`

Pass 1:

- For passing through the array, it takes the first index value and compares it to a temp variable. For the first pass, it just stores the Index#0 into that value. Then it compares Index#1 and determines whether greater or less than. 

Pass 2:

- Same rotation occurs for all the positions. It compares the current index value to the stored value, and if greater or not.
