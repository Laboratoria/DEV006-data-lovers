import { totalMovie, countCharacters, countCharactersMovie, filterFilms, sortAsc, sortDes,filterCharacter,filterOrden} from '../src/data.js';



const movies = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "poster": "images/posters/castle-in-the-sky.jpg",
    "release_date": "1986",
    "rt_score": "95",
    "people": [
      {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "specie": "Human"
      },
      {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
        "specie": "Human"
      },
      {
        "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
        "name": "Dola",
        "specie": "Human"
      },
      {
        "id": "abe886e7-30c8-4c19-aaa5-d666e60d14de",
        "name": "Romska Palo Ul Laputa",
        "specie": "Human"
      },
      {
        "id": "e08880d0-6938-44f3-b179-81947e7873fc",
        "name": "Uncle Pom",
        "specie": "Human"
      },
      {
        "id": "5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
        "name": "General Muoro",
        "specie": "Human"
      },
      {
        "id": "3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede",
        "name": "Duffi",
        "specie": "Human"
      },
      {
        "id": "fcb4a2ac-5e41-4d54-9bba-33068db083ca",
        "name": "Louis",
        "specie": "Human"
      },
      {
        "id": "2cb76c15-772a-4cb3-9919-3652f56611d0",
        "name": "Charles",
        "specie": "Human"
      },
      {
        "id": "f6f2c477-98aa-4796-b9aa-8209fdeed6b9",
        "name": "Henri",
        "specie": "Human"
      },
      {
        "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
        "name": "Motro",
        "specie": "Human"
      },
      {
        "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
        "name": "Okami",
        "specie": "Human"
      },
      {
        "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
        "name": "Colonel Muska",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
        "name": "Gondoa",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d",
        "name": "Pazu's Mines",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
        "name": "Laputa",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
        "name": "Tedis",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
        "name": "Air Destroyer Goliath",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
        "description": "A military airship utilized by the government to access Laputa",
        "vehicle_class": "Airship",
        "length": "1,000",
        "pilot": {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska"
        }
      }
    ]
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "poster": "images/posters/my-neighbor-totoro.jpg",
    "release_date": "1988",
    "rt_score": "93",
    "people": [
      {
        "id": "986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
        "name": "Satsuki Kusakabe",
        "specie": "Human"
      },
      {
        "id": "d5df3c04-f355-4038-833c-83bd3502b6b9",
        "name": "Mei Kusakabe",
        "specie": "Human"
      },
      {
        "id": "3031caa8-eb1a-41c6-ab93-dd091b541e11",
        "name": "Tatsuo Kusakabe",
        "specie": "Human"
      },
      {
        "id": "87b68b97-3774-495b-bf80-495a5f3e672d",
        "name": "Yasuko Kusakabe",
        "specie": "Human"
      },
      {
        "id": "08ffbce4-7f94-476a-95bc-76d3c3969c19",
        "name": "Granny",
        "specie": "Human"
      },
      {
        "id": "0f8ef701-b4c7-4f15-bd15-368c7fe38d0a",
        "name": "Kanta Ogaki",
        "specie": "Human"
      },
      {
        "id": "d39deecb-2bd0-4770-8b45-485f26e1381f",
        "name": "Totoro",
        "specie": "Totoro"
      },
      {
        "id": "591524bc-04fe-4e60-8d61-2425e42ffb2a",
        "name": "Chu Totoro",
        "specie": "Totoro"
      },
      {
        "id": "c491755a-407d-4d6e-b58a-240ec78b5061",
        "name": "Chibi Totoro",
        "specie": "Totoro"
      },
      {
        "id": "f467e18e-3694-409f-bdb3-be891ade1106",
        "name": "Catbus",
        "specie": "Cat"
      }
    ],
    "locations": [
      {
        "id": "660c8c91-bd92-43db-b475-b2df6ca96fec",
        "name": "Kusakabe's House",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "6fc21b76-78fb-4451-98f7-857e32a23e85",
        "name": "Matsugo",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "ee897b2a-405e-42b9-bff4-8b51b0f03cab",
        "name": "Satsuki's School House",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": []
  },
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",
    "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "poster": "images/posters/kikis-delivery.png",
    "release_date": "1989",
    "rt_score": "96",
    "people": [
      {
        "id": "4151abc6-1a9e-4e6a-5678-aac05ra641js",
        "name": "Kiki",
        "specie": "Witch"
      },
      {
        "id": "7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
        "name": "Jiji",
        "specie": "Cat"
      },
      {
        "id": "6574cfr2-9w3d-2x1h-8531-gge23iu489ko",
        "name": "Ursula",
        "specie": "Human"
      },
      {
        "id": "4321dse3-6r6s-3r4d-5641-rdq19re765de",
        "name": "Tombo",
        "specie": "Human"
      },
      {
        "id": "8252ebf6-1g8f-5t6u-1234-vvg45yd363dc",
        "name": "Osono",
        "specie": "Human"
      },
      {
        "id": "7654ght4-3r4t-1t5u-0987-hhj76gh432gr",
        "name": "Fukuo",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "fb083a4e-77b2-4623-a2e0-6bbca5bfd5b2",
        "name": "Ursula's Log Cabin",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "c57fb2cb-ea85-4d73-8808-cf5dcd28c22e",
        "name": "Koriko",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "62346d33-caa0-4c17-8016-0aca56f3066b",
        "name": "Karikiya",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "64a996aa-481e-4627-9624-ab23f59a05a9",
        "name": "Guchokipanya",
        "residents": [
          {
            "id": "8252ebf6-1g8f-5t6u-1234-vvg45yd363dc",
            "name": "Osono"
          },
          {
            "id": "7654ght4-3r4t-1t5u-0987-hhj76gh432gr",
            "name": "Fukuo"
          }
        ]
      }
    ],
    "vehicles": []
  },
  {
    "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
    "title": "Grave of the Fireflies",
    "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
    "director": "Isao Takahata",
    "producer": "Toru Hara",
    "poster": "images/posters/grave-of-fireflies.jpg",
    "release_date": "1988",
    "rt_score": "97",
    "people": [
      {
        "id": "8cb959a8-1959-42f3-bb33-07d7a2e6b830",
        "name": "Seita Yokokawa",
        "specie": "Human"
      },
      {
        "id": "c344d561-6654-4aab-b0df-a1570e7e60cb",
        "name": "Setsuko Yokokawa",
        "specie": "Human"
      },
      {
        "id": "227c01a6-4e29-4582-bc4b-35106a704ab0",
        "name": "Mrs. Yokokawa",
        "specie": "Human"
      },
      {
        "id": "023306e3-9fc6-4d1d-b681-d4649dcbfff9",
        "name": "Kiyoshi Yokokawa",
        "specie": "Human"
      },
      {
        "id": "0e18b23d-1f21-4a83-a6de-f01147624875",
        "name": "Seita's Aunt",
        "specie": "Human"
      }
    ],
    "locations": [],
    "vehicles": []
  },
  {
    "id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
    "title": "Only Yesterday",
    "description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
    "director": "Isao Takahata",
    "producer": "Toshio Suzuki",
    "poster": "images/posters/only-yesterday.png",
    "release_date": "1991",
    "rt_score": "100",
    "people": [
      {
        "id": "d0bb7b5f-3bf0-46c8-959d-0299b3252bd8",
        "name": "Taeko Okajima",
        "specie": "Human"
      },
      {
        "id": "3f78eba1-f9b0-489b-8686-f4508cdf049d",
        "name": "Toshio",
        "specie": "Human"
      },
      {
        "id": "52ed5cad-2464-481f-9786-8533b8de95ff",
        "name": "Mr. Okajima",
        "specie": "Human"
      },
      {
        "id": "87e61451-3131-4d01-a3b3-558c9ee1c451",
        "name": "Mrs. Okajima",
        "specie": "Human"
      },
      {
        "id": "0174e644-eddd-4cb7-8503-e0c21291d782",
        "name": "Grandmother Okajima",
        "specie": "Human"
      },
      {
        "id": "a88cb7a4-fe4a-4d50-8d8b-c32449e298ba",
        "name": "Nanako Okajima",
        "specie": "Human"
      },
      {
        "id": "c8f02850-0c1f-499c-8b5e-d8ad16f3ecc4",
        "name": "Yaeko Okajima",
        "specie": "Human"
      },
      {
        "id": "6e960787-5a47-4178-a040-1ef5bf5e4a6c",
        "name": "Tani Tsuneko",
        "specie": "Human"
      },
      {
        "id": "cd86aeb2-4fd7-4119-8128-7060e0a68074",
        "name": "Aiko",
        "specie": "Human"
      },
      {
        "id": "3ab1e0de-4d41-4f67-b2d0-e16d0fef2e6c",
        "name": "Toko",
        "specie": "Human"
      },
      {
        "id": "f4a85428-18b7-4199-ba5a-b6bcfb478e14",
        "name": "Rie",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "dbeeaecb-7817-4b8b-90ca-edc432d3033e",
        "name": "Taeko's House",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": []
  }]





describe('totalMovie', () => {
  it('is a function', () => {
    expect(typeof totalMovie).toBe('function');
  });

});


describe('totalMovie', () => {
  it('should return the length of the movies array', () => {
    
    const result = totalMovie(movies);
    expect(result).toEqual(5);
  });

  it('should return 0 if the movies array is empty', () => {
    const movies = [];
    const result = totalMovie(movies);
    expect(result).toEqual(0);
  });
});


describe("countCharacters function", () => {
  
  test("should return the total number of characters in all films", () => {
    expect(countCharacters(movies)).toBe(45);
  });
});

describe("countCharactersMovie function", () => {
  const film = movies[0];

  test("should return the number of characters in a single movie", () => {
    expect(countCharactersMovie(film)).toBe(13);
  });
});

describe('filterFilms', () => {
  

  it('should return all films when "all" is selected for both producer and director', () => {
    const selectedProducer = 'all';
    const selectedDirector = 'all';
    const filteredFilms = filterFilms(movies, selectedProducer, selectedDirector);
    expect(filteredFilms).toEqual(movies);
  });

  it('should filter by producer when a specific producer is selected', () => {
    const selectedProducer = 'Isao Takahata';
    const selectedDirector = 'all';
    const expectedFilms = [movies[0]];
    const filteredFilms = filterFilms(movies, selectedProducer, selectedDirector);
    expect(filteredFilms).toEqual(expectedFilms);
  });

  it('should filter by director when a specific director is selected', () => {
    const selectedProducer = 'all';
    const selectedDirector = 'Isao Takahata';
    const expectedFilms = [movies[3], movies[4]];
    const filteredFilms = filterFilms(movies, selectedProducer, selectedDirector);
    expect(filteredFilms).toEqual(expectedFilms);
  });

  it('should filter by both producer and director when both are selected', () => {
    const selectedProducer = 'Toru Hara';
    const selectedDirector = 'Isao Takahata';
    const expectedFilms = [movies[3]];
    const filteredFilms = filterFilms(movies, selectedProducer, selectedDirector);
    expect(filteredFilms).toEqual(expectedFilms);
  }); 
}); 

describe('sortAsc', () => {
  test('sorts an array of films in ascending order', () => {

    const expectedFilms = [movies[0],movies[3],movies[2],movies[1],movies[4]];

    const sortedFilms = sortAsc(movies);

    expect(sortedFilms).toEqual(expectedFilms);
  });

  test('sortAsc should return 0 for two objects with identical title properties', () => {
 
    const result = sortAsc([ movies[0], movies[0] ]);
    expect(result).toEqual([ movies[0], movies[0] ]);
  });


});

describe('sortDes', () => {
  test('sorts an array of films in descending order', () => {
    const unsortedFilms = [ movies[0], movies[1]];

    const expectedFilms = [movies[1], movies[0]];

    const sortedFilms = sortDes(unsortedFilms);

    expect(sortedFilms).toEqual(expectedFilms);
  });

  
  test('sortDes should return 0 for two objects with identical title properties', () => {
 
    const result = sortDes([ movies[0], movies[0] ]);
    expect(result).toEqual([ movies[0], movies[0] ]);
  });



});





describe('filterOrden', () => {
  test('should sort characters array alphabetically by name in ascending order', () => {
    // Arrange
    const charactersArray = [      {        querySelector: () => ({          textContent: 'Name: Morty',        }),      },      {        querySelector: () => ({          textContent: 'Name: Summer',        }),      },      {        querySelector: () => ({          textContent: 'Name: Rick',        }),      },    ];
    const container = {
      innerHTML: '',
      appendChild: jest.fn(),
    };
    const order = 1;

    // Act
    filterOrden(charactersArray, container, order);

    // Assert
    expect(charactersArray[0].querySelector().textContent).toBe('Name: Morty');
    expect(charactersArray[1].querySelector().textContent).toBe('Name: Rick');
    expect(charactersArray[2].querySelector().textContent).toBe('Name: Summer');
    expect(container.appendChild).toHaveBeenCalledTimes(3);
  });

  test('should sort characters array alphabetically by name in descending order', () => {
    // Arrange
    const charactersArray = [      {        querySelector: () => ({          textContent: 'Name: Morty',        }),      },      {        querySelector: () => ({          textContent: 'Name: Summer',        }),      },      {        querySelector: () => ({          textContent: 'Name: Rick',        }),      },    ];
    const container = {
      innerHTML: '',
      appendChild: jest.fn(),
    };
    const order = -1;

    // Act
    filterOrden(charactersArray, container, order);

    // Assert
    expect(charactersArray[0].querySelector().textContent).toBe('Name: Summer');
    expect(charactersArray[1].querySelector().textContent).toBe('Name: Rick');
    expect(charactersArray[2].querySelector().textContent).toBe('Name: Morty');
    expect(container.appendChild).toHaveBeenCalledTimes(3);
  });
});


