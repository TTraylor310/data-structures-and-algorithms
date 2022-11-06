'use stack';

class Stack {
  constructor() {
    this.array = [];
    this.count = 0;
  }


  push(value) {
    this.array.push(value);
    this.count++;
    return `Added ${value} to the array: ${this.array}`;
  }

  pop() {
    let poppedValue = this.array[this.array.length-1];
    this.array.pop();
    this.count--;
    return `removed last value in array: ${poppedValue}`;
  }

  peek() {
    return this.array[this.array.length -1];
  }


}

const myStack = new Stack();

myStack.push('a');
myStack.push('b');
myStack.push('c');

console.log(myStack.count);

console.log('check this one', myStack.push(5));
console.log('check the pop', myStack.pop());
console.log('last thing', myStack.peek());
