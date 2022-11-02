'use strict';

let string1 = 'Once upon a time, there was a brave princess who...'; // key for 'a'
let string2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way - in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'; // key for 'it'
let string3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn\'t know what I was doing in New York...'; // key for 'summer'

const {LinkedList} = require ('../../temps/linkedList-basic');
let newArr = [];

class HashTable {

  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash (key) {
    let char = key.split('');
    let asciiSum = char.reduce( (sum, char) => {
      return sum + char.charCodeAt(0);
    }, 0);
    let iniHash = asciiSum*421;
    return iniHash % this.size;
  }


  set(key, value) {
    let position = this.hash(key);
    let data = {[key]: value};
    if(this.buckets[position]){
      // console.log('First collision is:', this.buckets[position].head.value[key]);
      newArr.push(this.buckets[position].head.value[key]);
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
let table3 = new HashTable(1024);

// string1.replace(/,/g, '').toUpperCase().split(' ').forEach( item => table1.set(item, item));
// string2.replace(/,/g, '').toUpperCase().split(' ').forEach( item => table2.set(item, item));
// string3.replace(/,/g, '').toUpperCase().split(' ').forEach( item => table3.set(item, item));


function repeatedWord (string, table) {
  let newArr = [];
  string.replace(/,/g, '').toUpperCase().split(' ').forEach( item => table.set(item, item));
  console.log('This is first repeated word(regardless of upper/lower case):', newArr[0].toLowerCase());
}

repeatedWord(string1, table1);
// repeatedWord(string2, table2);
// repeatedWord(string3, table3);
