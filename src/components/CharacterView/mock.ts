const characterViewMock = {
  name: 'Rick Sanchez',
  species: 'Human',
  gender: 'Male',
  status: 'Alive',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  about:
    'Rick Sanchez is a male human. He is alive and well. Was last seen at Nov 10, 2017.',
  location: {
    type: 'Planet',
    name: 'Earth (Replacement Dimension)',
    dimension: 'Replacement Dimension',
    created: '2017-11-10T13:08:13.191Z',
    residents: [
      {
        id: '1'
      },
      {
        id: '2'
      }
    ]
  },
  origin: {
    type: 'Planet Two',
    name: 'Second Earth (Same Dimension)',
    dimension: 'Same Dimension',
    residents: [
      {
        id: '1'
      },
      {
        id: '2'
      }
    ]
  },
  isOpen: true
}

export default characterViewMock
