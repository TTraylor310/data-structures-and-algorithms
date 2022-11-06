'use strict';

class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.items = [];
    this.front = null;
    this.back = null;
  }

  enqueue(key){
    let node = new Node(key);
    if (this.isEmpty()) {
      this.front = this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.print();
  }

  // dequeue() {
  //   let node =

  // }


  isEmpty() {
    return !this.front;
  }

  print(){
    if (this.isEmpty()){
      console.log('Empty Queue');
    } else {
      let tempArr = [];
      let temp = this.front;
      while (temp) {
        tempArr.push(temp.value);
        temp=temp.next;
      }
      console.log(tempArr.join(','));
    }
  }


}

let que = new Queue();
console.log('empty queue', que);

que.enqueue(10);
que.enqueue(20);
// que.dequeue();
// que.dequeue();
que.enqueue(30);
que.enqueue(40);
que.enqueue(50);
// que.dequeue();

console.log('last', JSON.stringify(que));
