import { Story, Meta } from '@storybook/react/types-6-0'
import CharacterCard, { CharacterCardProps } from '.'

import characterCardMock from './mock'

export default {
  title: 'CharacterCard',
  component: CharacterCard,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    ...characterCardMock
  }
} as Meta

export const Default: Story<CharacterCardProps> = (args) => (
  <CharacterCard {...args} />
)

export const asButton: Story<CharacterCardProps> = (args) => (
  <CharacterCard {...args} as="button" onClick={() => alert('Clicked')} hover />
)
