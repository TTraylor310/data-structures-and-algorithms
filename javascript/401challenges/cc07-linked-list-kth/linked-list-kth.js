'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);
    let current;
    if (this.head === null) {
      this.head = newNode;
      return;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  kthFromEnd(k) {
    let current;
    let count = 0;
    current = this.head;
    while(current !== null) {
      current = current.next;
      count++;
    }
    if (count < k) return;
    current = this.head;
    for (let i = 1; i < count-k+1; i++){
      current = current.next;
    }
    return current.value;
  }

}

let ll = new LinkedList;
ll.add('A');
ll.add('B');
ll.add('C');
ll.add('D');

console.log(ll.kthFromEnd(3));

console.log('List:', JSON.stringify(ll));
