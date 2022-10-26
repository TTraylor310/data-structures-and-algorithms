'use strict';

const movies = require('./movies');

// write your own comparator function for each function and export THOSE separately for testing as well. You will also use comparators in the three pre-written functions bellow

// examples for demo
// const books = ['A Tale of Two Cities', 'Mary Poppins', 'Lord of the Rings'];
// const standings = [
//   {team: 'Lions', score: 4},
//   {team: 'Tigers', score: 1},
//   {team: 'Bears', score: 5},
//   {team: 'OhMy...', score: 3},
// ];
//Demo:  stay tuned...

// Complete for Code Challenge 28

function sortYear(movies) {
  movies.sort(function(a,b) {
    return a.year > b.year ? 1 : -1;
  });
  console.log(movies);
  return [];
}

// console.log(sortYear(movies));

function sortTitle(movies) {
  movies.sort(function(a,b) {
    let aTitle = a.title.replace('The ', '');
    let aFixed = aTitle.toUpperCase();
    let bTitle = b.title.replace('The ', '');
    let bFixed = bTitle.toUpperCase();
    return aFixed > bFixed ? 1 : -1;
  });
  console.log(movies);
  return [];
}

// console.log(sortTitle(movies));

function inGenre(movies, genre) {
  console.log(movies);
  return [];
}

console.log(inGenre(movies, 'Drama'));

module.exports = { sortYear, sortTitle, inGenre };
