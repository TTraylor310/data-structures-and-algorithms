class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  printStack() {
    let current = this.top;
    while(current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  getTop(){
    if(this.top === null){
      return null;
    } else {
      return this.top;
    }
  }

  getSize(){
    return this.size;
  }

  // add Node to TOP of stack
  push(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
    return this;
  }

  // remove Node from TOP of stack
  pop(){
    if (this.size === 0) return undefined;
    let current = this.top;
    this.top = current.next;
    current.next = null;
    this.size--;
    return current;
  }
}

module.exports = {Stack}
