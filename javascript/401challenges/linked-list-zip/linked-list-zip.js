
// Javascript program to merge a linked list into another at
// alternate positions

// A nexted list node

class Node {
  constructor()
  {
    this.data = 0;
    this.next = null;
  }
}

/* Function to insert a node at the beginning */
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

// Main function that inserts nodes of linked list q into p at
// alternate positions. Since head of first list never changes
// and head of second list may change, we need single pointer
// for first list and double pointer for second list.
function merge(p, q){

  let p_curr = p;
  let q_curr = q;
  let p_next;
  let q_next;

  // While there are available positions in p
  while (p_curr !== null && q_curr !== null)
  {
    // Save next pointers
    p_next = p_curr.next;
    q_next = q_curr.next;

    // Make q_curr as next of p_curr
    q_curr.next = p_next; // Change next pointer of q_curr
    p_curr.next = q_curr; // Change next pointer of p_curr

    // Update current pointers for next iteration
    p_curr = p_next;
    q_curr = q_next;
  }

  q = q_curr; // Update head pointer of second list
  return q;
}

// FIRST-> P and Q List:
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
// console.log( 'Modified Second Linked List:<br>');
// printList(q);

// SECOND-> P and Q List:
// var p = null, q = null;
// p = push(p, 3);
// p = push(p, 1);
// console.log( 'First Linked List:<br>');
// printList(p);
// q = push(q, 4);
// q = push(q, 9);
// q = push(q, 5);
// console.log( 'Second Linked List:<br>');
// printList(q);
// q = merge(p, q);
// console.log( 'Modified First Linked List:<br>');
// printList(p);
// console.log( 'Modified Second Linked List:<br>');
// printList(q);
