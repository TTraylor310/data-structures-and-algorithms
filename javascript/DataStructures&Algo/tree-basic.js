class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  traversal(tree) {
    const recTraverse = node => {
      console.log(node.value);
      if (node.left) recTraverse(node.left)
      if (node.right) recTraverse(node.right)
    }
    recTraverse(tree.root)
  }

  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    }
    let current = this.root
    while (true) {
      if (newNode.value === current.value) return undefined
      if (newNode.value < current.value) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  contains(value) {
    if (this.root === null) return false
    let current = this.root
    while (current) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }
    return false
  }

  minValueNode(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }


}

module.exports = { BST }
