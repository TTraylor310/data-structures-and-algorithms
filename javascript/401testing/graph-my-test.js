'use strict';

class Graph{
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex){
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

  removeEdge(vertex1, vertex2){
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v !== vertex1);
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    return this;
  }

  getNeighbors(vertex){
    return [...this.adjacencyList[vertex]];
  }

  // getNodes(){
  //   return this.adjacencyList;
  // }
}

const g = new Graph;
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');

g.addEdge('A', 'B');
g.addEdge('B', 'C');
g.addEdge('C', 'A');
g.addEdge('A', 'D');
g.addEdge('B', 'D');
g.addEdge('C', 'D');
console.log(g);

// g.removeEdge('A', 'C');
g.removeVertex('E');
console.log(g);

// console.log('check get neighbors at A:', g.getNeighbors('A'));
// console.log('check all nodes:', g.getNodes());
