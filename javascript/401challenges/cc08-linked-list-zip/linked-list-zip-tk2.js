'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// ----------------------------------------
const a1 = new Node('a1');
const b1 = new Node('b1');
const c1 = new Node('c1');
a1.next = b1;
b1.next = c1;
// ----------------------------------------
const a2 = new Node('a2');
const b2 = new Node('b2');
const c2 = new Node('c2');
a2.next = b2;
b2.next = c2;
// ----------------------------------------

function zipList (head1, head2) {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while(current1 !== null && current2 !== null){
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count +=1;
  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return head1;
}

console.log('done-iterative', zipList(a1,a2));

// const zipperList = (head1, head2) => {
//   if (head1 === null && head2 === null) return null;
//   if (head1 === null) return head2;
//   if (head2 === null) return head1;

//   const next1 = head1.next;
//   const next2 = head2.next;
//   head1.next = head2;
//   head2.next = zipperList(next1, next2);
//   return head1;
// };

// console.log('done-recursive:', zipperList(a1,a2));
