'use strict';

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('B');
g.addVertex('C');

g.addEdge('A', 'B');
g.addEdge('A', 'C');


// console.log(g);
// console.log(g.getNodes('A'));
