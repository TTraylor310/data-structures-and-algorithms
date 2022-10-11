'use strict';


class Node{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  insertFirst(value){
    this.head = new Node(value, this.head);
    this.size++;
  }

  insertLast(value){
    let node = new Node(value);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(data, index) {
    // out of range
    if(index > 0 && index > this.size){
      return;
    }
    // if first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    // negative number?
    if (index < 0 ) {
      return;
    }
    // loops through to index, new node, current/previous nodes
    const node = new Node(data);
    let count = 0;
    let previous;
    let current;
    current = this.head;
    while(count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;

  }

  getAt(index){
    let current = this.head;
    let count = 0;
    while (current) {
      if(count === index) {
        console.log(current.value);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  removeAt(index) {
    if( index > 0 && index > this.size){
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // remove 1st
    if(index ===0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }


  clearList(){
    this.head = null;
    this.size = 0;
  }



  printListData(){
    let current = this.head;

    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }


}





let ll = new LinkedList();
console.log('empty list', ll);

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
// ll.insertAt(500, 2);

// ll.getAt(2);
ll.printListData();


ll.removeAt(0);
ll.printListData();



function logger(value){
  console.log(`Node Value: ${value}`);
}
// add head to list
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);

// console.log('after', list);

// hurts these eyes, but it looks like a series of nested objects
// console.log('populated list', JSON.stringify(list));

// list.traverse();
// list.traverseWithCallback(console.log);

// list.traverseWithCallback(logger);

// list.kthFromEnd(2);
// console.log('newest lists', JSON.stringify(list));



// }
