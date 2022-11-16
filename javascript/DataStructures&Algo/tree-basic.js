 class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
 }

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null){
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while(true){
      if (newNode.value === current.value) return undefined;






    }
  }

}
