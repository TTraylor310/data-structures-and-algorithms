'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function push(head_ref, new_data) {
  var new_node = new Node();
  new_node.data = new_data;
  new_node.next = (head_ref);
  (head_ref) = new_node;
  return head_ref;
}

function printList(head){
  var temp = head;
  while (temp !== null)
  {
    console.log( temp.data + " ");
    temp = temp.next;
  }
  console.log("<br>");
}


function merge(p, q){

  let p_curr = p;
  let q_curr = q;
  let p_next;
  let q_next;

  while (p_curr !== null && q_curr !== null)
  {
    p_next = p_curr.next;
    q_next = q_curr.next;

    q_curr.next = p_next;
    p_curr.next = q_curr;

    p_curr = p_next;
    q_curr = q_next;
  }

  q = q_curr;
  return q;
}

var p = null, q = null;
p = push(p, 2);
p = push(p, 3);
p = push(p, 1);
console.log( 'First Linked List:<br>');
printList(p);
q = push(q, 4);
q = push(q, 9);
q = push(q, 5);
console.log( 'Second Linked List:<br>');
printList(q);
q = merge(p, q);
console.log( 'Modified First Linked List:<br>');
printList(p);


