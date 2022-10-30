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
    const node = new Node(value);
    let current;
    if (this.head === null) {
      this.head = node;
      return;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  traverseWithCallback(callback) {
    let current = this.head;
    while (current) {
      callback(current.value);
      current = current.next;
    }
  }

  addAt(value, idx) {
    if(idx < 0 || idx > this.size) {
      return console.log('Invalid index. Try again.');
    } else {
      let node = new Node(value);
      let current, previous;
      current = this.head;

      if (idx === 0) {
        node.next = this.head;
        this.head = node;

      } else {
        current = this.head;
        let count = 0;
        while (count < idx) {
          count++;
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.size++;
    }
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

  removeAt(idx) {
    if( idx < 0 || idx >= this.size) {
      return console.log('Invalid index. Try again.');
    } else {
      let current, previous;
      let count = 0;
      current = this.head;
      previous = current;

      if (idx === 0) {
        this.head = current.next;
      } else {

        while(count<idx){
          count++;
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }

      this.size--;
      return current.value;
    }
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

  removeNum(value) {
    let current = this.head;
    let previous = null;
    while (current !== null) {
      if (current.value === value) {
        if (previous === null){
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.value;
      }
      previous = current;
      current = current.next;
    }
    return -1;
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

  indexOf(value) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (current.value === value) {
        return count;
      }
      count++;
      current = current.next;
    }
    return -1;
  }

  printList() {
    let current = this.head;
    let thing = '';
    while (current) {
      thing += current.value + " ";
      current = current.next;
    }
    console.log(thing);
  }

  // reverse() {

  // }

  // zipList() {

  // }

  // palindromeCheck() {

  // }

}

module.exports = {LinkedList};

function logger(value) {
  console.log(`Node Value: ${value}`);
}

// let list = new LinkedList();
// console.log('empty list', list);

// add head to list
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
// list.removeAt(3);
// list.traverse();
// list.addAt(6, 2);
// list.removeNum(9);

// console.log('after:', list);
// console.log('after, nested:', JSON.stringify(list));

// list.traverseWithCallback(console.log);
// list.traverseWithCallback(logger);

// list.printList();
