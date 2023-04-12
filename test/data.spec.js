import { filterDirector,  filterProducer, sortData, sortDataYear, filterSpecies} from '../src/data.js';


describe('filterDirector', () => {
  it('is a function', () => {
    expect(typeof filterDirector).toBe('function');
  });

  it('returns only movies directed by the chosen director`', () => {
    const directors = {films :[
      {title: "the castle in the sky", director:"Hayao Miyazaki"},
      {title: "Grave of the fireflies" , director: "Isao Takahata" }
    ]}

    const results = filterDirector("Hayao Miyazaki",directors);
    expect (results).toStrictEqual([{title: "the castle in the sky", director:"Hayao Miyazaki"}]);
  });
});

describe('filterProducer', () => {
  it('is a function', () => {
    expect(typeof filterProducer).toBe('function');
  });

  it('returns only movies directed by the chosen director`', () => {
    const producers = {films :[
      {title: "the castle in the sky", producer:"Isao Takahata"},
      {title: "Only Yesterday", producer: "Toshio Suzuki" }
    ]}

    const results = filterProducer("Toshio Suzuki", producers);
    expect (results).toStrictEqual([{title: "Only Yesterday", producer: "Toshio Suzuki" }]);
  });
});

describe('sortDataYear', () => {
  it('is a function', () => {
    expect(typeof sortDataYear).toBe('function');
  });

  it('returns movies sorted by release date`', () => {
    const movies = {films :[
      {release_date:"1986"},
      {release_date:"1988"},
      {release_date:"1991"}
    ]
    }

    const results = sortDataYear("descendente", movies);
    expect (results).toStrictEqual([{release_date:"1991"},{release_date:"1988"},{release_date:"1986"}]);
  });
});


describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns movies sorted by score`', () => {
    const movies = {films :[
      {rt_score:"89"},
      {rt_score:"91"},
      {rt_score:"100"}
    ]
    }

    const results = sortData("descendente", movies);
    expect (results).toStrictEqual([{rt_score:"100"},{rt_score:"91"},{rt_score:"89"}]);
  });
});

describe('filterSpecies', () => {
  it('is a function', () => {
    expect(typeof filterSpecies).toBe('function');
  });

  it('returns characters filtered by species`', () => {
    const characters = {films :[ { people:[
      {name: "Jiji", specie:"Cat"},
      {name: "Kiki", specie:"Witch"},
      {name: "Okiyo", specie:"Raccoon Dog"}
    ]
    }
    ]}

    const results = filterSpecies("Cat", characters);
    expect (results).toStrictEqual([{name: "Jiji", specie:"Cat"}]);
  });
});
