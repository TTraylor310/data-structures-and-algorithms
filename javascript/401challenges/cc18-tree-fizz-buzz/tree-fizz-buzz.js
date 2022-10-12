class Node {
  constructor(n, value) {
    this.value = value;
    this.child = Array(n);
  }
}

let fizzBuzz = (currentVALUE) => {
  if (currentVALUE % 3 === 0 && currentVALUE % 5 === 0) {
    return 'FizzBuzz';
  } else if (currentVALUE % 3 === 0) {
    return 'Fizz';
  } else if (currentVALUE % 5 === 0) {
    return 'Buzz';
  } else {
    return `${currentVALUE}`;
  }
};

function inorder (node) {
  if (node == null)
    return;
  var total = node.child.length;
  for (var i = 0; i < total - 1; i++) inorder (node.child[i]);
  console.log(fizzBuzz(node.value));
  // console.log('' + node.value + ' ');


  inorder(node.child[total - 1]);
}

var n = 2;
var root = new Node(n, 1);
root.child[0] = new Node(n, 2);
root.child[1] = new Node(n, 3);
root.child[2] = new Node(n, 6);
root.child[0].child[0] = new Node(n, 19);
root.child[0].child[1] = new Node(n, 15);
root.child[0].child[2] = new Node(n, 21);

inorder(root);
