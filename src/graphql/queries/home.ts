import { gql } from '@apollo/client'

export const QUERY_CHARACTERS = gql`
  query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        pages
        prev
        next
      }
      results {
        name
        image
        species
        status
        gender
        origin {
          name
          type
          dimension
          residents {
            id
          }
        }
        location {
          name
          type
          dimension
          created
          residents {
            id
          }
        }
      }
    }
  }
`
