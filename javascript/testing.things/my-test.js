// add node
// add edge
// get nodes
// get neighbors
// size
class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph{
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value){
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectEdge(startVertex, endVertex, weight = 0) {
    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex){
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes(){
    return this.adjacencyList.keys;
  }

}

let g = new Graph;
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');

g.addDirectEdge('A', 'B');
g.addDirectEdge('A', 'C');

console.log(g.getNeighbors('A'));
