import { totalMovie, countCharacters, countCharactersforPeople, filterOrden} from '../src/data.js';


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


describe('filterOrden function', () => {
  // Creamos un mock de los elementos de películas
  const films = [
    {
      querySelector: (selector) => ({
        textContent: 'Title: A'
      })
    },
    {
      querySelector: (selector) => ({
        textContent: 'Title: C'
      })
    },
    {
      querySelector: (selector) => ({
        textContent: 'Title: B'
      })
    }
  ];

  // Creamos un mock del contenedor
  const container = {
    innerHTML: '',
    appendChild: jest.fn()
  };

  test('should sort the films in ascending order by title', () => {
    // Act
    filterOrden(films, container, 1);

    // Assert
    expect(container.innerHTML).toBe('');
    expect(container.appendChild).toHaveBeenCalledTimes(3);
    expect(container.appendChild.mock.calls[0][0]).toBe(films[0]);
    expect(container.appendChild.mock.calls[1][0]).toBe(films[2]);
    expect(container.appendChild.mock.calls[2][0]).toBe(films[1]);
  });

});