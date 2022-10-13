'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sumAns(node) {
  if (node === null) return 'hi';
  if(node !== null) {
    if(node.left !== null) {
      sumAns(node.left);
    }
    if (node.right !== null) {
      sumAns(node.right);
    }
  }
}



let a = new Node(8);
let b = new Node(3);
let c = new Node(1);
let d = new Node(6);
let e = new Node(4);
let f = new Node(7);
let g = new Node(10);
let h = new Node(14);
let i = new Node(13);

a.left = b;
a.right = g;
b.left = c;
b.right = d;
d.left = e;
d.right = f;
g.right = h;
h.right = i;

console.log(sumAns(z));
