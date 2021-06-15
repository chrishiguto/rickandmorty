import { format } from 'date-fns'
import { Users, X } from '@styled-icons/feather'

import { CharacterProps } from 'pages'

import Button from 'components/Button'
import CharacterCard from 'components/CharacterCard'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import {
  getPronoumByGender,
  getStatus,
  getVerbByStatus,
  PronoumProps,
  StatusProps
} from 'utils/about/phrase'

import theme from 'styles/theme'
import * as S from './styles'

export type CharacterViewProps = {
  onClose: () => void
} & CharacterProps

const CharacterView = ({
  name,
  gender,
  image,
  species,
  status,
  location,
  origin,
  onClose
}: CharacterViewProps) => {
  const getAboutPhrase = () => {
    const phraseStatus = status.toLowerCase() as keyof StatusProps
    const phraseGender = gender.toLowerCase() as keyof PronoumProps
    const phraseSpecies = species.toLowerCase()
    const lastSeen = location?.created
      ? format(new Date(location.created), 'MMM dd, yyyy')
      : 'unknown date'

    const firstSentence = `${name} ${getVerbByStatus(
      phraseStatus
    )} ${phraseGender} ${phraseSpecies}`

    const secondSentence = `${
      phraseStatus === 'unknown'
        ? `It can't be told if ${getPronoumByGender(
            phraseGender
          ).toLowerCase()} alive or dead`
        : `${getPronoumByGender(phraseGender)} ${getStatus(phraseStatus)}`
    }`

    const thirdSentence = `Was last seen at ${lastSeen}`

    return `${firstSentence}. ${secondSentence}. ${thirdSentence}.`
  }

  const getPlaceInformation = (
    info: string | undefined | 'unknown',
    fallback: string
  ) => {
    if (!info || info === 'unknown') {
      return fallback
    }

    return info
  }

  return (
    <S.Wrapper>
      <S.Container>
        <MediaMatch lessThan="medium">
          <S.Close onClick={onClose} aria-label="Close character view mobile">
            <X size={32} strokeWidth={2} color="#fff" />
          </S.Close>
        </MediaMatch>
        <S.Strip
          img="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          aria-label={`Background with blurred image of ${name}`}
        >
          <MediaMatch greaterThan="medium">
            <Button
              onClick={onClose}
              style={{
                zIndex: theme.layers.alwaysOnTop,
                margin: theme.spacings.xsmall,
                alignSelf: 'flex-start',
                position: 'absolute'
              }}
              aria-label="Close character view desktop"
            >
              Close
            </Button>
          </MediaMatch>
          <S.StripContent>
            <MediaMatch lessThan="medium">
              <CharacterCard name={name} image={image} species={species} />
            </MediaMatch>
            <MediaMatch
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%'
              }}
              greaterThan="medium"
            >
              <CharacterCard
                transparentStripe={false}
                size="large"
                name={name}
                image={image}
                species={species}
              />
            </MediaMatch>
          </S.StripContent>
        </S.Strip>
        <S.Content>
          <S.Information>
            <Heading>About</Heading>
            <S.Text>{getAboutPhrase()}</S.Text>
          </S.Information>

          <S.Information>
            <Heading>Origin</Heading>
            <S.Type>
              {getPlaceInformation(origin?.type, 'Unknown Planet')}
            </S.Type>
            <S.Name>{getPlaceInformation(origin?.name, 'Unknown')}</S.Name>
            <S.Dimension>
              {getPlaceInformation(origin?.dimension, 'Unknown Dimension')}
            </S.Dimension>
            {!!origin?.residents && (
              <S.Residents>
                <Users size={14} color="#8c8c8c" strokeWidth={2} />
                <S.Quantity>{origin.residents.length} residents</S.Quantity>
              </S.Residents>
            )}
          </S.Information>

          <S.Information>
            <Heading>Location</Heading>
            <S.Type>
              {getPlaceInformation(location?.type, 'Unknown Planet')}
            </S.Type>
            <S.Name>{getPlaceInformation(location?.name, 'Unknown')}</S.Name>
            <S.Dimension>
              {getPlaceInformation(location?.dimension, 'Unknown Dimension')}
            </S.Dimension>
            {!!location?.residents && (
              <S.Residents>
                <Users size={14} color="#8c8c8c" strokeWidth={2} />
                <S.Quantity>{location.residents.length} residents</S.Quantity>
              </S.Residents>
            )}
          </S.Information>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default CharacterView
