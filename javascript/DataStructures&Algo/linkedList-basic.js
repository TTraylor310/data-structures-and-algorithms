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
    this.tail = null;
    this.size = 0;
  }

  printList() {
    let current = this.head;
    while (current !== null){
      console.log(current.value);
      current = current.next;
    }
  }

  getHead() {
    if (this.head === null) {
        return null;
    } else {
        return this.head;
    }
  }

  getTail() {
    if (this.tail === null) {
      return null;
    } else {
      return this.tail;
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add Node to end of LinkedList
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  // remove Node from end of LinkedList
  pop() {
    if (this.size === 0) return undefined;
    let current = this.head;
    let pre = this.head;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.size--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // add Node at beginning of LinkedList
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return this;
  }

  // remove Node at beginning of LinkedList
  shift() {
    if (this.size === 0) return undefined
    let current = this.head;
    this.head = current.next;
    current.next = null;
    this.size--;
    if (this.size === 0) { this.tail = null }
    return current;
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

  // sets new value for Node at Index
  set(index, value) {
    let current = this.getAt(index);
    if (current) {
      current.value = value;
      return true;
    }
    return false;
  }

  // retrieves Node at Idex
  getAt(index) {
    if (index < 0 || index > this.size) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  // inserts new Node with value at Index
  insertAt(value, index) {
    if (index < 0 || index > this.size) return false;
    if (index === this.size) return this.push(value);
    if (index === 0) return this.unshift(value);

    let newNode = new Node(value);
    let current = this.getAt(index-1);
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
    return true;
  }

  // removes Node at the Index
  removeAt(index) {
    if (index < 0 || index >= this.size) return undefined;
    if (index === 0) return this.shift();
    if (index === this.size -1) return this.pop();

    let prev = this.getAt(index-1);
    let current = prev.next;
    prev.next = current.next;
    current.next = null;
    this.size--;
    return current;    
  }

  // removeNum(value) {
  //   let current = this.head;
  //   let previous = null;
  //   while (current !== null) {
  //     if (current.value === value) {
  //       if (previous === null) {
  //         this.head = current.next;
  //       } else {
  //         previous.next = current.next;
  //       }
  //       this.size--;
  //       return current.value;
  //     }
  //     previous = current;
  //     current = current.next;
  //   }
  //   return -1;
  // }


  // indexOf(value) {
  //   let current = this.head;
  //   let count = 0;
  //   while (current !== null) {
  //     if (current.value === value) {
  //       return count;
  //     }
  //     count++;
  //     current = current.next;
  //   }
  //   return -1;
  // }

  // completely reverse the LinkedList
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next = current.next;
    let prev = null;
    for (let i = 0; i < this.size; i++){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  }

  kthFromEnd(k) {
    let current;
    let count = 0;
    current = this.head;
    while (current !== null) {
      current = current.next;
      count++;
    }
    if (count < k) return;
    current = this.head;
    for (let i = 1; i < count - k + 1; i++) {
      current = current.next;
    }
    return current.value;
  }

  // zipList() {

  // }

  // palindromeCheck() {

  // }

}

module.exports = { LinkedList };
