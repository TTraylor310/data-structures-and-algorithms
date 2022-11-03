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
    let data = {[key]: value};
    if (this.buckets[position]){
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      let bucket = new LinkedList();
      bucket.add(data);
      this.buckets[position] = bucket;
    }
  }

}

let string1 = 'In a galaxy far far away';
let string2 = 'Taco cat ate a taco';
let string3 = 'No. Try not. Do or do not. There is no try.';

function mostCommonWord (string) {
  let table = new HashTable(1024);
  string.replace(/[.]/g, '')
    .toLowerCase().split(' ')
    .forEach( item => {
      table.set(item, item);
      return table;
    });

  table.buckets.sort( function (a, b) {
    return a.head.value - b.head.value;
  });

  console.log(Object.keys(table.buckets[0].head.value)[0]);
}

mostCommonWord(string1);
mostCommonWord(string2);
mostCommonWord(string3);

