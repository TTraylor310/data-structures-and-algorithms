'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode{
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.children = [];
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(){

    const traverse = node => {
      console.log(node.value);

      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }

    };

  }

}


