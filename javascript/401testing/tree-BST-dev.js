'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node (value);
    if(this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if(newNode.value < node.value) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  traversal(tree, callback){
    // POSITION of the 'callback' determines type of search and order of display
    const recTraverse = node => {
      callback(node.value);
      if(node.left) recTraverse(node.left);
      if(node.right) recTraverse(node.right);
    };
    recTraverse(tree.root);
  }


}


let BST = new BinarySearchTree();
BST.add(1);
BST.add(3);
BST.add(2);
BST.add(5);
BST.add(9);

console.log(BST);

BST.traversal(BST, console.log);

