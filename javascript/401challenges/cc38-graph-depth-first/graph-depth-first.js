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

const graph = new Graph;
const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');
const H = graph.addVertex('H');

graph.addEdge(D, A);
graph.addEdge(D, B);
graph.addEdge(D, F);
graph.addEdge(D, H);
graph.addEdge(D, E);
graph.addEdge(F, H);
graph.addEdge(A, B);
graph.addEdge(B, C);
graph.addEdge(C, G);
// console.log(graph);

function depthFirst (root, callback) {
  const stack = [root];
  const visited = new Set();
  visited.add(root);
  let current = null;
  while(stack.length){
    current = stack.pop();
    if(callback) callback(current.value);
    const neighbors = graph.getNeighbors(current);
    for (let edge of neighbors) {
      if (!visited.has(edge.vertex)){
        visited.add(edge.vertex);
        stack.push(edge.vertex);
      }
    }
  }
  return visited;
}

depthFirst(A, console.log);
