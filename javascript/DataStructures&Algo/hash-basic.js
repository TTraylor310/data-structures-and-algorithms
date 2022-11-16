// storing hash info in the table
// what to do for a collision
// 1. Separate Chaining - same address -> put multiple pairs inside of the same spot (array of arrays)
// 2. Linear Probing (linear addressing) - stores in different address -> place into next open container?

class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  printTable() {
    for (let i = 0; i < this.dataMap.length; i++) {
      console.log(i, ': ', this.dataMap[i]);
    }
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    // console.log(hash);
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if(!this.dataMap[index]) this.dataMap[index] = [];

    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if(this.dataMap[index]){
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key){
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }

}

module.exports = { HashTable };
