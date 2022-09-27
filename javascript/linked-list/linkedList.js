'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedListNode {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  }

  add(value){
    const node = new Node(value);
    if (!this.head) {
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

  insert(value){
    const node = new LinkedListNode(value, this.head);
    this.head= node;
    this.length++;
  }

  getByIndex(value){
    
  }

  // includes(value){
  //   let current = this.head;
  //   while(current){
  //     console.log(current.value);
  //     if (value nt){
  //       return true;
  //     }
  //     current = current.next;
  //   }
  //   return false;
  // }

}

LinkedList.fromValues = function(...values) {
  const ll = new LinkedList();
  for (let i = values.length -1; i >= 0; i--){
    ll.insert(values[i]);
  }
  return ll;
};



let list = new LinkedList;
console.log('linked list', list);

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

// list.traverse();
list.traverseWithCallback(logger);
function logger(value){
  console.log(`Node Value: ${value}`);
}

list.insert(20);
console.log(list);

module.exports = LinkedList;
