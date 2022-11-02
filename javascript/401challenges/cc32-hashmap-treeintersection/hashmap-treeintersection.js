'use strict';
let newArr = [];

class Node{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);
    let current;
    if (this.head === null) {
      this.head = node;
      return;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  traverse(tree){
    let recTraverse = node => {
      table.set(node.value, node.value);
      if(node.left) recTraverse(node.left);
      if(node.right) recTraverse(node.right);
    };
    recTraverse(tree.root);
  }
}

class HashTable{
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    return key*421 % this.size;
  }

  set(key, value) {
    let position = this.hash(key);
    let data = {[key]: value};
    if(this.buckets[position]){
      newArr.push(this.buckets[position].head.value[key]);
      return;
    } else {
      let bucket = new LinkedList();
      bucket.add(data);
      this.buckets[position] = bucket;
    }
  }

}


// ------------TREE 1-------------------------
let tree1 = new BST();
tree1.root = new Node (150);
tree1.root.left = new Node (100);
tree1.root.left.left = new Node (75);
tree1.root.left.right = new Node (160);
tree1.root.left.right.left = new Node (125);
tree1.root.left.right.right = new Node (175);
tree1.root.right = new Node (250);
tree1.root.right.left = new Node (200);
tree1.root.right.right = new Node (350);
tree1.root.right.right.left = new Node (300);
tree1.root.right.right.right = new Node (500);
// ------------TREE 2-------------------------
let tree2 = new BST();
tree2.root = new Node (42);
tree2.root.left = new Node (100);
tree2.root.left.left = new Node (15);
tree2.root.left.right = new Node (160);
tree2.root.left.right.left = new Node (125);
tree2.root.left.right.right = new Node (175);
tree2.root.right = new Node (600);
tree2.root.right.left = new Node (200);
tree2.root.right.right = new Node (350);
tree2.root.right.right.left = new Node (4);
tree2.root.right.right.right = new Node (500);

let table = new HashTable(1024);
tree1.traverse(tree1);
// console.log('-------------');
tree2.traverse(tree2);
// console.log(table.hash(150));
// table.set(150, 150);
// table.set(150, 150);
// console.log('check table', table);
// console.log('check ansArr', newArr);
console.log('repeated numbers in the trees:', newArr);
