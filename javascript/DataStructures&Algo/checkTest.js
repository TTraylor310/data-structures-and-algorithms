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

// table._hash('carly');
// table.printTable();

table.set('bolts', 1000);
table.set('saw', 1);
table.set('level', 3);



table.printTable();

console.log('what is the get', table.get('saw'));
