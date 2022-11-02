# Hash Table - 

## Challenge

- [CC32](https://canvas.instructure.com/courses/5233640/assignments/32144349)

> Write a function called tree_intersection that takes two binary trees as parameters.
> Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

## Approach & Efficiency

Started with drawing out the [whiteboard](cc32.png). Then created a Binary Search Tree with the associated values. Knowing that I would need to traverse the tree and get the values, my thought was I need to store those values in a Hash map (as stated in the problem domain). If there were any repeat values for the trees, there would be a collision at that storage location. I will push those values into an array.

### Solution

`node hashmap-treeinsertions.js` will return info associated with the Code Challenge.
