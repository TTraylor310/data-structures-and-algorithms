'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex) {
    this.vertex = vertex;
  }
}

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex (value) {
    const vertex = new Vertex(value);
    this.adjList.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex){
    this.adjList.get(startVertex).push(new Edge(endVertex));
    this.adjList.get(endVertex).push(new Edge(startVertex));

  }

  getNeighbors (vertex) {
    return [...this.adjList.get(vertex)];
  }

}

const g = new Graph;
const pand = g.addVertex('Pandora');
const arend = g.addVertex('Arendelle');
const metro = g.addVertex('Metroville');
const monstro = g.addVertex('Monstropolis');
const nar = g.addVertex('Narnia');
const nab = g.addVertex('Naboo');

g.addEdge(pand, arend);
g.addEdge(arend, monstro);
g.addEdge(arend, metro);
g.addEdge(monstro, metro);
g.addEdge(nab, monstro);
g.addEdge(nab, metro);
g.addEdge(nar, metro);
g.addEdge(nar, nab);
console.log(g);


function breadthFirst (root) {
  const queue = [root];
  const visited = new Set();
  visited.add(root);
  let current = null;

  while(queue.length){
    current = queue.pop();
    const neighbors = g.getNeighbors(current);
    for (let edge of neighbors){
      if(!visited.has(edge.vertex)){
        visited.add(edge.vertex);
        queue.unshift(edge.vertex);
      }
    }
  }
  return visited;
}

console.log(breadthFirst(arend));
