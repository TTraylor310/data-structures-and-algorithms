'use strict';

class Graph{
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex){
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2){
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  getNeighbors(vertex){
    return [...this.adjacencyList[vertex]];
  }

  removeEdge(vertex1, vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v !== vertex1);
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  getNodes(){
    return this.adjacencyList;
  }
}

const g = new Graph;
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
console.log(g);

g.removeVertex('A');
// g.removeEdge('A', 'C');
console.log(g);

// console.log('check getN:', g.getNeighbors('A'));
// console.log('check all nodes:', g.getNodes());
