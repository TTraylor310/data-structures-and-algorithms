const movies = require('./movies');
const { inGenre, sortTitle, sortYear } = require('./sort');

describe('Sorters', () => {
  it('can sort movies by year', () => {
    const movies = sortYear(movies);
    expect(movies.map((m) => m.title)).toEqual([
      'The Cotton Club',
      'Crocodile Dundee',
      'Beetlejuice',
      'The Shawshank Redemption',
      'Memento',
      'City of God',
      'Ratatouille',
      'Stardust',
      'Valkyrie',
      'The Intouchables',
    ]);
  });

  it('can sort movies by title', () => {
    const movies = sortTitle(movies);
    expect(movies.map((m) => m.title)).toEqual([
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie',
    ]);
  });

  it('can find movies by genre', () => {
    const movies = sortYear(inGenre(movies, 'Adventure'));
    expect(movies.map((m) => m.title)).toEqual([
      'Crocodile Dundee',
      'Stardust',
    ]);
  });
});
