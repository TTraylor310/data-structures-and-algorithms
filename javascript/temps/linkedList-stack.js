'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.count = 0;
  }

  push (data) {
    if (this.count === 0) {
      this.top = new Node(data);
    } else {
      let pushedNode = new Node(data);
      pushedNode.next = this.top;
      this.top = pushedNode;
    }
    this.count++;
  }

  pop() {
    if (this.count === 0) return;
    console.log('Popped node value: ', this.top.value);
    this.top = this.top.next;
    this.count--;
  }


  peek() {
    if (this.count === 0) return 'Stack is empty!';
    if (this.count === 1) return null;
    return this.top;
  }

  isEmpty() {
    return this.top === null;
  }

  getTopValue() {
    return this.top.value;
  }

}


let myStack = new Stack();

console.log(myStack.isEmpty());
myStack.pop();
myStack.push('a');
myStack.push('b');
myStack.push('c');
myStack.push('x');
myStack.pop();
myStack.isEmpty();

console.log('check the peek', myStack.peek());
console.log('Current stack count:', myStack.count);
console.log('here is the thing?', myStack.top);
