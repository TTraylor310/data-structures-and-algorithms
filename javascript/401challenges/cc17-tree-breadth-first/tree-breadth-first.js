'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function breadthFirst(root) {
  let queue = [root];
  while (queue.length > 0) {
    let temp = queue.shift();
    console.log(temp.value);
    if (temp.left !== null) {
      queue.push(temp.left);
    }
    if (temp.right !== null) {
      queue.push(temp.right);
    }
    // return queue;
  }
}


let a = new Node(2);
let b = new Node(7);
let c = new Node(2);
let d = new Node(6);
let e = new Node(5);
let f = new Node(11);
let g = new Node(5);
let h = new Node(9);
let i = new Node(4);
a.left = b;
b.left = d;
b.right = e;
e.left = g;
e.right = h;
a.right = c;
c.right = f;
f.right = i;


// let root = new Node(2);
// root.left = new Node(7);
// root.left.left = new Node(2);
// root.left.right = new Node(6);
// root.left.right.left = new Node(5);
// root.left.right.right = new Node(11);
// root.right = new Node(5);
// root.right.right = new Node(9);
// root.right.right.right = new Node(4);

// console.log(a.length);
breadthFirst(a);
// console.log(breadthFirst(a));
