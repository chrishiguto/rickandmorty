import { Story, Meta } from '@storybook/react/types-6-0'

import CharacterView, { CharacterViewProps } from '.'
import characterViewMock from './mock'

export default {
  title: 'CharacterView',
  component: CharacterView,
  args: {
    ...characterViewMock
  }
} as Meta

export const Mobile: Story<CharacterViewProps> = (args) => (
  <div style={{ paddingTop: 14 }}>
    <CharacterView {...args} />
  </div>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}

export const Desktop: Story<CharacterViewProps> = (args) => (
  <div style={{ paddingLeft: 100, height: '80vh' }}>
    <CharacterView {...args} />
  </div>
)
