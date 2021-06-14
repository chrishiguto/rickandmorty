export type PronoumProps = {
  male: string
  female: string
  genderless: string
  unknown: string
}

export type StatusProps = {
  alive: string
  unknown: string
  dead: string
}

type PhraseProps = {
  pronoum: PronoumProps
  verb: StatusProps
  status: StatusProps
}

const phrase: PhraseProps = {
  pronoum: {
    male: 'He is',
    female: 'She is',
    genderless: 'They are',
    unknown: 'They are'
  },
  verb: {
    alive: 'is a',
    unknown: 'is a',
    dead: 'was a'
  },
  status: {
    alive: 'alive and well',
    dead: 'dead',
    unknown: `It can't be told if he is alive or dead`
  }
}

export const getPronoumByGender = (gender: keyof PronoumProps) =>
  phrase.pronoum[gender]

export const getVerbByStatus = (status: keyof StatusProps) =>
  phrase.verb[status]

export const getStatus = (status: keyof StatusProps) => phrase.status[status]
