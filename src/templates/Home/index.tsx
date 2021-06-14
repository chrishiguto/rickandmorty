import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { XCircle } from '@styled-icons/feather'

import { Character, CharacterProps } from 'pages'

import Button from 'components/Button'
import CharacterCard from 'components/CharacterCard'
import CharacterView from 'components/CharacterView'
import Input from 'components/Input'
import Modal from 'components/Modal'
import Empty from 'components/Empty'
import Loading from 'components/Loading'
import Pagination from 'components/Pagination'

import { QUERY_CHARACTERS } from 'graphql/queries/home'

import * as S from './styles'
type InputValue = {
  search: string
}

export type InfoProps = {
  pages: number
  prev: number
  next: number
}

export type HomeTemplateProps = {
  pages: InfoProps
  characters: CharacterProps[]
}

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<InputValue>()

  const [characterViewData, setCharacterViewData] =
    useState<CharacterProps | undefined>(undefined)
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState({
    name: ''
  })

  const { data, loading } = useQuery<Character>(QUERY_CHARACTERS, {
    errorPolicy: 'all',
    variables: {
      page,
      filter
    }
  })

  const onSubmit: SubmitHandler<InputValue> = ({ search }) => {
    const filterName = {
      name: search
    }

    setFilter(filterName)
    setPage(1)
  }

  const handleCloseCharacterView = () => setCharacterViewData(undefined)

  const handleResetFilters = () => {
    setPage(1)
    setFilter({ name: '' })
    reset({ search: '' })
  }

  const handleChange = (page: number) => {
    setPage(page)
  }

  return (
    <S.Wrapper>
      <S.Background />
      <S.Hero>
        <S.Section>
          <S.Logo src="/img/heading.png" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.Search hasFilter={filter.name !== ''}>
              <Input
                placeholder="Search characters"
                {...register('search', { required: true })}
              />
              <Button>Search</Button>
              {errors?.search ? (
                <S.Error>{`Please fill character's name field`}</S.Error>
              ) : (
                <S.Placeholder />
              )}
              {filter.name !== '' && (
                <S.Clear>
                  <S.ClearFilter onClick={handleResetFilters}>
                    <XCircle size={16} strokeWidth={2} />
                    <span>Clear filter</span>
                  </S.ClearFilter>
                </S.Clear>
              )}
            </S.Search>
          </form>
        </S.Section>

        {data?.characters?.results.length ? (
          <>
            <S.Content>
              {data?.characters?.results.map((character, index) => (
                <CharacterCard
                  key={character.name + index}
                  name={character.name}
                  species={character.species}
                  image={character.image}
                  isDead={character.status === 'Dead'}
                  size="medium"
                  as="button"
                  hover
                  onClick={() => setCharacterViewData(character)}
                />
              ))}
            </S.Content>
            <S.PaginationWrapper>
              <Pagination
                pages={data?.characters.info.pages}
                prev={data?.characters.info.prev || null}
                next={data?.characters.info.next || null}
                activePage={page}
                onChange={handleChange}
              />
            </S.PaginationWrapper>
          </>
        ) : (
          !loading && <Empty onGoBack={handleResetFilters} />
        )}
      </S.Hero>
      <Loading isLoading={loading} />
      <Modal onClose={handleCloseCharacterView} isOpen={!!characterViewData}>
        {!!characterViewData && (
          <CharacterView
            {...characterViewData}
            onClose={handleCloseCharacterView}
          />
        )}
      </Modal>
    </S.Wrapper>
  )
}

export default Home
