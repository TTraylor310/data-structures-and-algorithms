'use strict';
const {LinkedList} = require('../../temps/linkedList-basic');

class HashTable {

  constructor (size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash (key) {
    let characters = key.split('');
    let asciiSum = characters.reduce( (sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 419;
    return initialHash % this.size;
  }

  set (key, value) {
    let position = this.hash(key);
    let data = { [key]: value };
    if(this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      let bucket = new LinkedList();
      bucket.add(data);
      this.buckets[position] = bucket;
    }
  }

  get (key) {
    let position = this.hash(key);
    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let value = bucket.head.value[key];
      return value;
    }
  }

  has (key) {
    let position = this.hash(key);
    if (this.buckets[position]) return true;
    else return false;
  }

  keys() {
    let newArr = [];
    this.buckets.forEach( item => {
      newArr.push(item.head.value);
    });
    console.log(newArr);
  }

}


let table = new HashTable(1024);

console.log('check table is EMPTY:', table);
// console.log('checking Tim .hash:', table.hash('Tim'));
// console.log('checking Carly .hash:', table.hash('Carly'));

table.set('Tim', 'Tim');
table.set('Carly', 'Carly');
// console.log('table after SETS', table);

// console.log(JSON.stringify(table.buckets[465]));
// console.log(table.get('Tim'));
// console.log(table.has('Bob'));

table.keys();
