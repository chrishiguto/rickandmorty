import { QUERY_CHARACTERS } from 'graphql/queries/home'

const homeMock = [
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    charName: 'Rick Sanchez',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    charName: 'General first',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    charName: 'General second',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    charName: 'Rick Sanchez',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    charName: 'Rick Sanchez',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    charName: 'Rick Sanchez',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    charName: 'General',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    charName: 'Rick Sanchez',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    charName: 'Rick Sanchez',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    charName: 'Djonga',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    charName: 'Rick Sanchez',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    charName: 'Rick Sanchez',
    species: 'Human'
  }
]

const mock = {
  request: {
    query: QUERY_CHARACTERS,
    variables: { page: 1, filter: { name: '' } }
  },
  result: {
    data: {
      characters: {
        info: {
          next: null,
          pages: 1,
          prev: null
        },
        results: [
          {
            name: 'Aqua Morty',
            image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
            species: 'Humanoid',
            status: 'unknown',
            gender: 'Male',
            origin: null,
            location: {
              name: 'Citadel of Ricks',
              type: 'Space station',
              dimension: 'unknown',
              created: '2017-11-10T13:08:13.191Z',
              residents: [
                {
                  id: '8'
                },
                {
                  id: '9'
                },
                {
                  id: '10'
                },
                {
                  id: '11'
                }
              ]
            }
          }
        ]
      }
    }
  }
}

const filterMock = {
  request: {
    query: QUERY_CHARACTERS,
    variables: { page: 1, filter: { name: 'aqua' } }
  },
  result: {
    data: {
      characters: {
        info: {
          next: null,
          pages: 1,
          prev: null
        },
        results: [
          {
            name: 'Filtered Aqua Morty',
            image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
            species: 'Humanoid',
            status: 'unknown',
            gender: 'Male',
            origin: null,
            location: {
              name: 'Citadel of Ricks',
              type: 'Space station',
              dimension: 'unknown',
              created: '2017-11-10T13:08:13.191Z',
              residents: [
                {
                  id: '8'
                },
                {
                  id: '9'
                },
                {
                  id: '10'
                },
                {
                  id: '11'
                }
              ]
            }
          }
        ]
      }
    }
  }
}

const noResultsMock = {
  request: {
    query: QUERY_CHARACTERS,
    variables: { page: 1, filter: { name: '' } }
  },
  result: {
    data: {
      characters: {
        info: {
          next: null,
          pages: 1,
          prev: null
        },
        results: [
          {
            name: 'Filtered Aqua Morty',
            image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
            species: 'Humanoid',
            status: 'unknown',
            gender: 'Male',
            origin: null,
            location: {
              name: 'Citadel of Ricks',
              type: 'Space station',
              dimension: 'unknown',
              created: '2017-11-10T13:08:13.191Z',
              residents: [
                {
                  id: '8'
                },
                {
                  id: '9'
                },
                {
                  id: '10'
                },
                {
                  id: '11'
                }
              ]
            }
          }
        ]
      }
    }
  }
}

export { homeMock, mock, filterMock, noResultsMock }
