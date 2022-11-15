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
}


// getFirst() {
//   if (this.first === null) {
//       console.log("First: null");
//   } else {
//       console.log("First: " + this.first.value);
//   }
// }

// getLast() {
//   if (this.last === null) {
//       console.log("Last: null");
//   } else {
//       console.log("Last: " + this.last.value);
//   }
// }

// getLength() {
//   console.log("Length: " + this.length);
// }

// makeEmpty() {
//   this.first = null;
//   this.last = null;
//   this.length = 0;
// }

// enqueue(value) {
//   const newNode = new Node(value);
//   if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//   } else {
//       this.last.next = newNode;
//       this.last = newNode;
//   }
//   this.length++;
// }

// dequeue() {
//   if(this.length === 0) return undefined;
//   let temp = this.first;
//   if(this.length === 1) {
//       this.first = null;
//       this.last = null;
//   } else {
//       this.first = this.first.next;
//       temp.next = null;
//   } 
//   this.length--;
//   return temp;
// } 
