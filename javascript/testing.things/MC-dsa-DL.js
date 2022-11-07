

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if(!this.adjacencyList[value]) this.adjacencyList[value] = [];
  }

}

let g = new Graph;
g.addVertex('A');
g.addVertex('B');

console.log(g);
