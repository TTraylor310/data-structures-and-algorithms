const { LinkedList } = require('./linkedList-basic');
const ll = new LinkedList();

const { Stack } = require('./linkedList-stack');
const myStack = new Stack();

const { Queue } = require('./linkedList-queue');
const que = new Queue();

const {BST} = require('./tree-basic');
const tree = new BST();

const { HashTable } = require('./hash-basic');
const table = new HashTable(10);





function addOne2(head) {

  let hold = head.head;

  if (head.next === null) {
    head.value += 1;
    return head;
  }

  let temp = head.head;

  while (temp.next !== null) {
    if (temp.value !== 9) {
        hold = temp;
    }
    temp = temp.next;
  }

  if (temp.value === 9 && hold !== null) {
    temp = hold;
    temp.value += 1;
    temp = temp.next;
    while (temp !== null) {
      temp.value = 0;
      temp = temp.next;
    }
  } else {
    temp.value += 1;
  }
  return head;
}

ll.push(3);
ll.push(9);
ll.push(9);
ll.push(9);
ll.push(9);

// console.log(ll);

console.log(addOne2(ll));
