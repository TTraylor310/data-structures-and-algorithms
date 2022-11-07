'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectEdge(vertStart, vertEnd, weight = 0) {
    const neighbors = this.adjacencyList.get(vertStart);
    neighbors.push(new Edge(vertEnd, weight));
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes(){
    return this.adjacencyList.keys;
  }

  breadthFirst(root, callback){
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;
    while(queue.length){
      current = queue.pop();
      if(callback) callback(current.value);
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors){
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }
    return visited;
  }

  depthFirst(root, cb){
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;
    while (stack.length) {
      current = stack.pop();
      if (cb) cb(current.value);
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }
    return visited;
  }

  // size(root){

  // }

}

const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');
const H = graph.addVertex('H');

graph.addDirectEdge(A, B);
graph.addDirectEdge(A, D);
graph.addDirectEdge(A, C);
graph.addDirectEdge(B, G);
graph.addDirectEdge(D, F);
graph.addDirectEdge(D, H);
graph.addDirectEdge(F, H);
graph.addDirectEdge(C, H);
graph.addDirectEdge(F, E);

// console.log('check A:', A);
// console.log('check graph:', graph);
graph.breadthFirst(A, console.log);
// graph.depthFirst(A, console.log);
