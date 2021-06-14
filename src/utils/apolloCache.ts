import { InMemoryCache } from '@apollo/client'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          merge: false
        }
      }
    }
  }
})
