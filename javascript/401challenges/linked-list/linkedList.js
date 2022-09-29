'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  add(value){
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  traverse(){
    let current = this.head;
    while(current){
      console.log(current.value);
      current = current.next;
    }
  }

  traverseWithCallback(callback){
    let current = this.head;
    while(current){
      callback(current.value);
      current = current.next;
    }
  }
}


function logger(value){
  console.log(`Node Value: ${value}`);
}

let list = new LinkedList();
console.log('empty list', list);

// add head to list
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

console.log('after', list);

// hurts these eyes, but it looks like a series of nested objects
console.log('populated list', JSON.stringify(list));

list.traverse();
list.traverseWithCallback(console.log);

list.traverseWithCallback(logger);

// list.kthFromEnd(2);
console.log('newest lists', JSON.stringify(list));

