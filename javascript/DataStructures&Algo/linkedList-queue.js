class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  printQueue() {
    let current = this.first;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      let current = this.first;
      this.first = this.first.next
      current.next = null;
    }
    this.size--;
    return this;
  }
}

module.exports = { Queue }
