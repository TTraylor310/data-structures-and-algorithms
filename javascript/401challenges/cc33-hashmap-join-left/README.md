# Hashmap - Left Join

## Challenge 

[CC33](https://canvas.instructure.com/courses/5233640/assignments/32144445)

- Write a function that _LEFT JOINs_ two hashmaps into a single data structure.

    - Write a function called left join
    - Arguments: two hash maps
        - The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
        - The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
    - Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

## Approach & Efficiency
  - Hash - SET for table 1 (key AND value)
      - push KEY and VALUE into an ARRAY
  - Hash - SET for table 2 (key AND value)
      - check if KEY exists already
          - if YES -> store VALUE into an ARRAY
          - if NO -> store “NULL” into ARRAY

  - O(log n) is very long.. Has to iterate through both arrays and checks for values.

## Solution
  ![Whiteboard](cc33.png)
