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
    this.adjList = new Map();
  }

  addVertex (value) {
    const vertex = new Vertex(value);
    this.adjList.set(vertex, []);
    return vertex;
  }

  addPath (startVertex, endVertex, weight = 0) {
    this.adjList.get(startVertex).push(new Edge(endVertex, weight));
    this.adjList.get(endVertex).push(new Edge(startVertex, weight));
  }

  getNeighbors (vertex) {
    return [...this.adjList.get(vertex)];
  }

}

const g = new Graph;
const pandora = g.addVertex('Pandora');
const arendelle = g.addVertex('Arendelle');
const metroville = g.addVertex('Metroville');
const monstropolis = g.addVertex('Monstropolis');
const narnia = g.addVertex('Narnia');
const naboo = g.addVertex('Naboo');

g.addPath(pandora, arendelle, 150);
g.addPath(pandora, metroville, 82);
g.addPath(metroville, arendelle, 99);
g.addPath(metroville, monstropolis, 105);
g.addPath(metroville, naboo, 26);
g.addPath(metroville, narnia, 37);
g.addPath(narnia, naboo, 250);
g.addPath(naboo, monstropolis, 73);
g.addPath(monstropolis, arendelle, 42);

console.log(g);
// console.log('get Neighbor LIST:', g.getNeighbors(metroville));

function businessTrip (array) {
  let cost = 0;
  // const queue = [array[0]];
  // const visited = new Set();
  // visited.add(array[0]);
  // let current = null;

  for (let i = 0; i < array.length; i++){
    let temp1 = g.getNeighbors(array[i]);
    temp1.forEach( (val, idx) => {
      console.log('check the VAL:', val.vertex.value);
      console.log('what is array i+1', array[i+1]);
      // console.log('what is object value', Object.values(array[i+1])[0]);
      if (Object.values(array[i+1])[0]) {
        if (val.vertex.value === Object.values(array[i+1])[0]) {
          cost += val.weight;
        } else {
          return;
        }
      } else {
        return;
      }
      console.log('first cost', cost);
      // console.log('check the weight', val.weight);
    });
  }
  console.log('the cost?', cost);
}

let array1 = [arendelle, monstropolis, naboo];

businessTrip (array1);
