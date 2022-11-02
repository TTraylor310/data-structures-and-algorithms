const {leftJoin, Node, LinkedList, HashTable} = require('./hashmap-join-left');

describe('Testing of the Left-Join function', () => {

  it('can create new table', () => {
    const tableX = new HashTable(1);
    expect(tableX).toBeCalled();
  });

});
