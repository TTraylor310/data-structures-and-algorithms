
// map1 contains
// 1 => 2
// 2 => 3
// 4 -> 5
var map1 = new Map([[1 , 2], [2 ,3 ] ,[4, 5]]);

// console.log('Map1: ', map1);

// map2 contains
// firstname => sumit
// lastname => ghosh
// website => geeksforgeeks

var map2 = new Map([['firstname' ,'sumit'], ['lastname', 'ghosh'], ['website', 'geeksforgeeks']]);

// console.log('Map2', map2);


// map3 containsMap4
// Whole number => [1, 2, 3, 4]
// Decimal number => [1.1, 1.2, 1.3, 1.4]
// Negative number => [-1, -2, -3, -4]
var map3 = new Map([['whole numbers', [1 ,2 ,3 ,4]],
  ['Decimal numbers' , [1.1, 1.2, 1.3, 1.4]],
  ['negative numbers', [-1, -2, -3, -4]]]);

// console.log('Map3', map3);


// map 4 contains
// storing arrays both as key and value
// 'first name ', 'Last name' => 'sumit', 'ghosh'
// 'friend 1', 'sourav' => 'friend 2', 'gourav'

var map4 = new Map([
  [['first name', 'last name'], ['sumit', 'ghosh']],
  [['friend 1', 'friend 2'], ['sourav','gourav']]
]);

// console.log('Map4', map4);

class Node {
  constructor(value) {
    this.value = value;
  }
}

const LinkedList = require('../DSA.reference/linkedList-basic');


class Graph{
  constructor(vertices){
    //Total number of vertices in the graph
    this.vertices=vertices;
    //Defining an array which can hold LinkedLists equal to the number of vertices in the graph
    this.list=[];
    //Creating a new LinkedList for each vertex/index of the list
    for(let i=0; i<vertices.length; i++){
      let temp=new LinkedList();
      this.list.push(temp);
    }
  }
}

const g = new Graph('A');

console.log(g);

