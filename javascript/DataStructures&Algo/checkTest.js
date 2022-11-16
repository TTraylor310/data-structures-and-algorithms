const { LinkedList } = require('./linkedList-basic');
const ll = new LinkedList();

const { Stack } = require('./linkedList-stack');
const myStack = new Stack();

const { Queue } = require('./linkedList-queue');
const que = new Queue();

const {BST} = require('./tree-basic');
const tree = new BST();

tree.insert(47);
tree.insert(76); 
tree.insert(21);

console.log(tree);

tree.traversal(tree);
