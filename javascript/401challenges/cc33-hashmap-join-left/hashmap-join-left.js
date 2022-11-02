'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);
    let current;
    if (this.head === null) {
      this.head = node;
      return;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let char = key.split('');
    let asciiSum = char.reduce( (sum, char) => {
      return sum + char.charCodeAt(0);
    }, 0);
    let iniHash = asciiSum*419;
    return iniHash % this.size;
  }

  set(key, value) {
    let position = this.hash(key);
    let data = { [key]: value };
    if (this.buckets[position]){
      console.log('here is the repeat?');
      return;
    } else {
      let bucket = new LinkedList();
      bucket.add(data);
      this.buckets[position] = bucket;
    }
  }
}

let table1 = new HashTable(1024);
let table2 = new HashTable(1024);

table1.set('diligent', 'employed');
table1.set('fond', 'enamored');
table1.set('guide', 'usher');
table1.set('outfit', 'garb');
table1.set('wrath', 'anger');

table2.set('diligent', 'idle');
table2.set('fond', 'averse');
table2.set('guide', 'follow');
table2.set('flow', 'jam');
table2.set('wrath', 'delight');

function leftJoin (table1, table2) {
  let bigArr = [];
  table1.buckets.forEach( (item1) => {
    let smArr = [];
    let object = item1.head.value;
    let key1 = Object.keys(object)[0];
    smArr.push(key1);
    let value1 = object[key1];
    smArr.push(value1);
    table2.buckets.forEach( (item2) => {
      let object2 = item2.head.value;
      let key2 = Object.keys(object2)[0];
      let value2 = object2[key2];
      if(smArr.includes(key2) ) {
        smArr.push(value2);
      }
    });
    if(smArr.length < 3) smArr.push(null);
    bigArr.push(smArr);
  });
  console.log(bigArr);
  return bigArr;
}

leftJoin(table1, table2);

module.exports = {leftJoin, Node, LinkedList, HashTable};
