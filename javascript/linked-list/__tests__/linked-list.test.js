'use strict';

const { testElement } = require('domutils');
// Require our linked list implementation
const LinkedList = require('../linkedList');

describe('Linked List', () => {

  // it('Can successfully instantiate an empty linked list', () => {
  //   const 
  //   expect(true).toBeTruthy();
  // });

  it('Can properly insert into the linked list', () => {
    const ll = new LinkedList();
    ll.insert(99);
    const old = ll.head;
    ll.insert(50);
    expect(ll.head.value).toBe(50);
    expect(ll.head.next).toBe(old);
    expect(ll.length).toBe(2);
  });


  // it('works', () => {
  //   expect(true).toBeTruthy();
  // });

  // it('works', () => {
  //   expect(true).toBeTruthy();
  // });

  // Can successfully instantiate an empty linked list
  // Can properly insert into the linked list
  // The head property will properly point to the first node in the linked list
  // Can properly insert multiple nodes into the linked list
  // Will return true when finding a value within the linked list that exists
  // Will return false when searching for a value in the linked list that does not exist
  // Can properly return a collection of all the values that exist in the linked list
});

describe ('#get by Index', () => {
  describe('with index less than 0', () => {
    testElement('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(-1)).toBeNull();
    });
  });

  describe('with index greater than list length', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(68)).toBeNull();
    });
  });

  describe('with index 0', () => {
    test('it returns the head', () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(0).value).toBe(10);
    });
  });

  describe('with index in the middle', () => {
    test('it returns the element at that index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      expect(ll.getByIndex(2).value).toBe(30);
    });
  });

});
