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

  append(value) {
    let newNew = new Node(value);
    let current;
    if (this.head === null) {
      this.head = newNew;
      return;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNew;
    }
    this.size++;
  }

  insertBefore (value, newValue) {
    let newNew = new Node(newValue);
    let current;
    let previous;

    current = this.head;
    while (current.value !== value) {
      previous = current;
      current = current.next;
    }
    newNew.next = current;
    previous.next = newNew;
    this.size++;
  }

  insertAfter (value, newValue) {
    let newNew = new Node (newValue);
    let current;

    current = this.head;
    while (current.value !== value) {
      current = current.next;
    }
    newNew.next = current.next;
    current.next = newNew;
    this.size++;
  }

}

let ll = new LinkedList;
ll.append('A');
ll.append('B');
ll.append('C');
ll.append('D');

ll.insertBefore('C', 'G');
ll.insertAfter('B', 'Z');

// console.log(ll);
console.log('testing big list', JSON.stringify(ll));
