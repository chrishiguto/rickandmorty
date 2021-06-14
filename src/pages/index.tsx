import { QUERY_CHARACTERS } from 'graphql/queries/home'
import Home from 'templates/Home'
import { initializeApollo } from 'utils/apollo'

export default function Homepage(props) {
  return <Home {...props} />
}

export type InfoProps = {
  pages: number
  prev: number
  next: number
}

export type CharacterProps = {
  name: string
  species: string
  image: string
  status: 'Alive' | 'Dead' | 'unknown'
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  origin: {
    name: string
    type: string
    dimension: string
    residents: Array<{
      id: string
    }>
  } | null
  location: {
    name: string
    type: string
    dimension: string
    residents: Array<{
      id: string
    }>
    created: string
  } | null
}

export type Character = {
  characters: {
    info: InfoProps
    results: Array<CharacterProps>
  }
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query<Character>({
    query: QUERY_CHARACTERS,
    variables: { page: 1, filter: { name: '' } },
    errorPolicy: 'all'
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract()
    }
  }
}
