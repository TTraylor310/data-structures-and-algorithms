
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   insert(value){
//     let node = new Node(value);
//     let current;
//     if(this.head === null) {
//       this.head = node;
//       return;
//     } else {
//       current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//     this.size++;
//   }

// }

// let ll = new LinkedList;
// ll.insert('A');
// ll.insert('B');
// ll.insert('C');

// console.log(ll);

function solution(number){
  let count = 0;
  let tempArray = [];
  if ( number <= 0) {
    return 0;
  } else {
    for (let i = number-1; i > 0; i--){
      if (i % 15 === 0){
        tempArray.push(i);
      } else if (i % 5 === 0){
        tempArray.push(i);
      } else if (i % 3 === 0){
        tempArray.push(i);
      }
    }
    tempArray.forEach( val => {
      count += val;
    });
    return count;
  }
}

console.log(solution(10));


