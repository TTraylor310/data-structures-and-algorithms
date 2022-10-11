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

  insert(value) {
    let newNew = new Node(value);
    let current;
    if(this.head === null){
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

  includes(input) {
    let current = this.head;
    while (current !== null) {
      if (current.value === input) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current !== null) {
      string += `{${current.value}} -> `;
      current = current.next;
    }
    string += 'NULL';
    return string;
  }

}


let ll = new LinkedList;

ll.insert(1);
ll.insert(20);
ll.insert(300);

console.log('List:', JSON.stringify(ll));

console.log(ll.includes(2));
console.log(ll.includes(20));

console.log(ll.toString());
