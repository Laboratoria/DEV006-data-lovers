import { totalMovie, countCharacters, countCharactersforPeople} from '../src/data.js';


describe('totalMovie', () => {
  it('is a function', () => {
    expect(typeof totalMovie).toBe('function');
  });

});


describe('countCharacters', () => {
  it('is a function', () => {
    expect(typeof countCharacters).toBe('function');
  });

});

describe('countCharactersforPeople', () => {
  it('is a function', () => {
    expect(typeof countCharactersforPeople).toBe('function');
  });

});


