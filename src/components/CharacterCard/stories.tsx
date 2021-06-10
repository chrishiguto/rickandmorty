import { Story, Meta } from '@storybook/react/types-6-0'
import CharacterCard, { CharacterCardProps } from '.'

export default {
  title: 'CharacterCard',
  component: CharacterCard,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<CharacterCardProps> = (args) => (
  <CharacterCard {...args} />
)

export const asButton: Story<CharacterCardProps> = (args) => (
  <CharacterCard {...args} as="button" onClick={() => alert('Clicked')} hover />
)
